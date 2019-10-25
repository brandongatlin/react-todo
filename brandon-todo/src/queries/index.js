import { gql } from "apollo-boost";

// const getTodos = gql `
//     query todos {
//         id
//         title
//         description
//         completed
//     }
// `

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

export { getTodos };
