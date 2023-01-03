import React from 'react';
import TabsContainer from './TabsContainer';

const App = () => {
  return (
    <React.Fragment>
      <header>
        <h1 className="app-heading">Markdown Previewer</h1>
      </header>
      <main>
        <TabsContainer />
      </main>
      <footer>Created by <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
