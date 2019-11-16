import gql from 'graphql-tag';

export default gql`
mutation ($input: DeleteNoteInput!) {
  deleteNote(input: $input) {
    id
  }
}`;
