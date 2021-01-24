// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom';

import BecomeVolunteer from '../components/BecomeVolunteer';
import ClosestEvent from '../components/ClosestEvent';

import '../styles/Post.scss';

const Post = ({posts}) => {

   const [post, setPost] = useState({acf: undefined});
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
         <ClosestEvent />
         {zdj2}
         {text2}
         {zdj3}
         {text3}
         <BecomeVolunteer />
         <button className="button button--back" onClick={handleBackClick}>Wróć do aktualności</button>
      </div>
      </>
   );
};

export default Post;