import React, { useState, useEffect } from 'react';

import { ReactComponent as Facebook } from '../images/facebook-square-brands.svg';
import { ReactComponent as Instagram } from '../images/instagram-square-brands.svg';

import '../styles/Footer.scss'

const defaultObj = {
   copyright: null,
   email: null,
   facebook: null,
   instagram: null,
   kodpocztowy: null,
   miejscowosc: null,
   telefon: null,
   ulica: null,
}

const Footer = ({content}) => {

   const [info, setInfo] = useState(defaultObj);

   useEffect(
      () => {
         setInfo(content?.acf);
      },
      [content]
   )

   return(
      <footer className="footer">
         <div className="footer__socialmedia">
            <div className="footer__socialElement">
               <Instagram className="socialIcon"/>
               <span className="footer__socialElement__text">{info?.instagram}</span>
            </div>
            <div className="footer__socialElement">
               <Facebook className="socialIcon"/>
               <span className="footer__socialElement__text">{info?.facebook}</span>
            </div>
         </div>
         <div className="footer__addres">
            <span className="footer__addres__street">{info?.ulica}</span>
            <span className="footer__addres__town">{`${info?.kodpocztowy} ${info?.miejscowosc}`}</span>
            <span className="footer__addres__phone">tel: {info?.telefon}</span>
            <span className="footer__addres__email">{info?.email}</span>
         </div>
         <div className="footer__copyright">Gramy dla {info?.copyright}&copy;</div>
      </footer>
   );
};

export default Footer;