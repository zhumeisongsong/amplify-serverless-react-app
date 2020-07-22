import { createAction } from 'redux-actions';
import actionTypes from './actionTypes';

export const createRoomAction = createAction(actionTypes.CREATE);

export const getRoomAction = createAction(actionTypes.GET);

export const listRoomsAction = createAction(actionTypes.LIST);


