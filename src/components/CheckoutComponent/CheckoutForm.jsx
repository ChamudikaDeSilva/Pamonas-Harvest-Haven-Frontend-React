import React, { useState, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { CartContext } from '../../CartContext';
import AuthContext from '../../AuthContext'; // Import AuthContext for authentication
import SuccessModal from './SuccessModal';

const stripePromise = loadStripe('pk_test_51PiCIrEwYbDgtEhczRVguhi5v83HYID2ovbzrsZmQbtzQYk7AJgLf0oo8UZmFksiFySG30Yx5jfU6LaeikzYTPXa00ygqCf60a');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { cartItems, clearCart } = useContext(CartContext);
    const { user } = useContext(AuthContext); // Get user from AuthContext

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        billingAddress: '',
        city: '',
        country: '',
        postalCode: '',
        phone: '',
        email: '',
        shippingAddress: ''
    });

    const [paymentType, setPaymentType] = useState('card');
    const [error, setError] = useState(null);
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePaymentTypeChange = (e) => {
        setPaymentType(e.target.value);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (parseFloat(item.price) * (item.quantity || 1)), 0);
    };

    const totalAmount = calculateTotal();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
            return;
        }
    
        const orderData = {
            formData,
            total_amount: totalAmount,
            payment_type: paymentType, // Ensure payment_type is included here
        };
    
        try {
            if (paymentType === 'card') {
                const cardNumberElement = elements.getElement(CardNumberElement);
    
                const { error, paymentMethod } = await stripe.createPaymentMethod({
                    type: 'card',
                    card: cardNumberElement,
                    billing_details: {
                        name: `${formData.firstName} ${formData.lastName}`,
                        address: {
                            line1: formData.billingAddress,
                            city: formData.city,
                            country: formData.country,
                            postal_code: formData.postalCode,
                        },
                        email: formData.email,
                        phone: formData.phone,
                    },
                });
    
                if (error) {
                    setError('Error with card details: ' + error.message);
                    return;
                }
    
                const response = await axios.post('http://127.0.0.1:8000/api/create-payment-intent', {
                    total_amount: totalAmount,
                    payment_method_id: paymentMethod.id,
                    formData,
                    payment_type: paymentType // Include payment_type here as well
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    }
                });
    
                const { client_secret } = response.data;
    
                const { error: confirmError } = await stripe.confirmCardPayment(client_secret, {
                    payment_method: paymentMethod.id,
                });
    
                if (confirmError) {
                    setError('Payment confirmation error: ' + confirmError.message);
                    return;
                }
    
                setFormData({
                    firstName: '',
                    lastName: '',
                    billingAddress: '',
                    city: '',
                    country: '',
                    postalCode: '',
                    phone: '',
                    email: '',
                    shippingAddress: ''
                });
                setSuccessModalOpen(true);
                clearCart();
            } else {
                await axios.post('http://127.0.0.1:8000/api/place-order', orderData, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    }
                });
    
                setFormData({
                    firstName: '',
                    lastName: '',
                    billingAddress: '',
                    city: '',
                    country: '',
                    postalCode: '',
                    phone: '',
                    email: '',
                    shippingAddress: ''
                });
                setSuccessModalOpen(true);
                clearCart();
            }
        } catch (error) {
            setError('Error placing order: ' + (error.response?.data?.message || error.message));
        }
    };

    const handleCloseModal = () => {
        setSuccessModalOpen(false);
    };
    
    
    return (
        <div className="container mx-auto px-4 py-8 bg-white">
            <h2 className="flex items-center w-full pb-6">
                <span className="flex-grow bg-gray-200 rounded h-1"></span>
                <span className="mx-3 text-2xl font-semibold text-gray-600">Billing Details</span>
                <span className="flex-grow bg-gray-200 rounded h-1"></span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8 pl-8 pr-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Customer Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Billing Address</label>
                        <input type="text" name="billingAddress" value={formData.billingAddress} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">City</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country</label>
                            <input type="text" name="country" value={formData.country} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Shipping Details</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
                        <input type="text" name="shippingAddress" value={formData.shippingAddress} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                    </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Payment Type</label>
                            <div className="mt-2">
                                <label className="inline-flex items-center mr-4">
                                    <input 
                                        type="radio" 
                                        name="paymentType" 
                                        value="card" 
                                        checked={paymentType === 'card'} 
                                        onChange={handlePaymentTypeChange} 
                                        className="form-radio text-lime-500" 
                                    />
                                    <span className="ml-2">Card</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input 
                                        type="radio" 
                                        name="paymentType" 
                                        value="cash" 
                                        checked={paymentType === 'cash'} 
                                        onChange={handlePaymentTypeChange} 
                                        className="form-radio text-lime-500" 
                                    />
                                    <span className="ml-2">Cash on Delivery</span>
                                </label>
                            </div>
                        </div>

                    {paymentType === 'card' && (
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Card Number</label>
                            <CardNumberElement className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Expiration Date (MM/YY)</label>
                                    <CardExpiryElement className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">CVC</label>
                                    <CardCvcElement className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="text-center">
                    <button type="submit" className="mt-6 px-6 py-3 bg-lime-500 text-white rounded-md shadow-md hover:bg-lime-600">
                        Place Order
                    </button>
                </div>
                {error && <div className="text-red-500 mt-4">{error}</div>}
            </form>
            <SuccessModal isOpen={successModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

const WrappedCheckoutForm = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default WrappedCheckoutForm;
