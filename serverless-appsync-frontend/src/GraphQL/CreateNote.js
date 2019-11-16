import gql from 'graphql-tag';

export default gql`
mutation ($input: CreateNoteInput!) {
  createNote(input: $input) {
    id
    title
    content
  }
}`;
