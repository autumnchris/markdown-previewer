import React from 'react';
import PreviewerContent from './previewer-content';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdownInput: '# Heading\n## Sub-heading\n\n[This is a link.](https://www.freecodecamp.org)\n\n`This is inline code.`\n\n```\nThis is a code block.\n```\n\nThis is a list:\n* item 1\n* item 2\n* item 3\n\n> This is a blockquote.\n\n![freeCodeCamp logo](https://dl.dropbox.com/s/lei6k4qqrvo23qb/freeCodeCamp-alternative.png)'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdownInput: event.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1 className="app-heading">Markdown Previewer</h1>
        </header>
        <main>
          <PreviewerContent markdownInput={this.state.markdownInput} handleChange={this.handleChange} />
        </main>
        <footer>Created by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
      </React.Fragment>
    );
  }
}

export default App;
