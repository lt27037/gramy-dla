// @ts-nocheck
import React, { useState, useEffect } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import GalleryFolder from '../components/GalleryFolder';
import Loading from '../components/Loading';

import '../styles/Gallery.scss'

const Galleries = ({sponsors}) => { 

   const [galleries, setGalleries] = useState([])
   const [folders, setFolders] = useState([]);
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

         let url = `${endPoint}/galleries?_sort=published_at:DESC`
         getData(url).then(data => {setGalleries(data); setIsLoading(false)})
      },
      []
   )

   useEffect(
      () => {
         if(galleries.length){
            const folders = galleries.map(gallery => <GalleryFolder gallery={gallery} key={gallery.id}/>);
            setFolders(folders);
         }
      },
      [galleries]
   )

   return(
      <>
         <PhotoCarousel items={sponsors} />
         {isLoading ? <Loading marginTop="30vh"/> : <div className="FoldersBox">{folders}</div>}
      </>
   );
};

export default Galleries;