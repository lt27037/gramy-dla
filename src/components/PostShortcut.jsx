import React from 'react'

import '../styles/PostShortcut.scss';

const defaultPost = {
   acf:{
      tytul : '',
      zajawka : '',
      datadodania : '',
      zdjecie1 : '',
      zdjecie2 : '',
   },
   id: '0000000'
}

const PostShortcut = ({post = defaultPost, click}) => {

   const handleThumbnail = (url, size) => {

      let text = url.slice(0, -4);
      let extend = url.slice(-4, url.length);
      let dot = url.slice(-4, -3);
      let addDot = '';

      dot === '.' ? addDot = '' : addDot = '.';
      
      return(
         `${text}-${size}${addDot}${extend}`
      )
   }

   const {tytul, zajawka, datadodania, zdjecie1} = post.acf;

   return(
      <div id={`post${post.id}`} className="postShortcut" onClick={() => click(post.id)}>
         <img
            src={handleThumbnail(zdjecie1, '300x200')}
            alt="Miniatura posta"
            className="postShortcut__photo"
         />
         <div className="postShortcut__content"> 
            <div className="postShortcut__date">{datadodania}</div>
            <h3 className="postShortcut__title">{tytul}</h3>
            <p className="postShortcut__text">{zajawka}...<span className="postShortcut__more">Czytaj dalej</span></p>
         </div>
      </div>
   );
};

export default PostShortcut;