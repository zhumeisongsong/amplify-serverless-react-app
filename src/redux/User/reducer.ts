import { handleActions } from 'redux-actions';
const info = JSON.parse(sessionStorage.getItem('info') || '');

export interface UserState {
  userId: string;
  userName: string;
  userImage: string;
  isOfficialAccount: boolean;
}

const initialState: UserState = {
  userId: info.userId || '',
  userName: info.userName || '',
  userImage: info.userImage || '',
  isOfficialAccount: info.isOfficialAccount,
};

export default handleActions(
  {
  },
  initialState
);
