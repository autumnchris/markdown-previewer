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
        <main>
          <Tabs defaultActiveKey={1} animation={false} id="tabs">
            <Tab eventKey={1} title=" Edit">
              <textarea className="form-control" rows="20" />
            </Tab>
            <Tab eventKey={2} title=" Preview">
              <div></div>
            </Tab>
          </Tabs>
        </main>
        <footer className="text-center">Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}
