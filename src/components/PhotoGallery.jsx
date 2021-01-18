import React, { useState, useEffect } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import ImageMasonry from 'react-image-masonry';

import 'react-bnb-gallery/dist/style.css'
import '../styles/PhotoGallery.scss';


const PhotoGallery = ({photos}) => {

   const [galleryOpened, setGalleryOpened] = useState(false);
   const [photoOpened, setPhotoOpened] = useState('');
   const [columnsQuantity, setColumnsQuantity] = useState(4);
   const [containerWidth, setContainerWidth] = useState('80%');

   const toggleGallery = () => setGalleryOpened(!galleryOpened);

   const photosList = photos.map(photo => (
      `https://picsum.photos/id/${photo.id}/${Math.floor(photo.width / 3)}/${Math.floor(photo.height / 3)}.webp`
   ));

   const handlePhotoClick = e => {
      if(e.target.nodeName === 'IMG'){
         setPhotoOpened(e.target.src);
         setGalleryOpened(!galleryOpened);
      }
   }

   const handleResize = () => {
      let width = window.innerWidth;
      if(width <= 786){
         setColumnsQuantity(1);
         setContainerWidth('98%');
      }else if (width > 787 && width <= 1200){
         setColumnsQuantity(2);
         setContainerWidth('90%')
      }else if(width > 1201 && width <= 1550){
         setColumnsQuantity(3);
         setContainerWidth('90%')
      }else if(width >= 1551){
         setColumnsQuantity(5);
         setContainerWidth('100%')
      }
   }

   useEffect(
      () => {
         const galleryBox = document.querySelector('.galleryWrapper');
         galleryBox?.addEventListener('click', handlePhotoClick );
         window.addEventListener('resize', handleResize);

         return () => {
            galleryBox?.removeEventListener('click', handlePhotoClick );
            window.removeEventListener('resize', handleResize);
         }
      },
      []
   )

   useEffect(
      () => {
         handleResize()
      },
      [window.innerWidth]
   )

   return(
      <>
         <ImageMasonry
            numCols={columnsQuantity}
            containerWidth={containerWidth}
            className={'galleryWrapper'}
            animate={true}
            imageUrls={photosList}
         />
         <ReactBnbGallery
            show={galleryOpened}
            photos={[photoOpened]}
            onClose={toggleGallery}
         />
      </>
   )
}

export default PhotoGallery;