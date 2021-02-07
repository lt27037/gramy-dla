/* eslint-disable array-callback-return */
// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom';

import BecomeVolunteer from '../components/BecomeVolunteer';
import ClosestEvent from '../components/ClosestEvent';

import '../styles/Post.scss';

const Post = ({posts, events, volunteer}) => {

   const [post, setPost] = useState(null);
   const [event, setEvent] = useState({acf: undefined});
   const location = useLocation();
   const history = useHistory();

   let endPoint = 'http://192.168.8.11:1337';

   // @ts-ignore
   let {id} = useParams();

   const handleBackClick = () => {
      let postsQuantity = location.postsCounter;
      let postId = id;

      const obj = {
         pathname: '/aktualnosci',
         prevPost: postId,
         prevQuantity: postsQuantity,
      }

      history.push(obj);
   }

   const postArr = posts?.filter(post => post.id === Number(id));

   useEffect(
      () => {
         let sortedEvents = events.sort((a, b) => {

            let arrA = a.acf.date.split('-');
            let arrB = b.acf.date.split('-');

            let yearA = arrA[2];
            let yearB = arrB[2];

            let monthA = arrA[1];
            let monthB = arrB[1];

            let dayA = arrA[0];
            let dayB = arrB[0];

            if(yearA - yearB === 0){
               if(monthA - monthB === 0){
                  if(dayA - dayB < 0){
                     return 1;
                  }else if(dayA - dayB > 0){
                     return -1
                  }else{
                     return 1
                  }
               }else if(monthA - monthB > 0){
                  return 1;
               }else if(monthA - monthB < 0){
                  return -1;
               }
            }else if(yearA - yearB < 0){
               return -1;
            }else {
               return 1;
            }
         })

         let year = new Date().getFullYear();
         let month = new Date().getMonth() + 1;
         let sorted = sortedEvents.filter(event => event.acf.date.slice(-4, event.acf.date.length) >= year &&  event.acf.date.slice(-7, -5) >= month );

         setEvent(sorted.length > 0 ? sorted[0] : null);

      },
      [events]
   )




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

         let url = `${endPoint}/posts/${id}`
         getPosts(url).then(data => setPost(data));
      },
      []
   )

   const zdj2 = post?.photo2 ? <img src={endPoint+post.photo2.url} alt="Zdjęcie z posta 1" className="post__photo photo--second"/> : null;
   const zdj3 = post?.photo3 ? <img src={endPoint+post.photo3.url} alt="Zdjęcie z posta 1" className="post__photo photo--second"/> : null;
   const text2 = post?.drugiParagraf ? <p className="post__content content--second">{post.drugiParagraf}</p> : null;
   const text3 = post?.trzeciParagraf ? <p className="post__content content--second">{post.trzeciParagraf}</p> : null;

   return (
      <>
      <div className="post">
         <div className="post__date">{post?.published_at.slice(0, 10)}</div>
         <h2 className="post__title">{post?.title}</h2>
         <img src={endPoint+post?.mainPhoto.url} alt="Zdjęcie z posta 1" className="post__photo photo--first"/>
         <p className="post__content content--first">{post?.pierwszyParagraf}</p>
         {event ? <ClosestEvent event={event} /> : null}
         {zdj2}
         {text2}
         {zdj3}
         {text3}
         <BecomeVolunteer photo={volunteer}/>
         <button className="button button--back" onClick={handleBackClick}>Wróć do aktualności</button>
      </div>
      </>
   );
};

export default Post;