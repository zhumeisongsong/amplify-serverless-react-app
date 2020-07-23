import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Room from '../../components/Room';
import CommentList from '../../components/CommentList';
import CommentSubmit from '../../components/CommentSubmit';
import { getRoomAction } from '../../redux/Room/actions';
import {
  listCommentsAction,
  createCommentAction,
} from '../../redux/Comment/actions';
import { PageContainer } from './style';

export default () => {
  const dispatch = useDispatch();
  const comments = useSelector((store: any) => store.comment.listData);
  const loadNew = useSelector((store: any) => store.comment.loadNew);
  const getRoom = useCallback(() => dispatch(getRoomAction()), [dispatch]);

  const listComments = useCallback(() => dispatch(listCommentsAction()), [
    dispatch,
  ]);
  const createComment = useCallback((values) => dispatch(createCommentAction(values)), [
    dispatch,
  ]);

  useEffect(() => {
    getRoom();
  }, [getRoom]);

  return (
    <PageContainer>
      <header className="hidden-sp"></header>
      <div className="main">
        <section className="section-container comment-video-container">
          <div className="title hidden-sp">King Gnu - どろん</div>
          <div className="wrapper">
            <div className="video"></div>
            <div className="comment">
              <Room />
              <CommentList
                list={listComments}
                data={comments}
                loadNew={loadNew}
              />
              <CommentSubmit create={createComment} />
            </div>
          </div>
        </section>
        <section className="section-container">
          <div className="title hidden-sp">紹介</div>
          <div className="wrapper">
            <div className="description-content">
              皆さんにお知らせです
              <br />
              3月10日東京ドームでファンクラブ限定ライブを開催します、よろしくお願いします
              Instagram → https://t.co/g7GmkjouCbL 連絡先 → sony@sony.com
              https://t.co/2oWjPdj4lud
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
};
