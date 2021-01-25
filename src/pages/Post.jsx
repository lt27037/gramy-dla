/* eslint-disable array-callback-return */
// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom';

import BecomeVolunteer from '../components/BecomeVolunteer';
import ClosestEvent from '../components/ClosestEvent';

import '../styles/Post.scss';

const Post = ({posts, events, volunteer}) => {

   const [post, setPost] = useState({acf: undefined});
   const [event, setEvent] = useState({acf: undefined});
   const location = useLocation();
   const history = useHistory();

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
         setPost(postArr.length !== 0 ? postArr[0] : {acf: undefined})
      },
      [postArr]
   );

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

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   const {acf} = post;

   const zdj2 = acf?.zdjecie2 ? <img src={acf?.zdjecie2} alt="Zdjęcie z posta 1" className="post__photo photo--second"/> : null;
   const zdj3 = acf?.zdjecie3 ? <img src={acf?.zdjecie3} alt="Zdjęcie z posta 1" className="post__photo photo--second"/> : null;
   const text2 = acf?.tresc2 ? <p className="post__content content--second">{acf?.tresc2}</p> : null;
   const text3 = acf?.tresc3 ? <p className="post__content content--second">{acf?.tresc3}</p> : null;

   return (
      <>
      <div className="post">
         <div className="post__date">{acf?.datadodania}</div>
         <h2 className="post__title">{acf?.tytul}</h2>
         <img src={acf?.zdjecie1} alt="Zdjęcie z posta 1" className="post__photo photo--first"/>
         <p className="post__content content--first">{acf?.tresc1}</p>
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