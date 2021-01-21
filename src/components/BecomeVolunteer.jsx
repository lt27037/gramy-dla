import React from 'react'

import '../styles/BecomeVolunteer.scss';

const BecomeVolunteer = () => {
   return(
      <div className="becomeVolunteer">
         <h3 className="becomeVolunteer__title">Zostań wolontariuszem!</h3>
         <img src="https://picsum.photos/300/200" alt="Zdjęcie banera zostań wolontariuszem" className="becomeVolunteer__photo"/>
         <button className="button">Dołącz do nas!</button>
      </div>
   );
};

export default BecomeVolunteer;