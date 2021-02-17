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

const Footer = () => {

   const [info, setInfo] = useState(defaultObj);

   let endPoint = 'https://gramy-dla.herokuapp.com';

   const getData= async (url) => {
      try{
         const response = await fetch(url);
         const data = await response.json();
         return data;
      }catch(err){
         console.error(err);
      }
   }

   useEffect(
      () => {
         let url = `${endPoint}/stopka`;
         getData(url).then(data => setInfo(data))
      },
      []
   )

   return(
      <footer className="footer">
         <div className="footer__socialmedia">
            <div className="footer__socialElement">
               <Instagram className="socialIcon"/>
               <span className="footer__socialElement__text">{info?.instagram_nazwa}</span>
            </div>
            <div className="footer__socialElement">
               <Facebook className="socialIcon"/>
               <span className="footer__socialElement__text">{info?.facebook_nazwa}</span>
            </div>
         </div>
         <div className="footer__addres">
            <span className="footer__addres__street">{info?.ulica}</span>
            <span className="footer__addres__town">{info?.kod_miasto}</span>
            <span className="footer__addres__phone">tel: {info?.telefon}</span>
            <span className="footer__addres__email">{info?.email}</span>
         </div>
         <div className="footer__copyright">{info?.copyright}&copy;</div>
      </footer>
   );
};

export default Footer;