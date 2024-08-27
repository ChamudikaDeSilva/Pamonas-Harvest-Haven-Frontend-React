import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import IsLoading from '../commonComponent/IsLoading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Fetch orders from the backend
    const fetchOrders = useCallback(async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/user/orders', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setOrders(response.data.orders);
            setFilteredOrders(response.data.orders);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    }, []);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);

    // Filter orders by search input or date range
    useEffect(() => {
        let filtered = orders;

        if (search) {
            filtered = filtered.filter(order =>
                order.order_code.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (startDate && endDate) {
            filtered = filtered.filter(order => {
                const orderDate = new Date(order.date);
                return orderDate >= new Date(startDate) && orderDate <= new Date(endDate);
            });
        }

        setFilteredOrders(filtered);
        setIsLoading(false);
    }, [search, startDate, endDate, orders]);

    return (
        <div className='flex flex-col w-full p-6 bg-white'>
            {isLoading && (
                <div className='absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50'>
                    <IsLoading />
                </div>
            )}
            <div className="flex items-center justify-center pl-6 mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 md:mb-6" style={{ 
                    textShadow: '1px 1px 0 #15803d, -1px -1px 0 #15803d, 1px -1px 0 #15803d, -1px 1px 0 #15803d' 
                }}>
                    My Orders
                </h2>
                <div className="h-px flex-1 bg-green-600 pr-24"></div>
            </div>
            <div className='flex flex-col md:flex-row justify-center mb-6'>
                <input
                    type="text"
                    className="border border-lime-500 p-3 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent mb-4 md:mb-0"
                    placeholder="Search by order code"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="flex space-x-2 ml-0 md:ml-4">
                    <input
                        type="date"
                        className="border border-lime-500 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <input
                        type="date"
                        className="border border-lime-500 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>
            <div className="overflow-x-auto pr-20 pl-20 pb-20">
                <table className="min-w-full bg-white border border-gray-200 mx-auto text-center">
                    <thead className="bg-amber-100 font-light">
                        <tr>
                            <th className="py-4 px-6 border-b">Order Code</th>
                            <th className="py-4 px-6 border-b">Total</th>
                            <th className="py-4 px-6 border-b">Date</th>
                            <th className="py-4 px-6 border-b">Status</th>
                            <th className="py-4 px-6 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-100">
                                <td className="py-4 px-6 border-b font-light">{order.order_code}</td>
                                <td className="py-4 px-6 border-b font-light">{order.total_amount}</td>
                                <td className="py-4 px-6 border-b font-light">{order.date}</td>
                                <td className="py-4 px-6 border-b font-light">{order.status}</td>
                                <td className="py-4 px-6 border-b font-light flex justify-center space-x-4">
                                    <FontAwesomeIcon icon={faPenToSquare} className="text-lime-500 cursor-pointer" />
                                    <FontAwesomeIcon icon={faEye} className="text-lime-500 cursor-pointer" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
