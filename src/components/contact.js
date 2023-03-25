import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import {Button} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import send from '../img/gif/send.gif'; 
function ContactForm (){
  const [state, handleSubmit] = useForm("meqwzpvp");
  const [ t ] = useTranslation();
if (state.succeeded) {
    return <div className="text"> <img src={send} alt='icon' /> <p>{t('title47')}</p> </div>;
}
  return (
    <form
    onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="inputF1">
       
            <input
            type="text"
            placeholder={t('title38')}
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
            /> 
          <ValidationError 
        prefix="Name" 
        field="Name"
        errors={state.errors}
      />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
            />
               <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </div>
      <div className="input-email">
        <input
          type="text"
          placeholder={t('title41')}
          name="subjet"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
           <ValidationError 
        prefix="Subject" 
        field="Subject"
        errors={state.errors}
      />
      </div>
   
      <div className="option">
      <select id="Services" name="services">
        <option>{t('title42')} </option>
          <option value="Logo Design"> Logo Design</option>
          <option value="Brand identity">Brand identity </option>
          <option value="Video AD">Video AD</option>
          <option value="Social Media Posts"> Social Media Posts </option>
          <option value="ShowCase Websit"> ShowCase Website</option>
          <option value="Portfolio Website"> Portfolio Website</option>
          <option value="E-catalogue  Website"> E-catalogue  Website</option>
          <option value="E-commerce  Website"> E-commerce  Website</option>
          <option value=" Pack SLIVER"> Pack SLIVER</option>
          <option value="Pack GOLD"> Pack GOLD</option>
          <option value="Pack DIAMOND">Pack DIAMOND </option>
    </select>
    <ValidationError 
        prefix="services" 
        field="services"
        errors={state.errors}
      />
    </div>
    <div className="option">
      <select id="budget" name="budget" >
        <option>{t('title43')} </option>
      <option value="0-1000DT "> 0-1000 </option>
      <option value="1000DT- 5000DT">1000- 5000 </option>
      <option value="5000DT - 12000DT">5000 - 12000</option>
      <option value="12000 DT +">12000 +  </option>
      </select>
      <ValidationError 
        prefix="budget" 
        field="budget"
        errors={state.errors}
      />
      </div>
      <div className="input-textarea">
        <textarea
          placeholder={t('title45')} 
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
   
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div className="button">
      <Button variant="contained"  className="btn" type="submit" disabled={state.submitting}>{t('title44')} </Button>
      </div>
    </form>
 
  );
};

export default ContactForm ;


