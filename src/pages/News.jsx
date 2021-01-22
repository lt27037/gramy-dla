import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PhotoCarousel from '../components/PhotoCarousel';
import PostShortcut from '../components/PostShortcut';

import '../styles/News.scss'

const News = ({sponsors, posts}) => {

   const [postElements, setPostElement] = useState([]);
   const [postsCounter, setPostsCounter] = useState(5);
   const history = useHistory();

   const handlePostClick = (id) => {
      let obj = {
         pathname: `/aktualnosci/post/${id}`,
      }
      history.push(obj);
   }

   const handleCounterIncremence = () => {
      setPostsCounter(postsCounter + 5);
   }

   useEffect(
      () => {
         window.scrollTo(0, 0);
         const postsArr = posts[0]?.acf !== undefined ? posts.map((post) => <PostShortcut key={post.id} post={post} click={handlePostClick}/> ) : null ;
         setPostElement(postsArr) ;
      },
      [posts]
   )

   let displayPosts = postElements?.filter(post => postElements.indexOf(post) < postsCounter);
   
   const morePostsButton = displayPosts?.length === postElements?.length ? null : (
      <button className="button more--btn" onClick={handleCounterIncremence}>Załaduj więcej</button>
   );

   console.log(posts);

   return(
      <>
         <PhotoCarousel items={sponsors} /> 
         <h2 className="news__title">Aktualności</h2>
         <div className="news__postWrapper">
            {displayPosts?.length !== 0 ? displayPosts : null}
         </div>
         {morePostsButton}
      </>
   );
};

export default News;