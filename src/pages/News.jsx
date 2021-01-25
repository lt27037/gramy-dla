import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PhotoCarousel from '../components/PhotoCarousel';
import PostShortcut from '../components/PostShortcut';

import '../styles/News.scss'

const News = ({sponsors, posts}) => {

   const [postElements, setPostElement] = useState([]);
   const [postsCounter, setPostsCounter] = useState(5);
   const [prevPost, setPrevPost] = useState(null);
   const history = useHistory();



   const handlePostClick = (id) => {

      let quantity = document.querySelectorAll('.postShortcut').length;
      let counter = Math.floor(quantity/5)*5 + (quantity % 5 === 0 ? 0 : quantity % 5);

      let obj = {
         pathname: `/aktualnosci/post/${id}`,
         postsCounter: counter,
      }
      history.push(obj);
   }

   const handleCounterIncremence = () => {
      setPostsCounter(postsCounter + 5);
   }

   useEffect(
      () => {
         
         const postsArr = posts[0]?.acf !== undefined ? posts.map(post => <PostShortcut key={post.id} post={post} click={handlePostClick}/> ) : null ;
         setPostElement(postsArr) ;

         // @ts-ignore
         if(history.location.prevPost && history.location.prevQuantity){
            // @ts-ignore
            setPostsCounter(history.location.prevQuantity);
            // @ts-ignore
            setPrevPost(history.location.prevPost);
         }else {
            window.scrollTo(0, 0);
         }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [posts]
   )

   useEffect(
      () => {
         if(prevPost){
            // @ts-ignore
            document.getElementById(`post${prevPost}`)?.scrollIntoView();
         }
      },
      [prevPost]
   )

   let displayPosts = postElements?.filter(post => postElements.indexOf(post) < postsCounter);
   
   const morePostsButton = displayPosts?.length === postElements?.length ? null : (
      <button className="button more--btn" onClick={handleCounterIncremence}>Załaduj więcej</button>
   );

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