import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import ContentContainer from './layouts/ContentContainer'
import Footer from './layouts/Footer'
import Header from './layouts/Header'

import './styles/App.scss';

const App = () => {

  const [footerContent, setFooterContent] = useState([]);

  const getApiData = async (url) => {
    try{
       const response = await fetch(url);
       const data = await response.json();
       return data;
    }catch(err){
       console.error('Błąd łączenia z serwerem! ' + err);
    }
 }

 useEffect(
  () => {
     const endPoint = "https://gora1234.webd.pro/wp-json/acf/v3"
     const footerUrl = `${endPoint}/pages/233`;
     getApiData(footerUrl).then(data => setFooterContent(data));

  }, []
)



  return (
    <Router >
      <div id="main">
        <Header />
        <ContentContainer />
        <Footer content={footerContent}/>
      </div>
    </Router>
  );
}

export default App;
