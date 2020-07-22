import { all } from 'redux-saga/effects';
import roomSaga from './Room/saga';
import commentSaga from './Comment/saga';

export default function* rootSaga() {
  yield all([
    roomSaga(),
    commentSaga(),
  ]);
}
