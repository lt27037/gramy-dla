import React from 'react'

import '../styles/PostShortcut.scss';

const PostShortcut = ({post, click}) => {



   return(
      <div id={`post${post.id}`} className="postShortcut" onClick={() => click(post.id)}>
         <img
            src={`http://192.168.8.11:1337${post.mainPhoto.formats.small?.url}`}
            alt="Miniatura posta"
            className="postShortcut__photo"
         />
         <div className="postShortcut__content"> 
            <div className="postShortcut__date">{post.published_at.slice(0, 10)}</div>
            <h3 className="postShortcut__title">{post.title}</h3>
            <p className="postShortcut__text">{post.pierwszyParagraf.slice(0, 200)}...<span className="postShortcut__more">Czytaj dalej</span></p>
         </div>
      </div>
   );
};

export default PostShortcut;