import React, { createContext, useState, useEffect } from 'react';

// Create a Context for the cart
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const cartCount = cartItems.length;

    return (
        <CartContext.Provider value={{ cartItems, addToCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
