import { put, takeEvery, all, call, fork, select } from 'redux-saga/effects';
import { API, graphqlOperation } from 'aws-amplify';
import actionTypes from './actionTypes';
import commentActionTypes from '../Comment/actionTypes';
import { createRoom } from '../../graphql/mutations';
import { getRoom } from '../../graphql/queries';

function* createSaga() {
  yield takeEvery(actionTypes.CREATE, function* _({ payload }: any) {
    const { id }: any = payload;

    try {
      const res = yield call(
        [API, 'graphql'],
        graphqlOperation(createRoom, { input: { id, commentTotalCount: 0 } })
      );

      if (res.data.createRoom) {
        yield put({
          type: actionTypes.CREATE_SUCCESS,
        });
      }
    } catch (error) {
      console.log(error.errors[0].message);
    }
  });
}

function* getSaga() {
  yield takeEvery(actionTypes.GET, function* _() {
    const id = yield select((state) => state.room.id);

    try {
      const res = yield call(
        [API, 'graphql'],
        graphqlOperation(getRoom, { id })
      );

      if (res.data.getRoom) {
        yield put({
          type: actionTypes.GET_SUCCESS,
        });

        yield put({
          type: commentActionTypes.LIST,
        });
      } else {
        yield put({
          type: actionTypes.CREATE,
          payload: { id },
        });
      }
    } catch (error) {
      console.log(error.errors[0].message);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(createSaga), fork(getSaga)]);
}
