import React from 'react';

import { ReactComponent as Facebook } from '../images/facebook-square-brands.svg';
import { ReactComponent as Instagram } from '../images/instagram-square-brands.svg';

import '../styles/Footer.scss'


const Footer = () => {
   return(
      <footer className="footer">
         <div className="footer__socialmedia">
            <div className="footer__socialElement">
               <Instagram className="socialIcon"/>
               <span className="footer__socialElement__text">@gramydla_gora</span>
            </div>
            <div className="footer__socialElement">
               <Facebook className="socialIcon"/>
               <span className="footer__socialElement__text">/gramydla_gora</span>
            </div>
         </div>
         <div className="footer__addres">
            <span className="footer__addres__street">ul. Nieznana 6 Góra, 56-200</span>
            <span className="footer__addres__phone">tel: +48 669 455 999</span>
            <span className="footer__addres__email">kontakt@gramydla.pl</span>
         </div>
         <div className="footer__copyright">Gramy dla 2020&copy;</div>
      </footer>
   );
};

export default Footer;