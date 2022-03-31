import React, { useEffect } from 'react';

import PhotoCarousel from '../components/PhotoCarousel';
import EventShortcut from "../components/EventShortcut";

import '../styles/Events.scss';

const Events = ({sponsors, events}) => {
   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   const eventsShortcutList =  events?.map(event => <EventShortcut key ={event.id} event={event}/>);

   return(
      <>
         <PhotoCarousel items={sponsors} />
         <div className="eventsWrapper">
           {eventsShortcutList.length ? (
             eventsShortcutList
           ) : (
             <p className={'empty'}>Aktualnie brak wydarzeń.</p>
           )}
         </div>
      </>
   );
};

export default Events;