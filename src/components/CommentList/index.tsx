import React, { useEffect } from 'react';
import { CommentList } from './style';
import { TopProps } from '../../containers/Top';

export default ({
  listComments,
  comments,
  loadNew,
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

  return (
    <CommentList>
      <ul onScroll={handleScroll} id="commentList">
        {comments &&
          comments.map((item: any) => (
            <li key={item.id}>
              <div className="image" />
              <div className="text">
                <div className="user-name">{item.userName}</div>
                <div className="content">{item.content}</div>
              </div>
            </li>
          ))}
      </ul>
    </CommentList>
  );
};
