import React, { useEffect } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import PhotoGallery from '../components/PhotoGallery';

import '../styles/Gallery.scss'

const Gallery = ({sponsors, photos}) => { 

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   return(
      <>
         <PhotoCarousel items={sponsors} />
         <PhotoGallery photos={photos}/>
      </>
   );
};

export default Gallery;