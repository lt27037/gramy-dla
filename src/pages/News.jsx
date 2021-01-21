import React, { useEffect } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import PostShortcut from '../components/PostShortcut';

import '../styles/News.scss'

const News = ({sponsors, posts}) => {

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )


   return(
      <>
         <PhotoCarousel items={sponsors} /> 
         <h2 className="news__title">Aktualności</h2>
         <div className="news__postWrapper">
            <PostShortcut post={posts[1]}/>
            <PostShortcut post={posts[2]}/>
            <PostShortcut post={posts[3]}/>
            <PostShortcut post={posts[4]}/>
            <PostShortcut post={posts[5]}/>
         </div>
      </>
   );
};

export default News;