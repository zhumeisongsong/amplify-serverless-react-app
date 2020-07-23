import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Room from '../../components/Room';
import CommentList from '../../components/CommentList';
import CommentSubmit from '../../components/CommentSubmit';
import { getRoomAction } from '../../redux/Room/actions';
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
    <PageContainer>
      <header className="hidden-sp"></header>
      <div className="main">
        <section className="section-container">
          <div className="title hidden-sp">King Gnu - どろん</div>
          <div className="wrapper">
            <div className="video"></div>
            <div>
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
        <section className="section-container hidden-sp">
          <div className="title">紹介</div>
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

const PageContainer = styled.div`
  width: 100%;
  header {
    width: 100%;
    height: 96px;
    background-color: #171616;
    color: #fff;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  .main {
    box-sizing:border-box;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 10%;
    overflow: hidden;
  }

  .section-container {
    width: 100%;
    padding-bottom: 1%;
    .title {
      width: 100%;
      padding: 3% 0;
      font-size: 24px;
      font-family: NotoSansCJKjp-Bold, NotoSansCJKjp;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
  .description-content {
    box-sizing: border-box;
    width: 100%;
    padding: 16px 24%;
    color: #555555;
    font-size: 0.75rem;
    text-align: center;
    letter-spacing: 0.75px;
    background-color: #f5f5f5;
    .wrapper {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .hidden-sp {
      display: none;
    }
  }
`;
