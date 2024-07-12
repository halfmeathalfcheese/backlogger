import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { TextField, Button, InputAdornment, IconButton, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleRegister = async () => {
    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!username) {
      setUsernameError('Username is required');
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      return;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    const response = fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        'email': email, 
        'username': username, 
        'password': password,
      })
    })
    if (response.ok) {
      console.log('User created successfully.');
    }
  }

  return (
    <div className='login-register-box'>
      <Typography variant='h4' style={{marginBottom: '20px', fontWeight: '600'}}>Register</Typography>
      <Typography variant='body1' style={{marginBottom: '20px'}}>Create an account and never forget about a game again!</Typography>
      <form className='login-register-form'>
        <TextField 
          id="email-input" 
          label='Email' 
          variant='filled' 
          required 
          fullWidth
          margin='normal'
          onChange={(e) => {
            setEmail(e.target.value)
            setEmailError('')
          }}
          error={!!emailError}
          helperText={emailError} 
        /> 
        <TextField
          id="username-input"
          label='Username'
          variant='filled'
          required
          fullWidth
          margin='normal'
          onChange={(e) => {
            setUsername(e.target.value)
            setUsernameError('')
          }}
          error={!!usernameError}
          helperText={usernameError}
        />
        <TextField 
          id="password-input" 
          label='Password' 
          variant='filled' 
          type={showPassword ? 'text' : 'password'}
          required 
          fullWidth
          margin='normal'
          onChange={(e) => {
            setPassword(e.target.value)
            setPasswordError('')
          }}
          error={!!passwordError}
          helperText={passwordError}
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
          onChange={(e) => {
            setConfirmPassword(e.target.value)
            setConfirmPasswordError('')
          }}
          error={!!confirmPasswordError}
          helperText={confirmPasswordError}
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
          onClick={handleRegister}
          onMouseDown={(e) => e.preventDefault()}
        >
          Register
        </Button>
      </form>
      <div>
        <Typography variant='body2' style={{marginTop: '20px'}}>Already have an account? Login <Link to={'/login'}>here</Link></Typography>
      </div>
    </div>
  )
}

export default RegisterForm;