import { createAction } from 'redux-actions';
import actionTypes from './actionTypes';

export const listCommentsAction = createAction(actionTypes.LIST);
export const createCommentAction = createAction(actionTypes.CREATE);

