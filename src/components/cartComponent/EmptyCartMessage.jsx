import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCartMessage = () => {
    return (
        <div className="relative rounded-lg border border-gray-200 shadow-lg p-4 mb-4 transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-4">
                <img
                    alt="Empty Cart"
                    src="/Images/cart-empty.jpg"
                    className="h-24 w-24 rounded-lg object-cover transition duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="transition duration-500 ease-in-out transform hover:translate-x-1">
                    <p className="font-medium text-red-500 text-lg mb-1">No products in your cart</p>
                    <p className="line-clamp-1 text-sm text-gray-500 mb-2">
                        Your cart is currently empty. Continue shopping to add items to your cart.
                    </p>
                    <Link to="/shop">
                        <button className="mt-2 bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmptyCartMessage;
