import React from 'react'

import PhotoCarousel from '../components/PhotoCarousel';

import '../styles/News.scss'

const News = ({sponsors}) => {
   return(
      <>
         <PhotoCarousel items={sponsors} /> 
      </>
   );
};

export default News;