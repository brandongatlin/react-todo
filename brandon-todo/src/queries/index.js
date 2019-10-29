import { gql } from "apollo-boost";



const getTodos = gql`
  query todos {
    tasks @rest(type: "task", path: "/"){
      id
      title
      description
      completed
    }
  }
`;

const addTodoQuery = gql`
  mutation addTodoQuery($title: String!, $description: String!) {
    addTodoQuery(input: {title: $title, description: $description})
      @rest(type: "task", path: "/", method: "POST") {
        id
        title
        description
        completed
      }
  }
`

const markComplete = gql`
  mutation markComplete($id: String!) {
    markComplete(id: $id)
      @rest(type: "task", path: "/{args.id}", method: "PUT") {
        id
        title
        description
        completed
      }
  }
`

const deleteTodo = gql`
  mutation deleteTodo($id: String!) {
    deleteTodo(id: $id)
      @rest(type: "task", path: "/{args.id}", method: "DELETE") {
        id
        title
        description
        completed
      }
  }
`



export { getTodos, addTodoQuery, deleteTodo, markComplete };
