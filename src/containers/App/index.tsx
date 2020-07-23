import React, { useCallback, useEffect } from 'react';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { store } from '../../redux/store';
import Top from '../Top';

Amplify.configure(awsconfig);

export default () => {
  return (
    <Provider store={store} >
      <Top />
    </Provider>
  );
};
