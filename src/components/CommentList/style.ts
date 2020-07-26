import styled from 'styled-components';

export const CommentList = styled.div`
  width: 100%;
  height: calc(40vw - 86px);
  ul {
    width:100%;
    height: 100%;
    padding: 0 0 16px;
    list-style: none;
    overflow: auto;
  }

  li {
    display: flex;
    width: 100%;
    padding: 8px 16px;
  }

  .image {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #888;
  }

  .text {
    width: 100%;
    padding-left: 8px;
    font-size: 12px;
  }

  .user-name {
    color: #888;
    font-weight: 500;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  .content {

  }
`
