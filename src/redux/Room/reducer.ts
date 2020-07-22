import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';

const initialState = {
  roomId: 3333,
};

export default handleActions(
  {
    [actionTypes.GET_SUCCESS]: (state, { payload: { roomId } }) => ({
      ...state,
      roomId,
    }),
  },
  initialState
);
