import React, { useEffect, useState } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import PostShortcut from '../components/PostShortcut';

import '../styles/News.scss'

const News = ({sponsors, posts}) => {

   const [postElements, setPostElement] = useState([]);

   

   useEffect(
      () => {
         window.scrollTo(0, 0);
         const postsArr = posts[0].acf !== undefined ? posts.map((post) => <PostShortcut key={post.id} post={post}/>) : null ;
         setPostElement(postsArr) ;
      },
      []
   )

   return(
      <>
         <PhotoCarousel items={sponsors} /> 
         <h2 className="news__title">Aktualności</h2>
         <div className="news__postWrapper">
            {postElements.length !== 0 ? postElements : null}
         </div>
      </>
   );
};

export default News;