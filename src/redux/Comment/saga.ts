import { eventChannel, END } from 'redux-saga';
import {
  put,
  takeEvery,
  all,
  call,
  fork,
  select,
  debounce,
  take,
} from 'redux-saga/effects';
import { API, graphqlOperation } from 'aws-amplify';
import actionTypes from './actionTypes';
import roomActionTypes from '../Room/actionTypes';
import { createComment } from '../../graphql/mutations';
import { getCommentsByRoom } from '../../graphql/queries';
import { CreateCommentInput } from '../../API';
import {
  COMMENT_LIMIT,
  INIT_COMMENT_LIMIT,
  INIT_COMMENT_LOADING_MS,
  COMMENT_LOADING_MS,
} from '../../constants';
import isNgWord from '../../utils/isNgWord';
import { getRoomSaga } from '../Room/saga';
import { showToastSaga } from '../Toast/saga';

const initCommentLoadingSetInterval = (index: number) =>
  eventChannel((emitter) => {
    const iv = setInterval(() => {
      index -= 1;
      if (index >= 0) {
        emitter(index);
      } else {
        emitter(END);
      }
    }, INIT_COMMENT_LOADING_MS);
    // The subscriber must return an unsubscribe function
    return () => {
      clearInterval(iv);
    };
  });

function* createSaga() {
  yield takeEvery(actionTypes.CREATE, function* _({
    payload,
  }: {
    type: string;
    payload: { content: string };
  }) {
    const { content } = payload;
    const { userName, userId, userImage, isOfficialAccount } = yield select(
      (state) => state.user
    );
    const data: CreateCommentInput = {
      content,
      userName,
      userId,
      userImage,
      isOfficialAccount,
      type: 'type',
      isNgWord: isNgWord(content),
    };

    try {
      const res = yield call(
        [API, 'graphql'],
        graphqlOperation(createComment, { input: data })
      );

      if (res.data.createComment) {
        yield put({
          type: actionTypes.CREATE_SUCCESS,
          payload: {
            listData: [res.data.createComment],
          },
        });

        yield put({
          type: roomActionTypes.GET,
        });
      }
    } catch (error) {
      yield call(showToastSaga, 'submitError');
    }
  });
}

function* listSaga() {
  yield takeEvery(actionTypes.LIST, function* _() {
    const { userId } = yield select((state) => state.user);
    const { initLoading, nextToken } = yield select((state) => state.comment);

    try {
      const res: any = yield call(
        [API, 'graphql'],
        graphqlOperation(getCommentsByRoom, {
          limit: initLoading ? INIT_COMMENT_LIMIT : COMMENT_LIMIT,
          type: 'type',
          sortDirection: 'DESC',
          filter: {
            or: [
              {
                isNgWord: {
                  eq: false,
                },
              },
              {
                isNgWord: {
                  eq: true,
                },
                userId: {
                  eq: userId,
                },
              },
            ],
          },
        })
      );
      const cacheData = res.data.getCommentsByRoom.items;

      yield put({
        type: actionTypes.UPDATE_CACHE_SUCCESS,
        payload: {
          cacheData,
        },
      });

      yield call(getRoomSaga);

      if (initLoading) {
        if (!nextToken) {
          yield put({
            type: actionTypes.LIST_SUCCESS,
            payload: {
              nextToken: res.data.getCommentsByRoom.nextToken,
            },
          });
        }

        yield put({
          type: roomActionTypes.GET,
        });

        const rederInitComment = yield call(
          initCommentLoadingSetInterval,
          cacheData.length
        );

        try {
          while (true) {
            // take(END) will cause the saga to terminate by jumping to the finally block
            let index = yield take(rederInitComment);
            const { listData, cacheData } = yield select(
              (state) => state.comment
            );

            if (!cacheData[index]) {
              return;
            }

            const isSome = listData.some(
              (item) => item.id === cacheData[index].id
            );

            if (!isSome) {
              yield put({
                type: actionTypes.UPDATE_RENDER_SUCCESS,
                payload: {
                  listData: [cacheData[index]],
                },
              });
            }
          }
        } finally {
          yield put({
            type: actionTypes.TOGGLE_IS_INIT_LOADING,
            payload: false,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
}

function* listHistorySaga() {
  yield takeEvery(actionTypes.LIST_HISTORY, function* _() {
    const { userId } = yield select((state) => state.user);
    const { nextToken } = yield select((state) => state.comment);

    const variables: any = {
      limit: COMMENT_LIMIT,
      type: 'type',
      sortDirection: 'DESC',
      filter: {
        or: [
          {
            isNgWord: {
              eq: false,
            },
          },
          {
            isNgWord: {
              eq: true,
            },
            userId: {
              eq: userId,
            },
          },
        ],
      },
    };

    if (nextToken) {
      variables.nextToken = nextToken;

      try {
        const res: any = yield call(
          [API, 'graphql'],
          graphqlOperation(getCommentsByRoom, variables)
        );
        const data = res.data.getCommentsByRoom.items;
        const { listData } = yield select((state) => state.comment);

        const isSome = listData.some(
          (item) => item.id === data[data.length - 1].id
        );

        if (!isSome) {
          yield put({
            type: actionTypes.LIST_HISTORY_SUCCESS,
            payload: {
              listData: data.reverse(),
            },
          });

          yield put({
            type: actionTypes.LIST_SUCCESS,
            payload: {
              nextToken: res.data.getCommentsByRoom.nextToken,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
}

function* updateRenderListSaga() {
  yield debounce(COMMENT_LOADING_MS, actionTypes.UPDATE_RENDER, function* _() {
    const { listData, cacheData } = yield select((state) => state.comment);
    const isSome = listData.some(
      (item) => item.id === cacheData[cacheData.length - 1].id
    );

    if (!isSome) {
      yield put({
        type: actionTypes.UPDATE_RENDER_SUCCESS,
        payload: {
          listData: [cacheData[cacheData.length - 1]],
        },
      });
    }
  });
}

function* updateCacheListSaga() {
  yield debounce(COMMENT_LOADING_MS, actionTypes.UPDATE_CACHE, function* _() {
    const { cacheData } = yield select((state) => state.comment);
    const { initLoading } = yield select((state) => state.comment);
    const nextCacheData = cacheData.slice(0, cacheData.length - 1);

    yield put({
      type: actionTypes.UPDATE_CACHE_SUCCESS,
      payload: {
        cacheData: nextCacheData,
      },
    });

    if (nextCacheData.length === 0 && !initLoading) {
      yield put({
        type: actionTypes.LIST,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(createSaga),
    fork(listSaga),
    fork(listHistorySaga),
    fork(updateRenderListSaga),
    fork(updateCacheListSaga),
  ]);
}
