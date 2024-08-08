import React, { createContext, useState, useEffect } from 'react';
import ItemExistModal from './components/cartComponent/ItemExistModal';

// Create a Context for the cart
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemIndex = prevItems.findIndex((item) => item.id === product.id);

            if (itemIndex !== -1) {
                // Item already exists, show the modal
                setIsModalOpen(true);
                return prevItems;
            } else {
                // Item does not exist, add it to the cart
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeItemFromCart = (index) => {
        setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    const updateItemQuantity = (index, quantity) => {
        setCartItems((prevItems) => {
            const updatedItems = [...prevItems];
            if (quantity > 0) {
                updatedItems[index].quantity = quantity;
            } else {
                updatedItems.splice(index, 1);
            }
            return updatedItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.length;

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart, updateItemQuantity, clearCart, cartCount }}>
            {children}
            <ItemExistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </CartContext.Provider>
    );
};
