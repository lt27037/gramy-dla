import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import '../styles/EventShortcut.scss';

let months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrzesnia', 'pazdziernika', 'listopada', 'grudnia'];

const EventShortcut = ({event}) => {

   const history = useHistory();

   const handleLinkClick = () => {
      let obj = {
         pathname: `wydarzenia/${event?.id}`
      }
      history.push(obj);
   }

   return(
      <div className="event">
         <div className="event__info">{`${event?.data}, ${event?.godzina?.slice(0, 5)}`}</div>
         <div className="event__title">{event?.nazwa_wydarzenia}</div>
         <img src={'http://192.168.8.11:1337'+event?.zdjecie1?.formats.small.url} alt="miniatura wydarzenia" className="event__photo"/>
         <button className="button" onClick={handleLinkClick}>Zobacz szczegóły</button>
      </div>
   );
};

export default EventShortcut;