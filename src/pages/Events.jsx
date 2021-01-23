import React, { useEffect } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import MonthSection from "../components/MonthSection";

import '../styles/Events.scss'


const eventsArr = [
   {
      id: 1,
      date: '11.12.2020',
      time: '19:00',
      title: 'Gramy dla Janka',
      thumbnail: 'https://picsum.photos/id/131/400/300',
   },
   {
      id: 2,
      date: '31.12.2020',
      time: '17:00',
      title: 'Gramy dla Pauliny',
      thumbnail: 'https://picsum.photos/id/584/400/300',
   },
];

const eventsSecond = [
   {
      id: 1,
      date: '11.01.2021',
      time: '19:00',
      title: 'Gramy dla Anny',
      thumbnail: 'https://picsum.photos/id/102/400/300',
   },
];




const Events = ({sponsors}) => {

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   return(
      <>
         <PhotoCarousel items={sponsors} />
         <MonthSection events={eventsArr} month={'Grudzień'} year={'2020'} />
         <MonthSection events={eventsSecond} month={'Styczeń'} year={'2021'} />
      </>
   );
};

export default Events;