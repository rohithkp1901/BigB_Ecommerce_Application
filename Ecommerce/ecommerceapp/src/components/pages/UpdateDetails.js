import React, { useState, useEffect } from 'react';
import './css/Register.css'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import { useAuth } from '../AuthContext';

function UpdateDetails() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const genderRef = useRef(null);
  const addressRef = useRef(null);
  const {currentUser}=useAuth()
  const [userDetails, setUserDetails] = useState({});
  const USER_ID=currentUser.id
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://127.0.0.1:8000/api/user/${USER_ID}/`, {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      gender: genderRef.current.value,
      password: passwordRef.current.value,
    })
      .then((res) => {
        alert('updated logout and re-login')
        navigate('/'); 
      })
      .catch((error) => {
        console.error('Error updating user details:', error);
      });
  };

  return (
    <>
      <div className='r-body'>
        <div className="r-container">
          <div className="r-title">Update Details</div>
          <form className='r-form' onSubmit={handleSubmit}>
          <div className="r-user__details">
      <div className="r-input__box">
        <span className="r-details">Name</span>
        <input className='r-input' type="text" name='name' ref={nameRef} defaultValue={currentUser.name} required="" />
      </div>
      
      <div className="r-input__box">
        <span className="r-details">Email</span>
        <input className='r-input' type="email" name='email' ref={emailRef} defaultValue={currentUser.email} required="" />
      </div>

      <div className="r-input__box">
        <span className="r-details">Phone</span>
        <input className='r-input' type="tel" name='phone' ref={phoneRef} defaultValue={currentUser.phone} required="" />
      </div>
      <div className="r-input__box d-flex flex-direction-column">
        <span className="r-details">Address</span>
        <textarea rows={2} cols={30}  name='address' ref={addressRef} defaultValue={currentUser.address}></textarea>
      </div>

      <div className="r-input__box">
        <span className="r-details">Gender</span>
        <input className='r-input' type="text" name='gender' ref={genderRef} defaultValue={currentUser.gender} />
      </div>

      <div className="r-input__box">
        <span className="r-details">Password</span>
        <input className='r-input' type="password" name='password' ref={passwordRef} defaultValue={currentUser.password} placeholder='Enter password to update changes'  />
      </div>
          </div>
       <div className="r-button">
    
              <button className='button' type="submit">Update Details</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UpdateDetails;
