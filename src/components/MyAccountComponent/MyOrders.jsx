import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IsLoading from '../commonComponent/IsLoading';
import { faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const navigate = useNavigate();

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

    const getStatusClass = (status) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-200 text-yellow-800';
            case 'completed':
                return 'bg-blue-200 text-blue-800';
            case 'processing':
                return 'bg-green-200 text-green-800';
            case 'cancelled':
                return 'bg-red-200 text-red-800';
            default:
                return 'bg-gray-200 text-gray-800'; 
        }
    };

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

    // Calculate the paginated orders
    const paginatedOrders = filteredOrders.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleViewOrder = (orderId) => {
        navigate(`/view-my-orders/${orderId}`);
    }

    return (
        <div className='flex flex-col w-full p-6 bg-fixed bg-cover bg-center'style={{ backgroundImage: `url('/Images/Pamonas/frame2.jpg')` }}>
          
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
                <div className="h-px flex-1 bg-green-200 pr-24"></div>
            </div>
            <div className='flex flex-col md:flex-row justify-center mb-6'>
            <input
                type="text"
                className="border border-lime-500 backdrop-blur-sm bg-white/50 p-3 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent mb-4 md:mb-0 placeholder-black"
                placeholder="Search by order code"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

                <div className="flex space-x-2 ml-0 md:ml-4">
                    <input
                        type="date"
                        className="border border-lime-500 p-3  backdrop-blur-sm bg-white/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <input
                        type="date"
                        className="border border-lime-500 p-3 backdrop-blur-sm bg-white/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>
            <div className="overflow-x-auto pr-20 pl-20 pb-20">
                <table className="min-w-full backdrop-blur-sm bg-white/50 border border-gray-200 mx-auto text-center">
                    <thead className="bg-amber-100 ">
                        <tr>
                            <th className="py-4 px-6 border-b text-xl font-bold">Order Code</th>
                            <th className="py-4 px-6 border-b text-xl font-bold">Total</th>
                            <th className="py-4 px-6 border-b text-xl font-bold">Date</th>
                            <th className="py-4 px-6 border-b text-xl font-bold">Status</th>
                            <th className="py-4 px-6 border-b text-xl font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-100">
                                <td className="py-4 px-6 border-b font-semibold">{order.order_code}</td>
                                <td className="py-4 px-6 border-b font-semibold">Rs.{order.total_amount}</td>
                                <td className="py-4 px-6 border-b font-semibold">{order.date}</td>
                                <td className="py-4 px-6 border-b font-semibold">
                                <div className={`inline-block py-1 px-3 rounded-md ${getStatusClass(order.status)}`}>
                                    {order.status}
                                </div>
                                </td>
                                <td className="py-4 px-6 border-b font-light space-x-4">
                                    <FontAwesomeIcon icon={faPenToSquare} className="text-green-700 cursor-pointer" />
                                    <FontAwesomeIcon icon={faEye} className="text-green-700 cursor-pointer" onClick={() => handleViewOrder(order.id)}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-full bg-white text-gray-700 disabled:opacity-50 font-semibold"
                >
                    Previous
                </button>
                <span className="px-4 py-2 rounded-full bg-lime-500 text-white font-semibold">
                    {currentPage}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-full bg-white text-gray-700 disabled:opacity-50 font-semibold"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MyOrders;
