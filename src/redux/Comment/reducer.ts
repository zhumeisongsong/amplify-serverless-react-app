import handleActions from '../../utils/handleActions';
import actionTypes from './actionTypes';
import { CreateCommentInput } from '../../API';

export interface CommentState {
  listData?: CreateCommentInput[];
  cacheData?: any[];
  toNew?: boolean;
  hasNew?: boolean;
  nextToken?: string | null;
}

const initialState: CommentState = {
  listData: [],
  cacheData: [],
  toNew: true,
  hasNew: false,
  nextToken: null,
};

export default handleActions(
  {
    [actionTypes.LIST_SUCCESS]: (
      state: CommentState,
      { payload: { nextToken } }: { payload: CommentState; type: string }
    ) => ({
      ...state,
      nextToken,
    }),
    [actionTypes.LIST_HISTORY_SUCCESS]: (
      state: CommentState,
      { payload: { listData } }: { payload: CommentState; type: string }
    ) => ({
      ...state,
      listData: [
        ...(listData && listData.length > 0 ? [...listData] : []),
        ...state.listData,
      ],
    }),
    [actionTypes.UPDATE_RENDER_SUCCESS]: (
      state: CommentState,
      { payload: { listData } }: { payload: CommentState; type: string }
    ) => ({
      ...state,
      listData: [...state.listData, ...listData],
    }),
    [actionTypes.UPDATE_CACHE_SUCCESS]: (
      state: CommentState,
      { payload: { cacheData } }: { payload: CommentState; type: string }
    ) => ({
      ...state,
      cacheData,
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
      toNew: payload,
    }),
    [actionTypes.TOGGLE_HAS_NEW]: (
      state: CommentState,
      { payload }: { payload: boolean; type: string }
    ) => ({
      ...state,
      hasNew: payload,
    }),
  },
  initialState
);
