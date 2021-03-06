/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom';

import PhotoGallery from '../components/PhotoGallery';

import { ReactComponent as BackArrow } from '../images/back-arrow.svg';
import Loading from '../components/Loading';

import {GalleryContext} from '../GalleryContext';

import '../styles/Gallery.scss'

const Gallery = () => {

   const {galleryStore} = useContext(GalleryContext);

   const params = useParams();
   const history = useHistory();

   const [gallery, setGallery] = useState();
   const [isLoading, setIsLoading] = useState(true);

   let endPoint = 'https://gramy-dla.herokuapp.com';

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

         if(Object.keys(galleryStore).length === 0){
            let url = `${endPoint}/galleries/${params.id}`
            getData(url).then(data => {setGallery(data); setIsLoading(false)})

         }else{
            let data = galleryStore.filter(gallery => Number(gallery.id) === Number(params.id))
            setGallery(...data);
            setIsLoading(false);
         }
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
         {isLoading ? <Loading marginTop="10vh"/> : null}
         {gallery?.photos ? <PhotoGallery photos={gallery.photos}/> : null}
      </>
   );
};

export default Gallery;