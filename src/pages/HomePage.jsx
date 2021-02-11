/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import PhotoCarousel from '../components/PhotoCarousel';
import PhotoSlider from '../components/PhotoSlider';
import ClosestEvent from '../components/ClosestEvent';
import BecomeVolunteer from '../components/BecomeVolunteer';
import PostShortcut from '../components/PostShortcut';

import '../styles/HomePage.scss'

const HomePage = ({sponsors, sliders, posts }) => {

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