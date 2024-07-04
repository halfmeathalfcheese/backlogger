import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

import './RegisterLoginPage.scss';
import RegisterForm from './RegisterForm'
import { registerPageImage } from '../../utils/ImageLinks';

const RegisterPage = () => {
  const navigate = useNavigate();

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
        <IconButton
          id='register-login-close-button'
          onClick={() => navigate('/')}
        >
          <CloseIcon />
        </IconButton>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage;