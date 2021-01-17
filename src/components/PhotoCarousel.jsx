import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/PhotoCarouse.scss';

const handleDragStart = (e) => e.preventDefault();


const PhotoCarousel = ({items}) => {

   const photoList = items.map(item => (
      <div className="photoCarousel__item">
         <img
            alt={item.name}
            className='photoCarousel__img'
            key={item.id}
            onDragStart={handleDragStart}
            src={item.link}
         />
      </div>
   ))

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
      1800: {
         items: 8,
      }
   }

   return (
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
   );
}

 export default PhotoCarousel;