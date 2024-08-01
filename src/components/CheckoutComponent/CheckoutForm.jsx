import React, { useState, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { CartContext } from '../../CartContext';
import AuthContext from '../../AuthContext'; // Import AuthContext for authentication

const stripePromise = loadStripe('pk_test_51PiCIrEwYbDgtEhczRVguhi5v83HYID2ovbzrsZmQbtzQYk7AJgLf0oo8UZmFksiFySG30Yx5jfU6LaeikzYTPXa00ygqCf60a');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { cartItems } = useContext(CartContext);
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
            payment_type: paymentType,
        };
    
        try {
            if (paymentType === 'card') {
                const cardNumberElement = elements.getElement(CardNumberElement);
                const cardExpiryElement = elements.getElement(CardExpiryElement);
                const cardCvcElement = elements.getElement(CardCvcElement);
    
                const { error, paymentMethod } = await stripe.createPaymentMethod({
                    type: 'card',
                    card: {
                        number: cardNumberElement.value,
                        exp_month: cardExpiryElement.value.split('/')[0],
                        exp_year: cardExpiryElement.value.split('/')[1],
                        cvc: cardCvcElement.value,
                    },
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
    
                orderData.payment_method_id = paymentMethod.id;
    
                await axios.post('http://127.0.0.1:8000/api/process-payment', orderData, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    }
                });
            } else {
                await axios.post('http://127.0.0.1:8000/api/place-order', orderData, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    }
                });
            }

            // Handle success
            alert('Order placed successfully!');
        } catch (error) {
            setError('Error placing order: ' + (error.response?.data?.message || error.message));
        }
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
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
                        <input type="text" name="shippingAddress" value={formData.shippingAddress} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                    </div>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
                    <div className="flex items-center space-x-4 mb-4">
                        <div>
                            <input type="radio" id="card" name="paymentType" value="card" checked={paymentType === 'card'} onChange={handlePaymentTypeChange} />
                            <label htmlFor="card" className="ml-2 text-sm font-medium text-gray-700">Card</label>
                        </div>
                        <div>
                            <input type="radio" id="cod" name="paymentType" value="cod" checked={paymentType === 'cod'} onChange={handlePaymentTypeChange} />
                            <label htmlFor="cod" className="ml-2 text-sm font-medium text-gray-700">Cash On Delivery</label>
                        </div>
                    </div>
                    
                    {paymentType === 'card' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                                <CardNumberElement className="p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Expiration Date (MM/YY)</label>
                                    <CardExpiryElement className="p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">CVC</label>
                                    <CardCvcElement className="p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
                {error && (
                    <div className="bg-red-100 text-red-700 p-4 rounded-md">
                        {error}
                    </div>
                )}

                <button type="submit" className="w-full py-2 px-4 bg-lime-500 text-white font-semibold rounded-md hover:bg-lime-600">Place Order</button>
            </form>
        </div>
    );
};

export default function CheckoutPage() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}
