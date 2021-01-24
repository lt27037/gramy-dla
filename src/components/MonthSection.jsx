import React from 'react'

import EventShortcut from '../components/EventShortcut';

import '../styles/MonthSection.scss';

const MonthSection = ({events}) => {

   const eventElements = events.map(event => (
      <EventShortcut key={event.id} event={event}/>
   ));


   return(
      <section className="monthSection">
         <h2 className="monthSection__header"></h2>
         {eventElements}
      </section>
   );
};

export default MonthSection;
