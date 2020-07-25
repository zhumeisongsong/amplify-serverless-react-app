import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';
import { ModelCommentConditionInput } from '../../API';


export interface CommentState {
  listData: ModelCommentConditionInput[];
  pagePrev: number;
  loadNew: boolean
}

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
