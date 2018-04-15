import React, { Component } from 'react';
import marked from 'marked';
import { Tab, Tabs } from 'react-bootstrap';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markdownInput: '# Heading\n## Sub-heading\n### Another deeper heading\nParagraphs are separated by a blank line.\n\nTwo spaces at the end of a line leave a line break.\n\nText attributes _italic_, *italic*, __bold__, **bold**, `monospace`, ~~strikethrough~~.\n\nHorizontal rule:\n\n---\n\nBullet list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears'
    };
  }

  handleChange(event) {
    this.setState({
      markdownInput: event.target.value
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1 className="text-center app-heading">Markdown Previewer</h1>
        </header>
        <main>
          <Tabs defaultActiveKey={1} animation={false} id="tabs">
            <Tab eventKey={1} title=" Edit" generatechildid="edit-tab">
              <textarea className="form-control" rows="20" aria-label="type GitHub Flavored Markdown text" onChange={this.handleChange.bind(this)} value={this.state.markdownInput} />
            </Tab>
            <Tab eventKey={2} title=" Preview" generatechildid="preview-tab">
              <div className="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdownInput)}}></div>
            </Tab>
          </Tabs>
        </main>
        <footer className="text-center">Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}
