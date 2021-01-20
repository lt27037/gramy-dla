import React, { useEffect } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';

import '../styles/Events.scss'

const Events = ({sponsors}) => {

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   return(
      <>
         <PhotoCarousel items={sponsors} /> 
      </>
   );
};

export default Events;