import { CommentState } from './Comment/reducer';
import { RoomState } from './Room/reducer';
import { UserState } from './User/reducer';

export interface Store {
  user: UserState,
  comment: CommentState,
  room: RoomState,
}
