import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomAction } from '../../redux/Room/actions';
import {
  createCommentAction,
  toggleLoadNewAction,
  toggleHasNewAction,
  updateCommentsAction,
  updateCacheCommentsAction,
  listHistoryCommentsAction,
} from '../../redux/Comment/actions';
import Top from '../../components/Top';
import { Store } from '../../redux/types';
import { Action } from 'redux';
import { CreateCommentInput } from '../../API';
import * as subscriptions from '../../graphql/subscriptions';

export interface TopProps {
  comments?: CreateCommentInput[];
  cacheComments?: CreateCommentInput[];
  toNew?: boolean;
  hasNew?: boolean;
  commentTotalCount?: number;
  showToast?: boolean;
  toastMessage?: string;
  listComments?: () => Action<any>;
  listHistoryComments?: () => Action<any>;
  createComment?: (values: any) => Action<any>;
  toggleLoadNew?: (toNew: boolean) => Action<any>;
  toggleHasNew?: (hasNew: boolean) => Action<any>;
}

export default () => {
  const dispatch = useDispatch();
  const commentTotalCount = useSelector(
    (store: Store) => store.room.commentTotalCount
  );
  const comments = useSelector((store: Store) => store.comment.listData);
  const cacheComments = useSelector((store: Store) => store.comment.cacheData);
  const toNew = useSelector((store: Store) => store.comment.toNew);
  const hasNew = useSelector((store: Store) => store.comment.hasNew);
  const showToast = useSelector((store: Store) => store.toast.showToast);
  const toastMessage = useSelector((store: Store) => store.toast.message);
  const getRoom = useCallback(() => dispatch(getRoomAction()), [dispatch])
  const listHistoryComments = useCallback(
    () => dispatch(listHistoryCommentsAction()),
    [dispatch]
  );
  const createComment = useCallback(
    (values) => dispatch(createCommentAction(values)),
    [dispatch]
  );
  const toggleLoadNew = useCallback(
    (toNew) => dispatch(toggleLoadNewAction(toNew)),
    [dispatch]
  );
  const toggleHasNew = useCallback(
    (hasNew) => dispatch(toggleHasNewAction(hasNew)),
    [dispatch]
  );
  const updateComments = useCallback(() => dispatch(updateCommentsAction()), [
    dispatch,
  ]);
  const updateCacheComments = useCallback(
    () => dispatch(updateCacheCommentsAction()),
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
  });

  useEffect(() => {
    if (comments && cacheComments && cacheComments.length > 0) {
      let notDuplicate = true;

      comments.map((item: CreateCommentInput) => {
        if (item.id === cacheComments[cacheComments.length - 1].id) {
          notDuplicate = false;
        }

        return notDuplicate;
      });

      if (notDuplicate && toNew) {
        updateComments();
      }

      updateCacheComments();

      if (notDuplicate && !toNew) {
        toggleHasNew(notDuplicate);
      }
    }
  }, [cacheComments]);

  return (
    <Top
      comments={comments}
      toNew={toNew}
      hasNew={hasNew}
      commentTotalCount={commentTotalCount}
      cacheComments={cacheComments}
      listHistoryComments={listHistoryComments}
      createComment={createComment}
      toggleLoadNew={toggleLoadNew}
      toggleHasNew={toggleHasNew}
      showToast={showToast}
      toastMessage={toastMessage}
    />
  );
};
