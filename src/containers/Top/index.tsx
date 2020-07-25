import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomAction } from '../../redux/Room/actions';
import {
  listCommentsAction,
  createCommentAction,
} from '../../redux/Comment/actions';
import Top from '../../components/Top';
import { Store } from '../../redux/types';

export interface TopProps {
  comments?: any;
  loadNew?: boolean;
  listComments?: any;
  createComment?: any;
  commentTotalCount?: number;
}

export default () => {
  const dispatch = useDispatch();
  const commentTotalCount = useSelector((store: Store) => store.room.commentTotalCount);
  const comments = useSelector((store: Store) => store.comment.listData);
  const loadNew = useSelector((store: Store) => store.comment.loadNew);
  const getRoom = useCallback(() => dispatch(getRoomAction()), [dispatch]);

  const listComments = useCallback(() => dispatch(listCommentsAction()), [
    dispatch,
  ]);
  const createComment = useCallback(
    (values) => dispatch(createCommentAction(values)),
    [dispatch]
  );

  useEffect(() => {
    getRoom();
  }, [getRoom]);

  return (
    <Top
      comments={comments}
      loadNew={loadNew}
      commentTotalCount={commentTotalCount}
      listComments={listComments}
      createComment={createComment}
    />
  );
};
