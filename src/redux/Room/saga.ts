import { put, takeEvery, all, call, fork } from 'redux-saga/effects';
import { API, graphqlOperation } from 'aws-amplify';
import actionTypes from './actionTypes';
import { createRoom } from '../../graphql/mutations';
import { listRooms } from '../../graphql/queries';

function* createSaga() {
  yield takeEvery(actionTypes.CREATE, function* _({ payload }: any) {
    console.log(payload);

    try {
      const res = yield call([API, 'graphql'], graphqlOperation(createRoom, {}));

      yield put({
        type: actionTypes.CREATE_SUCCESS,
        payload: {},
      });
    } catch (error) {
      console.log(error);
    }
  });
}

function* getSaga() {
  yield takeEvery(actionTypes.GET, function* _() {
    try {
      const res = yield call([API, 'graphql'], graphqlOperation(listRooms));

      console.log(res);

      yield put({
        type: actionTypes.GET_SUCCESS,
        payload: {
          listData: res,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(createSaga), fork(getSaga)]);
}
