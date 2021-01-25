import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/Error404.scss';

const Error404 = () => {
   return(
      <div className="error404">
         <span className="error404__first">404</span>
         <span className="error404__second">Nie ma takiej strony!</span>
         <Link to="/" ><button className="button">Wróć na stronę główną</button></Link>
      </div>
   );
};

export default Error404;