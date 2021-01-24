import React, { useEffect, useState } from 'react'

import '../styles/EventShortcut.scss';

let months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrzesnia', 'pazdziernika', 'listopada', 'grudnia'];

const EventShortcut = ({event}) => {

   const [date, setDate] = useState();
   const [title, setTitle] = useState();
   const [time, setTime] = useState();
   const [photo, setPhoto] = useState();

   useEffect(
      () => {
         if(event){
            const {acf} = event;

            const {title, date, time, photo1 } = acf;

            let dateArr = date.split('-');

            let monthNumber = Number(dateArr[1] - 1)

            let newDate = `${dateArr[0]} ${months[monthNumber]} ${dateArr[2]}`

            setDate(newDate);
            setTitle(title);
            setTime(time);
            setPhoto(photo1);
         }
      },
      [event]
   )

   



   return(
      <div className="event" id={`event${event?.id}`}>
         <div className="event__info">{`${date}, ${time}`}</div>
         <div className="event__title">{title}</div>
         <img src={photo} alt="miniatura wydarzenia" className="event__photo"/>
         <button className="button">Zobacz szczegóły</button>
      </div>
   );
};

export default EventShortcut;