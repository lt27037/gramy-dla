import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ContentContainer from './layouts/ContentContainer'
import Footer from './layouts/Footer'
import Header from './layouts/Header'

import './styles/App.scss';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id="main">
        <Header />
        <ContentContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
