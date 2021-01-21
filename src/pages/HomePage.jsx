import React, { useEffect, useState } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import PhotoSlider from '../components/PhotoSlider';
import ClosestEvent from '../components/ClosestEvent';
import BecomeVolunteer from '../components/BecomeVolunteer';
import PostShortcut from '../components/PostShortcut';

import '../styles/HomePage.scss'

const HomePage = ({sponsors, sliders, posts}) => {

   const [postElements, setPostElement] = useState([]);

   useEffect(
      () => {
         window.scrollTo(0, 0);
         const postsArr = posts.map((post) => <PostShortcut key={post.id} post={post}/>);
         const lastestPosts = [postsArr[0], postsArr[1], postsArr[2], postsArr[3], postsArr[4]];
         setPostElement(lastestPosts);
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
               {postElements.length !== 0 ? postElements : null}
               <button className="button">Zobacz więcej</button>
            </div>
         </div>
      </>
   );
};

export default HomePage;