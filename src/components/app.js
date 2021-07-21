import React, { useState } from 'react';
import PreviewerContent from './previewer-content';

const App = () => {
  const [markdownInput, setMarkdownInput] = useState('');

  function handleChange(event) {
    setMarkdownInput(event.target.value);
  }

  return (
    <React.Fragment>
      <header>
        <h1 className="app-heading">Markdown Previewer</h1>
      </header>
      <main>
        <PreviewerContent markdownInput={markdownInput} handleChange={handleChange} />
      </main>
      <footer>Created by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
