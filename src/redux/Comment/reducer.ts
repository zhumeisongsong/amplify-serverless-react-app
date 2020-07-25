import handleActions from '../../utils/handleActions';
import actionTypes from './actionTypes';
import { ModelCommentConditionInput } from '../../API';

export interface CommentState {
  listData?: ModelCommentConditionInput[];
  pagePrev?: number;
  loadNew?: boolean;
}

const initialState: CommentState = {
  listData: [],
  pagePrev: 1,
  loadNew: true,
};

export default handleActions(
  {
    [actionTypes.LIST_SUCCESS]: (
      state: CommentState,
      {
        payload: { listData, pagePrev },
      }: { payload: CommentState; type: string }
    ) => ({
      ...state,
      pagePrev,
      listData,
    }),
    [actionTypes.CREATE_SUCCESS]: (
      state: CommentState,
      { payload: { listData } }: { payload: CommentState; type: string }
    ) => ({
      ...state,
      listData: [...state.listData, ...listData],
    }),
    [actionTypes.TOGGLE_LOAD_NEW]: (
      state: CommentState,
      { payload }: { payload: boolean; type: string }
    ) => ({
      ...state,
      loadNew: payload,
    }),
  },
  initialState
);
