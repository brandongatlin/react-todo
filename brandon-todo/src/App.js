import React from 'react';
import './App.css';

import ApolloClient from "apollo-client";

import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

import Container from '@material-ui/core/Container';


import AllTodos from './Components/Views/AllTodos';
import AddForm from './Components/AddForm';

const restLink = new RestLink({ uri: "https://practiceapi.devmountain.com/api/tasks" });

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});


const App = () => (
  <ApolloProvider client={client}>
    <Container>
      <AddForm/>
      <AllTodos />
      </Container>
  </ApolloProvider>
);

export default App;
