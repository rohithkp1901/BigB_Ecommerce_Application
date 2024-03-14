import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext';

export default function AllProducts({ cart, addToCart: addToCartProp }) {
  const [allproducts, setallProducts] = useState([]);
  const navigate = useNavigate();
  const {currentUser}=useAuth()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/product/');
        setallProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    if (currentUser){
    addToCartProp(item);
    navigate('/cart');
  }
  else{
    alert("Please log in to add items to your cart");
    navigate("/login")
  }
  };

  return (
    <>
      <main className="container m-5">
        <h2 className="text-center">Related Products</h2>
        <div className="d-flex justify-content-around gap-2">
          {allproducts.map(item => (
            <div key={item.id} className="d-flex flex-column gap-2" style={{ border: "1px solid #ccc", padding: '10px' }} >
              <img
                src={item.image}
                alt={item.pname}
                width={300}
                height={300}
                style={{ border: "1px solid #ccc" }}
              />
              <h3 style={{ width: 300 }}>{item.pname}</h3>
              <h6 style={{ width: 300 }}>
                <Link to={`/singleproduct/${item.id}`}>
                  {item.pdescription}
                </Link>
              </h6>
              <p className="prod-related">
                <span style={{ fontSize: 15, fontWeight: "bold" }}>$</span>
                <span style={{ fontSize: 20, color: "brown", fontWeight: "bold" }}>
                  {item.price}
                </span>
              </p>
              <button
                className="prod-a"
                style={{ border: 'none', backgroundColor: 'orange' }}
                id="cartb"
                onClick={() => handleAddToCart(item)}
              >
                Add To Cart
              </button>
              {/* <button
                className="prod-a"
                style={{ border: 'none', backgroundColor: 'yellow' }}
                id="cartb"
              >
                Buy Now
              </button> */}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
