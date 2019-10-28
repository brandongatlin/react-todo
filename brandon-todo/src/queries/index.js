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

const updateCompleted = gql`
  mutation updateCompleted($input: taskId!) {
    updateCompleted(input: $taskId)
      @rest(type: "task", path: "/{args.taskId}", method: "PUT") {
        completed
    }
  }
`

export { getTodos, addTodoQuery, updateCompleted };
