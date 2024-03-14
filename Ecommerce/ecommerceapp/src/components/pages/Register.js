import React, { useState } from 'react'
import './css/Register.css'
import {useNavigate} from 'react-router-dom'
import { useRef} from 'react'
import axios from 'axios'
import Footer from '../Footer'

function Register() {
    const navigate=useNavigate()
    const nameRef=useRef(null)
    const  emailRef=useRef(null)
    const passwordRef=useRef(null)
    const phoneRef=useRef(null)
    const genderRef=useRef(null)
    const addressRef=useRef(null)
    const [error, setError] = useState('');


    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!nameRef.current.value) {
          setError('Name is empty.');
          return;
      }
      if (!emailRef.current.value) {
          setError('Email is empty.');
          return;
      }
      if (!phoneRef.current.value) {
          setError('Phone is empty.');
          return;
      }
      if (!addressRef.current.value) {
          setError('Address is empty.');
          return;
      }
      if (!genderRef.current.value) {
          setError('Gender is empty.');
          return;
      }
      if (!passwordRef.current.value) {
          setError('Password is empty.');
          return;
      }
        axios.post('http://127.0.0.1:8000/api/user/',{name : nameRef.current.value, email :emailRef.current.value, phone:phoneRef.current.value,address:addressRef.current.value, gender:genderRef.current.value, password :passwordRef.current.value}).then(
            (res)=>{
                
                navigate('/login')
            }
        )
        .catch((error) => {
          if (error.response && error.response.status === 409) {
            setError('Email already exists.');
          } else {
            setError('Email already exists.');
          }
        });
    }
  return (
<>
  <div className='r-body'>
    <div  className="r-container">
  <div className="r-title">Registration</div>
  <form className='r-form' onSubmit={handleSubmit}>
  {error && <div className="error" style={{color:'#721c24', backgroundColor:'#f8d7da', border:'1px solid #f5c6cb',borderRadius:'0.25rem', padding:'0.75rem 1.25rem', marginBottom:'1rem'}}>{error}</div>}

    <div className="r-user__details">
      <div className="r-input__box">
        <span className="r-details">Name</span>
        <input className='r-input' type="text" name='name' ref={nameRef} placeholder="E.g: John Smith" required="" />
      </div>
      
      <div className="r-input__box">
        <span className="r-details">Email</span>
        <input className='r-input' type="email" name='email' ref={emailRef} placeholder="E.g: johnsmith@hotmail.com" required="" />
      </div>

      <div className="r-input__box">
        <span className="r-details">Phone</span>
        <input className='r-input' type="tel" name='phone' ref={phoneRef} placeholder="E.g: +91 9876543210" required="" minLength={10} maxLength={10} />
      </div>
      <div className="r-input__box d-flex flex-direction-column">
        <span className="r-details">Address</span>
        <textarea rows={2} cols={30}  name='address' ref={addressRef} placeholder='Address'></textarea>
      </div>

      <div className="r-input__box">
        <span className="r-details">Gender</span>
        <input className='r-input' type="text" name='gender' ref={genderRef} placeholder="Male or Female" required="" />
      </div>

      <div className="r-input__box">
        <span className="r-details">Password</span>
        <input className='r-input' type="password" name='password' ref={passwordRef} placeholder="********" required="" />
      </div>
          </div>
       <div className="r-button">
       <button className='button' type="submit">Register</button>
    </div>
  </form>
  </div>
  </div>
  <Footer/>

</>
  )
}

export default Register