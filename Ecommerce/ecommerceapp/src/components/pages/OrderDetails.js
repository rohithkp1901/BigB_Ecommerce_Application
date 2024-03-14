import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import './css/OrderDetails.css'
import jsPDF from 'jspdf';
const OrderDetails = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {currentUser}=useAuth()
    const userId = currentUser.id

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/order/');
                const userOrders = response.data.filter(order => order.user === parseInt(userId));
                
                const updatedOrders = await Promise.all(userOrders.map(async order => {
                    const updatedProductList = await Promise.all(order.product.map(async productId => {
                        const productResponse = await axios.get(`http://127.0.0.1:8000/api/product/${productId}/`);
                        return productResponse.data;
                    }));
                    return { ...order, product: updatedProductList };
                }));

                setOrders(updatedOrders);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching orders:', error);
                setError('Error fetching orders. Please try again later.');
                setLoading(false);
            }
        };

        fetchOrders();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    
    const downloadPDF = async (order) => {
        const pdf = new jsPDF();
        
        pdf.text(`Order ID: ${order.id}`, 10, 10);
        pdf.text(`User ID: ${currentUser.id}`, 10, 20);
        pdf.text(`User Name: ${currentUser.name}`, 10, 30);
        pdf.text(`User Email: ${currentUser.email}`, 10, 40);
        pdf.text(`User Address: ${currentUser.address}`, 10, 50);
        pdf.text(`User Phone: ${currentUser.phone}`, 10, 60);
    
        let y = 80; // Adjust the initial vertical position
        for (const product of order.product) {
            // Load the image as a base64-encoded data URL
            const imageResponse = await axios.get(product.image, { responseType: 'arraybuffer' });
            const base64Image = btoa(
                new Uint8Array(imageResponse.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
    
            pdf.addImage(`data:image/jpeg;base64,${base64Image}`, 'JPEG', 10, y, 40, 40);
    
            pdf.text(`${product.pname} - $${product.price}`, 60, y + 15);
    
            y += 50; // Adjust the vertical position
        }
    
        pdf.text(`Total Price: $${order.total_price}`, 10, y + 10);
        
        pdf.save(`OrderBill_${order.id}.pdf`);
    };
    
    return (
        <div className="orders-page">
            <h1 className='text-dark'>My Orders</h1>
            <div className="orders-container">
                {orders.map(order => (
                    <div key={order.id} className="order-card">
                        <div className="order-header">
                            <h2>Order ID: <span className='text-success '>{order.id}</span></h2>
                        </div>
                        <div className="products-details">
                            {order.product.map(product => (
                                <div key={product.id} className="product-item">
                                    <img src={product.image} alt={product.pname} className="product-image" />
                                    <div className="product-info">
                                        <p className="product-name">{product.pname}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="order-footer">
                            <p>Total Price: <span className="total-price">${order.total_price}</span></p>
                            <button onClick={() => downloadPDF(order)} className='btn btn-primary'>Download PDF</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderDetails;