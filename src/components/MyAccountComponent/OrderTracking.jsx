import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faFileInvoice, faTruck, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FaCheck, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const OrderTracking = ({ closeModal, orderId }) => {
    const [order, setOrder] = useState(null);
    const [currentStage, setCurrentStage] = useState(0);
    const[expectedArrival,setExpectedArrival]=useState(null);

    useEffect(() => {
        // Fetch order details from backend
        axios.get(`https://laravel-backend-production-b92c.up.railway.app/api/order-details/${orderId}`)
            .then(response => {
                setOrder(response.data.order);
                setCurrentStage(response.data.currentStage);
                setExpectedArrival(response.data.expectedArrival);
            })
            .catch(error => {
                console.error("There was an error fetching the order details!", error);
            });
    }, [orderId]);

    // Calculate the width of the filled portion of the progress bar based on the current stage
    const stageWidth = (currentStage / 4) * 100 + '%';
    
    // Calculate expected arrival (today + 7 days)
    const today = new Date();
    const expectedDate = new Date(today);
    expectedDate.setDate(today.getDate() + 7);

    // Format as YYYY-MM-DD or a more readable format
    const expected_Arrival = expectedDate.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });


    if (!order) return null; // Show nothing until the order is loaded

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75">
            <div className="bg-white rounded-lg w-full max-w-2xl p-8 shadow-lg mx-4 md:mx-0">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Track Your Order</h2>
                    <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">
                        <FaTimes />
                    </button>
                </div>

                <div className="tracking-progress">
                    <p className="text-lg">Invoice: #{order.order_code}</p>
                    <p className="text-sm text-gray-500 mb-6">Expected Arrival: {expected_Arrival}</p>

                    <div className="relative w-full">
                        {/* Progress Bar */}
                        <div className="relative w-full mt-8">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex-grow h-2 bg-gray-300 relative rounded-full">
                                    <div className="absolute h-full bg-lime-500 rounded-full" style={{ width: stageWidth }}></div>
                                </div>
                            </div>

                            {/* Stages on the Progress Bar */}
                            <div className="absolute inset-x-0 top-0 flex justify-between items-center w-full mt-[-1rem]">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index} className="relative flex flex-col items-center">
                                        <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                                            currentStage > index ? 'border-lime-500 bg-lime-500 text-white' : 'border-gray-300 bg-gray-300 text-white'
                                        }`}>
                                            {currentStage > index && <FaCheck />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stages */}
                        <div className="flex justify-between text-center">
                            <div className="relative flex flex-col items-center">
                                <FontAwesomeIcon icon={faFileInvoice} className="text-black text-3xl mb-2" />
                                <p className="text-sm font-semibold">Picking Products</p>
                            </div>
                            <div className="relative flex flex-col items-center">
                                <FontAwesomeIcon icon={faBox} className="text-black text-3xl mb-2" />
                                <p className="text-sm">Packing</p>
                            </div>
                            <div className="relative flex flex-col items-center">
                                <FontAwesomeIcon icon={faTruck} className="text-black text-3xl mb-2" />
                                <p className="text-sm">Out For Delivery</p>
                            </div>
                            <div className="relative flex flex-col items-center">
                                <FontAwesomeIcon icon={faHouse} className="text-gray-400 text-3xl mb-2" />
                                <p className="text-sm">Order Arrived</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;
