import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  header {
    width: 100%;
    height: 96px;
    background-color: #171616;
    color: #fff;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  .main {
    box-sizing:border-box;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 3% 10%;
    overflow: hidden;
  }

  .section-container {
    width: 100%;
    .title {
      width: 100%;
      padding: 0 0 3%;
      font-size: 24px;
      font-family: NotoSansCJKjp-Bold, NotoSansCJKjp;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    +.section-container {
      padding-top: 4%;
    }
  }
  .comment-video-container {
    .wrapper {
      flex-direction: row;
    }
  }
  .description-content {
    box-sizing: border-box;
    width: 100%;
    padding: 16px 24%;
    color: #555555;
    font-size: 0.75rem;
    text-align: center;
    letter-spacing: 0.75px;
    background-color: #f5f5f5;
  }

  .video {
    width: 100%;
    padding-top: 56%;
    background-color: #171616;
  }

  .comment {
    width: 270px;
    margin-left: 8px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    flex-grow: 1;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .hidden-sp {
      display: none;
    }
  }
`;
