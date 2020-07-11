import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from './routes';
import api from './services/api';

import './App.css';

function App() {
  return (
    <ApolloProvider client={api}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
