import React from 'react'

import EventShortcut from './EventShortcut';

import '../styles/ClosestEvent.scss';

const eventsSecond = [
   {
      id: 1,
      date: '11.01.2021',
      time: '19:00',
      title: 'Gramy dla Anny',
      thumbnail: 'https://picsum.photos/id/102/400/300',
   },
];

const ClosestEvent = ({event}) => {


   return(
      <div className="closestEvent">
         <h3 className="closestEvent__title">Najbliższe wydażenie</h3>
         <EventShortcut event={event}/>

      </div>
   );
};

export default ClosestEvent;