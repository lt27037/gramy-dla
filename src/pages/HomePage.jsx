import React, { useEffect } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import PhotoSlider from '../components/PhotoSlider';
import ClosestEvent from '../components/ClosestEvent';
import BecomeVolunteer from '../components/BecomeVolunteer';
import PostShortcut from '../components/PostShortcut';

import '../styles/HomePage.scss'

const HomePage = ({sponsors, sliders, posts}) => {

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   return(
      <>
         <PhotoSlider items={sliders}/>
         <PhotoCarousel items={sponsors}/>
         <div className="homeBox">
            <ClosestEvent />
            <BecomeVolunteer />
            <div className="someOvject">
               *Tu będzie kalendarz lub coś innego*
            </div>
            <div className="homePostWrapper">
               <h3 className="homePostWrapper__title">Aktualności</h3>
               <PostShortcut post={posts[1]}/>
               <PostShortcut post={posts[2]}/>
               <PostShortcut post={posts[3]}/>
               <PostShortcut post={posts[4]}/>
               <PostShortcut post={posts[5]}/>
               <button className="button">Zobacz więcej</button>
            </div>
         </div>
      </>
   );
};

export default HomePage;