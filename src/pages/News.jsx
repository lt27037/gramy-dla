import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PhotoCarousel from '../components/PhotoCarousel';
import PostShortcut from '../components/PostShortcut';

import '../styles/News.scss'

const News = ({sponsors, posts}) => {

   const [postElements, setPostElement] = useState([]);
   const [allPosts, setAllPosts] = useState([]);
   const [postsCounter, setPostsCounter] = useState(5);
   const [prevPost, setPrevPost] = useState(null);
   const [maxPostQuan, setMaxPostQuan] = useState(5);
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
            let url = `http://192.168.8.11:1337/posts?_start=${postsCounter-5}&_limit=${quantity}&_sort=published_at:DESC`
            // @ts-ignore
            getPosts(url).then(data => setAllPosts([...allPosts, ...data]))
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
         // @ts-ignore
         if(history.location.prevPost && history.location.prevQuantity){
            // @ts-ignore
            setPostsCounter(history.location.prevQuantity);
            // @ts-ignore
            setPrevPost(history.location.prevPost);
         }else {
            window.scrollTo(0, 0);
         }

         let postsQuantityUrl = 'http://192.168.8.11:1337/posts/count';
         getPosts(postsQuantityUrl).then(data => setMaxPostQuan(data))

      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
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

   const moreBtn = allPosts.length < maxPostQuan ? (
      <button className="button more--btn" onClick={handleCounterIncremence}>Załaduj więcej</button>
   ) : (
      <p className="allPosts">To już wszystkie wpisy</p>
   );
   
   return(
      <>
         <PhotoCarousel items={sponsors} /> 
         <h2 className="news__title">Aktualności</h2>
         <div className="news__postWrapper">
            {postElements}
         </div>
         {moreBtn}
      </>
   );
};

export default News;