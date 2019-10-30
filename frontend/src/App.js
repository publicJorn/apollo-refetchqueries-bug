import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import {
  InMemoryCache,
} from 'apollo-cache-inmemory'

import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Book from './components/Book'
import AddBook from './components/AddBook'
import BookList from './components/BookList'

// SETUP APOLLO ---------------------------------------------------------------

const link = new HttpLink({
  uri: 'http://localhost:4000/',
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache,
  queryDeduplication: true,
})

// END SETUP APOLLO -----------------------------------------------------------

const browserHistory = createBrowserHistory()

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>refetchQueries test</h1>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/book/add" component={AddBook} />
          <Route path="/book/:guid" component={Book} />
          <Route path="/" component={BookList} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
