import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
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
        <div className="mx-auto py-8  pb-16 w-screen bg-gray-50">
        <div className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-10 bg-gradient-to-r from-green-300 via-amber-200 to-lime-200">
            <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/logo1.png)', opacity: 0.05 }}
            ></div>
            <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Order Details</h2>
                
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                        <p className="text-lg"><strong>Order Code:</strong> {orderDetails.order_code}</p>
                        <p className="text-lg"><strong>Total Amount:</strong> Rs.{orderDetails.total_amount}</p>
                        <p className="text-lg"><strong>Date:</strong> {orderDetails.date}</p>
                        <p className="text-lg"><strong>Status:</strong> 
                            <span className={`ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                orderDetails.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                                {orderDetails.status === 'Completed' ? <FaCheckCircle className="mr-1"/> : <FaTimesCircle className="mr-1"/>}
                                {orderDetails.status}
                            </span>
                        </p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                        <p className="text-lg"><strong>Shipping Address:</strong> {orderDetails.shipping_address}</p>
                        <p className="text-lg"><strong>Country:</strong> {orderDetails.country}</p>
                        <p className="text-lg"><strong>Payment Status:</strong> {orderDetails.payment_status}</p>
                        <p className="text-lg"><strong>Phone Number:</strong> {orderDetails.phone}</p>
                        <p className="text-lg"><strong>Email:</strong> {orderDetails.email}</p>
                    </div>
                </div>

                <h3 className="text-3xl font-semibold mb-4 text-gray-800">Order Items</h3>
                <div className="space-y-4">
                    {orderDetails.items.map((item) => (
                        <div key={item.id} className="p-6 bg-white rounded-lg shadow-md flex justify-between items-center">
                            <div>
                                <h4 className="text-xl font-medium text-gray-900">{item.product_name}</h4>
                                <p className="text-gray-600"><strong>Quantity:</strong> {item.quantity}</p>
                                <p className="text-gray-600"><strong>Selling Unit:</strong> {item.product.unit}</p>
                                <p className="text-gray-600"><strong>Unit Price:</strong> Rs.{item.unit_price}</p>
                            </div>
                            <div>
                                <p className="text-lg text-gray-900"><strong>Discounted Price:</strong> Rs.{item.current_price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Display Discounts if Available */}
                {orderDetails.discounts && orderDetails.discounts.length > 0 && (
                    <div className="mt-8">
                        <h3 className="text-3xl font-semibold mb-4 text-gray-800">Order Discounts</h3>
                        <div className="space-y-4">
                            {orderDetails.discounts.map((discount) => (
                                <div key={discount.discount_id} className="p-6 bg-white rounded-lg shadow-md">
                                    <p className="text-lg text-gray-600"><strong>Discount ID:</strong> {discount.discount_id}</p>
                                    <p className="text-lg text-gray-600"><strong>Total:</strong> Rs.{discount.previous_price}</p>
                                    <p className="text-lg text-gray-600"><strong>Discount Amount:</strong> Rs.{discount.discount_amount}</p>  
                                    <p className="text-lg text-gray-900"><strong>Discounted Total:</strong> Rs.{discount.current_price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default OrderDetails;
