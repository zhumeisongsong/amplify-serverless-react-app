import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Room from '../../components/Room';
import CommentList from '../../components/CommentList';
import CommentSubmit from '../../components/CommentSubmit';
import {

  createRoomAction,
  getRoomAction,
} from '../../redux/Room/actions';
import {
  listCommentsAction,
  createCommentAction,
} from '../../redux/Comment/actions';

export default () => {
  const dispatch = useDispatch();
  const comments = useSelector((store: any) => store.comment.listData);
  const loadNew = useSelector((store: any) => store.comment.loadNew);
  const getRoom = useCallback(() => dispatch(getRoomAction()), [dispatch]);

  const listComments = useCallback(() => dispatch(listCommentsAction()), [
    dispatch,
  ]);
  const createComment = useCallback(() => dispatch(createCommentAction()), [
    dispatch,
  ]);

  useEffect(() => {
    getRoom();
  }, [getRoom]);

  return (
    <div>
      <Room />
      <CommentList list={listComments} data={comments} loadNew={loadNew} />
      <CommentSubmit create={createComment} />
    </div>
  );
};
