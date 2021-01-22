import React from 'react'

import '../styles/PostShortcut.scss';

const defaultPost = {
   acf:{
      tytul : '',
      zajawka : '',
      datadodania : '',
      zdjecie : '',
   },
   id: '0000000'
}

const PostShortcut = ({post = defaultPost, click, quan}) => {

   const {tytul, zajawka, datadodania, zdjecie} = post.acf;

   return(
      <div id={`post${post.id}`} className="postShortcut" onClick={() => click(post.id, quan)}>
         <img
            src={zdjecie}
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