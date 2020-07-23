import React from 'react';
import { CommentList } from './style';
import { TopProps } from '../../containers/Top';

export default ({ listComments, comments, loadNew }: TopProps) => {
  return (
    <CommentList>
      <ul>
        {comments.map((item: any) => (
          <li key={item.id}>
            <div className='image' style={{}} />
            <div className="text">
              <div className="user-name">
                {item.userName}
              </div>
              <div className="content">
                {item.content}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </CommentList>
  )
}
