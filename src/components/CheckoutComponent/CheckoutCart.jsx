import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import EmptyCartMessage from '../cartComponent/EmptyCartMessage';
import CheckoutWrapper from './CheckoutForm';
import CheckoutHeading from './CheckoutHeading';
import axios from 'axios'; // or use your preferred method for API requests
import { motion } from 'framer-motion';
import WrappedCheckoutForm from './CheckoutForm';

const CheckoutCart = () => {
  const { cartItems } = useContext(CartContext);
  const [discounts, setDiscounts] = useState({
    firstOrderDiscount: 0,
    fifthOrderDiscount: 0,
    orderCount: 0,
  });

  const fetchDiscounts = async () => {
    try {
      const token = localStorage.getItem('token'); // Adjust this according to where you store your token
      const response = await axios.get('https://laravel-backend-production-b92c.up.railway.app/api/user/order-count', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDiscounts({
        orderCount: response.data.order_count,
        firstOrderDiscount: response.data.first_order_discount,
        fifthOrderDiscount: response.data.fifth_order_discount,
      });
      //console.log(response);
    } catch (error) {
      console.error('Error fetching discount data:', error);
    }
  };

  useEffect(() => {
    fetchDiscounts();
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.current_price || item.unit_price) * (item.quantity || 1),
      0
    );
  };

  const calculateDiscount = () => {
    const total = calculateTotal();
    let discount = 0;

    if (discounts.orderCount === 0) {
      discount += total * (discounts.firstOrderDiscount / 100);
    } else if ((discounts.orderCount + 1) % 5 === 0) {
      discount += total * (discounts.fifthOrderDiscount / 100);
    }
    
  
    return discount;
  };

  const hasItems = cartItems.length > 0;

  const totalBeforeDiscount = calculateTotal() + (hasItems ? 1.99 : 0) + (hasItems ? 222.0 : 0);
const totalDiscount = calculateDiscount();
const finalTotal = totalBeforeDiscount - totalDiscount;

  



  return (
    <div className='bg-gray-100 h-auto py-8'>
      <CheckoutHeading />
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row gap-4'>
          {/* Left side - Cart Details */}
          <div className='md:w-1/3 bg-white rounded-lg shadow-md p-6'>
            {hasItems ? (
              <div className='overflow-x-auto'>
                <table className='min-w-full divide-y-2 divide-gray-200 text-sm'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th className='text-left text-xl text-gray-600 font-bold py-2 px-4'>Product</th>
                      <th className='text-left text-xl text-gray-600 font-bold py-2 px-4'>Price</th>
                      <th className='text-left text-xl text-gray-600 font-bold py-2 px-4'>Quantity</th>
                      <th className='text-left text-xl text-gray-600 font-bold py-2 px-4'>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index} className='border-b'>
                        <td className='py-4 px-2'>
                          <div className='flex flex-col items-center md:items-start'>
                            <img
                              className='h-16 w-16 object-cover mb-2'
                              src={`https://laravel-backend-production-b92c.up.railway.app/${item.image}`}
                              alt={item.name || 'Product image'}
                            />
                            <span className='font-semibold text-center md:text-left text-sm'>
                              {item.name || 'Unnamed Product'}
                            </span>
                          </div>
                        </td>
                        <td className='py-4 px-2 text-sm'>
                          Rs.{parseFloat(item.current_price || item.unit_price).toFixed(2)}
                        </td>
                        <td className='py-4 px-2 text-sm'>
                          {item.quantity || 1}
                        </td>
                        <td className='py-4 px-2 text-sm'>
                          Rs.
                          {(parseFloat(item.current_price || item.unit_price) * (item.quantity || 1)).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <EmptyCartMessage />
            )}

        <div className='mt-4 pt-4 bg-gray-50 rounded-lg shadow-xl p-6'>
          <h2 className='text-lg font-semibold mb-4'>Your Order Summary</h2>

          <table className='w-full text-sm'>
            <tbody>
              {/* Subtotal */}
              <tr className='border-b'>
                <td className='py-2 text-left'>Subtotal</td>
                <td className='py-2 text-right'>Rs.{calculateTotal().toFixed(2)}</td>
              </tr>
              
              {/* Taxes */}
              <tr className='border-b'>
                <td className='py-2 text-left text-red-500'>+ Taxes</td>
                <td className='py-2 text-right text-red-500'>Rs.{hasItems ? 1.99.toFixed(2) : 0.0}</td>
              </tr>

              {/* Delivery */}
              <tr className='border-b'>
                <td className='py-2 text-left text-red-500'>+ Delivery</td>
                <td className='py-2 text-right text-red-500'>Rs.{hasItems ? 222.0.toFixed(2) : 0.0}</td>
              </tr>

              {/* Intermediate Total */}
              <tr className='border-b'>
                <td className='py-2 text-left font-semibold'>Total Before Discount</td>
                <td className='py-2 text-right font-semibold'>
                  Rs.{(calculateTotal() + (hasItems ? 1.99 : 0) + (hasItems ? 222.0 : 0)).toFixed(2)}
                </td>
              </tr>

              {/* Discount */}
              {calculateDiscount() > 0 && (
                <tr className='border-b'>
                  <td className='py-2 text-left text-green-700'>- Discount</td>
                  <td className='py-2 text-right text-green-700'>- Rs.{calculateDiscount().toFixed(2)}</td>
                </tr>
              )}

              {/* Final Total */}
              <tr>
                <td className='py-2 text-left font-semibold text-lg'>Final Total</td>
                <td className='py-2 text-right font-semibold text-lg'>
                  Rs.{(calculateTotal() + (hasItems ? 1.99 : 0) + (hasItems ? 222.0 : 0) - calculateDiscount()).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>

        {/* Discount Applied Message */}
        {calculateDiscount() > 0 && (
          <motion.div
            className='mt-4 bg-green-100 p-4 rounded-lg shadow-md'
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.05, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          >
            <h3 className='text-lg font-bold mb-2 text-green-700 flex items-center'>
              <i className='fas fa-tag text-green-600 mr-2'></i>
              Discount Applied
            </h3>
            <p className='text-sm text-gray-800 '>
              <i className='fas fa-gift text-red-500 mr-2'></i>
              You are receiving a discount of{' '}
              <span className='text-green-700 font-extrabold ml-1'>
                Rs.{calculateDiscount().toFixed(2)}
              </span>{' '}
              because{' '}
              <span className='ml-1 text-green-600 font-bold'>
                {discounts.orderCount === 0
                  ? "it's your first order!"
                  : (discounts.orderCount + 1) % 5 === 0
                  ? "it's your 5th order or a multiple of 5!"
                  : "you don't qualify for any discount."}
              </span>
            </p>
            <p className='text-sm text-gray-700 mt-2'>
              <i className='fas fa-shopping-cart text-green-600 mr-2'></i>
              Don’t miss out on these savings!
            </p>
          </motion.div>
        )}
        </div>
      </div>
      
          {/* Right side - Checkout Form */}
          <div className='md:w-2/3'>
            <WrappedCheckoutForm  finalTotal={finalTotal} totalBeforeDiscount={totalBeforeDiscount} totalDiscount={totalDiscount}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
