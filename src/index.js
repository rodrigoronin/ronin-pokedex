import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';

import store from './store';
import api from './services/api';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={api}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
