import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/GalleryFolder.scss';
import thumbnail from '../images/thumbnail-placeholder.png';

const GalleryFolder = ({gallery}) => {

   const history = useHistory();

   const handleClick = () => {
      const obj = {
         pathname: `/galeria/${gallery.id}`
      };

      history.push(obj);
   }

   return(
      <div className="folder" onClick={handleClick}>
         <img 
            src={gallery?.okladka.formats.small?.url || thumbnail}
            alt="miniatura folderu w galerii" 
            className="folder__image"
         />
         <span className="folder__date">{gallery?.published_at.slice(0, 10)}</span>
         <span className="folder__title">{gallery?.title}</span>
         <p className="folder__discription">{gallery?.opis}</p>
      </div>
   );
};

export default GalleryFolder;