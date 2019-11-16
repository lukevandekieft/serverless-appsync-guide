import gql from 'graphql-tag';

export default gql`
query ListNotes{
  ListNotes {
    title
    content
    id
  }
}
`
