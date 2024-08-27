import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IsLoading from '../commonComponent/IsLoading';

const OrderDetails = () => {
    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/user/orders/${orderId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setOrderDetails(response.data.order);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <IsLoading />
            </div>
        );
    }

    return (
        <div className="relative max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-lg p-6">
            <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/logo1.png)', opacity: 0.2 }}
            ></div>
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Details</h2>
                
                <div className=" p-4 mb-6">
                    <p className="text-lg"><strong>Order Code:</strong> {orderDetails.order_code}</p>
                    <p className="text-lg"><strong>Total Amount:</strong> Rs.{orderDetails.total_amount}</p>
                    <p className="text-lg"><strong>Date:</strong> {orderDetails.date}</p>
                    <p className="text-lg"><strong>Status:</strong> {orderDetails.status}</p>
                    <p className="text-lg"><strong>Shipping Address:</strong> {orderDetails.shipping_address}</p>
                    <p className="text-lg"><strong>Country:</strong> {orderDetails.country}</p>
                    <p className="text-lg"><strong>Payment Status:</strong> {orderDetails.payment_status}</p>
                    <p className="text-lg"><strong>Phone Number:</strong> {orderDetails.phone}</p>
                    <p className="text-lg"><strong>Email:</strong> {orderDetails.email}</p>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-gray-700">Order Items:</h3>
                <ul className="list-disc pl-6">
                    {orderDetails.items.map((item) => (
                        <li key={item.id} className="mb-4 p-4">
                            <div className="text-lg font-medium text-gray-800"><strong>Product Name:</strong> {item.product_name}</div>
                            <div className="text-lg text-gray-600"><strong>Quantity:</strong> {item.quantity}</div>
                            <div className="text-lg text-gray-600"><strong>Selling Unit:</strong> {item.product.unit}</div>
                            <div className="text-lg text-gray-600"><strong>Unit Price:</strong> Rs.{item.unit_price}</div>
                            <div className="text-lg text-gray-600"><strong>Discounted Price:</strong> Rs.{item.current_price}</div>
                        </li>
                    ))}
                </ul>

                {/* Display Discounts if Available */}
                {orderDetails.discounts && orderDetails.discounts.length > 0 && (
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Order Discounts:</h3>
                        <ul className="list-disc pl-6">
                            {orderDetails.discounts.map((discount) => (
                                <li key={discount.discount_id} className="mb-4 p-4">
                                    <div className="text-lg text-gray-600"><strong>Discount ID:</strong> {discount.discount_id}</div>
                                    <div className="text-lg text-gray-600"><strong>Total:</strong> Rs.{discount.previous_price}</div>
                                    <div className="text-lg text-gray-600"><strong>Discount Amount:</strong> Rs.{discount.discount_amount}</div>  
                                    <div className="text-lg text-gray-600"><strong>Discounted Total:</strong> Rs.{discount.current_price}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderDetails;
