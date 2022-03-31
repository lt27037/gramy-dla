// @ts-nocheck
import React, {useState, useEffect} from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import ContactForm from '../components/ContactForm';

import '../styles/Volunteer.scss'
import Loading from "../components/Loading";

const Volunteer = ({sponsors}) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let endPoint = 'https://gramy-dla.herokuapp.com';

  const getData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    let url = `${endPoint}/wolontariusz-strona`
    getData(url).then(data => setContent(data))
  }, [])

  if (isLoading) {
    return <Loading marginTop={'30vh'}/>
  }


  return (
    <>
      <PhotoCarousel items={sponsors}/>
      <h2 className="volunteer__title">{content?.title}</h2>
      <p className="volunteer__text">{content?.text1}</p>
      <img src={content?.photo.url} alt="Zdjęcie wolontariuszy stowarzyszenia" className="volunteer__photo"/>
      <p className="volunteer__text">{content?.text2}</p>
      <h2 className="volunteer__title">Skontaktuj się z nami!</h2>
      <div className="formWrapper">
        <ContactForm subject={'Chcę przyłączyć się do wolontariatu!'}/>
      </div>
    </>
  );
};

export default Volunteer;