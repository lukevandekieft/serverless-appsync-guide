import gql from 'graphql-tag';

export default gql `
query getNote($id: String!) {
  getNote(
    id: $id
  ) {
    id
    title
    content
  }
}
`;
