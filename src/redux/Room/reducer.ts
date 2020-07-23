import { handleActions } from 'redux-actions';

const info = JSON.parse(sessionStorage.getItem('info') || '');

const initialState = {
  id: info.roomId || '',
};

export default handleActions(
  {
  },
  initialState
);
