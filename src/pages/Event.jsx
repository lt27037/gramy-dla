/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import BecomeVolunteer from '../components/BecomeVolunteer';
import Loading from '../components/Loading';
import handleFindLink from '../links';

import '../styles/Event.scss';

let months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrzesnia', 'pazdziernika', 'listopada', 'grudnia'];

const Event = () => {
   const params = useParams();
   const [event, setEvent] = useState();
   const [isLoading, setIsLoading] = useState(true);
   const endPoint = 'https://gramy-dla.herokuapp.com';

   const getEvent = async (url) => {
      try{
         const response = await fetch(url);
         const data = await response.json();
         return data;
      }catch(err){
         console.error(err);
      }
   }

   const handleDate = (input) => {
      let year = input.slice(0, 4);
      let day = input.slice(8, 10);
      let month = Number(input.slice(5, 7));
      let date = `${day} ${months[month-1]} ${year}`;

      return date;
   }

   useEffect(
      () => {
         const url = `${endPoint}/events/${params.id}`;
         getEvent(url).then(data => {setEvent(data); setIsLoading(false);});
      },
      []
   )

   const zdj2 = event?.zdjecie2 ? <img src={event?.zdjecie2.url} alt="Zdjęcie z Wydarzenia" className="event__wrapper__photo"/> : null;
   const text2 = event?.opis2 ? <p className="event__wrapper__text">{handleFindLink(event?.opis2 || null)}</p> : null;

   return (
      <>
         <div className="event__date">{event && handleDate(event.data)}</div>
         <div className="event__time">{event && event.godzina.slice(0, 5)}</div>
         <div className="event__place">{event?.miejsce}</div>
         <h2 className="event__title title--big">{event?.nazwa_wydarzenia}</h2>
         {isLoading ? <Loading /> : null}
         <div className="event__wrapper">
            {isLoading ? null : <p className="event__wrapper__text">{handleFindLink(event?.opis1 || null)}</p>}
            {isLoading ? null : <img src={event?.zdjecie1.url} alt="Zdjęcie w wydarzeniu" className="event__wrapper__photo"/>}
            {text2}
            {zdj2}
         </div>
         <div className="event__volunteerWrapper">
         {isLoading ? null : <BecomeVolunteer/>}
         </div>
      </>
   );
};

export default Event;