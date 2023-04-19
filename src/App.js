import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TabsContainer from './components/TabsContainer';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <TabsContainer />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;