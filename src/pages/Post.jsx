/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import handleFindLink from '../links';

import BecomeVolunteer from '../components/BecomeVolunteer';
import ClosestEvent from '../components/ClosestEvent';

import '../styles/Post.scss';

const Post = ({newsStore}) => {

   const [post, setPost] = useState(null);
   const history = useHistory();
   const endPoint = 'https://gramy-dla.herokuapp.com';

   // @ts-ignore
   const {id} = useParams();

   const handleBackClick = () => {
      const obj = {
         pathname: '/aktualnosci',
         postid: id,
      }

      history.push(obj);
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
         window.scrollTo(0, 0);

         if(newsStore?.length !== 0){
            let post = newsStore.filter(post => Number(post.id) === Number(id));
            setPost(...post);
            console.log('post ze stora');
         }else {
            let url = `${endPoint}/posts/${id}`
            getPosts(url).then(data => setPost(data));
            console.log('post z api');
         }
      },
      []
   )

   const zdj2 = post?.photo2 
      ? <img src={post.photo2.url} alt="Zdjęcie z posta 1" className="post__photo photo--second"/> 
      : null;
   const zdj3 = post?.photo3 
      ? <img src={post.photo3.url} alt="Zdjęcie z posta 1" className="post__photo photo--second"/> 
      : null;
   const text2 = post?.drugiParagraf 
      ? <p className="post__content content--second">{handleFindLink(post.drugiParagraf || null)}</p> 
      : null;
   const text3 = post?.trzeciParagraf 
      ? <p className="post__content content--second">{handleFindLink(post.trzeciParagraf || null)}</p> 
      : null;

   return (
      <>
      <div className="post">
         <div className="post__date">{post?.published_at.slice(0, 10)}</div>
         <h2 className="post__title">{post?.title}</h2>
         <img src={post?.mainPhoto.url} alt="Zdjęcie z posta 1" className="post__photo photo--first"/>
         <p className="post__content content--first">{handleFindLink(post?.pierwszyParagraf || null)}</p>
         {zdj2}
         {text2}
         {zdj3}
         {text3}
         <ClosestEvent />
         <BecomeVolunteer />
         <button className="button button--back" onClick={handleBackClick}>Wróć do aktualności</button>
      </div>
      </>
   );
};

export default Post;