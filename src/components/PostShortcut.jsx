import React from 'react'

import '../styles/PostShortcut.scss';

const PostShortcut = ({post}) => {
   return(
      <div className="postShortcut">
         <img
            src={'https://picsum.photos/300/200'}
            alt="Miniatura posta"
            className="postShortcut__photo"
         />
         <div className="postShortcut__content">
            <h3 className="postShortcut__title">{post.title}</h3>
            <p className="postShortcut__text">{post.body}</p>
         </div>
      </div>
   );
};

export default PostShortcut;