/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';

import PhotoGallery from '../components/PhotoGallery';

import { ReactComponent as BackArrow } from '../images/back-arrow.svg';

import '../styles/Gallery.scss'

const Gallery = () => { 

   const params = useParams();
   const history = useHistory();

   const [gallery, setGallery] = useState();

   let endPoint = 'http://192.168.8.11:1337';

   const getData = async (url) => {
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

         let url = `${endPoint}/galleries/${params.id}`
         getData(url).then(data => setGallery(data))
      },
      []
   )

   const handleClick = () => {
      history.push({pathname: '/galeria'})
   }

   return(
      <>
         <div className="galleryHeader">
            <BackArrow className="backArrow" onClick={handleClick}/>
            <div className="galleryHeader__date">{gallery?.published_at.slice(0, 10)}</div>
            <div className="galleryHeader__title">{gallery?.title}</div>
         </div> 
         {gallery?.photos ? <PhotoGallery photos={gallery.photos}/> : null}
      </>
   );
};

export default Gallery;