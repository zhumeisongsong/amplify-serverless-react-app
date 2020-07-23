import { put, takeEvery, all, call, fork, select } from 'redux-saga/effects';
import { API, graphqlOperation } from 'aws-amplify';
import actionTypes from './actionTypes';
import { createComment } from '../../graphql/mutations';
import { listComments } from '../../graphql/queries';
import { CreateCommentInput } from '../../API';

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
      isNgWord: false,
    };

    try {
      const res = yield call(
        [API, 'graphql'],
        graphqlOperation(createComment, { input: data })
      );

      console.log(res);

      if (res.data.createComment) {
        yield put({
          type: actionTypes.CREATE_SUCCESS,
          payload: {
            data: res.data.createComment,
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

    try {
      const filter = {};
      const res = yield call(
        [API, 'graphql'],
        graphqlOperation(listComments, {
          filter: {
            roomID: {
              eq: roomID,
            },
          },
        })
      );

      console.log(res.data);

      yield put({
        type: actionTypes.LIST_SUCCESS,
        payload: {
          listData: [],
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
