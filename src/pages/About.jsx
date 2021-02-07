// @ts-nocheck
import React, { useEffect, useState} from 'react'

import '../styles/About.scss'
import AboutSection from '../components/AboutSection';

const About = () => {

   const [sectionList, setSectionList] = useState(null);
   const [content, setContent] = useState(null);

   let endPoint = 'http://192.168.8.11:1337';

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
         <AboutSection photo={endPoint+content?.photo1.url} text={content?.text1}/>
         <AboutSection photo={endPoint+content?.photo2.url} text={content?.text2}/>
         <AboutSection photo={endPoint+content?.photo3.url} text={content?.text3}/>
         <AboutSection photo={endPoint+content?.photo4.url} text={content?.text4}/>
         <AboutSection photo={endPoint+content?.photo5.url} text={content?.text5}/>
         
      </div>
   );
};

export default About;