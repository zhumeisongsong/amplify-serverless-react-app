import React from 'react';
import { CommentList } from './style';

export default ({ list, data }: any) => {
  return (
    <CommentList>
      <ul>
        {data && data.map((item: any) => (
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
