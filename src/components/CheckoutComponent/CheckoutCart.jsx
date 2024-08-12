import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import EmptyCartMessage from '../cartComponent/EmptyCartMessage';
import CheckoutWrapper from './CheckoutForm';

const CheckoutCart = () => {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.unit_price) * (item.quantity || 1),
      0
    );
  };

  const hasItems = cartItems.length > 0;

  return (
    <div className='bg-gray-100 h-auto py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row gap-4'>
          {/* Left side - Cart Details */}
          <div className='md:w-1/3 bg-white rounded-lg shadow-md p-6'>
            {hasItems ? (
              <div className='overflow-x-auto'>
                <table className='min-w-full divide-y-2 divide-gray-200 text-sm'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th className='text-left text-xl text-gray-600 font-bold py-2 px-4'>
                        Product
                      </th>
                      <th className='text-left text-xl text-gray-600 font-bold py-2 px-4'>
                        Price
                      </th>
                      <th className='text-left text-xl text-gray-600 font-bold py-2 px-4'>
                        Quantity
                      </th>
                      <th className='text-left text-xl text-gray-600 font-bold py-2 px-4'>
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index} className='border-b'>
                        <td className='py-4 px-2'>
                          <div className='flex flex-col items-center md:items-start'>
                            <img
                              className='h-16 w-16 object-cover mb-2'
                              src={`http://localhost:8000${item.image}`}
                              alt={item.name || 'Product image'}
                            />
                            <span className='font-semibold text-center md:text-left text-sm'>
                              {item.name || 'Unnamed Product'}
                            </span>
                          </div>
                        </td>
                        <td className='py-4 px-2 text-sm'>
                          Rs.{parseFloat(item.unit_price).toFixed(2)}
                        </td>
                        <td className='py-4 px-2 text-sm'>
                          {item.quantity || 1}
                        </td>
                        <td className='py-4 px-2 text-sm'>
                          Rs.
                          {(
                            parseFloat(item.unit_price) * (item.quantity || 1)
                          ).toFixed(2)}
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
              <hr className='my-2 ' />
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
            </div>
          </div>

          {/* Right side - Checkout Form */}
          <div className='md:w-2/3'>
            <CheckoutWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
