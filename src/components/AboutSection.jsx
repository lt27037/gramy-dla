import React from 'react';

import '../styles/AboutSection.scss';

const AboutSection = ({photo, text}) => {



   return(
      <section className="aboutSection">
         <img src={photo} alt="Zdjęcie w sekcji o nas" className="aboutSection__photo"/>
         <p className="aboutSection__text">{text}</p>
         <img src={photo} alt="Zdjęcie w sekcji o nas" className="aboutSection__background"/>
      </section>
   );
};

export default AboutSection;