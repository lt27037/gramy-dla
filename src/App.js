import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import ContentContainer from './layouts/ContentContainer'
import Footer from './layouts/Footer'
import Header from './layouts/Header'

import './styles/App.scss';

const App = () => {
  return (
    <Router >
      <div id="main">
        <Header />
        <ContentContainer />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
