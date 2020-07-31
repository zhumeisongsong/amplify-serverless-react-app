import handleActions from '../../utils/handleActions';
import actionTypes from './actionTypes';

export interface ToastState {
  message: string;
  isError: boolean;
}

const initialState: ToastState = {
  message: '',
  isError: false,
};

export default handleActions(
  {
    [actionTypes.SHOW_SUCCESS]: (
      state: ToastState,
      { payload: { message, isError } }: { payload: ToastState; type: string }
    ) => ({
      ...state,
      message,
      isError,
    }),
    [actionTypes.HIDDEN_SUCCESS]: (
      state: ToastState,
      { payload: { message, isError } }: { payload: ToastState; type: string }
    ) => ({
      ...state,
      message,
      isError,
    }),
  },
  initialState
);
