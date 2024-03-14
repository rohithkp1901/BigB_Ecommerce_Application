import React, { useEffect } from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import ProductPage from './components/pages/ProductPage'
import AllProducts from './components/pages/AllProducts'
import { useState } from 'react'
import Cart from './components/pages/Cart'
import SingleProduct from './components/pages/SingleProduct'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import { AuthProvider } from './components/AuthContext'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Checkout from './components/pages/Checkout'
import PaymentGateway from './components/pages/PaymentGateway'
import Header from './components/Header'
import UpdateDetails from './components/pages/UpdateDetails'
import ProductSearch from './components/pages/ProductSearch'
import OrderDetails from './components/pages/OrderDetails'
export default function PathMaking() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/product/') ;
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (!searchTerm) {
      setFilteredProducts([]);
      return;
    }
    const filtered = products.filter((product) =>
      product.pname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  

  const handleQuantityChange = (itemId, newQuantity) => {
    newQuantity = Math.max(1, newQuantity);
  
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
      )
    );
  };
  const handleDeleteItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  } else {
    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
  }


  };
  return (
  <AuthProvider >  
    <Header onSearch={handleSearch} />
    <ProductSearch filteredProducts={filteredProducts}/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route exact path="/" element={<Home filteredProducts={filteredProducts}/>} />
      <Route path="/product/:categoryName" element={<ProductPage cart={cart} addToCart={addToCart}/>} />
      <Route path="/all" element={<AllProducts cart={cart} addToCart={addToCart}/>} />
      <Route path='/cart' element={<Cart cart={cart} handleQuantityChange={handleQuantityChange} handleDeleteItem={handleDeleteItem}/>}/>
      <Route path="/singleproduct/:Id" element={<SingleProduct addToCart={addToCart} />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/checkout' element={<Checkout cart={cart}/>}/>
      <Route path='/payment-gateway/:userId/:userSessionToken/:totalPrice' element={<PaymentGateway/>}/>
      <Route path='/update' element={<UpdateDetails/>}/>
      <Route path='/orders' element={<OrderDetails/>}/>



    </Routes>
  </AuthProvider>
        

  )
}
