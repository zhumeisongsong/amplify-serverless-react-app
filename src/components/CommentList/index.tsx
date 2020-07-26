import React, { useEffect } from 'react';
import { CommentList } from './style';
import { TopProps } from '../../containers/Top';
import { CreateCommentInput } from '../../API';
import imageAvatarDefault from '../../assets/images/avatar-default.svg';
import imageOfficial from '../../assets/images/official.png';
import { Button } from 'antd';

export default ({
  listComments,
  comments,
  loadNew,
  cacheComments,
  toggleLoadNew,
}: TopProps) => {
  useEffect(() => {
    const list = document.getElementById('commentList');

    if (list && loadNew) {
      list.scrollTop = list.scrollHeight;
    }
  }, [comments, loadNew]);

  const handleScroll = () => {
    const list = document.getElementById('commentList');

    if (list && toggleLoadNew) {
      if (list.scrollTop < list.scrollHeight - list.offsetHeight) {
        if (loadNew) {
          toggleLoadNew(false);
        }
      } else {
        toggleLoadNew(true);
      }
    }
  };

  const handleButtonClick = () => {
    const list = document.getElementById('commentList');

    if (list && toggleLoadNew) {
      toggleLoadNew(true);
      setTimeout(() => {
        list.scrollTop = list.scrollHeight;
      }, 500);
    }
  };

  return (
    <CommentList>
      <ul onScroll={handleScroll} id="commentList">
        {comments &&
          comments.map((item: CreateCommentInput) => {
            if (item.id) {
              return (
                <li key={item.id}>
                  <div
                    className={`image ${item.userImage ? '' : 'is-default'}`}
                    style={{
                      backgroundImage: `url('${
                        item.userImage ? item.userImage : imageAvatarDefault
                        }')`,
                    }}
                  />
                  <div className="text">
                    <div className="user-name">
                      {item.userName}{' '}
                      {item.isOfficialAccount && (
                        <img src={imageOfficial} alt="offical-account" />
                      )}
                    </div>
                    <div className="content">{item.content}</div>
                  </div>
                </li>
              );
            }
          })}
      </ul>
      <Button
        className={`button ${
          loadNew ? 'hidden' : ''
          }`}
        onClick={handleButtonClick}
      >
        最新コメントへ
      </Button>
    </CommentList>
  );
};
