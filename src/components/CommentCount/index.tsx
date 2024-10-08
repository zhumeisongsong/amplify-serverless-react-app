import React from 'react';
import styled from 'styled-components';
import { TopProps } from '../../containers/Top';
import numberWithCommas from '../../utils/numberWithCommas';

export default ({ commentTotalCount }: TopProps) => {
  return (
    <CommentCount>
      <div className="icon-comment-count" />
      コメント数： {numberWithCommas(commentTotalCount)}
    </CommentCount>
  );
};

const CommentCount = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #f5f5f5 left center no-repeat;
  background-size: 10px auto;
  color: #888888;
  font-size: 12px;
  letter-spacing: 0.75px;

  .icon-comment-count {
    width: 10px;
    height: 15px;
    margin-top: 1px;
    margin-right: 4px;
    opacity: 0.5;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' focusable='false' viewBox='0 0 24 24' aria-hidden='true'%3E%3Cpath d='M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z'%3E%3C/path%3E%3C/svg%3E%0A");
    background-position: left center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;
