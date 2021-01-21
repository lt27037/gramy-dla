import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage'
import News from '../pages/News'
import Gallery from '../pages/Gallery'
import About from '../pages/About'
import Sponsors from '../pages/Sponsors'
import Events from '../pages/Events'
import Volunteer from '../pages/Volunteer'
import BecomSponsor from '../pages/BecomSponsor';

import '../styles/ContentContainer.scss'


const ContentContainer = () => {

   const [sponsors, setSponsors] = useState([]);
   const [sliders, setSliders] = useState([]);
   const [gallery, setGallery] = useState([]);
   const [posts, setPosts] = useState([]);

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
         const sponsorsUrl = 'https://picsum.photos/v2/list?page=2&limit=12';
         const slidersUrl = 'https://picsum.photos/v2/list?page=6&limit=3';
         const galleryUrl ='https://picsum.photos/v2/list?page=4&limit=99';
         const postsUrl = "https://jsonplaceholder.typicode.com/posts";
         getApiData(sponsorsUrl).then(data => setSponsors(data));
         getApiData(slidersUrl).then(data => setSliders(data));
         getApiData(galleryUrl).then(data => setGallery(data));
         getApiData(postsUrl).then(data => setPosts(data));
      }, []
   )

   return(
      <div className="container">
         <Switch>
            <Route path="/" exact >
               <HomePage sponsors={sponsors} sliders={sliders} posts={posts}/>
            </Route>

            <Route path="/aktualnosci">
               <News sponsors={sponsors} posts={posts}/>
            </Route>

            <Route path="/galeria">
               <Gallery sponsors={sponsors} photos={gallery}/>
            </Route>

            <Route path="/onas">
               <About />
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

            <Route path="/zostan-sponsorem">
               <BecomSponsor sponsors={sponsors}/>
            </Route>
         </Switch>
      </div>
   );
};

export default ContentContainer;