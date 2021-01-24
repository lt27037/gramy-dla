import React, { useEffect, useState } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import EventShortcut from "../components/EventShortcut";

import '../styles/Events.scss'


const Events = ({sponsors, events}) => {

   const [eventsArr, setEventsArr] = useState([]);

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   useEffect(
      () => {
         let sortedEvents = events.sort((a, b) => {

            let arrA = a.acf.date.split('-');
            let arrB = b.acf.date.split('-');

            let yearA = arrA[2];
            let yearB = arrB[2];

            let monthA = arrA[1];
            let monthB = arrB[1];

            let dayA = arrA[0];
            let dayB = arrB[0];

            if(yearA - yearB === 0){
               if(monthA - monthB === 0){
                  if(dayA - dayB < 0){
                     return 1;
                  }else if(dayA - dayB > 0){
                     return -1
                  }else{
                     return 1
                  }
               }else if(monthA - monthB > 0){
                  return 1;
               }else if(monthA - monthB < 0){
                  return -1;
               }
            }else if(yearA - yearB < 0){
               return -1;
            }else {
               return 1;
            }
         })

         let year = new Date().getFullYear();
         let month = new Date().getMonth() + 1;
         setEventsArr(sortedEvents.filter(event => event.acf.date.slice(-4, event.acf.date.length) >= year &&  event.acf.date.slice(-7, -5) >= month ))

         
      },
      [events]
   )

   let eventsShortcutList = eventsArr.length !== 0 ? eventsArr.map(event => <EventShortcut key ={event.id} event={event}/>) : null ;

   return(
      <>
         <PhotoCarousel items={sponsors} />
         <div className="eventsWrapper">
            {eventsShortcutList}
         </div>
      </>
   );
};

export default Events;