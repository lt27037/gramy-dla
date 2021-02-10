// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import '../styles/BecomeVolunteer.scss';

const BecomeVolunteer = () => {

   const history = useHistory();
   const [content, setContent] = useState();

   const handleClick = () => {
      history.push({pathname: '/zostan-wolontariuszem'});
   }

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
         let url = `${endPoint}/zostan-wolontariuszem`;
         getData(url).then(data => setContent(data))
      },
      []
   )


   return(
      <div className="becomeVolunteer">
         <h3 className="becomeVolunteer__title">{content?.title}</h3>
         <img src={content?.photo?.formats.small.url} alt="Zdjęcie banera zostań wolontariuszem" className="becomeVolunteer__photo"/>
         <button className="button" onClick={handleClick}>Dołącz do nas!</button>
      </div>
   );
};

export default BecomeVolunteer;