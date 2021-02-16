import React, { useState } from 'react'

import axios from 'axios';

import '../styles/ContactForm.scss';

const ContactForm = ({subject}) => {

   const [emailInput, setEmailInput] = useState('');
   const [subjectInput, setSubjectInput] = useState(subject);
   const [textInput, setTextInput] = useState('');
   const [nameInput, setNameInput] = useState('');
   const [isSend, setIsSend] = useState(false);
   const [sending, setSending] = useState(false);
   const [validated, setValidated] = useState(true);

   const handleEmailInput = e => setEmailInput(e.target.value);
   const handleSubjectInput = e => setSubjectInput(e.target.value);
   const handleTextInput = e => setTextInput(e.target.value);
   const handleNameInput = e => setNameInput(e.target.value);

   const handleClear = () => {
      setEmailInput('');
      setSubjectInput('');
      setTextInput('');
      setNameInput('');
   }

   const putData = async (url, data) => {
      await axios({
         method: 'POST',
         url,
         data,
      }).then(({status}) => {
         if(Number(status) === 200) {
            setIsSend(true)
            handleClear();
         };
         setSending(false)
      })
      .catch(err => console.log(err))
   }

   const handleSendMessage = () => {

      let data = {
         email: emailInput,
         imie_lub_nazwa: nameInput,
         temat: subjectInput,
         tresc: textInput
      }

      putData(`https://gramy-dla.herokuapp.com/formularzs/custom`, data)
   }

   const handleValidate = () => {
      if(emailInput === '' || subjectInput === '' || textInput === '' || nameInput === ''){
         setValidated(false)
         return false;
      }else {
         setValidated(true)
         return true;
      }
   }

   const handleSubmitForm = e => {
      e.preventDefault()
      setIsSend(false);

      if(handleValidate()){
         setSending(true);
         handleSendMessage();
      }
   }

   return(
      <form className="contactForm" onSubmit={handleSubmitForm}>
         {isSend ? <span className="contactForm__message">Wiadomość wysłana!</span> : null}
         <label
            htmlFor="email"
            className="contactForm__label">
            <input 
               name="email"
               type="email" 
               value={emailInput} 
               onChange={handleEmailInput} 
               className="contactForm__input"/>
            <span className="contactForm__inputName">Twój e-mail</span>
         </label>
         <label
            htmlFor="name"
            className="contactForm__label">
            <input 
               name="name"
               type="text" 
               value={nameInput} 
               onChange={handleNameInput} 
               className="contactForm__input"/>
            <span className="contactForm__inputName">Imię i nazwisko / Nazwa</span>
         </label>
         <label 
            htmlFor="subject" 
            className="contactForm__label">
            <input 
               name="subject"
               type="text" 
               value={subjectInput} 
               onChange={handleSubjectInput} 
               className="contactForm__input"/>
            <span className="contactForm__inputName">Temat wiadomości</span>
         </label>
         <label htmlFor="text" className="contactForm__label">
            <textarea 
               value={textInput} 
               onChange={handleTextInput}
               className="contactForm__text ">
            </textarea>
            <span className="contactForm__inputName">Treść wiadomości</span>
         </label>
         {validated ? null : <span className="errorSpan">Uwaga! Żadne pole nie może być puste!</span>}
         <button className="button">{sending ? 'wysyłanie...' : 'Wyślij wiadomość'}</button>
      </form>
   );
};

export default ContactForm;