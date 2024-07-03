import React, { useState } from 'react';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import './RegisterPage.scss';
import { registerPageImage } from '../utils/ImageLinks';
import { set } from 'mongoose';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <div className='register-box'>
          <h2>Start Tracking Today</h2>
          <form className='register-form'>
            <TextField 
              id="email-input" 
              label='Email' 
              variant='filled' 
              required 
              fullWidth
              margin='normal'
            /> 
            <TextField 
              id="password-input" 
              label='Password' 
              variant='filled' 
              type={showPassword ? 'text' : 'password'}
              required 
              fullWidth
              margin='normal'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowPassword(!showPassword)}
                      edge='end'
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            /> 
            <TextField 
              id="password-input" 
              label='Confirm Password' 
              variant='filled' 
              type={showConfirmPassword ? 'text' : 'password'}
              required 
              fullWidth
              margin='normal'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge='end'
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            /> 
            <Button 
              id='register-button' 
              variant='contained'
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;