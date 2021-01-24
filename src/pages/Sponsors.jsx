import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import SponsorProfile from '../components/SponsorProfile';

import '../styles/Sponsors.scss'

const Sponsors = ({sponsors, content}) => {

   const [sponsorsList, setSponsorsList] = useState();
   const [contentElements, setSContentElements] = useState({});

   useEffect(
      () => {
         setSponsorsList(sponsors.map(({id, acf}) => (
            <SponsorProfile src={acf.url} alt={`Zdjęcie profilowe sponsora ${acf.name}.`} name={acf.name} key={id}  />
         )))

         setSContentElements(content?.acf);
      },
      [sponsors, content]
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
         <h2 className="sponsors__title">{contentElements?.tytul}</h2>
         <p className="sponsors__italic">{contentElements?.cytat}</p>
         <div className="sponsors__profilesWrapper">
            {sponsorsList}
         </div>
         <button className="button" onClick={handleClick}>Zostań Sponsorem</button>
      </div>
   );
};

export default Sponsors;