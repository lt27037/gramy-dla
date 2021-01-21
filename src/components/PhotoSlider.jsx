import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/PhotoSlider.scss';

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

   const [screenWidth, setScreenWidth] = useState(1900);

   const photoList = items.map(({id, acf}) => {

      

      return(
         <div className="photoSlider__item">
         <img
            alt={acf.title}
            className='photoSlider__img'
            key={id}
            onDragStart={handleDragStart}
            src={screenWidth >= 786 ? acf.zdjecie : acf.zdjeciemini}
         />
         <div className="photoSlider__content">
            <h3 className="photoSlider__content__discription">{acf.content}</h3>
            <h2 className="photoSlider__content__title">{acf.title}</h2>
         </div>
      </div>
      )
   })

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

 export default PhotoCarousel;