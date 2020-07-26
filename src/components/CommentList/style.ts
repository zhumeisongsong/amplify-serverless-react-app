import styled from 'styled-components';

export const CommentList = styled.div`
  position: relative;
  width: 100%;
  height: calc(40vw - 86px);
  ul {
    width: 100%;
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
    background-color: #bdbdbd;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    &.is-default {
      background-size: 80% auto;
    }
  }

  .text {
    width: 100%;
    padding-left: 8px;
    font-size: 12px;
  }

  .user-name {
    width: 100%;
    display: flex;
    align-items: center;
    color: #888;
    font-weight: 500;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    img {
      margin-left: 5px;
    }
  }

  .button {
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 120px;
    height: 24px;
    margin-left: -70px;
    font-size: 12px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 4px;
    transition: bottom 0.2s ease-in;
    &:hover {
      opacity: 1;
    }

    &.hidden {
      bottom: -32px;
    }
  }

  @media (max-width: 768px) {
    height: calc(100vh - 57vw);
    ul {
      padding-top: 48px;
      padding-bottom: 64px;
    }

    .button {
      bottom: 80px;
    }
  }
`;
