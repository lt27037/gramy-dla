import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../pages/About';
import BecomSponsor from '../pages/BecomSponsor';
import Events from '../pages/Events';
import Gallery from '../pages/Gallery';
import HomePage from '../pages/HomePage';
import News from '../pages/News';
import Post from '../pages/Post';
import Sponsors from '../pages/Sponsors';
import Volunteer from '../pages/Volunteer';

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
         const endPoint = "https://gora1234.webd.pro/wp-json/acf/v3/posts?categories"
         const sponsorsUrl = `${endPoint}=2`;
         const slidersUrl = `${endPoint}=3`;
         const postsUrl = `${endPoint}=4`;
         const galleryUrl ='https://picsum.photos/v2/list?page=4&limit=99';
         getApiData(sponsorsUrl).then(data => setSponsors(data));
         getApiData(slidersUrl).then(data => setSliders(data));
         getApiData(postsUrl).then(data => setPosts(data));
         getApiData(galleryUrl).then(data => setGallery(data));
      }, []
   )

   return(
      <div className="container">
         <Switch>
            <Route path="/" exact >
               <HomePage sponsors={sponsors} sliders={sliders} posts={posts}/>
            </Route>

            <Route path="/aktualnosci" exact>
               <News sponsors={sponsors} posts={posts}/>
            </Route>

            <Route path="/aktualnosci/post/:id">
               <Post posts={posts}/>
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