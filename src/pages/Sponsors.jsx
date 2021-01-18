import React from 'react'
import { useHistory } from 'react-router-dom';

import SponsorProfile from '../components/SponsorProfile';

import '../styles/Sponsors.scss'

const Sponsors = ({sponsors}) => {

   const sponsorLink = `https://picsum.photos/id/`;

   const sponsorsList = sponsors.map(({author, id}) => (
      <SponsorProfile src={`${sponsorLink}${id}/300.webp`} alt={`Zdjęcie profilowe sponsora ${author}.`} name={author} key={id}  />
   ))

   const history = useHistory();

   const handleClick = () => {
      const pathObj = {
         pathname: '/zostan-sponsorem',
      }
      history.push(pathObj);
   }

   return(
      <div className="sponsors">
         <h2 className="sponsors__title"> Serdecznie dziękujemy wszystkim którzy wspierają nasze działania!</h2>
         <p className="sponsors__italic">Nie liczy się to ile posiadasz, ale ile dajesz innym i jak się z nimi dzielisz. Pomagając innym pomagasz i sobie. Starajcie się zostawić ten świat choć trochę lepszym, niż go zastaliście.</p>
         <div className="sponsors__profilesWrapper">
            {sponsorsList}
         </div>
         <button className="button" onClick={handleClick}>Zostań Sponsorem</button>
      </div>
   );
};

export default Sponsors;