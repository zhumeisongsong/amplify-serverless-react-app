import { handleActions } from 'redux-actions';

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
  },
  initialState
);
