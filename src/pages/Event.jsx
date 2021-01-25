// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import BecomeVolunteer from '../components/BecomeVolunteer';

import '../styles/Event.scss';

const Event = ({events, volunteer}) => {

   const [event, setEvent] = useState(null);
   const params = useParams();

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   useEffect(
      () => {
         let event = events?.filter(event => Number(event.id) === Number(params.id));
         setEvent(...event);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [events]
   )

   const zdj2 = event?.acf?.photo2 ? <img src={event?.acf?.photo2} alt="Zdjęcie z Wydarzenia" className="event__wrapper__photo"/> : null;
   const text2 = event?.acf?.text2 ? <p className="event__wrapper__text">{event?.acf?.text2}</p> : null;
   const text3 = event?.acf?.text3 ? <p className="event__wrapper__text">{event?.acf?.text3}</p> : null;

   return (
      <>
         <div className="event__date">{event?.acf?.date}, {event?.acf?.time}</div>
         <div className="event__place">{event?.acf?.place}</div>
         <h2 className="event__title title--big">{event?.acf?.title}</h2>
         <div className="event__wrapper">
            <p className="event__wrapper__text">{event?.acf?.text1}</p>
            <img src={event?.acf?.photo1} alt="Zdjęcie w wydarzeniu" className="event__wrapper__photo"/>
            {text2}
            {zdj2}
            {text3}
         </div>
         <div className="event__volunteerWrapper">
         <BecomeVolunteer photo={volunteer}/>
         </div>
      </>
   );
};

export default Event;