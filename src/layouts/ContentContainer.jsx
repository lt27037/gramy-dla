import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage'
import News from '../pages/News'
import Gallery from '../pages/Gallery'
import About from '../pages/About'
import Sponsors from '../pages/Sponsors'
import Events from '../pages/Events'
import Volunteer from '../pages/Volunteer'

import '../styles/ContentContainer.scss'


const ContentContainer = () => {

   const [sponsors, setSponsors] = useState([]);
   const [sliders, setSliders] = useState([]);

   const getSponsors = async (url) => {
      try{
         const response = await fetch(url);
         const data = await response.json();
         return data;
      }catch(err){
         console.error('Błąd łączenia z serwerem! ' + err);
      }
   }

   const getSliders = async (url) => {
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
         const sponsorsUrl = 'https://picsum.photos/v2/list?page=2&limit=12';
         const slidersUrl = 'https://picsum.photos/v2/list?page=3&limit=3';
         getSponsors(sponsorsUrl).then(data => setSponsors(data));
         getSliders(slidersUrl).then(data => setSliders(data));
      }, []
   )

   return(
      <div className="container">
         <Switch>
            <Route path="/" exact >
               <HomePage sponsors={sponsors} sliders={sliders}/>
            </Route>

            <Route path="/aktualnosci">
               <News sponsors={sponsors}/>
            </Route>

            <Route path="/galeria">
               <Gallery sponsors={sponsors}/>
            </Route>

            <Route path="/onas">
               <About sponsors={sponsors}/>
            </Route>

            <Route path="/sponsorzy">
               <Sponsors sponsors={sponsors}/>
            </Route>

            <Route path="/wydarzenia">
               <Events sponsors={sponsors}/>
            </Route>

            <Route path="/zostan-wolontariuszem">
               <Volunteer sponsors={sponsors}/>
            </Route>
         </Switch>
      </div>
   );
};

export default ContentContainer;