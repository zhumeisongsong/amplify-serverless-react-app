import { put, delay } from 'redux-saga/effects';
import actionTypes from './actionTypes';

export function* showToastSaga(message, milliseconds = 40000) {
  yield put({
    type: actionTypes.SHOW_SUCCESS,
    payload: {
      message,
    },
  });

  yield delay(milliseconds);

  yield put({
    type: actionTypes.HIDDEN_SUCCESS,
  });
}
