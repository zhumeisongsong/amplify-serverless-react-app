import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface ErrorProps {
  msgJsx: string | boolean | Element | null
}

export default (props: ErrorProps) => {
  const [isError, setError] = useState(props.msgJsx);

  useEffect(() => {
    setError(props.msgJsx);

    setTimeout(() => {
      setError(false);
    }, 1500);
  }, [props.msgJsx])

  return isError ? (
    <ErrorToast>
      {props.msgJsx}
    </ErrorToast>
  ) : null;
};

const ErrorToast = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: auto;
  padding: 10px 0;
  margin-top: -30px;
  margin-left: -100px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background-color: #171616;
  border-radius: 5px;
`;
