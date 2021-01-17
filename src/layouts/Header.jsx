import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

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

   const history = useHistory();

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

   const handleLinkClick = ({target}) => {
      if(target.nodeName === 'A'){
         let menu = target.parentNode.parentNode.parentNode;
         let button = menu.previousElementSibling.firstChild;
         let sponsorBtn = menu.nextElementSibling;
         button.classList.remove('btn--active');
         menu.classList.remove('menu--active');
         sponsorBtn.classList.remove('button--active');
      }
   }

   const handleBtnClick = () => {
      const moveTo = {
         pathname: '/zostan-wolontariuszem',
      }

      history.push(moveTo);
   }

   useEffect(
      () => {
         let btn = document.querySelector('.header__menuBtn__btn');
         let headerMenu = document.querySelector('.header__menu__list');
         btn !== null ? btn.addEventListener('click', handleMenuClick) : console.error('Menu error!');
         headerMenu !== null ? headerMenu.addEventListener('click', handleLinkClick) : console.error('Menu error!');

         return () => {
            btn?.removeEventListener('click', handleMenuClick);
            headerMenu?.removeEventListener('click', handleLinkClick);
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
         <button className="header__button" onClick={handleBtnClick}>Zostań wolontariuszem</button>
      </header>
   );
};

export default Header;