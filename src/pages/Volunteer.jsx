import React, { useEffect } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';

import '../styles/Volunteer.scss'

const Volunteer = ({sponsors, content}) => {

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )


   return(
      <>
         <PhotoCarousel items={sponsors} />
         <h2 className="volunteer__title">Zapraszamy do współpracy wszystkie chętne osoby!</h2>
         <p className="volunteer__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptas nesciunt saepe explicabo ullam laboriosam voluptates vel nulla cum maxime est quisquam et dicta asperiores quis, eveniet, quibusdam voluptatum iusto. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti dicta voluptate, sed inventore ipsam quibusdam natus consequuntur, praesentium iusto obcaecati quo aliquid enim earum incidunt quod delectus omnis necessitatibus nisi!</p>
         <img src='https://picsum.photos/id/447/600/400' alt="Zdjęcie wolontariuszy stowarzyszenia" className="volunteer__photo"/>
         <p className="volunteer__text">Adipisicing elit. Ipsam voluptas nesciunt saepe explicabo ullam laboriosam voluptates vel nulla cum maxime est quisquam et dicta asperiores quis, eveniet, quibusdam voluptatum iusto lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi alias recusandae perferendis magni tempore saepe ipsum. Fuga molestias laboriosam velit, adipisci consectetur et ipsa? Voluptate officia doloremque autem nam.</p>
         <h2 className="volunteer__title">* tu będzie formularz *</h2>
      </>
   );
};

export default Volunteer;