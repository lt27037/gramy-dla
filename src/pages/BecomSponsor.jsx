import React, { useEffect } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';

import '../styles/BecomeSponsor.scss'

const BecomSponsor = ({sponsors, content}) => {

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   return(
      <>
         <PhotoCarousel items={sponsors} /> 
         <h3 className="become__title">{content?.acf?.title}</h3>
         <div className="become__wrapper">
            <div className="become__wrapper__leftBar">
               <h3 className="become__wrapper__leftBar__titleA">{content?.acf?.subtitle}</h3>
               <p className="become__wrapper__leftBar__text">{content?.acf?.text1}</p>
               <p className="become__wrapper__leftBar__text">{content?.acf?.text2}</p>
            </div>
            <div className="become__wrapper__rightBar">
               <h2 className="become__wrapper__rightBar__title">{content?.acf?.subtitle2}</h2>
               <div className="become__wrapper__rightBar__data">
                  
                  <span className="data__info">* DO DOKOŃCZENIA I KONSULTACJI *</span>
               </div>
            </div>
         </div>
      </>
   );
};

export default BecomSponsor;