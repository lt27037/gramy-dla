import React from 'react'

import '../styles/EventShortcut.scss';

let months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrzesnia', 'pazdziernika', 'listopada', 'grudnia'];

const EventShortcut = ({event}) => {

   const {acf, id} = event;

   const {title, date, time, photo1 } = acf;

   let dateArr = date.split('-');

   let monthNumber = Number(dateArr[1] - 1)

   let newDate = `${dateArr[0]} ${months[monthNumber]} ${dateArr[2]}`

   



   return(
      <div className="event" id={`event${id}`}>
         <div className="event__info">{`${newDate}, ${time}`}</div>
         <div className="event__title">{title}</div>
         <img src={photo1} alt="miniatura wydarzenia" className="event__photo"/>
         <button className="button">Zobacz szczegóły</button>
      </div>
   );
};

export default EventShortcut;