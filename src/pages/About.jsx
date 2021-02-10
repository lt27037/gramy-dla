// @ts-nocheck
import React, { useEffect, useState} from 'react'

import '../styles/About.scss'
import AboutSection from '../components/AboutSection';

const About = () => {

   const [sectionList, setSectionList] = useState(null);
   const [content, setContent] = useState(null);

   let endPoint = 'https://gramy-dla.herokuapp.com';

   const getData = async (url) => {
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
         window.scrollTo(0, 0);

         let url = `${endPoint}/o-nas`;
         getData(url).then(data => setContent(data))
      },
      []
   )

   return(
      <div className="aboutWrapper">
         <AboutSection photo={content?.photo1.url} text={content?.text1}/>
         <AboutSection photo={content?.photo2.url} text={content?.text2}/>
         <AboutSection photo={content?.photo3.url} text={content?.text3}/>
         <AboutSection photo={content?.photo4.url} text={content?.text4}/>
         <AboutSection photo={content?.photo5.url} text={content?.text5}/>
         
      </div>
   );
};

export default About;