import { handleActions } from 'redux-actions';

const info = JSON.parse(sessionStorage.getItem('info') || '');

const initialState = {
  userId: info.userId || '',
  userName: info.userName || '',
  userImage: info.userImage || '',
  isOfficialAccount: info.isOfficialAccount || '',
};

export default handleActions(
  {
  },
  initialState
);
