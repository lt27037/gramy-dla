// @ts-nocheck
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import Masonry from 'react-masonry-css';

import 'react-bnb-gallery/dist/style.css'
import '../styles/PhotoGallery.scss';


const PhotoGallery = ({photos}) => {

   const [galleryOpened, setGalleryOpened] = useState(false);
   const [photoOpened, setPhotoOpened] = useState('');
   const [columnsQuantity, setColumnsQuantity] = useState(4);
   const [photoElements, setPhotoElements] = useState([]);
   const wrapper = useRef(null);

   const toggleGallery = () => setGalleryOpened(!galleryOpened);

   const handlePhotoClick = e => {
      if(e.target.nodeName === 'IMG'){
         setPhotoOpened(e.target.src);
         setGalleryOpened(!galleryOpened);
      }
   }

   const handleReload = () => {
      let width = window.innerWidth;
      if(width <= 786){
         setColumnsQuantity(1);
      }else if (width > 787 && width <= 1200){
         setColumnsQuantity(2);
      }else if(width > 1201 && width <= 1550){
         setColumnsQuantity(3);
      }else if(width >= 1551){
         setColumnsQuantity(5);
      }
   }

   useEffect(
      () => {
         const photosList = photos.map(photo => (
            <img src={photo.acf.zdjecie} alt={photo.acf.opis} className="galleryWrapper__column__photo"/>
         ));
         setPhotoElements(photosList);
      },
      [photos]
   )

   useEffect(
      () => {
         const galleryBox = wrapper.current.querySelector('.galleryWrapper');
         galleryBox.addEventListener('click', handlePhotoClick );
         window.addEventListener('resize', handleReload);

         return () => {
            galleryBox.removeEventListener('click', handlePhotoClick );
            window.removeEventListener('resize', handleReload);
         }
      },
      []
   )

   useEffect(
      () => {
         const box = wrapper.current.querySelector('.galleryWrapper');
         const photos = box.querySelectorAll('img')
         if(photos !== undefined && photos.length > photoElements.length){
            handleReload()
         }
      }
   )

   useLayoutEffect(
      () => {
         handleReload()
      },
      []
   )

   return(
      <div className="galleryBox" ref={wrapper}>
         <Masonry
            breakpointCols={columnsQuantity}
            className="galleryWrapper"
            columnClassName="galleryWrapper__column">
            {photoElements}
         </Masonry>
         <ReactBnbGallery
            show={galleryOpened}
            photos={[photoOpened]}
            onClose={toggleGallery}
         />
      </div>
   )
}

export default PhotoGallery;