/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import PhotoCarousel from '../components/PhotoCarousel';
import PhotoSlider from '../components/PhotoSlider';
import ClosestEvent from '../components/ClosestEvent';
import GalleryWidget from '../components/GalleryWidget';
import BecomeVolunteer from '../components/BecomeVolunteer';
import PostShortcut from '../components/PostShortcut';

import '../styles/HomePage.scss'

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

const HomePage = ({sponsors, sliders, posts = [defaultPost], events, volunteer, gallery}) => {

   const history = useHistory();
   const [event, setEvent] = useState([]);

   const handlePostClick = (id) => {
      let obj = {
         pathname: `/aktualnosci/post/${id}`,
      }
      history.push(obj);
   }

   const handleNewsLinkClick = () => {
      let obj = {
         pathname: `/aktualnosci/`
      }
      history.push(obj);
   }


   // @ts-ignore
   const postsArr = posts.map((post) => <PostShortcut key={post.id} post={post} click={handlePostClick}/>);


   const lastPosts = postsArr.filter(post => postsArr.indexOf(post) < 5);

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   // sort method for events array
   useEffect(
      () => {
         let sortedEvents = events.sort((a, b) => {

            let arrA = a.acf.date.split('-');
            let arrB = b.acf.date.split('-');

            let yearA = arrA[2];
            let yearB = arrB[2];

            let monthA = arrA[1];
            let monthB = arrB[1];

            let dayA = arrA[0];
            let dayB = arrB[0];

            if(yearA - yearB === 0){
               if(monthA - monthB === 0){
                  if(dayA - dayB < 0){
                     return 1;
                  }else if(dayA - dayB > 0){
                     return -1
                  }else{
                     return 1
                  }
               }else if(monthA - monthB > 0){
                  return 1;
               }else if(monthA - monthB < 0){
                  return -1;
               }
            }else if(yearA - yearB < 0){
               return -1;
            }else {
               return 1;
            }
         })

         let year = new Date().getFullYear();
         let month = new Date().getMonth() + 1;
         let sorted = sortedEvents.filter(event => event.acf.date.slice(-4, event.acf.date.length) >= year &&  event.acf.date.slice(-7, -5) >= month );

         setEvent(sorted.length > 0 ? sorted[0] : null);

         
      },
      [events]
   )


   return(
      <>
         {sliders ? <PhotoSlider items={sliders}/> : null}
         <PhotoCarousel items={sponsors}/>
         <div className="homeBox">
            {event ? <ClosestEvent event={event} /> : null}
            <BecomeVolunteer photo={volunteer}/>
            {gallery ? <GalleryWidget photo={gallery} /> : null}
            <div className="homePostWrapper">
               <h3 className="homePostWrapper__title">Aktualności</h3>
               {lastPosts ? lastPosts : null}
               <button className="button" onClick={handleNewsLinkClick}>Zobacz więcej</button>
            </div>
         </div>
      </>
   );
};

export default HomePage;