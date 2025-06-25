import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import IsLoading from '../commonComponent/IsLoading';
import OrderTracking from './OrderTracking';

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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-gray-100 py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-6 mb-6">
                    <img src="/images/1.png" alt="Logo" className="h-14 object-contain w-24 h-24"  />
                    <div className="text-right space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900">
                            {orderDetails.payment_status === 'paid' ? 'Invoice' : 'Order'}
                        </h2>

                        <p className="text-sm text-gray-600">Order ID: <span className="font-semibold">{orderDetails.order_code}</span></p>
                        <p className="text-sm text-gray-600">Date: {orderDetails.date}</p>
                    </div>
                </div>

                {/* Customer & Shipping Info */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Billing Info</h3>
                        <p><strong>Name:</strong> {orderDetails.first_name || 'N/A'}</p>
                        <p><strong>Email:</strong> {orderDetails.email}</p>
                        <p><strong>Phone:</strong> {orderDetails.phone}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Shipping Info</h3>
                        <p><strong>Address:</strong> {orderDetails.shipping_address}</p>
                        <p><strong>Country:</strong> {orderDetails.country}</p>
                        <p><strong>Payment Status:</strong> {orderDetails.payment_status}</p>
                    </div>
                </div>

                {/* Order Items */}
                <h3 className="text-xl font-bold mb-4 text-gray-900">Order Items</h3>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse mb-6">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="py-3 px-4 text-left">Product</th>
                                <th className="py-3 px-4 text-left">Unit</th>
                                <th className="py-3 px-4 text-center">Quantity</th>
                                <th className="py-3 px-4 text-right">Unit Price</th>
                                <th className="py-3 px-4 text-right">Discount</th>
                                <th className="py-3 px-4 text-right">Line Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderDetails.items.map(item => {
                                let displayQuantity = item.quantity;
                                    displayQuantity = item.quantity/item.product.unit

                                return (
                                    <tr key={item.id} className="border-b text-gray-700">
                                        <td className="py-2 px-4">{item.product_name}</td>
                                        <td className="py-2 px-4">{item.product.unit}g</td>
                                        <td className="py-2 px-4 text-center">{displayQuantity}</td>
                                        <td className="py-2 px-4 text-right">Rs.{item.unit_price}</td>
                                        <td className="py-2 px-4 text-right">
                                            {item.unit_price > item.current_price ? `Rs.${(item.unit_price - item.current_price) * displayQuantity}` : 'Rs.0'}
                                        </td>
                                        <td className="py-2 px-4 text-right font-semibold">Rs.{item.current_price * displayQuantity}.00</td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>

                {/* Discount Section */}
                {orderDetails.discounts?.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Discount Summary</h3>
                        {orderDetails.discounts.map(discount => (
                            <div key={discount.discount_id} className="p-4 bg-blue-50 rounded-md mb-4">
                                <p><strong>Discount ID:</strong> {discount.discount_id}</p>
                                <p><strong>Original Total:</strong> Rs.{discount.previous_price}</p>
                                <p><strong>Discount:</strong> Rs.{discount.discount_amount}</p>
                                <p className="font-semibold"><strong>Final Price:</strong> Rs.{discount.current_price}</p>
                            </div>
                        ))}
                    </div>
                )}

               {/* Status and Total */}
                <div className="flex justify-between items-center mt-8 border-t pt-6">
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold">Order Status:</p>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                orderDetails.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                                {orderDetails.status === 'Completed' ? <FaCheckCircle className="mr-1" /> : <FaTimesCircle className="mr-1" />}
                                {orderDetails.status}
                            </span>
                        </div>

                        {/* Delivery Charges */}
                        {(() => {
                            let totalItemAmount = 0;

                            orderDetails.items.forEach(item => {
                                const calculatedQty = item.quantity / item.product.unit;
                                totalItemAmount += item.current_price * calculatedQty;
                            });

                            const deliveryCharge = orderDetails.total_amount - totalItemAmount;

                            return (
                                <p className="text-md font-semibold text-gray-700">
                                    Delivery Charges: Rs.{deliveryCharge.toFixed(2)}
                                </p>
                            );
                        })()}
                    </div>

                    <p className="text-xl font-bold text-gray-900">Total Paid: Rs.{orderDetails.total_amount}</p>
                </div>


                {/* Action Buttons */}
                <div className="flex justify-end mt-6 gap-4">
                    <Link to="/my-account" className="text-blue-600 hover:underline flex items-center gap-1">
                        <FontAwesomeIcon icon={faCircleArrowLeft} />
                        Back to My Account
                    </Link>
                    <button onClick={openModal} className="text-blue-600 hover:underline flex items-center gap-1">
                        <FontAwesomeIcon icon={faCircleInfo} />
                        Track Order
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && <OrderTracking closeModal={closeModal} orderId={orderId} />}
        </div>
    );
};

export default OrderDetails;
