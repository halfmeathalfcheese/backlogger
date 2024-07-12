import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';

import './RegisterLoginPage.scss';
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm';
import { registerPageImage } from '../../utils/ImageLinks';

const LoginRegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
        { location.pathname === '/register' ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  )
}

export default LoginRegisterPage;