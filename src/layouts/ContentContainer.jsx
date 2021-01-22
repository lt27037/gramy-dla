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


const defaultSponsor = {
   id: 114,
   acf: {
     name: "Kenneth Thewissen",
     url: "https://gora1234.webd.pro/wp-content/uploads/2021/01/sponsor8-e1611231798666.jpg",
     miniurl: "https://gora1234.webd.pro/wp-content/uploads/2021/01/sponsor8-e1611231798666.jpg"
   }
};

const defaultPost = {
   id: 198,
   acf: {
      tytul: "Trzyma obyczajem pańskim i psy tuż nad niego",
      tresc: "Pas taki można wydrukować wszystkie dzienne rachunki przezierać nareszcie rzekł do swawoli. Z kim on je napełnił myślami. Po cóż kłócić się pan Podkomorzy i ust nie ma jutro sam oczu nie ma albo szablą robić. Wiedział, że dziś nagodzi do spoczynku. Starsi i pannom służyło. Sędzia, z woźnym Protazym ze żniwa i już robił projekt, że przymiotów jego pamięć droga do afektów i zwycięzca, wydartych potomkom Cezarów rzucił w niebo, miecz oburącz trzyma.",
      zajawka: "Pas taki można wydrukować wszystkie dzienne rachunki przezierać nareszcie rzekł do swawoli. Z kim on",
      datadodania: "21 stycznia 2021, 15:06:58",
      zdjecie: "https://gora1234.webd.pro/wp-content/uploads/2021/01/post8-min.jpg",
      zdjeciemini: false
    }
};

// const defaultSlider = {
//    id: 162,
//    acf: {
//      title: "Lorem ipsum",
//      content: "Lorerm ipsum sit ament!",
//      zdjecie: "https://gora1234.webd.pro/wp-content/uploads/2021/01/slider3-min.jpg",
//      zdjeciemini: "https://gora1234.webd.pro/wp-content/uploads/2021/01/slider3-mini-min.jpg"
//    }
//  };

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

   console.log('rerender! aktualny stan pobierania z api: '+sliders.length);

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