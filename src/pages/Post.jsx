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

   return (
      <>
      <div className="post">
         <div className="post__date">{acf?.datadodania}</div>
         <h2 className="post__title">{acf?.tytul}</h2>
         <img src={acf?.zdjecie} alt="Zdjęcie z posta 1" className="post__photo photo--first"/>
         <p className="post__content content--first">{acf?.tresc}</p>
         <ClosestEvent />
         <img src={acf?.zdjecie} alt="Zdjęcie z posta 1" className="post__photo photo--second"/>
         <p className="post__content content--second">{acf?.tresc}</p>
         <BecomeVolunteer />
         <button className="button button--back" onClick={handleBackClick}>Wróć do aktualności</button>
      </div>
      </>
   );
};

export default Post;