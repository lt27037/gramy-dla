import React, { useEffect, useState } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import ContactForm from '../components/ContactForm';

import '../styles/BecomeSponsor.scss'

const BecomSponsor = ({sponsors}) => {

   const [content, setContent ] = useState();

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

         let url = `${endPoint}/zostan-sponsorem`;
         getData(url).then(data => setContent(data))
      },
      []
   )

   return(
      <>
         <PhotoCarousel items={sponsors} /> 
         <h3 className="become__title">{content?.title}</h3>
         <div className="become__wrapper">
            <div className="become__wrapper__leftBar">
               <h3 className="become__wrapper__leftBar__titleA">{content?.subtitle}</h3>
               <p className="become__wrapper__leftBar__text">{content?.text1}</p>
               <p className="become__wrapper__leftBar__text">{content?.text2}</p>
            </div>
            <div className="become__wrapper__rightBar">
               <h2 className="become__wrapper__rightBar__title">{content?.contactTitle}</h2>
               <div className="become__wrapper__rightBar__data">
                  <ContactForm subject={'Chęć wesprzeć stowarzyszenie'}/>
               </div>
            </div>
         </div>
      </>
   );
};

export default BecomSponsor;