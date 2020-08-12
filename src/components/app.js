import React from 'react';
import PreviewerContent from './previewer-content';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdownInput: ''
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
