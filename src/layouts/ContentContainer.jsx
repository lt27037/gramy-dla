import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage'
import News from '../pages/News'
import Gallery from '../pages/Gallery'
import About from '../pages/About'
import Sponsors from '../pages/Sponsors'
import Events from '../pages/Events'
import Volunteer from '../pages/Volunteer'

import '../styles/ContentContainer.scss'


const sponsorsList = [
   {
      id: 1,
      link: 'https://picsum.photos/id/453/150',
      name: 'Lorem ipsum'
   },
   {
      id: 2,
      link: 'https://picsum.photos/id/234/150',
      name: 'Lorem ipsum'
   },
   {
      id: 3,
      link: 'https://picsum.photos/id/132/150',
      name: 'Lorem ipsum'
   },
   {
      id: 4,
      link: 'https://picsum.photos/id/342/150',
      name: 'Lorem ipsum'
   },
   {
      id: 5,
      link: 'https://picsum.photos/id/119/150',
      name: 'Lorem ipsum'
   },
   {
      id: 6,
      link: 'https://picsum.photos/id/230/150',
      name: 'Lorem ipsum'
   },
   {
      id: 7,
      link: 'https://picsum.photos/id/430/150',
      name: 'Lorem ipsum'
   },
   {
      id: 8,
      link: 'https://picsum.photos/id/100/150',
      name: 'Lorem ipsum'
   },
   {
      id: 9,
      link: 'https://picsum.photos/id/331/150',
      name: 'Lorem ipsum'
   },
   {
      id: 10,
      link: 'https://picsum.photos/id/213/150',
      name: 'Lorem ipsum'
   },
   {
      id: 11,
      link: 'https://picsum.photos/id/297/150',
      name: 'Lorem ipsum'
   },
   {
      id: 12,
      link: 'https://picsum.photos/id/198/150',
      name: 'Lorem ipsum'
   },
]


const ContentContainer = () => {


   return(
      <div className="container">
         <Switch>
            <Route path="/" exact >
               <HomePage sponsors={sponsorsList}/>
            </Route>

            <Route path="/aktualnosci">
               <News sponsors={sponsorsList}/>
            </Route>

            <Route path="/galeria">
               <Gallery sponsors={sponsorsList}/>
            </Route>

            <Route path="/onas">
               <About sponsors={sponsorsList}/>
            </Route>

            <Route path="/sponsorzy">
               <Sponsors sponsors={sponsorsList}/>
            </Route>

            <Route path="/wydarzenia">
               <Events sponsors={sponsorsList}/>
            </Route>

            <Route path="/zostan-wolontariuszem">
               <Volunteer sponsors={sponsorsList}/>
            </Route>
         </Switch>
      </div>
   );
};

export default ContentContainer;