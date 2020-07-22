import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { store } from './redux/store';
import { createRoom, updateRoom, deleteRoom } from './graphql/mutations';

Amplify.configure(awsconfig);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Provider>
  );
}

export default App;
