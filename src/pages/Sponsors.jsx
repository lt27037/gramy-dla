/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import SponsorProfile from '../components/SponsorProfile';

import '../styles/Sponsors.scss'

const Sponsors = ({sponsors}) => {

   const [sponsorsList, setSponsorsList] = useState();
   const [contentElements, setSContentElements] = useState({naglowek: null, cytat: null, autor_cytatu: null});

   let endPoint = 'https://gramy-dla.herokuapp.com';

   useEffect(
      () => {
         setSponsorsList(sponsors.map(sponsor => (
            <SponsorProfile src={sponsor.photo.url} alt={`Zdjęcie profilowe sponsora ${sponsor.name}.`} name={sponsor.name} key={sponsor.id}  />
         )))

      },
      [sponsors]
   )

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

         let url = `${endPoint}/sponsorzy`;
         getData(url).then(data => setSContentElements(data))
      },
      []
   )

   const history = useHistory();

   const handleClick = () => {
      const pathObj = {
         pathname: '/zostan-sponsorem',
      }
      history.push(pathObj);
   }

   return(
      <div className="sponsors">
         <h2 className="sponsors__title">{contentElements?.naglowek}</h2>
         <p className="sponsors__italic">
            {contentElements.cytat}
            <span className="sponsors__italic__author">{contentElements?.autor_cytatu}</span>
         </p>
         <div className="sponsors__profilesWrapper">
            {sponsorsList}
         </div>
         <button className="button" onClick={handleClick}>Zostań Sponsorem</button>
      </div>
   );
};

export default Sponsors;