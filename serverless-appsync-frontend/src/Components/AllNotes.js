import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { ListNotes } from "../GraphQL";
import { Icon, Table } from 'semantic-ui-react';

class AllNotes extends Component {

  render() {
    return (
      <React.Fragment>
        <Table celled={true}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell><Icon name={'key'}/>Title</Table.HeaderCell>
              <Table.HeaderCell><Icon name={'info'}/>Note</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.ListNotes ? (
              this.props.ListNotes.map(note => (
                <Table.Row key={note.title}>
                  <Table.Cell>{note.title}</Table.Cell>
                  <Table.Cell>{note.content}</Table.Cell>
                </Table.Row>
              ))
            ) : (
                null
              )
            }
          </Table.Body>
        </Table>
      </React.Fragment>
    );
  }
}

export default graphql(
  ListNotes,
  {
    options: {
      fetchPolicy: 'cache-and-network',
    },
    props: props => ({
      data: props.data,
      ListNotes: props.data.ListNotes
    }),
  }
)(AllNotes);
