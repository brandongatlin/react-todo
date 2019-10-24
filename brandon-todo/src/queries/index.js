import { gql } from "apollo-boost";

const getTodos = gql `
    query todos {
        id
        title
        description
        completed
    }
`

export { getTodos };
