import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
    width: 100%;
    max-width: 1640px;
    margin: 0 auto;
    padding: 48px 32px;
    overflow: hidden;
  }

  .section-container {
    width: 100%;
    .title {
      width: 100%;
      padding: 0 0 24px;
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
    + .section-container {
      padding-top: 40px;
    }
  }

  .video {
    background-color: #171616;
  }

  .brightcove-react-player-loader {
    width: 100%;
    height: 100%;
    video-js {
      width: 100%;
      height: 100%;
    }
  }

  .comment {
    position: relative;
  }

  @media (min-width: 769px) {
    .comment-video-container {
      .wrapper {
        flex-direction: row;
        height: 40vw;
        max-height: 660px;
      }
    }

    .video {
      width: 75%;
      height: 100%;
    }

    .comment {
      width: 25%;
      min-width: 240px;
      margin-left: 8px;
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      flex-grow: 1;
      flex-shrink: 0;
      overflow: hidden;
    }
  }

  @media (max-width: 768px) {
    .hidden-sp {
      display: none;
    }

    .main {
      padding: 0;
    }

    .comment-video-container {
      .wrapper {
        flex-direction: column;
      }
    }

    .video {
      width: 100vw;
      height: 57vw;
    }

    .comment {
      width: 100%;
    }
  }
`;

export const TabContainer = styled(Tabs)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const TabTitle = styled(TabList)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 9;

  @media (min-width: 769px) {
    &.hidden-pc {
      display: none;
    }
  }
`;

export const TabTitleItem = styled(Tab)`
  position: relative;
  width: 30%;
  max-width: 200px;
  height: 48px;
  font-size: 12px;
  text-align: center;
  line-height: 48px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.react-tabs__tab--selected {
    color: #e5012c;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100px;
      height: 2px;
      margin-left: -50px;
      background-color: #e5012c;
    }
  }
`;

export const TabContent = styled(TabPanel)`
  height: 100%;

  @media (min-width: 769px) {
    &.hidden-pc {
      display: none;
    }
  }

  /* @media (max-width: 768px) {
    padding-top: 48px;
  } */
`;

