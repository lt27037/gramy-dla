import React, { useState } from 'react'

import '../styles/ContactForm.scss';

const ContactForm = ({subject}) => {

   const [emailInput, setEmailInput] = useState('');
   const [subjectInput, setSubjectInput] = useState(subject);
   const [textInput, setTextInput] = useState('');

   const handleEmailInput = e => setEmailInput(e.target.value);
   const handleSubjectInput = e => setSubjectInput(e.target.value);
   const handleTextInput = e => setTextInput(e.target.value);

   const handleSubmitForm = e => {
      e.preventDefault()
   }


   return(
      <form className="contactForm" onSubmit={handleSubmitForm}>
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
         <button className="button">Wyślij wiadomość</button>
      </form>
   );
};

export default ContactForm;