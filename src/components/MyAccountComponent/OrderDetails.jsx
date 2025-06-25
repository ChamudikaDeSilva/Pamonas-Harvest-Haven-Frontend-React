import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import IsLoading from '../commonComponent/IsLoading';
import OrderTracking from './OrderTracking';
import { faCircleInfo, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const OrderDetails = () => {
    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await axios.get(`https://laravel-backend-production-dde3.up.railway.app/api/user/orders/${orderId}`, {
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

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div 
    className="mx-auto py-8 pb-16 w-screen bg-gray-50 relative"
    style={{ backgroundImage: 'url(/images/Pamonas/frame2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
>
        <div className="relative max-w-4xl mx-auto backdrop-blur-sm bg-white/50 rounded-lg shadow-lg p-8 mt-10">
            
        <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-4xl font-bold text-black">Order Details</h2>
                <div className="flex space-x-4">
                    <Link to="/my-account">
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="text-black text-2xl cursor-pointer" />
                    </Link>
                    <FontAwesomeIcon icon={faCircleInfo} className="text-black text-2xl cursor-pointer" onClick={openModal} />
                
                </div>
            </div>
                
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div className="p-6  rounded-lg shadow-md backdrop-blur-sm bg-white/20">
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
                    <div className="p-6  rounded-lg shadow-md backdrop-blur-sm bg-white/20">
                        <p className="text-lg"><strong>Shipping Address:</strong> {orderDetails.shipping_address}</p>
                        <p className="text-lg"><strong>Country:</strong> {orderDetails.country}</p>
                        <p className="text-lg"><strong>Payment Status:</strong> {orderDetails.payment_status}</p>
                        <p className="text-lg"><strong>Phone Number:</strong> {orderDetails.phone}</p>
                        <p className="text-lg"><strong>Email:</strong> {orderDetails.email}</p>
                    </div>
                </div>

                <h3 className="text-3xl font-semibold mb-4 text-black">Order Items</h3>
                <div className="space-y-4">
                    {orderDetails.items.map((item) => (
                        <div key={item.id} className="p-6 backdrop-blur-sm bg-white/20 rounded-lg shadow-md flex justify-between items-center">
                            <div>
                                <h4 className="text-xl font-medium text-gray-800">{item.product_name}</h4>
                                <p className="text-gray-600 font-light"><strong>Quantity:</strong> {item.quantity}</p>
                                <p className="text-gray-600 font-light"><strong>Selling Unit:</strong> {item.product.unit}</p>
                                <p className="text-gray-600 font-light"><strong>Unit Price:</strong> Rs.{item.unit_price}</p>
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
                        <h3 className="text-3xl font-semibold mb-4 text-black">Order Discounts</h3>
                        <div className="space-y-4">
                            {orderDetails.discounts.map((discount) => (
                                <div key={discount.discount_id} className="p-6 rounded-lg shadow-md backdrop-blur-sm bg-white/20">
                                    <p className="text-lg text-gray-600 font-light"><strong>Discount ID:</strong> {discount.discount_id}</p>
                                    <p className="text-lg text-gray-600 font-light"><strong>Total:</strong> Rs.{discount.previous_price}</p>
                                    <p className="text-lg text-gray-600 font-light"><strong>Discount Amount:</strong> Rs.{discount.discount_amount}</p>  
                                    <p className="text-lg text-gray-900 font-light"><strong>Discounted Total:</strong> Rs.{discount.current_price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
        {isModalOpen && <OrderTracking closeModal={closeModal} orderId={orderId}/>} {/* Modal component */}
        </div>
    );
};

export default OrderDetails;
