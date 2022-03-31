import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/PhotoCarousel.scss';

import placeholder from '../images/thumbnail-placeholder.png';

const handleDragStart = (e) => e.preventDefault();

const responsiveObj = {
  0: {
    items: 3,
  },
  786: {
    items: 4,
  },
  1200: {
    items: 7,
  },
  1550: {
    items: 9
  },
  1800: {
    items: 9,
  }
}

const PhotoCarousel = ({ items }) => {

  if (items.length === 0) {
    return null;
  }

  const photoList = items.map(({id, name, photo}) => (
    <div className="photoCarousel__item" key={id}>
      <img
        alt={name}
        className='photoCarousel__img'
        onDragStart={handleDragStart}
        src={`${photo.formats?.thumbnail?.url || placeholder}`}
      />
    </div>
  ))

   return (
      <div className="photoCarousel">
         <h3 className="photoCarousel__title">Nasi Sponsorzy</h3>
         <AliceCarousel 
            mouseTracking 
            items={photoList} 
            autoHeight={false} 
            responsive={responsiveObj}
            autoPlay={true}
            disableButtonsControls={true}
            disableDotsControls={true}
            infinite={true}
            autoPlayInterval={3000}
         />
      </div>
   );
}

 export default PhotoCarousel;