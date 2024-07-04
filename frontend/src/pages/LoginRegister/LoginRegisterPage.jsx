import React from 'react';
import { useLocation } from 'react-router-dom';

import './RegisterPage.scss';
import RegisterForm from './RegisterForm'
import { registerPageImage } from '../../utils/ImageLinks';

const RegisterPage = () => {

  return (
    <div className='register-page'>
      <div className='register-image-container'>
        <img 
          src={registerPageImage} 
          alt="Gaming keyboard" 
          className='keyboard-image'
        />
      </div>
      <div className='register-right-panel'>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage;