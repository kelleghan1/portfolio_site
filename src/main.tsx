import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, type NormalizedCacheObject } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { PORTFOIO_API_URL } from './utils/constants/environment.ts'

const apolloCLient = new ApolloClient<NormalizedCacheObject>({
  uri: PORTFOIO_API_URL,
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloCLient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
