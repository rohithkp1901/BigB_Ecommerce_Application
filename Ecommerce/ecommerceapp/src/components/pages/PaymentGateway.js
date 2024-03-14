import React, { useState, useEffect } from 'react';
import axios from 'axios';
import braintree from 'braintree-web';
import { useAuth } from '../AuthContext';
import { useParams } from 'react-router-dom';
import './css/paymentgateway.css';

const PaymentGateway = () => {
    const { currentUser } = useAuth();
    const { totalPrice } = useParams();
    const [paymentMethodNonce, setPaymentMethodNonce] = useState('');
    const [clientToken, setClientToken] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(null);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/payment/gettoken/${currentUser.id}/${currentUser.session_token}/`)
            .then(response => {
                setClientToken(response.data.clientToken);

                braintree.client.create({
                    authorization: response.data.clientToken,
                }, (clientErr, clientInstance) => {
                    if (clientErr) {
                        console.error(clientErr);
                        return;
                    }

                });
            })
            .catch(error => {
                console.error('Error fetching client token:', error);
            });
    }, [currentUser.id, currentUser.session_token]);

    const handlePayment = async () => {
        try {
            if (!paymentMethodNonce) {
                console.error('Payment method not selected');
                return;
            }

            const response = await axios.post(`http://localhost:8000/api/payment/process/${currentUser.id}/${currentUser.session_token}/`, {
                paymentMethodNonce,
                amount: totalPrice,
            });

            if (response.data.success) {
                console.log('Payment successful!', response.data.transaction);

                const transactionDetails = response.data.transaction;
                setPaymentSuccess(`Payment successful! Transaction ID: ${transactionDetails.id}, Amount: ${transactionDetails.amount}`);
                

            } else {
                console.error('Payment failed:', response.data.error);
            }
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethodNonce(event.target.value);
    };

    return (
        <div className='p-container p-0 pt-5'>
            <div className='p-card px-4'>
                <h2 className='h8 py-3'>Payment Gateway</h2>
                <div className='row gx-3'>
                    <div className='col-12'>
                        <div className='d-flex flex-column'>
                            <input className="form-control mb-3" type="text" placeholder="Name" value={currentUser.name} readOnly />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='d-flex flex-column '>
                            <select className='form-control mb-3 custom-dropdown' onChange={handlePaymentMethodChange} value={paymentMethodNonce}>
                                <option value="">Select Payment Method</option>
                                <option value="fake-valid-nonce">Credit Card</option>
                                <option value="fake-android-pay-nonce">Google Pay</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='d-flex flex-column '>
                        <input class="form-control mb-3" type="text" placeholder="1234 5678 435678"/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <button className="p-btn btn btn-primary mb-3" onClick={handlePayment}>
                            <span className="ps-3">Pay ${totalPrice} </span>
                        </button>
                    </div>
                    <div className='col-12'>
                    {paymentSuccess && (
                        <>
                        <p className="text-success" style={{fontWeight:'bold'}}>{paymentSuccess}</p>
                        <p>Your Order is Placed</p>
                        </>
                    )}
                </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentGateway;
