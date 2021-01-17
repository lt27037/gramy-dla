import React from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import PhotoSlider from '../components/PhotoSlider';

import '../styles/HomePage.scss'

const HomePage = ({sponsors, sliders}) => {
   return(
      <>
         <PhotoSlider items={sliders}/>
         <PhotoCarousel items={sponsors}/>
      </>
   );
};

export default HomePage;