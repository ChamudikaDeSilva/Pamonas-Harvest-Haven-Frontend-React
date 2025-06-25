import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import EmptyCartMessage from './EmptyCartMessage';
import SignupModal from '../shopComponent/SignupModal';
import SigninModal from '../shopComponent/SigninModal';
import AuthContext from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

const CartDetails = () => {
  const { cartItems, updateItemQuantity, removeItemFromCart } =
    useContext(CartContext);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.current_price || item.unit_price) * (item.quantity || 1),
      0
    );
  };
  

  const handleQuantityChange = (index, change) => {
    const newQuantity = cartItems[index].quantity + change;
    updateItemQuantity(index, newQuantity);
  };

  const handleRemoveItem = (index) => {
    removeItemFromCart(index);
  };

  const handleProceedToCheckout = () => {
    if (user) {
      navigate('/checkout');
    } else {
      setIsSignupModalOpen(true);
      setIsSigninModalOpen(false);
    }
  };

  const handleSwitchToSignin = () => {
    setIsSigninModalOpen(true);
    setIsSignupModalOpen(false);
  };

  const handleSwitchToSignup = () => {
    setIsSigninModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const hasItems = cartItems.length > 0;

  return (
    <div className='bg-gray-100 h-auto py-8'>
      <div className="flex items-center justify-center pl-48">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 md:mb-6" style={{ 
            textShadow: '1px 1px 0 #15803d, -1px -1px 0 #15803d, 1px -1px 0 #15803d, -1px 1px 0 #15803d' 
          }}>
            My Cart
          </h2>
          <div className="h-px flex-1 bg-green-600 pr-24"></div>
      </div>
      
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row gap-4 pt-10'>
          <div className='md:w-3/4'>
            {hasItems ? (
              <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
                <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
                  <thead className='pb-2'>
                    <tr>
                      <th className='text-left text-xl text-gray-600 font-bold pb-2'>
                        Product
                      </th>
                      <th className='text-left text-xl text-gray-600 font-bold pb-2'>
                        Price
                      </th>
                      <th className='text-left text-xl text-gray-600 font-bold pb-2'>
                        Quantity
                      </th>
                      <th className='text-left text-xl text-gray-600 font-bold pb-2'>
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td className='py-4'>
                          <div className='flex flex-col md:flex-row items-center'>
                            <img
                              className='h-16 w-16 mb-2 md:mb-0 md:mr-4'
                              src={`https://laravel-backend-production-dde3.up.railway.app/${item.image}`}
                              alt={item.name || 'Product image'}
                            />
                            <span className='font-semibold text-center md:text-left'>
                              {item.name || 'Unnamed Product'}
                            </span>
                          </div>
                        </td>
                        <td className='py-4'>
                          Rs.{parseFloat(item.current_price || item.unit_price).toFixed(2)}
                        </td>
                        <td className='py-4'>
                          <div className='flex items-center'>
                            <button
                              className='border rounded-md py-2 px-4 mr-2'
                              onClick={() => handleQuantityChange(index, -1)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className='text-center w-8'>
                              {item.quantity || 1}
                            </span>
                            <button
                              className='border rounded-md py-2 px-4 ml-2'
                              onClick={() => handleQuantityChange(index, 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className='py-4'>
                          Rs.
                          {(
                            parseFloat(item.current_price || item.unit_price) * (item.quantity || 1)
                          ).toFixed(2)}
                        </td>
                        <td className='py-4'>
                          <FontAwesomeIcon
                            icon={faTrash}
                            className='text-red-500 text-lg hover:text-red-700 transition duration-300'
                            onClick={() => handleRemoveItem(index)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
                <div className='flex justify-between mt-4'>
                  <Link to='/shop'>
                    <button className='bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center'>
                      <FontAwesomeIcon
                        icon={faArrowLeftLong}
                        className='mr-2 text-white'
                      />
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <EmptyCartMessage />
            )}
          </div>
          <div className='md:w-1/4'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-lg font-semibold mb-4'>Cart Total</h2>
              <div className='flex justify-between mb-2'>
                <span>Subtotal</span>
                <span>Rs.{calculateTotal().toFixed(2)}</span>
              </div>
              <div className='flex justify-between mb-2 text-red-500'>
                <span>Taxes</span>
                <span>Rs.{hasItems ? 1.99 : 0.0}</span>
              </div>
              <div className='flex justify-between mb-2 text-red-500'>
                <span>Delivery</span>
                <span>Rs.{hasItems ? 222.0 : 0.0}</span>
              </div>
              <hr className='my-2' />
              <div className='flex justify-between mb-2'>
                <span className='font-semibold'>Total</span>
                <span className='font-semibold'>
                  Rs.
                  {(
                    calculateTotal() +
                    (hasItems ? 1.99 : 0) +
                    (hasItems ? 222.0 : 0)
                  ).toFixed(2)}
                </span>
              </div>
              <button
                className={`bg-lime-500 text-white font-bold hover:bg-lime-600 py-2 px-4 rounded-lg mt-4 w-full ${
                  !hasItems ? 'cursor-not-allowed opacity-50' : ''
                }`}
                disabled={!hasItems}
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout
              </button>
            </div>

            <motion.div
              className='mt-6 bg-amber-100 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg text-center shadow-lg'
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.05, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            >
              <h3 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-amber-800 flex items-center justify-center'>
                <i className='fas fa-star text-amber-500 mr-2 text-base sm:text-lg md:text-xl'></i>
                Special Discounts!
              </h3>
              <p className='text-base sm:text-lg md:text-xl text-gray-800 mb-3'>
                <i className='fas fa-gift text-red-600 mr-2 text-base sm:text-lg md:text-xl'></i>
                If this is your first order, enjoy a <span className='text-red-600 font-extrabold'>20% off</span>!
              </p>
              <p className='text-base sm:text-lg md:text-xl text-gray-800 mb-3'>
                <i className='fas fa-calendar-alt text-red-600 mr-2 text-base sm:text-lg md:text-xl'></i>
                If it’s your 5th order or a multiple of 5, you get <span className='text-red-600 font-extrabold'>10% off</span>!
              </p>
              <p className='text-sm sm:text-base md:text-lg text-gray-700 mt-4'>
                <i className='fas fa-shopping-cart text-green-600 mr-2 text-base sm:text-lg md:text-xl'></i>
                Checkout to see the eligibility for the discounts!
              </p>
            </motion.div>
            
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
