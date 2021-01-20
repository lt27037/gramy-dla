import React, { useEffect } from 'react'

import '../styles/About.scss'
import AboutSection from '../components/AboutSection';

const text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur quo, inventore nisi ipsum rem debitis maiores blanditiis quos, porro, officia non nihil amet deleniti? Eligendi iste dignissimos nihil hic.';
const text2 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum quia dolor cum animi quos expedita sint odio modi vero enim, vitae maxime necessitatibus, quod a aperiam perspiciatis earum ab!';
const text3 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum quia dolor cum animi quos expedita sint odio modi vero enim, vitae maxime necessitatibus, quod a aperiam perspiciatis earum ab!';
const text4 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum quia dolor cum animi quos expedita sint odio modi vero enim, vitae maxime necessitatibus, quod a aperiam perspiciatis earum ab!';
const text5 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum quia dolor cum animi quos expedita sint odio modi vero enim, vitae maxime necessitatibus, quod a aperiam perspiciatis earum ab!';

const photo1 = 'https://picsum.photos/id/696/750/500.webp';
const photo2 = 'https://picsum.photos/id/999/750/500.webp';
const photo3 = 'https://picsum.photos/id/145/750/500.webp';
const photo4 = 'https://picsum.photos/id/866/750/500.webp';
const photo5 = 'https://picsum.photos/id/1005/750/500.webp';

const About = () => {

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   return(
      <div className="aboutWrapper">
         <AboutSection photo={photo1} text={text1} />
         <AboutSection photo={photo2} text={text2} />
         <AboutSection photo={photo3} text={text3} />
         <AboutSection photo={photo4} text={text4} />
         <AboutSection photo={photo5} text={text5} />
      </div>
   );
};

export default About;