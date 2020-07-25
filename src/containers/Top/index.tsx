import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';
import { getRoomAction } from '../../redux/Room/actions';
import {
  listCommentsAction,
  createCommentAction,
  toggleLoadNewAction,
  createCommentSuccessAction,
} from '../../redux/Comment/actions';
import Top from '../../components/Top';
import { Store } from '../../redux/types';
import { Action } from 'redux';
import { ModelCommentConditionInput } from '../../API';
import * as subscriptions from '../../graphql/subscriptions';

export interface TopProps {
  comments?: ModelCommentConditionInput[];
  loadNew?: boolean;
  commentTotalCount?: number;
  listComments?: () => Action<any>;
  createComment?: (values: any) => Action<any>;
  toggleLoadNew?: (loadNew: boolean) => Action<any>;
  setComment?: any;
}

export default () => {
  const dispatch = useDispatch();
  const commentTotalCount = useSelector(
    (store: Store) => store.room.commentTotalCount
  );
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
  const setComment = useCallback(
    (values) => dispatch(createCommentSuccessAction(values)),
    [dispatch]
  );
  const toggleLoadNew = useCallback(
    (loadNew) => dispatch(toggleLoadNewAction(loadNew)),
    [dispatch]
  );

  useEffect(() => {
    getRoom();
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
  }, [getRoom]);

  return (
    <Top
      comments={comments}
      loadNew={loadNew}
      commentTotalCount={commentTotalCount}
      listComments={listComments}
      createComment={createComment}
      setComment={setComment}
      toggleLoadNew={toggleLoadNew}
    />
  );
};
