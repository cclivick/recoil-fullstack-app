import gql from 'graphql-tag'

export const CREATE_USER = gql`
mutation AddUser($id: ID!, $firstName: String!, $lastName: String!, $favGenres: [String] ) {
    createUser(
      id: $id,
      firstName: $firstName,
      lastName: $lastName,
      favGenres: $favGenres
    ) {id, firstName, lastName, favGenres}
  }
`
