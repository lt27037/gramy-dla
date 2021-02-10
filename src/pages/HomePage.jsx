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
   const [postShortcuts, setPostShortcuts] = useState([]);



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

   useEffect(
      () => {
         let postsArr = posts.map((post) => <PostShortcut key={post.id} post={post} click={handlePostClick}/>);
         // @ts-ignore
         setPostShortcuts(postsArr.filter(post => postsArr.indexOf(post) < 5))
      },
      [posts]
   )

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   return(
      <>
         {sliders ? <PhotoSlider items={sliders}/> : null}
         <PhotoCarousel items={sponsors}/>
         <div className="homeBox">
            <ClosestEvent />
            <BecomeVolunteer/>
            {gallery ? <GalleryWidget photo={gallery} /> : null}
            <div className="homePostWrapper">
               <h3 className="homePostWrapper__title">Aktualności</h3>
               {postShortcuts ? postShortcuts : null}
               <button className="button" onClick={handleNewsLinkClick}>Zobacz więcej</button>
            </div>
         </div>
      </>
   );
};

export default HomePage;