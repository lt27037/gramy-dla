import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage'
import News from '../pages/News'
import Gallery from '../pages/Gallery'
import About from '../pages/About'
import Sponsors from '../pages/Sponsors'
import Events from '../pages/Events'

import '../styles/ContentContainer.scss'



const ContentContainer = () => {
   return(
      <div className="container">
         <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/aktualnosci" component={News} />
            <Route path="/galeria" component={Gallery} />
            <Route path="/onas" component={About} />
            <Route path="/sponsorzy" component={Sponsors} />
            <Route path="/wydarzenia" component={Events} />
         </Switch>
      </div>
   );
};

export default ContentContainer;