import React from 'react';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import { useDispatch, useSelector } from 'react-redux';
import awsconfig from '../../aws-exports';
import { store } from '../../redux/store';
import Room from '../../components/Room';
import CommentList from '../../components/CommentList';
import CommentSubmit from '../../components/CommentSubmit';


Amplify.configure(awsconfig);

export default () => {
  const dispatch = useDispatch();

  return (
    <Provider store={store} >
      <div className="App" >
        <Room />
        <CommentList />
        <CommentSubmit />
      </div>
    </Provider>
  );
};
