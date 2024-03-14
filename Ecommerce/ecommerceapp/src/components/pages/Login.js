import React, { useState } from 'react'
import './css/Login.css'
import {useNavigate} from 'react-router-dom'
import { useRef} from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import { useAuth } from '../AuthContext'

function Login() {
    const navigate=useNavigate()
    const  emailRef=useRef(null)
    const passwordRef=useRef(null)
    const {login,saveToken}=useAuth()
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!emailRef.current.value || !passwordRef.current.value) {
        console.error('Please fill in both email and password fields.');
        return;
      }
      const formData = new FormData();
  formData.append('email', emailRef.current.value);
  formData.append('password', passwordRef.current.value);

  try {
    const response = await axios.post('http://localhost:8000/api/user/login/', formData);
     
    const user = response.data.user;
    console.log(response);

    if (user && user.email === emailRef.current.value) {
      // const sessionToken = response.data.token;
      saveToken(response.data.token)
      // console.log(sessionToken);
      login(user);
      console.log(user);
      console.log('Login successful:', user);
      navigate('/');
    } else {
      setError('Invalid email or password.');
      console.error('Invalid email or password.');
    }
  } catch (error) {
    setError('Login failed. Please try again.');
    console.error('Login failed:', error.response.data.message);
  }
      
  };
  
  return (
    <>
    <div className='l-body'>
    <div className="l-container">
    {error && <div className="error-message">{error}</div>}
  <div className="l-card">
    <h2>Login</h2>
    <form className='form' onSubmit={handleSubmit}>
      <input className='input'
        type="email"
        ref={emailRef}
        id="username"
        name="email"
        placeholder="Email"
        required=""
      />
      <input className='input'
        type="password"
        ref={passwordRef}
        id="password"
        name="password"
        placeholder="Password"
        required=""
      />
      <button className='button' type="submit">Login</button>
    </form>
  </div>
</div>
</div>
<Footer/>

  </>
  )
}

export default Login