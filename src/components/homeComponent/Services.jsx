import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruckFast,
  faShieldAlt,
  faUndoAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className='container mx-auto py-8'>
      <h2 className='text-5xl text-left text-gray-600 font-semibold mb-6'>Our Services</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        {/* Service Card 1 */}
        <div className='bg-white p-6 rounded-lg shadow-md text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 border border-amber-500'>
          <div className='bg-amber-500 rounded-full p-4 inline-block'>
            <FontAwesomeIcon
              icon={faTruckFast}
              className='text-4xl text-white-600'
            />
          </div>
          <h3 className='text-lg text-gray-600 font-semibold'>Free Shipping</h3>
          <p className='text-base text-gray-600 italic'>Free on orders over $300</p>
        </div>

        {/* Service Card 2 */}
        <div className='bg-white p-6 rounded-lg shadow-md text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 border border-amber-500'>
          <div className='bg-amber-500 rounded-full p-4 inline-block'>
            <FontAwesomeIcon
              icon={faShieldAlt}
              className='text-4xl text-white-600'
            />
          </div>
          <h3 className='text-lg text-gray-600 font-semibold'>
            Security Payment
          </h3>
          <p className='text-base text-gray-600 italic'>100% secure payment</p>
        </div>

        {/* Service Card 3 */}
        <div className='bg-white p-6 rounded-lg shadow-md text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 border border-amber-500'>
          <div className='bg-amber-500 rounded-full p-4 inline-block'>
            <FontAwesomeIcon
              icon={faUndoAlt}
              className='text-4xl text-white-600'
            />
          </div>
          <h3 className='text-lg text-gray-600 font-semibold'>30 Day Return</h3>
          <p className='text-base text-gray-600 italic'>30-day money guarantee</p>
        </div>

        {/* Service Card 4 */}
        <div className='bg-white p-6 rounded-lg shadow-md text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 border border-amber-500'>
          <div className='bg-amber-500 rounded-full p-4 inline-block'>
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className='text-4xl text-white-600'
            />
          </div>
          <h3 className='text-lg text-gray-600 font-semibold'>24/7 Support</h3>
          <p className='text-base text-gray-600 italic'>Fast support anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
