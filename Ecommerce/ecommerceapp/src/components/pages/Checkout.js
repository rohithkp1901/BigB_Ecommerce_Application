import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
function Checkout({ cart }) {
  const {currentUser}=useAuth()
  console.log('CurrentUser in Checkout:', currentUser);
  const navigate = useNavigate();
  const userId = currentUser.id;

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return parseFloat(totalPrice.toFixed(2));
  };
  // useEffect(() => {
  //   console.log(cart);
  
  // }, [])
  
  const getCurrentUserSessionToken = () => {
    return currentUser.session_token;
  };
  const userSessionToken = getCurrentUserSessionToken();

  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    
    try {
      const orderDetails = {
        user: currentUser.id,  
        product: cart.map(item => item.id),
        // quantity: cart.map(item => item.quantity),
        total_price: getTotalPrice(),
      };
      
      await axios.post('http://localhost:8000/api/order/', orderDetails)
      .then((response)=>{console.log('Order placed successfully:', response.data);
      cart.forEach(async (item) => {
        await axios.patch(`http://localhost:8000/api/product/${item.id}/`, {
            stock: item.stock - item.quantity,
        });
    });
      const totalPrice= getTotalPrice()

      navigate(`/payment-gateway/${userId}/${userSessionToken}/${totalPrice}`);})
    //   navigate(`/payment-gateway/${userId}/${userSessionToken}/${getTotalPrice()}` ,{state: {
    //     totalPrice: getTotalPrice(),
    //   },
    // });})
      .catch((e)=>console.log(e));

      // console.log('Order placed successfully:', response.data);

      // navigate('/payment-gateway');
    } catch (error) {
      console.error('Error placing order:', error);
    }
    
  };

  

  return (
    <>
      <div className="d-flex container justify-content-between" style={{}}>
      
  <form id="form" style={{ boxSizing:"border-box",width:"400px"}}>
    <h2>checkout</h2>
    {currentUser ? (
    <>
    <h4 className="mt-1">Billing Details</h4>
    
      <div className="d-flex flex-column mt-3">
        <span className="d-block text-muted"> Name *</span>
        <input type="text" width={300} id="fn" placeholder="" value={currentUser.name} />
      </div>
      
    {/* <div className="d-flex flex-column mt-3 ">
      <span className="d-block text-muted">Country/Region *</span>
      <select name="Country" id="country">
        <option value="" />
        <option value="Argentina">Argentina</option>
        <option value="Brazil">Brazil</option>
        <option value="India">India</option>
      </select>
      <p id="ec" />
    </div> */}
    <div className="d-flex flex-column mt-3">
      <span className="d-block text-muted">Address *</span>
      <input  type="text" id="address" placeholder="" value={currentUser.address}/>
    </div>
    <div className="d-flex flex-column mt-3">
      <span className="d-block text-muted">Postcode/Zip *</span>
      <input  type="text" id="pin" placeholder="" />
    </div>
    <div className="d-flex flex-column mt-3">
      <span className="d-block text-muted">Town/City *</span>
      <input  type="text" id="city" placeholder="" />
    </div>
    <div className="d-flex flex-column mt-3">
      <span className="d-block text-muted">Phone *</span>
      <input  type="tel" id="num" placeholder="" value={currentUser.phone}/>
    </div>
    <div className="d-flex flex-column mt-3">
      <span className="d-block text-muted">Email Address *</span>
      <input className='input-checkout' type="email" id="mail" placeholder="" value={currentUser.email}/> 
    </div>
    <h4 className="mt-5">Additional Information</h4>
    <div className="d-flex flex-column mt-3">
      <span className="d-block text-muted">Order Name(Optional)</span>
      <input  type="text" />
    </div>
    </>
  ) : (
    <p>User information not available</p>
  )}
    
    <button
      className="btn btn-primary mt-3 px-4"
      style={{ borderRadius: 20 }}
      id="btn1"
      onClick={handleConfirmOrder}
    >
      Place Order
    </button>
  </form>
  <div className=" d-flex align-items-center div-total">
    <div className="bg-secondary " style={{ width: 600, height: 250 }}>
      <div className="d-flex  justify-content-between mx-2 mt-3 flex-nowrap">
        <div className="d-flex flex-column">
        <h3>Order Summary</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.pname} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        </div>
      </div>
      <div className="d-flex gap-3 mx-5 my-4">
        <span className="d-inline-block">TOTAL:  $</span>
        <input className='input-checkout' type="text" id="ct" value={getTotalPrice()} />
      </div>
    </div>
  </div>
</div>
<Footer/>
    </>
  );
}

export default Checkout;
