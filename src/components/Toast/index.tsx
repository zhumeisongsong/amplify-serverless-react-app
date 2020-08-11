import React from 'react';
import styled from 'styled-components';
import { TopProps } from '../../containers/Top';

export default ({ showToast, toastMessage }: TopProps) => {
  return showToast ? (
    <ErrorToast dangerouslySetInnerHTML={{ __html: toastMessage }}></ErrorToast>
  ) : null;
};

const ErrorToast = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 240px;
  padding: 10px 8px;
  margin-top: -30px;
  margin-left: -120px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background-color: #171616;
  border-radius: 5px;
`;
