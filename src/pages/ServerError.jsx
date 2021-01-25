import React from 'react'

import {ReactComponent as Svg} from '../images/server-error.svg';

import '../styles/Error.scss';

const ServerError = () => {
   return(
      <div className="error404">
         <Svg className="svgimage"/>
         <span className="error404__second">Błąd łączenia z serwerem</span>
         <span className="error404__third">Spróbuj ponownie za chwilę</span>
         
      </div>
   );
};

export default ServerError;