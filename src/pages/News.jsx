import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PhotoCarousel from '../components/PhotoCarousel';
import PostShortcut from '../components/PostShortcut';
import Loading from '../components/Loading';

import '../styles/News.scss'

const News = ({sponsors, posts}) => {

   const [postElements, setPostElement] = useState([]);
   const [allPosts, setAllPosts] = useState([]);
   const [postsCounter, setPostsCounter] = useState(5);
   const [maxPostQuan, setMaxPostQuan] = useState(5);
   const [isLoading, setIsLoading] = useState(true);
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
      if(allPosts.length !== maxPostQuan){
         setPostsCounter(postsCounter + 5);
         setIsLoading(true);
      }
   }

   const getPosts = async (url) => {
      try{
         const response = await fetch(url);
         const data = await response.json();
         return data;
      }catch(err){
         console.error(err);
      }
   }

   useEffect(
      () => {
         if(postsCounter){
            let quantity = 5;
            let url = `https://gramy-dla.herokuapp.com/posts?_start=${postsCounter-5}&_limit=${quantity}&_sort=published_at:DESC`
            // @ts-ignore
            getPosts(url).then(data => {setAllPosts([...allPosts, ...data]); setIsLoading(false)})
         }
      },
      [postsCounter]
   )

   useEffect(
      () => {
         // @ts-ignore
         setPostElement(allPosts.map(post => <PostShortcut key={post.id} post={post} click={handlePostClick}/> ));
      },
      [allPosts]
   )

   useEffect(
      () => {
         window.scrollTo(0, 0);

         let postsQuantityUrl = 'https://gramy-dla.herokuapp.com/posts/count';
         getPosts(postsQuantityUrl).then(data => {setMaxPostQuan(data);})

      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
   )

   const moreBtn = allPosts.length < maxPostQuan ? (
      <button className="button more--btn" onClick={handleCounterIncremence}>{isLoading ? 'Pobieranie...' : 'Załaduj więcej'}</button>
   ) : (
      <p className="allPosts">To już wszystkie wpisy</p>
   );
   
   return(
      <>
         <PhotoCarousel items={sponsors} /> 
         <h2 className="news__title">Aktualności</h2>
         {isLoading ? <Loading /> : null}
         <div className="news__postWrapper">
            {postElements}
         </div>
         {moreBtn}
      </>
   );
};

export default News;