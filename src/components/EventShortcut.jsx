import React from 'react'

import '../styles/EventShortcut.scss';

const EventShortcut = ({event}) => {
   return(
      <div className="event">
         <div className="event__info">{`${event.date}, ${event.time}`}</div>
         <div className="event__title">{event.title}</div>
         <img src={event.thumbnail} alt="miniatura wydarzenia" className="event__photo"/>
         <button className="button">Zobacz szczegóły</button>
      </div>
   );
};

export default EventShortcut;