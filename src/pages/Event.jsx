/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import BecomeVolunteer from '../components/BecomeVolunteer';

import '../styles/Event.scss';

const Event = ({events, volunteer}) => {

   const params = useParams();
   const [event, setEvent] = useState();

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
         window.scrollTo(0, 0);

         let url = `${endPoint}/events/${params.id}`
         getEvent(url).then(data => setEvent(data))

      },
      []
   )

   const zdj2 = event?.zdjecie2 ? <img src={event?.zdjecie2.url} alt="Zdjęcie z Wydarzenia" className="event__wrapper__photo"/> : null;
   const text2 = event?.opis2 ? <p className="event__wrapper__text">{event?.opis2}</p> : null;

   return (
      <>
         <div className="event__date">{event?.data}, {event?.godzina.slice(0, 5)}</div>
         <div className="event__place">{event?.miejsce}</div>
         <h2 className="event__title title--big">{event?.nazwa_wydarzenia}</h2>
         <div className="event__wrapper">
            <p className="event__wrapper__text">{event?.opis1}</p>
            <img src={event?.zdjecie1.url} alt="Zdjęcie w wydarzeniu" className="event__wrapper__photo"/>
            {text2}
            {zdj2}
         </div>
         <div className="event__volunteerWrapper">
         <BecomeVolunteer photo={volunteer}/>
         </div>
      </>
   );
};

export default Event;