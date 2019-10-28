import React from 'react';
import './App.css';

import ApolloClient from "apollo-client";

import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

import Grid from '@material-ui/core/Grid';


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
    <Grid container>
      <AddForm/>
      <AllTodos />
    </Grid>
  </ApolloProvider>
);

export default App;
