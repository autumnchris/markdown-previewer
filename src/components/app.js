import React, { Component } from 'react';
import marked from 'marked';
import { Tab, Tabs } from 'react-bootstrap';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markdownInput: '# Heading\n## Sub-heading\n\n[This is a link.](https://www.freecodecamp.org)\n\n`This is inline code.`\n\n```\nThis is a code block.\n```\n\nThis is a list:\n* item 1\n* item 2\n* item 3\n\n> This is a blockquote.\n\n![Free Code Camp logo](https://dl.dropbox.com/s/lei6k4qqrvo23qb/freeCodeCamp-alternative.png)\n\n**This is bolded text.**'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdownInput: event.target.value
    });
  }

  render() {

    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) => `<a href="${href}" target="_blank">${text}</a>`;

    return (
      <div className="container-fluid">
        {/* HEADER */}
        <header>
          <h1 className="text-center app-heading">Markdown Previewer</h1>
        </header>
        <main>
          <Tabs defaultActiveKey={1} animation={false} id="tabs">
            {/* EDIT TAB */}
            <Tab eventKey={1} title=" Edit" generatechildid="edit-tab">
              <textarea className="form-control" rows="20" aria-label="type GitHub Flavored Markdown text" onChange={(event) => this.handleChange(event)} value={this.state.markdownInput} />
            </Tab>
            {/* PREVIEW TAB */}
            <Tab eventKey={2} title=" Preview" generatechildid="preview-tab">
              <div className="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdownInput, {breaks: true, renderer})}}></div>
            </Tab>
          </Tabs>
        </main>
        {/* FOOTER */}
        <footer className="text-center">Coded by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}
