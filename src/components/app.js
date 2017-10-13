import React, { Component } from 'react';
import marked from 'marked';
import { Tab, Tabs } from 'react-bootstrap';

export default class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1 className="text-center" id="app-heading">Markdown Previewer</h1>
        </header>
        <footer className="text-center">Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}
