import React from 'react'

import PhotoCarousel from '../components/PhotoCarousel';

import '../styles/Gallery.scss'

const Gallery = ({sponsors}) => {
   return(
      <>
         <PhotoCarousel items={sponsors} /> 
      </>
   );
};

export default Gallery;