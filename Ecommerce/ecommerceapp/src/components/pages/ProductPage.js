import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Footer from '../Footer';

export default function ProductPage({ cart, addToCart: addToCartProp }) {
  const [products, setProducts] = useState([]);
  const {categoryName} = useParams();
  const {currentUser}= useAuth();

  const navigate=useNavigate()
  useEffect(() => {
    fetch(`http://localhost:8000/api/product/`)
      .then(response => response.json())
      .then(data => {
        const filteredProducts = data.filter(product => product.category_name === categoryName);
        setProducts(filteredProducts);
      })
      .catch(error => console.error('Error:', error));
  }, [categoryName]);

  const handleAddToCart = (product) => {
    if (currentUser){
    addToCartProp(product);
    navigate('/cart');
  }
  else{
    alert("Please log in to add items to your cart");
    navigate("/login")
  }
  };

  return (
    <>
    <div className='ms-5' style={{textAlign:'center'}}>
      <h1>Products for Category <span style={{fontWeight:'bold',color:'indigo'}}>{categoryName}</span></h1>
      <div className="d-flex flex-row gap-2 mt-5 flex-wrap">
        {products.map(product => (
          <div key={product.id} className="d-flex flex-column ms-5 align-items-center justify-content-center gap-2" style={{width:'320px',padding:'10px' ,border:'1px solid gray',height:'Auto'}}>
            <div style={{marginTop:'10px'}}>
              <img
                src={product.image}
                alt={product.name}
                width="200px"
                height="150px"
              />
            </div>
            <div className="pe-3 " style={{width:"260px"}}>
              <span className="mens">{product.pname}</span>
            </div>
            <h6 style={{ width: 300 }}>
                <Link to={`/singleproduct/${product.id}`}>
                  {product.pdescription}
                </Link>
              </h6>
              <p className="prod-related">
                <span style={{ fontSize: 15, fontWeight: "bold" }}>$</span>
                <span style={{ fontSize: 20, color: "brown", fontWeight: "bold" }}>
                  {product.price}
                </span>
              </p>
              <button
                className="prod-a"
                style={{ border: 'none', backgroundColor: 'orange' }}
                id="cartb"
                onClick={() => handleAddToCart(product)}
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
    </div>
    <Footer/>
    </>
  );
}
