import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../images/logo.png';

import '../styles/Header.scss'

const Header = () => {
   return(
      <header className="header">
         <img src={logo} alt="Logo stoważyszenia" className="header__logo"/>
         <div className="header__menuBtn">
            <button className="header__menuBtn__btn"></button>
         </div>
      </header>
   );
};

export default Header;