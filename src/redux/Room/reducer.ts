import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';

const info = JSON.parse(sessionStorage.getItem('info') || '');

export interface RoomState {
  id: string,
  commentTotalCount: number
}

const initialState = {
  id: info.roomId || '',
  commentTotalCount: 0
};

export default handleActions(
  {
    [actionTypes.LIST_SUCCESS]: (
      state: RoomState,
      { payload: { commentTotalCount } }: { payload: RoomState; type: string }
    ) => ({
      ...state,
      commentTotalCount,
    }),
  },
  initialState
);
