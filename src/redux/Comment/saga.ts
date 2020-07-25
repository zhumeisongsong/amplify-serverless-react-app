import { put, takeEvery, all, call, fork, select } from 'redux-saga/effects';
import { API, graphqlOperation } from 'aws-amplify';
import actionTypes from './actionTypes';
import { createComment } from '../../graphql/mutations';
import { getCommentsByRoom } from '../../graphql/queries';
import { CreateCommentInput, ModelCommentConditionInput } from '../../API';
import * as subscriptions from '../../graphql/subscriptions';

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

      // if (res.data.createComment) {
      //   yield put({
      //     type: actionTypes.CREATE_SUCCESS,
      //     payload: {
      //       listData: [res.data.createComment],
      //     },
      //   });
      // }
    } catch (error) {
      console.log(error.errors[0].message);
    }

  });
}

function* listSaga() {
  yield takeEvery(actionTypes.LIST, function* _() {
    const roomID: string = yield select((state) => state.room.id);
    const { userName, userId, userImage, isOfficialAccount } = yield select(
      (state) => state.user
    );

    try {
      const res = yield call(
        [API, 'graphql'],
        graphqlOperation(getCommentsByRoom, {
          limit: 50,
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

      console.log(res.data.getCommentsByRoom.items);

      yield put({
        type: actionTypes.LIST_SUCCESS,
        payload: {
          listData: res.data.getCommentsByRoom.items.reverse(),
        },
      });
    } catch (error) {
      console.log(error.errors[0].message);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(createSaga), fork(listSaga)]);
}
