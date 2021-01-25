import React from 'react'

import EventShortcut from './EventShortcut';

import '../styles/ClosestEvent.scss';

const ClosestEvent = ({event}) => {

   return(
      <div className="closestEvent">
         <h3 className="closestEvent__title">Najbliższe wydażenie</h3>
         <EventShortcut event={event}/>

      </div>
   );
};

export default ClosestEvent;