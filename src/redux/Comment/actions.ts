import { createAction } from 'redux-actions';
import actionTypes from './actionTypes';

export const listCommentsAction = createAction(actionTypes.LIST);

export const createCommentAction = createAction(actionTypes.CREATE);

export const createCommentSuccessAction = createAction(actionTypes.CREATE_SUCCESS);

export const toggleHasNewAction = createAction(actionTypes.TOGGLE_HAS_NEW);

export const toggleLoadNewAction = createAction(actionTypes.TOGGLE_LOAD_NEW);

export const updateCommentsAction = createAction(actionTypes.UPDATE_RENDER);

export const updateCacheCommentsAction = createAction(actionTypes.UPDATE_CACHE);


