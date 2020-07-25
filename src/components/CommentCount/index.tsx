import React from 'react';
import styled from 'styled-components';
import { TopProps } from '../../containers/Top';
import iconComment from '../../assets/images/icon-comment.svg';

export default ({ commentTotalCount }: TopProps) => {
  return (
    <CommentCount>
      <img src={iconComment} alt="comment" />
      コメント数： {commentTotalCount}
    </CommentCount>
  )
}

const CommentCount = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #F5F5F5 left center no-repeat;
  background-size: 10px auto;
  color: #888888;
  font-size: 12px;
  letter-spacing: 0.75px;

  img {
    width: 10px;
    margin-top: 1px;
    margin-right: 4px;
    opacity: 0.5;
  }
`
