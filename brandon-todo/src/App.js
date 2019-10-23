import React from 'react';
import './App.css';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';

// components
import Btn from './Components/Btn';
import DeleteIcon from '@material-ui/icons/Delete';


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <Btn 
      id="1"
      classNames="btn"
      text="hello"
      color="secondary"
      size="large"
      variant="contained"
      endIcon={<DeleteIcon/>}
    />
  </ApolloProvider>
);

export default App;
