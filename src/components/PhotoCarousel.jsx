import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/PhotoCarousel.scss';

const handleDragStart = (e) => e.preventDefault();

const defaultPost = {
   acf:{
      tytul : '',
      zajawka : '',
      datadodania : '',
      zdjecie : '',
   },
   id: '0000000'
}

const PhotoCarousel = ({items = [defaultPost]}) => {


   const photoList = items?.map(item => (
      <div className="photoCarousel__item">
         <img
            alt={item.acf.name}
            className='photoCarousel__img'
            key={item.id}
            onDragStart={handleDragStart}
            src={item.acf.miniurl}
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
      1550: {
         items: 9
      },
      1800: {
         items: 9,
      }
   }

   return (
      <div className="photoCarousel">
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