import styled from 'styled-components';

export const CommentList = styled.div`
  width: 100%;
  height: calc(40vw - 86px);
  ul {
    width:100%;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: auto;
  }
  li {
    box-sizing: border-box;
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
