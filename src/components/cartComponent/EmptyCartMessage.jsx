import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const EmptyCartMessage = () => {
    return (
        <div className="relative rounded-lg border border-gray-200 shadow-lg p-4 mb-4 transition duration-500 ease-in-out transform hover:scale-100 hover:shadow-xl">
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
                        <button className="mt-2 bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-300 ease-in-out">
                            <FontAwesomeIcon icon={faArrowLeftLong} className="mr-2 text-white" />
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmptyCartMessage;
