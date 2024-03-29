/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import EventShortcut from './EventShortcut';
import Loading from '../components/Loading';

import '../styles/ClosestEvent.scss';

const ClosestEvent = () => {

   const [event, setEvent] = useState([null]);

   let endPoint = 'https://gramy-dla.herokuapp.com';

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

   return(
      <div className="closestEvent">
         <h3 className="closestEvent__title">Najbliższe wydarzenie</h3>
         {event[0] ? <EventShortcut event={event[0]}/> : <Loading marginTop={100}/>}
      </div>
   );
};

export default ClosestEvent;