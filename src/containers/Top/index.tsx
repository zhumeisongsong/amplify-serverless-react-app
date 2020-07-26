import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomAction } from '../../redux/Room/actions';
import {
  listCommentsAction,
  createCommentAction,
  toggleLoadNewAction,
  createCommentSuccessAction,
  updateRenderCommentsAction,
} from '../../redux/Comment/actions';
import Top from '../../components/Top';
import { Store } from '../../redux/types';
import { Action } from 'redux';
import { CreateCommentInput } from '../../API';
import * as subscriptions from '../../graphql/subscriptions';
import { REQUESTED_TIME_INTERVAL } from '../../constants';

export interface TopProps {
  comments?: CreateCommentInput[];
  cacheComments?: CreateCommentInput[];
  loadNew?: boolean;
  commentTotalCount?: number;
  listComments?: () => Action<any>;
  createComment?: (values: any) => Action<any>;
  toggleLoadNew?: (loadNew: boolean) => Action<any>;
}

export default () => {
  const dispatch = useDispatch();
  const commentTotalCount = useSelector(
    (store: Store) => store.room.commentTotalCount
  );
  const comments = useSelector((store: Store) => store.comment.listData);
  const cacheComments = useSelector((store: Store) => store.comment.cacheData);
  const loadNew = useSelector((store: Store) => store.comment.loadNew);
  const getRoom = useCallback(() => dispatch(getRoomAction()), [dispatch]);
  const listComments = useCallback(() => dispatch(listCommentsAction()), [
    dispatch,
  ]);
  const createComment = useCallback(
    (values) => dispatch(createCommentAction(values)),
    [dispatch]
  );
  const toggleLoadNew = useCallback(
    (loadNew) => dispatch(toggleLoadNewAction(loadNew)),
    [dispatch]
  );
  const updateRenderComments = useCallback(
    () => dispatch(updateRenderCommentsAction()),
    [dispatch]
  );

  useEffect(() => {
    getRoom();
    setInterval(() => {
      listComments();
    }, REQUESTED_TIME_INTERVAL);

    // // Subscribe to creation
    // const api: any = API.graphql(
    //   graphqlOperation(subscriptions.onCreateComment)
    // );
    // const subscription = api.subscribe({
    //   next: (listData: any) => {
    //     const values = listData.value.data.onCreateComment;
    //     setComment({ listData: [values] });
    //   },
    // });
  }, [getRoom, listComments]);

  useEffect(() => {
    if (comments && cacheComments && cacheComments.length > 0) {
      let notDuplicate = true;

      comments.map((item: any) => {
        if (item.id === cacheComments[cacheComments.length - 1].id) {
          notDuplicate = false;
        }

        return notDuplicate;
      });
      if (notDuplicate) {
        updateRenderComments();
      }
    }
  }, [cacheComments, comments, updateRenderComments]);

  return (
    <Top
      comments={comments}
      loadNew={loadNew}
      commentTotalCount={commentTotalCount}
      cacheComments={cacheComments}
      listComments={listComments}
      createComment={createComment}
      toggleLoadNew={toggleLoadNew}
    />
  );
};
