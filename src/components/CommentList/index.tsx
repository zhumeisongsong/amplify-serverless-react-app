import React, { useEffect, useState } from 'react';
import { CommentList } from './style';
import { TopProps } from '../../containers/Top';
import { CreateCommentInput } from '../../API';
import { Button } from 'antd';

export default ({
  listHistoryComments,
  comments,
  toNew,
  hasNew,
  toggleLoadNew,
  toggleHasNew,
}: TopProps) => {
  const [beforeHeight, setBeforeHeight] = useState(0);

  useEffect(() => {
    const list = document.getElementById('commentList');

    if (list && toNew && toggleHasNew) {
      list.scrollTop = list.scrollHeight;
      toggleHasNew(false);
    }
  }, [comments, toNew, toggleHasNew]);

  useEffect(() => {
    if (!beforeHeight) return;
    const list = document.getElementById('commentList');
    
    const newListHeight = list.scrollHeight;
    list.scrollTop = newListHeight - beforeHeight;
    setBeforeHeight(0);
  }, [comments]);

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
    if (list) {
      if (list.scrollTop === 0 && listHistoryComments) {
        listHistoryComments();
        setBeforeHeight(list.scrollHeight);
        // setTimeout(() => {
        //   const newListHeight = list.scrollHeight;

        //   list.scrollTop = newListHeight - beforeListHeight - 50;
        // }, 500);
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
                    style={
                      item.userImage
                        ? {
                          backgroundImage: `url('${item.userImage}')`,
                        }
                        : {}
                    }
                  />
                  <div className="text">
                    <div className="user-name">
                      {item.userName}
                      {item.isOfficialAccount && (
                        <div className="icon-official-account"></div>
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
