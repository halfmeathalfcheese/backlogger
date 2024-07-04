import React, { useState } from 'react';

import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
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
          style={{
            background: 'linear-gradient(45deg, #8DA9FF 40%, #D481DE 60%)', 
            color: 'white'
          }}
        >
          Register
        </Button>
      </form>
    </div>
  )
}

export default RegisterForm;