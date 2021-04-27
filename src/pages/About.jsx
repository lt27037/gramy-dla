// @ts-nocheck
import React, { useEffect, useState} from 'react'

import '../styles/About.scss'
import AboutSection from '../components/AboutSection';
import Loading from '../components/Loading';

const About = ({aboutContent, setAboutContent}) => {

   const [isLoading, setIsLoading] = useState(false);

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


         if(!aboutContent){
            setIsLoading(true)
            let url = `${endPoint}/o-nas`;
            getData(url).then(data => {setAboutContent(data); setIsLoading(false)})
         }
      },
      []
   )

   const sections = [
      <AboutSection photo={aboutContent?.photo1?.url} text={aboutContent?.text1} />,
      <AboutSection photo={aboutContent?.photo2?.url} text={aboutContent?.text2} />,
      <AboutSection photo={aboutContent?.photo3?.url} text={aboutContent?.text3} />,
      <AboutSection photo={aboutContent?.photo4?.url} text={aboutContent?.text4} />,
      <AboutSection photo={aboutContent?.photo5?.url} text={aboutContent?.text5} />
   ]

   return(
      <div className="aboutWrapper">
         {isLoading ? <Loading marginTop="30vh"/> : sections}
      </div>
   );
};

export default About;