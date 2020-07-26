import { createAction } from 'redux-actions';
import actionTypes from './actionTypes';

export const listCommentsAction = createAction(actionTypes.LIST);

export const createCommentAction = createAction(actionTypes.CREATE);

export const createCommentSuccessAction = createAction(actionTypes.CREATE_SUCCESS);

export const toggleLoadNewAction = createAction(actionTypes.TOGGLE_LOAD_NEW);

export const updateRenderCommentsAction = createAction(actionTypes.UPDATE_RENDER_DATA);
