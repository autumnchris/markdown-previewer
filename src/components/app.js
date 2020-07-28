import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import marked from 'marked';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markdownInput: '# Heading\n## Sub-heading\n\n[This is a link.](https://www.freecodecamp.org)\n\n`This is inline code.`\n\n```\nThis is a code block.\n```\n\nThis is a list:\n* item 1\n* item 2\n* item 3\n\n> This is a blockquote.\n\n![freeCodeCamp logo](https://dl.dropbox.com/s/lei6k4qqrvo23qb/freeCodeCamp-alternative.png)'
    };
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
      <div className="body">
        <header>
          <h1 className="app-heading">Markdown Previewer</h1>
        </header>
        <main>
          <Tabs>
            <TabList>
              <Tab><span className="material-icons">create</span> Edit</Tab>
              <Tab><span className="material-icons">visibility</span> Preview</Tab>
            </TabList>
            <TabPanel>
              <form className="markdown-form">
                <textarea className="markdown-input" onChange={(event) => this.handleChange(event)} value={this.state.markdownInput} rows="20" aria-label="enter GitHub Flavored Markdown to preview" />
              </form>
            </TabPanel>
            <TabPanel>
              <div className="preview-content" dangerouslySetInnerHTML={{__html: marked(this.state.markdownInput, {breaks: true, renderer})}} ></div>
            </TabPanel>
          </Tabs>
        </main>
        <footer>Created by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
      </div>
    );
  }
}
