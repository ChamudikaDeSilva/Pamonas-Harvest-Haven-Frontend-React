import React, { useState,useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { CartContext } from '../../CartContext';

const stripePromise = loadStripe('pk_test_51PiCIrEwYbDgtEhczRVguhi5v83HYID2ovbzrsZmQbtzQYk7AJgLf0oo8UZmFksiFySG30Yx5jfU6LaeikzYTPXa00ygqCf60a');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

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

    const { cartItems } = useContext(CartContext);
    
    const hasItems = cartItems.length > 0;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

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
            console.error(error);
            return;
        }
        // Send payment method to backend for further processing
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/process-payment', {
                payment_method_id: paymentMethod.id,
                formData
            });
            console.log(response.data);
            // Handle success
        } catch (error) {
            console.error('Error processing payment:', error);
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
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Postal/Zip Code</label>
                                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
                            <input type="text" name="shippingAddress" value={formData.shippingAddress} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-lime-500 focus:ring-lime-200" required />
                        </div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8">
                        <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                                <CardNumberElement className="p-2 border border-gray-300 bg-white rounded-md focus:border-lime-500 focus:ring-lime-200" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
                                <CardExpiryElement className="p-2 border border-gray-300 bg-white rounded-md focus:border-lime-500 focus:ring-lime-200" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">CVC</label>
                                <CardCvcElement className="p-2 border border-gray-300 bg-white rounded-md focus:border-lime-500 focus:ring-lime-200" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="mt-8 w-full bg-lime-500 text-white p-3 rounded-md hover:bg-lime-600 "disabled={!hasItems}>
                        <span className="font-bold text-xl">Place Order</span>
                    </button>
                </form>
            </div>
        
    );
};

const CheckoutWrapper = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default CheckoutWrapper;
