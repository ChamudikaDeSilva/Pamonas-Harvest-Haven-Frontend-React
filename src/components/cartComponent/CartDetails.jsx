import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import EmptyCartMessage from './EmptyCartMessage';
import SignupModal from '../shopComponent/SignupModal';
import SigninModal from '../shopComponent/SigninModal';

const CartDetails = () => {
    const { cartItems, updateItemQuantity, removeItemFromCart } = useContext(CartContext);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (parseFloat(item.price) * (item.quantity || 1)), 0);
    };

    const handleQuantityChange = (index, change) => {
        const newQuantity = cartItems[index].quantity + change;
        updateItemQuantity(index, newQuantity);
    };

    const handleRemoveItem = (index) => {
        removeItemFromCart(index);
    };

    const handleProceedToCheckout = () => {
        setIsSignupModalOpen(true);
        setIsSigninModalOpen(false);
    };

    const handleSwitchToSignin=()=> {
        setIsSigninModalOpen(true);
        setIsSignupModalOpen(false);
    };

    const handleSwitchToSignup=()=> {
        setIsSigninModalOpen(false);
        setIsSignupModalOpen(true);
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
                                            <th className="text-left text-xl text-gray-600 font-bold pb-2">Action</th>
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
                                                    <div className="flex items-center">
                                                        <button
                                                            className="border rounded-md py-2 px-4 mr-2"
                                                            onClick={() => handleQuantityChange(index, -1)}
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-center w-8">{item.quantity || 1}</span>
                                                        <button
                                                            className="border rounded-md py-2 px-4 ml-2"
                                                            onClick={() => handleQuantityChange(index, 1)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="py-4">Rs.{(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}</td>
                                                <td className="py-4">
                                                    <FontAwesomeIcon
                                                        icon={faTrash}
                                                        className="text-red-500 text-lg hover:text-red-700 transition duration-300"
                                                        onClick={() => handleRemoveItem(index)}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="flex justify-between mt-4">
                                    <Link to="/shop">
                                        <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg">
                                            Continue Shopping
                                        </button>
                                    </Link>
                                </div>
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
                            <div className="flex justify-between mb-2">
                                <span>Taxes</span>
                                <span>Rs.{hasItems ? 1.99 : 0.00}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Delivery</span>
                                <span>Rs.{hasItems ? 222.00 : 0.00}</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">Total</span>
                                <span className="font-semibold">Rs.{(calculateTotal() + (hasItems ? 1.99 : 0) + (hasItems ? 222.00 : 0)).toFixed(2)}</span>
                            </div>
                            <button
                                className={`bg-lime-500 text-white font-bold hover:bg-lime-600 py-2 px-4 rounded-lg mt-4 w-full ${!hasItems ? 'cursor-not-allowed opacity-50' : ''}`}
                                disabled={!hasItems}
                                onClick={handleProceedToCheckout}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <SignupModal
                isOpen={isSignupModalOpen}
                onClose={() => setIsSignupModalOpen(false)}
                onSwitchToSignin={handleSwitchToSignin}
            />
            <SigninModal
                isOpen={isSigninModalOpen}
                onClose={() => setIsSigninModalOpen(false)}
                onSwitchToSignup={handleSwitchToSignup}
                    
                
            />
        </div>
    );
};

export default CartDetails;