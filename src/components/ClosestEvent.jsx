import React, { useState, useEffect } from 'react'

import EventShortcut from './EventShortcut';

import '../styles/ClosestEvent.scss';

const ClosestEvent = () => {

   const [event, setEvent] = useState([null]);

   let endPoint = 'http://192.168.8.11:1337';

   const getEvent = async (url) => {
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
         let url = `${endPoint}/events?_limit=1&_sort=data:ASC`;
         getEvent(url).then(data => setEvent(data));

      },
      []
   )

   console.log(event);

   return(
      <div className="closestEvent">
         <h3 className="closestEvent__title">Najbliższe wydażenie</h3>
         {event ? <EventShortcut event={event[0]}/> : null}

      </div>
   );
};

export default ClosestEvent;