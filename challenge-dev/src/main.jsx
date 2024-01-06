import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import client from "./graphql/config.js";
import { ApolloProvider } from "@apollo/client";
import CharacterStateProvider from "./context/character/characterState.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <CharacterStateProvider>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </CharacterStateProvider>,
)
