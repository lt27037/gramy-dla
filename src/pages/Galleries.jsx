// @ts-nocheck
import React, { useState, useEffect } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import GalleryFolder from '../components/GalleryFolder';

import '../styles/Gallery.scss'

const Galleries = ({sponsors}) => { 

   const [galleries, setGalleries] = useState([])
   const [folders, setFolders] = useState([]);

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

         let url = `${endPoint}/galleries`
         getData(url).then(data => setGalleries(data))
      },
      []
   )

   useEffect(
      () => {
         if(galleries){
            const folders = galleries.map(gallery => <GalleryFolder gallery={gallery} key={gallery.id}/>);
            setFolders(folders);
         }
      },
      [galleries]
   )

   return(
      <>
         <PhotoCarousel items={sponsors} />
         <div className="FoldersBox">
            {folders}
         </div>
      </>
   );
};

export default Galleries;