import { put, delay } from 'redux-saga/effects';
import actionTypes from './actionTypes';
import messages from '../../constants/messages';

export function* showToastSaga(messageId, milliseconds = 40000) {
  yield put({
    type: actionTypes.SHOW_SUCCESS,
    payload: {
      message: messages[messageId],
    },
  });

  yield delay(milliseconds);

  yield put({
    type: actionTypes.HIDDEN_SUCCESS,
  });
}
