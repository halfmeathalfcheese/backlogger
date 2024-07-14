import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { TextField, Button, InputAdornment, IconButton, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='login-register-box'>
      <Typography variant='h4' style={{marginBottom: '20px', fontWeight: '600'}}>Login</Typography>
      <Typography variant='body1' style={{marginBottom: '20px'}}>Login and continue tracking!</Typography>
      <form className='login-register-form'>
        <TextField
          id="username-input"
          label='Username'
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
        <Button 
          id='login-button' 
          variant='contained'
          style={{
            background: '#141414', 
            color: 'white'
          }}
        >
          Login
        </Button>
      </form>
      <div>
        <Typography variant='body2' style={{marginTop: '20px'}}>Don't have an account? Register <Link to={'/register'}>here</Link></Typography>
      </div>
    </div>
  )
}

export default LoginForm;