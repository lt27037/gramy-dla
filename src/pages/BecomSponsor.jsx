import React, { useEffect } from 'react'

import PhotoCarousel from '../components/PhotoCarousel';

import '../styles/BecomeSponsor.scss'

const BecomSponsor = ({sponsors}) => {

   useEffect(
      () => {
         window.scrollTo(0, 0);
      },
      []
   )

   return(
      <>
         <PhotoCarousel items={sponsors} /> 
         <h3 className="become__title">Zapraszamy do wsparcia naszego stowarzyszenia</h3>
         <div className="become__wrapper">
            <div className="become__wrapper__leftBar">
               <h3 className="become__wrapper__leftBar__titleA">Dzięki waszej pomocy możemy</h3>
               <h2 className="become__wrapper__leftBar__titleB">grać dalej!</h2>
               <p className="become__wrapper__leftBar__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga tempore harum veritatis reprehenderit dicta dolores accusamus, minima officiis qui assumenda vel voluptas ipsam, nihil, consequatur corrupti. Iure, adipisci quidem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ipsum dolor sapiente vero mollitia voluptas optio libero molestias placeat. Nihil adipisci ipsa exercitationem facere illum tempora quod cumque totam laborum.</p>
               <p className="become__wrapper__leftBar__text">Consectetur adipisicing elit. Perferendis tenetur sit recusandae a quasi blanditiis deleniti quibusdam, voluptatibus provident, tempora magni, optio officiis consequuntur cum laudantium nobis itaque. Itaque, quasi? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo excepturi rerum consectetur, praesentium alias molestiae delectus voluptatum ab atque neque possimus quod assumenda. At obcaecati earum vel sunt saepe iure!</p>
            </div>
            <div className="become__wrapper__rightBar">
               <h2 className="become__wrapper__rightBar__title">Oto jak można nas wspomóc</h2>
               <div className="become__wrapper__rightBar__data">
                  <span className="data__text">Dane do przelewu</span>
                  <span className="data__accontNumber">33 4343 2134 1234 1234 5321</span>
                  <span className="data__info">
                     W tytule przelewu podaj Nazwę firmy / imię i nazwisko oraz adress email lub numer telefonu
                  </span>
                  <span className="data__info">* DO DOKOŃCZENIA I KONSULTACJI *</span>
               </div>
            </div>
         </div>
      </>
   );
};

export default BecomSponsor;