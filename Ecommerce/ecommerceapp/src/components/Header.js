import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import axios from 'axios';
export default function Header({onSearch}) {
  
  const { currentUser,logout } = useAuth(); 
  const [username, setUsername] = useState('');

  const navigate=useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  useEffect(() => {
    console.log('currentUser changed:', currentUser);
    if (currentUser && currentUser.name) {
      setUsername(currentUser.name);
    }
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      const userId = currentUser.id;
      await axios.get(`http://127.0.0.1:8000/api/user/logout/${userId}`);
    } catch (error) {
      console.error('Error:', error);
    }

    logout();

    navigate('/');
  };
  
  const cartAlert = () => {
    alert('Please Login')
  };
  // if (!currentUser) {
  //   navigate('/');
  //   return null;
  // }
  const updateData=()=>{
    navigate('/update')
  }
  
  const orderedData=()=>{
    navigate('/orders')
  }
  
  return (
    <div>
      <div className="sticky-top" style={{ backgroundColor: "#ab5650" }}>
        <div className="container d-flex flex-column flex-md-row align-items-center pb-2 mb-4 flex-home">
          <Link to={'/'}
            className="d-flex align-items-center text-dark text-decoration-none"
          >
             <h1 style={{paddingTop:'15px'}}><span className='text-dark' style={{background:'white',paddingLeft:'10px',paddingRight:'10px'}}>Big</span><span style={{color:'red',background:'black',paddingLeft:'10px',paddingRight:'10px',fontWeight:'bold'}}>B</span></h1>
          </Link>
          <div>
      <input className='ms-3 mt-3  rounded-5 border-0'
        type="text"
        placeholder=" Search products"
        value={searchTerm}
        onChange={handleSearch}
      />
      
    </div>
          { currentUser ?(
          <nav className="d-flex flex-md-row  mt-2 mt-md-0 ms-md-auto ">
          <h4 style={{paddingLeft:'15px', color:'wheat'}}>Welcome, {username}({currentUser.email})</h4>
          </nav>
          ) : ('')}
          
          <nav className="d-flex flex-md-row  mt-2 mt-md-0 ms-md-auto ">
            <Link to={'/'}
              className="me-3 mt-3 text-dark text-decoration-none btn btn-outline-light" style={{border:"None"}}
              
            >
              Home
            </Link>
            <Link to={'/all'}
              className="me-3 mt-3 text-dark text-decoration-none btn btn-outline-light" style={{border:"None"}}
            >
              Shop
            </Link>
            <Link to={'/all'}
              className="me-3 mt-3 text-dark text-decoration-none btn btn-outline-light" style={{border:"None"}}
            >
              Sales
            </Link>
            <Link to={'/about'}
              className="me-3 mt-3 text-dark text-decoration-none btn btn-outline-light" style={{border:"None"}}
            >
              About Us
            </Link>
            <Link to={'/contact'}
              className="me-3 mt-3 text-dark text-decoration-none btn btn-outline-light" style={{border:"None"}}
              href="contact.html"
            >
              Contact
            </Link>
            {currentUser ? (
            <Link to={'/cart'}>
              <button className="btn btn-outline-light rounded-1  mt-3" style={{border:"None"}} id="h-login">
                <img src='https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png' alt='cart' width={20} height={20}/>
              </button>
            </Link>) : (
              <button className="btn btn-outline-light  mt-3" style={{border:"None"}} id="h-login" onClick={cartAlert}>
              <img src='https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png' alt='cart' width={20} height={20}/>
            </button>
            )}
            
            {currentUser ? (
            <div>
              <button
                className="btn btn-outline-light text-dark rounded-1 mt-3"
                style={{ border: "None" }}
                id="h-login"
                onClick={handleLogout}
              >
                Logout
              </button>
              <button className="btn btn-outline-light text-dark border-0  mt-3" onClick={updateData}>Update Profile</button>
              <button className="btn btn-outline-light text-dark border-0  mt-3" onClick={orderedData}>Orders</button>
            </div>
          ) : (
            <nav className="d-flex flex-md-row  mt-2 mt-md-0 ms-md-auto ">
              <Link
                to={'/register'}
                className="me-3 mt-3 text-dark text-decoration-none btn btn-outline-light"
                style={{ border: "None" }}
              >
                Register
              </Link>
              <Link
                to={'/login'}
                className="me-3 mt-3 text-dark text-decoration-none btn btn-outline-light"
                style={{ border: "None" }}
              >
                Login
              </Link>
              </nav>
              )}
          </nav>
        </div>
      </div>
      </div>
  
  )
}
