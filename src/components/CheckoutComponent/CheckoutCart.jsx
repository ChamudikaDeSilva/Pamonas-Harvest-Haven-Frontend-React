import React, { useContext } from 'react';


import { CartContext } from '../../CartContext';
import EmptyCartMessage from '../cartComponent/EmptyCartMessage';



const CheckoutCart = () => {
    const { cartItems } = useContext(CartContext);
    
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (parseFloat(item.price) * (item.quantity || 1)), 0);
    };

    

    const hasItems = cartItems.length > 0;

    return (
        <div className="bg-gray-100 h-auto py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-4 pt-10">
                    <div className="md:w-3/4">
                        {hasItems ? (
                            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                    <thead className="pb-2">
                                        <tr>
                                            <th className="text-left text-xl text-gray-600 font-bold pb-2">Product</th>
                                            <th className="text-left text-xl text-gray-600 font-bold pb-2">Price</th>
                                            <th className="text-left text-xl text-gray-600 font-bold pb-2">Quantity</th>
                                            <th className="text-left text-xl text-gray-600 font-bold pb-2">Total</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td className="py-4">
                                                    <div className="flex flex-col md:flex-row items-center">
                                                        <img
                                                            className="h-16 w-16 mb-2 md:mb-0 md:mr-4"
                                                            src={`http://localhost:8000${item.image}`}
                                                            alt={item.name || 'Product image'}
                                                        />
                                                        <span className="font-semibold text-center md:text-left">{item.name || 'Unnamed Product'}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4">Rs.{parseFloat(item.price).toFixed(2)}</td>
                                                
                                                <td className="py-4">
                                                        {item.quantity || 1} 
                                                </td>
                                                <td className="py-4">Rs.{(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <EmptyCartMessage />
                        )}
                    </div>
                    <div className="md:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>Rs.{calculateTotal().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2 text-red-500">
                                <span>Taxes</span>
                                <span>Rs.{hasItems ? 1.99 : 0.00}</span>
                            </div>
                            <div className="flex justify-between mb-2 text-red-500">
                                <span>Delivery</span>
                                <span>Rs.{hasItems ? 222.00 : 0.00}</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">Total</span>
                                <span className="font-semibold">Rs.{(calculateTotal() + (hasItems ? 1.99 : 0) + (hasItems ? 222.00 : 0)).toFixed(2)}</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutCart;
