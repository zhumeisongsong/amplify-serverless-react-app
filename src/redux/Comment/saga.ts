import { put, takeEvery, all, call, fork, select } from 'redux-saga/effects';
import { API, graphqlOperation } from 'aws-amplify';
import actionTypes from './actionTypes';
import { createComment } from '../../graphql/mutations';
import { listComments } from '../../graphql/queries';


function* createSaga() {
  yield takeEvery(actionTypes.CREATE, function* _({ payload }: any) {
    console.log(payload)
    const { content } = payload;
    const { userName, userId, userImage, isOfficialAccount } = yield select(state => state.user);
    const data = { content: '44444', userName, userId, userImage, isOfficialAccount };

    try {
      const res = yield call([API, 'graphql'], graphqlOperation(createComment, data));

      yield put({
        type: actionTypes.CREATE_SUCCESS,
        payload: {
          data
        }
      })
    } catch (error) {
      console.log(error)
    }
  });
}

function* listSaga() {
  yield takeEvery(actionTypes.LIST, function* _() {
    try {
      const res = yield call([API, 'graphql'], graphqlOperation(listComments));

      console.log(res);

      yield put({
        type: actionTypes.LIST_SUCCESS,
        payload: {
          listData: [],
        },
      });
    } catch (error) {
      console.log(error)
    }
  });
}


export default function* rootSaga() {
  yield all([
    fork(createSaga),
    fork(listSaga),
  ]);
}
