import handleActions from '../../utils/handleActions';
import actionTypes from './actionTypes';

export interface ToastState {
  message: string;
  showToast: boolean;
}

const initialState: ToastState = {
  message: '',
  showToast: false,
};

export default handleActions(
  {
    [actionTypes.SHOW_SUCCESS]: (
      state: ToastState,
      { payload: { message } }: { payload: ToastState; type: string }
    ) => ({
      ...state,
      message,
      showToast: true,
    }),
    [actionTypes.HIDDEN_SUCCESS]: (state: ToastState) => ({
      ...state,
      message: '',
      showToast: false,
    }),
  },
  initialState
);
