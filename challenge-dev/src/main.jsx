import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import client from "../graphql/config.js"
import { ApolloProvider } from "@apollo/client"

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
)
