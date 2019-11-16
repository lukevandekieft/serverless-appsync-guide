import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

//AppSync and Apollo libraries
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

// Components
import AllNotes from "./Components/AllNotes";
import AddNote from "./Components/AddNote";

Amplify.configure(awsconfig);

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Serverless AppSync Note Taker </h1>
        </header>
        <div className="App-content">
          <AddNote />
          <AllNotes />
        </div>
      </div>
    );
  }
}
