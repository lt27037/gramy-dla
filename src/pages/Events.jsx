import React from 'react'

import PhotoCarousel from '../components/PhotoCarousel';

import '../styles/Events.scss'

const Events = ({sponsors}) => {
   return(
      <>
         <PhotoCarousel items={sponsors} /> 
      </>
   );
};

export default Events;