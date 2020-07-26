import React from 'react';
import CommentCount from '../../components/CommentCount';
import CommentList from '../../components/CommentList';
import CommentSubmit from '../../components/CommentSubmit';
import Introduction from '../../components/Introduction';
import {
  PageContainer,
  TabContainer,
  TabTitle,
  TabTitleItem,
  TabContent,
} from './style';
import { TopProps } from '../../containers/Top';

export default ({
  comments,
  loadNew,
  listComments,
  createComment,
  commentTotalCount,
  toggleLoadNew,
  cacheComments,
}: TopProps) => {
  return (
    <PageContainer>
      <header className="hidden-sp"></header>
      <div className="main">
        <section className="section-container comment-video-container">
          <div className="title hidden-sp">King Gnu - どろん</div>
          <div className="wrapper">
            <div className="video"></div>

            <div className="comment">
              <TabContainer>
                <TabTitle className="hidden-pc">
                  <TabTitleItem>コメント({commentTotalCount})</TabTitleItem>
                  <TabTitleItem>紹介</TabTitleItem>
                </TabTitle>

                <TabContent>
                  <CommentCount commentTotalCount={commentTotalCount} />
                  <CommentList
                    listComments={listComments}
                    comments={comments}
                    loadNew={loadNew}
                    toggleLoadNew={toggleLoadNew}
                    cacheComments={cacheComments}
                  />
                  <CommentSubmit createComment={createComment} />
                </TabContent>
                <TabContent className="hidden-pc">
                  <Introduction />
                </TabContent>
              </TabContainer>
            </div>
          </div>
        </section>
        <section className="section-container hidden-sp">
          <div className="title">紹介</div>
          <div className="wrapper">
            <Introduction />
          </div>
        </section>
      </div>
    </PageContainer>
  );
};
