import React, { useEffect } from 'react'

import PhotoCarousel from '../components/PhotoCarousel'; 
import ContactForm from '../components/ContactForm';

import '../styles/Volunteer.scss'

const Volunteer = ({sponsors, content}) => {

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   console.log(content);


   return(
      <>
         <PhotoCarousel items={sponsors} />
         <h2 className="volunteer__title">{content?.acf?.title}</h2>
         <p className="volunteer__text">{content?.acf?.text1}</p>
         <img src={content?.acf.photo1} alt="Zdjęcie wolontariuszy stowarzyszenia" className="volunteer__photo"/>
         <p className="volunteer__text">{content?.acf?.text2}</p>
         <h2 className="volunteer__title">Skontaktuj się z nami!</h2>
         <div className="formWrapper">
            <ContactForm subject={'Chęć przyłączenia się do wolontariatu'}/>
         </div>
      </>
   );
};

export default Volunteer;