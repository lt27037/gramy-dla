import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../images/logo.png';

import '../styles/Header.scss'

const menuNames = [
   {
      name: 'Strona główna',
      path: '/',
      exact: true,
   },
   {
      name: 'Aktualności',
      path: '/aktualnosci',
      exact: false,
   },
   {
      name: 'Galeria',
      path: '/galeria',
      exact: false,
   },
   {
      name: 'O nas',
      path: '/onas',
      exact: false,
   },
   {
      name: 'Sponsorzy',
      path: '/sponsorzy',
      exact: false,
   },
   {
      name: 'Wydarzenia',
      path: '/wydarzenia',
      exact: false,
   },
]

const Header = () => {

   const menuItems = menuNames.map(name => (
      <li
         className="header__menu__list__option"
         key={name.path}
      >
         <NavLink
            to={name.path}
            exact={name.exact}
            activeClassName="option--active"
         >
            {name.name}
         </NavLink>
      </li>
   ))

   const handleMenuClick = ({target}) => {
      let button = target.firstChild;
      let menu = target.nextElementSibling;
      let sponsorBtn = menu.nextElementSibling;
      button.classList.toggle('btn--active');
      menu.classList.toggle('menu--active');
      sponsorBtn.classList.toggle('button--active');
   }

   useEffect(
      () => {
         let btn = document.querySelector('.header__menuBtn__btn');
         btn !== null ? btn.addEventListener('click', handleMenuClick) : console.log('blad');

         return () => {
            btn?.removeEventListener('click', handleMenuClick);
         }
      },
      []
   )
      
   return(
      <header className="header">
         <img
            src={logo}
            alt="Logo stoważyszenia"
            className="header__logo"
         />
         <div 
            className="header__menuBtn"
            onClick={handleMenuClick}
         >
            <button className="header__menuBtn__btn"></button>
         </div>
         <nav className="header__menu">
            <ul className="header__menu__list">
               {menuItems}
            </ul>
         </nav>
         <button className="header__button">Zostań wolontariuszem</button>
      </header>
   );
};

export default Header;