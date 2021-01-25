import React from 'react'
import { useHistory } from 'react-router-dom';

import '../styles/BecomeVolunteer.scss';

const BecomeVolunteer = ({photo}) => {

   const history = useHistory();

   const handleClick = () => {
      history.push({pathname: '/zostan-wolontariuszem'});
   }

   return(
      <div className="becomeVolunteer">
         <h3 className="becomeVolunteer__title">Zostań wolontariuszem!</h3>
         <img src={photo} alt="Zdjęcie banera zostań wolontariuszem" className="becomeVolunteer__photo"/>
         <button className="button" onClick={handleClick}>Dołącz do nas!</button>
      </div>
   );
};

export default BecomeVolunteer;