import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/PhotoSlider.scss';

const handleDragStart = (e) => e.preventDefault();


const PhotoCarousel = ({items}) => {

   const photoHeight = 500;
   const photoWidth = 1900;

   const photoList = items.map(item => (
      <div className="photoSlider__item">
         <img
            alt={item.author}
            className='photoSlider__img'
            key={item.id}
            onDragStart={handleDragStart}
            src={`https://picsum.photos/id/${item.id}/${photoWidth}/${photoHeight}.webp`}
         />
      </div>
   ))

   return (
      <div className="photoSlider">
         <AliceCarousel 
            mouseTracking 
            items={photoList} 
            autoHeight={false} 
            autoPlay={true}
            disableDotsControls={true}
            infinite={true}
            autoPlayInterval={5000}
         />
      </div>
   );
}

 export default PhotoCarousel;