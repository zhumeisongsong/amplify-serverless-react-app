import styled from 'styled-components';

export const CommentList = styled.div`
  width: 100%;
  height: calc(100% - 86px);
  overflow-y: auto;
  ul {
    width:100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: flex;
    width: 100%;
    padding: 8px 16px;
  }

  .image {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #333;
  }

  .text {
    padding-left: 8px;

  }

  .user-name {

  }

  .content {

  }
`
