import { handleActions } from 'redux-actions';

const info = JSON.parse(sessionStorage.getItem('info') || '');

export interface RoomState {
  id: string
}

const initialState = {
  id: info.roomId || '',
};

export default handleActions(
  {
  },
  initialState
);
