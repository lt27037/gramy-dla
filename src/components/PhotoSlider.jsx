import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/PhotoSlider.scss';

const handleDragStart = (e) => e.preventDefault();

const PhotoSlider = ({items}) => {

   const [screenWidth, setScreenWidth] = useState(1900);

   const photoList = items.map(({id, title, discription, backgroundPhoto}) => (
      <div className="photoSlider__item" key={id}>
         <img
            alt={discription}
            className='photoSlider__img'
            onDragStart={handleDragStart}
            src={screenWidth > 786 ? `${backgroundPhoto.url}` : `${backgroundPhoto.formats.medium.url}` }
         />
         <div className="photoSlider__content">
            <h3 className="photoSlider__content__discription">{discription}</h3>
            <h2 className="photoSlider__content__title">{title}</h2>
         </div>
      </div>
      )
   )

   const resizeCheck = () => {
      setScreenWidth(Number(window.innerWidth));
   }

   useEffect(
      () => {
         setScreenWidth(Number(window.innerWidth));
         window.addEventListener('resize', resizeCheck);

         return(
            () => {
               window.removeEventListener('resize', resizeCheck);
            }
         )
      },
      []
   )


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

 export default PhotoSlider;