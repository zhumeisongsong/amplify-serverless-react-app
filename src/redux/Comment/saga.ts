import { eventChannel, END } from 'redux-saga';
import {
  put,
  takeEvery,
  all,
  call,
  fork,
  select,
  debounce,
} from 'redux-saga/effects';
import { API, graphqlOperation } from 'aws-amplify';
import actionTypes from './actionTypes';
import { createComment } from '../../graphql/mutations';
import { getCommentsByRoom } from '../../graphql/queries';
import { CreateCommentInput } from '../../API';
import { COMMENT_LIMIT } from '../../constants';
import isNgWord from '../../utils/isNgWord';

const setIntervalWithConditionHelper = (index: number, time: number) =>
  eventChannel((emitter) => {
    index -= 1;
    const iv = setInterval(() => {
      if (index >= 0) {
        emitter(index);
      } else {
        emitter(END);
      }
    }, time);
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
    const roomID: string = yield select((state) => state.room.id);
    const { userName, userId, userImage, isOfficialAccount } = yield select(
      (state) => state.user
    );
    const data: CreateCommentInput = {
      content,
      userName,
      userId,
      userImage,
      isOfficialAccount,
      roomID,
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
      }
    } catch (error) {
      console.log(error.errors[0].message);
    }
  });
}

function* listSaga() {
  yield takeEvery(actionTypes.LIST, function* _() {
    const roomID: string = yield select((state) => state.room.id);
    const { userId } = yield select((state) => state.user);

    try {
      const res: any = yield call(
        [API, 'graphql'],
        graphqlOperation(getCommentsByRoom, {
          limit: COMMENT_LIMIT,
          roomID,
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
      const data = res.data.getCommentsByRoom.items;

      yield put({
        type: actionTypes.SET_CACHE_SUCCESS,
        payload: {
          cacheData: data,
        },
      });
    } catch (error) {
      console.log(error);
      console.log(error.errors[0].message);
    }
  });
}

function* updateRenderListSaga() {
  yield debounce(270, actionTypes.UPDATE_RENDER, function* _() {
    const { listData, cacheData } = yield select((state) => state.comment);

    yield put({
      type: actionTypes.LIST_SUCCESS,
      payload: {
        listData: [...listData, cacheData[cacheData.length - 1]],
      },
    });
  });
}

function* updateCacheListSaga() {
  yield debounce(270, actionTypes.UPDATE_CACHE, function* _() {
    const { cacheData } = yield select((state) => state.comment);

    yield put({
      type: actionTypes.SET_CACHE_SUCCESS,
      payload: {
        cacheData: cacheData.slice(0, cacheData.length - 1),
      },
    });
  });
}

export default function* rootSaga() {
  yield all([
    fork(createSaga),
    fork(listSaga),
    fork(updateRenderListSaga),
    fork(updateCacheListSaga),
  ]);
}
