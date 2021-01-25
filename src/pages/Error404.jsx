import React from 'react'
import { Link } from 'react-router-dom';

import {ReactComponent as Svg} from '../images/error404.svg';

import '../styles/Error404.scss';

const Error404 = () => {
   return(
      <div className="error404">
         <Svg className="svgimage"/>
         <span className="error404__second">Nie ma takiej strony!</span>
         <Link to="/" ><button className="button">Wróć na stronę główną</button></Link>
      </div>
   );
};

export default Error404;