import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruckFast,
  faShieldAlt,
  faPhoneAlt,
  faSeedling
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className='mx-auto py-8 pt-16 pb-16 bg-gray-200 w-screen'>
     <div className="flex items-center justify-center pl-32 pr-32">
  <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold mb-4 md:mb-6 mx-4">
  What We Offer
  </h2>
  <div className="h-px flex-1 bg-black"></div>
</div>



      

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pr-4 pl-4'>
        <div className=' p-6 text-center transition duration-300 ease-in-out transform hover:scale-105'>
          <div className='bg-lime-500 rounded-full p-4 inline-block'>
            <FontAwesomeIcon
              icon={faTruckFast}
              className='text-4xl text-white'
            />
          </div>
          <h3 className='text-lg text-gray-600 font-semibold'>Free Shipping</h3>
          <p className='text-base text-gray-600 italic'>Free on orders over $300</p>
        </div>

        <div className=' p-6 text-center transition duration-300 ease-in-out transform hover:scale-105'>
          <div className='bg-lime-500 rounded-full p-4 inline-block'>
            <FontAwesomeIcon
              icon={faShieldAlt}
              className='text-4xl text-white'
            />
          </div>
          <h3 className='text-lg text-gray-600 font-semibold'>
            Security Payment
          </h3>
          <p className='text-base text-gray-600 italic'>100% secure payment</p>
        </div>

        <div className=' p-6 text-center transition duration-300 ease-in-out transform hover:scale-105'>
          <div className='bg-lime-500 rounded-full p-4 inline-block'>
            <FontAwesomeIcon
              icon={faSeedling}
              className='text-4xl text-white'
            />
          </div>
          <h3 className='text-lg text-gray-600 font-semibold'>Natural Process</h3>
          <p className='text-base text-gray-600 italic'>Fresh Organic Products</p>
        </div>

        <div className=' p-6 text-center transition duration-300 ease-in-out transform hover:scale-105'>
          <div className='bg-lime-500 rounded-full p-4 inline-block'>
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className='text-4xl text-white'
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
