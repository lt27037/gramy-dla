import React, { useState, useEffect } from 'react'

import PhotoCarousel from '../components/PhotoCarousel'; 
import ContactForm from '../components/ContactForm';

import axios from 'axios';

import '../styles/Volunteer.scss'

const Volunteer = ({sponsors}) => {

   const [content, setContent] = useState(null);


   let endPoint = 'http://192.168.8.11:1337';

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

         let dataJson = {
            "subject": "kurwa działa :O",
            "body": "eluwina"
           }

         let url = `${endPoint}/wolontariusz-strona`
         getData(url).then(data => setContent(data))

         putData(`${endPoint}/formularzs/custom`, dataJson)
            .then(response => console.log(response))

      },
      []
   )

   const putData = async (url, data) => {
      await axios({
         method: 'POST',
         url,
         data,
      })
   }


   return(
      <>
         <PhotoCarousel items={sponsors} />
         <h2 className="volunteer__title">{content?.title}</h2>
         <p className="volunteer__text">{content?.text1}</p>
         <img src={endPoint+content?.photo.url} alt="Zdjęcie wolontariuszy stowarzyszenia" className="volunteer__photo"/>
         <p className="volunteer__text">{content?.text2}</p>
         <h2 className="volunteer__title">Skontaktuj się z nami!</h2>
         <div className="formWrapper">
            <ContactForm subject={'Chęć przyłączenia się do wolontariatu'}/>
         </div>
      </>
   );
};

export default Volunteer;