/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'

import EventShortcut from './EventShortcut';
import Loading from '../components/Loading';

import '../styles/ClosestEvent.scss';

const ClosestEvent = () => {
  const [event, setEvent] = useState([]);
  let endPoint = 'https://gramy-dla.herokuapp.com';

  const getEvent = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    let url = `${endPoint}/events?_limit=1&_sort=data:ASC`;
    getEvent(url).then(data => setEvent(data));
  }, [])

  if (event.length === 0) {
    return null;
  }

  return (
    <div className="closestEvent">
      <h3 className="closestEvent__title">Najbliższe wydarzenie</h3>
      <EventShortcut event={event[0]}/>
    </div>
  );
};

export default ClosestEvent;