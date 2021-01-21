import React from 'react'

import EventShortcut from '../components/EventShortcut';

import '../styles/MonthSection.scss';

const MonthSection = ({events, month, year}) => {

   const eventElements = events.map(event => (
      <EventShortcut key={event.id} event={event}/>
   ));


   return(
      <section className="monthSection">
         <h2 className="monthSection__header">{month} {year}</h2>
         {eventElements}
      </section>
   );
};

export default MonthSection;
