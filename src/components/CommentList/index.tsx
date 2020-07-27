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
  toNew,
  hasNew,
  toggleLoadNew,
  toggleHasNew
}: TopProps) => {
  useEffect(() => {
    const list = document.getElementById('commentList');

    if (list && toNew && toggleHasNew) {
      list.scrollTop = list.scrollHeight;
      toggleHasNew(false);
    }
  }, [comments, toNew]);

  const handleScroll = () => {
    const list = document.getElementById('commentList');

    if (list && toggleLoadNew) {
      if (list.scrollTop < list.scrollHeight - list.offsetHeight) {
        if (toNew) {
          toggleLoadNew(false);
        }
      } else {
        toggleLoadNew(true);
      }
    }
  };

  const handleButtonClick = () => {
    const list = document.getElementById('commentList');

    if (list && toggleLoadNew && toggleHasNew) {
      toggleLoadNew(true);
      toggleHasNew(false);

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
            } else {
              return null;
            }
          })}
      </ul>
      <Button
        className={`button ${hasNew && !toNew ? '' : 'hidden'}`}
        onClick={handleButtonClick}
      >
        最新コメントへ
      </Button>
    </CommentList>
  );
};
