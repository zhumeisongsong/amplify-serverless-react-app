import { eventChannel, END } from 'redux-saga';
import { put, takeEvery, all, call, fork, select } from 'redux-saga/effects';
import { API, graphqlOperation } from 'aws-amplify';
import actionTypes from './actionTypes';
import { createComment } from '../../graphql/mutations';
import { getCommentsByRoom } from '../../graphql/queries';
import { CreateCommentInput, ModelCommentConditionInput } from '../../API';
import * as subscriptions from '../../graphql/subscriptions';
import { REQUESTED_TIME_INTERVAL, COMMENT_LIMIT } from '../../constants';

const setIntervalHelper = () =>
  eventChannel((emitter) => {
    const iv = setInterval(() => {
      emitter('');
    }, REQUESTED_TIME_INTERVAL);
    // The subscriber must return an unsubscribe function
    return () => {
      clearInterval(iv);
    };
  });

const setIntervalWithConditionHelper = (index: number, time: number) =>
  eventChannel((emitter) => {
    index -= 1;
    console.log(index);
    const iv = setInterval(() => {
      if (index >= 1) {
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

const mergeJson = (mainJson: any, addJson: any) => {
  const mergedJson = mainJson.concat(addJson);
  let newJson: any = [];

  mergedJson.map((item1: any) => {
    let noRepeat = true;

    addJson.map((item2: any) => {
      if (item1.id == item2.id) {
        noRepeat = false;
      }
    });
    if (noRepeat) {
      newJson.push(item1);
    }
  });

  return newJson;
};

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
      isNgWord: true,
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
  yield takeEvery(actionTypes.LIST, function* _({
    payload,
  }: {
    type: string;
    payload: { nextToken?: string };
  }) {
    const roomID: string = yield select((state) => state.room.id);
    const { userName, userId, userImage, isOfficialAccount } = yield select(
      (state) => state.user
    );
    const listCommentChannel = yield call(setIntervalHelper);
    yield takeEvery(listCommentChannel, function* () {
      try {
        const { listData } = yield select((state) => state.comment);
        const res = yield call(
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
        const duplicateRemovalData: CreateCommentInput[] = [];

        data.map((newItem: CreateCommentInput) => {
          let noRepeat = true;
          listData.map((oldItem: CreateCommentInput) => {
            if (newItem.id === oldItem.id) {
              noRepeat = false;
            }
          });
          if (noRepeat) {
            duplicateRemovalData.push(newItem);
          }
        });
        console.log(duplicateRemovalData);

        const setCommentChannel = yield call(
          setIntervalWithConditionHelper,
          duplicateRemovalData.length + 1,
          Math.round(REQUESTED_TIME_INTERVAL / duplicateRemovalData.length)
        );
        yield takeEvery(setCommentChannel, function* () {
          const newListData = yield select((state) => state.comment.listData);
          yield put({
            type: actionTypes.LIST_SUCCESS,
            payload: {
              listData: [
                data[duplicateRemovalData.length - 1],
                ...newListData,
              ].reverse(),
            },
          });
        });
      } catch (error) {
        console.log(error.errors[0].message);
      }
    });
  });
}

export default function* rootSaga() {
  yield all([fork(createSaga), fork(listSaga)]);
}
