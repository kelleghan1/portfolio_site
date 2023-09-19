import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, type NormalizedCacheObject } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'

const apolloCLient = new ApolloClient<NormalizedCacheObject>({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloCLient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
