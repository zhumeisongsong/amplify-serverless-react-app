import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomAction } from '../../redux/Room/actions';
import {
  listCommentsAction,
  createCommentAction,
} from '../../redux/Comment/actions';
import Top from '../../components/Top';

export interface TopProps {
  comments?: any;
  loadNew?: boolean;
  listComments?: any;
  createComment?: any;
  totalCount?: number;
}

export default () => {
  const dispatch = useDispatch();
  const totalCount = useSelector((store: any) => store.room.totalCount);
  const comments = useSelector((store: any) => store.comment.listData);
  const loadNew = useSelector((store: any) => store.comment.loadNew);
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
      totalCount={totalCount}
      listComments={listComments}
      createComment={createComment}
    />
  );
};
