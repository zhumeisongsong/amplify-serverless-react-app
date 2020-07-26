import React from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <Introduction>
      <div className="text">
        皆さんにお知らせです
        <br />
        3月10日東京ドームでファンクラブ限定ライブを開催します、よろしくお願いします
        Instagram → https://t.co/g7GmkjouCbL 連絡先 → sony@sony.com
        https://t.co/2oWjPdj4lud
      </div>
    </Introduction>
  );
};

const Introduction = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  background-color: #f5f5f5;
  .text {
    max-width: 560px;
    margin: 0 auto; 
    padding: 16px;
    color: #555555;
    font-size: 12px;
    text-align: center;
    letter-spacing: 0.75px;
  }

  @media(max-height: 768px) {
    height: calc(100vh - 57vw);
    padding-top: 48px;
  }
`;
