import React, { useEffect, useState } from 'react'
import Footer from '../Footer';
import Header from '../Header';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext';

export default function SingleProduct({ addToCart }) {
  const { currentUser } = useAuth();
  const { Id } = useParams();
  const [product, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/${Id}/`);
        setProducts({ ...response.data, quantity: 1 });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [Id]);



  const handleAddToCart = () => {
    if(currentUser){
    addToCart({ ...product }); // Ensure to pass a new object to avoid state mutation
    navigate('/cart');
  }else{
    alert("Please Login or Signup to Add this product in your cart")
    navigate("/login");
  }
  };
  return (
    <>
      <div key={product.id} className="d-flex flex-row justify-content-around pt-5 mt-5">
        <div className="w-50 pt-5">
          <h1 style={{ paddingBottom: 20 }} id="p-name">
            {product.pname}
          </h1>
          <p className="p-dell" id="p-para" style={{ lineHeight: '22px' }}>
            {product.pdescription}
          </p>
          <div className="pt-4">
            <span style={{ fontSize: 20, fontWeight: "bold" }}>$</span>
            <span
              style={{ fontSize: 25, color: "brown", fontWeight: "bold" }}
              id="p-price"
            >
              {product.price}
            </span>
          </div>
          <div className="m-3 pt-4 quantity-box d-flex gap-3">
            <span>Quantity : &nbsp;{product.quantity}</span>
            <button className="btn btn-primary btn-sm" id="prod-addtocart" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
          <div className="d-flex gap-3">
            {product.is_active=== true?(
              <p style={{color:"green"}}>In Stock</p>
            ):(<p style={{color:"red"}}>Out of Stock</p>) }
          </div>
        </div>
        <div>
          <div className="d-flex flex-column gap-2">
            <img
              src={product.image}
              className="main-image"
              id="p-main"
              alt=""
              width="400px"
              height="400px"
            />

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
