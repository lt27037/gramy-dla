import React from 'react'
import { useHistory } from 'react-router-dom';

import '../styles/GalleryWidget.scss';

const GalleryWidget = ({photo}) => {

   const history = useHistory();

   const handleClick = () => {
      history.push({pathname: '/galeria'});
   }

   return(
      <div className="galleryWidget" onClick={handleClick}>
         <h4 className="galleryWidget__title">Zobacz galerię zdjęć!</h4>
         <img src={photo.acf.zdjecie} alt={photo.acf.opis} className="galleryWidget__photo"/>
      </div>
   );
};

export default GalleryWidget;