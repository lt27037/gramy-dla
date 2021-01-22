import React from 'react'
import { useHistory } from 'react-router-dom';

import '../styles/BecomeVolunteer.scss';

const BecomeVolunteer = () => {

   const history = useHistory();

   const handleClick = () => {
      history.push({pathname: '/zostan-wolontariuszem'});
   }

   return(
      <div className="becomeVolunteer">
         <h3 className="becomeVolunteer__title">Zostań wolontariuszem!</h3>
         <img src="https://picsum.photos/300/200" alt="Zdjęcie banera zostań wolontariuszem" className="becomeVolunteer__photo"/>
         <button className="button" onClick={handleClick}>Dołącz do nas!</button>
      </div>
   );
};

export default BecomeVolunteer;