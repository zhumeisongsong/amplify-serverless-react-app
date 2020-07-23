import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';

const initialState: any = {
  listData: [],
  pagePrev: 1,
  loadNew: true,
};

export default handleActions(
  {
    [actionTypes.LIST_SUCCESS]: (
      state,
      { payload: { listData, pagePrev } }
    ) => ({
      ...state,
      pagePrev,
      listData,
    }),
    [actionTypes.TOGGLE_LOAD_NEW_SUCCESS]: (
      state,
      { payload: { loadNew } }
    ) => ({
      ...state,
      loadNew,
    }),
    [actionTypes.CREATE_SUCCESS]: (state, { payload: { data } }) => {
      const listData = [...state.listData, data];

      return {
        ...state,
        listData,
      };
    },
  },
  initialState
);
