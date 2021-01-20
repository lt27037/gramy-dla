import React, { useEffect } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import PhotoSlider from '../components/PhotoSlider';

import '../styles/HomePage.scss'

const HomePage = ({sponsors, sliders}) => {

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   return(
      <>
         <PhotoSlider items={sliders}/>
         <PhotoCarousel items={sponsors}/>
      </>
   );
};

export default HomePage;