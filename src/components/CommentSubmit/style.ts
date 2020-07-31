import styled from 'styled-components';

export const CommentForm = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 12px 16px;
  background-color: #fff;

  .ant-form {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ant-row {
    width: 100%;
  }

  .ant-form-item-control-input-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    border-right-width: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    overflow: hidden;
  }

  input {
    width: 100%;
    border: none;
    font-size: 12px;
    padding: 12px 0;
    line-height: 1;
  }

  button {
    flex-shrink: 0;
    width: 60px;
    height: 40px;
    background-color: #e5012c;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .ant-form-item-explain {
    display: none;
  }

  @media (max-width: 768px) {
    height: 74px;

    .ant-form-item-control-input-content {
      height: 50px;
    }

    input {
      font-size: 12px;
    }

    button {
      width: 60px;
      height: 50px;
      font-size: 14px;
    }
  }
`;
