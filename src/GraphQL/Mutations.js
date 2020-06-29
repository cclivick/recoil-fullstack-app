import gql from 'graphql-tag'

export const CREATE_USER = gql`
mutation AddUser($firstName: String!, $lastName: String!, $favGenres: [String] ) {
    createUser(
      firstName: $firstName,
      lastName: $lastName,
      favGenres: $favGenres
    ) {id, firstName, lastName, favGenres}
  }
`

export const EDIT_USER = gql`
mutation EditUser($id: ID!, $firstName: String!, $lastName: String!, $favGenres: [String] ) {
    updateUser(
      id: $id,
      firstName: $firstName,
      lastName: $lastName,
      favGenres: $favGenres
    ) {id, firstName, lastName, favGenres}
  }
`

export const DELETE_USER = gql`
mutation RemoveUser ($id: String!) {
  deleteUser(
    id: $id
  ) {firstName, lastName}
}
`
