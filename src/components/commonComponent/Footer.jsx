import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-gray-500 relative bottom-0 left-0 w-full z-10 text-white py-12'>
      <div className='container mx-auto'>
        {/* Footer Top */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
          {/* Footer Left */}
          <div className='flex flex-col md:flex-row justify-left md:items-center'>
            <h1 className='text-lime-500 text-5xl font-bold mb-2 mr-4'>
              Pamona's
            </h1>
            <p className='text-amber-500 text-2xl mb-2 mr-4'>Fresh products</p>
          </div>

          <div className='flex items-center md:justify-end space-x-4'>
            <div className='flex space-x-4'>
              <a
                className='text-gray-300 hover:text-amber-500 rounded-full p-2'
                href='/'
              >
                <FontAwesomeIcon icon={faTwitter} size='lg' />
              </a>
              <a
                className='text-gray-300 hover:text-amber-500 rounded-full p-2'
                href='/'
              >
                <FontAwesomeIcon icon={faFacebookF} size='lg' />
              </a>
              <a
                className='text-gray-300 hover:text-amber-500 rounded-full p-2'
                href='/'
              >
                <FontAwesomeIcon icon={faYoutube} size='lg' />
              </a>
              <a
                className='text-gray-300 hover:text-amber-500 rounded-full p-2'
                href='/'
              >
                <FontAwesomeIcon icon={faLinkedinIn} size='lg' />
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className='border-t-2 border-amber-400 mb-8' />

        {/* Table */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h4 className='text-light text-3xl mb-3 font-bold text-left'>
              Why People Like us!
            </h4>
            <p className='text-gray-300 mb-3 text-base text-left italic'>
              At Pamona's, we pride ourselves on quality, freshness, and
              exceptional service. Our wide selection of fresh, delicious
              products and unwavering dedication to customer satisfaction make
              us the preferred choice for all your grocery needs.
            </p>
          </div>
          <div>
            <h4 className='text-light mb-3 text-3xl font-bold text-left'>
              Shop Info
            </h4>
            <ul className='text-gray-300 mb-3 text-base text-left italic'>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Return Policy</li>
              <li>FAQs & Help</li>
            </ul>
          </div>
          <div>
            <h4 className='text-light mb-3 text-3xl font-bold text-left'>
              Account
            </h4>
            <ul className='text-gray-300 mb-3 text-base text-left italic'>
              <li>My Account</li>
              <li>Shop details</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
              <li>Order History</li>
              <li>International Orders</li>
            </ul>
          </div>
          <div>
            <h4 className='text-light text-left mb-3 text-3xl font-bold'>
              Contact
            </h4>
            <p className='text-gray-300 text-left mb-3 text-base italic'>
              Address: 100, Kandy Road, Colombo
            </p>
            <p className='text-gray-300 text-left mb-3 text-base italic'>
              Email: pamonaorg@gmail.com
            </p>
            <p className='text-gray-300 text-left mb-3 text-base italic'>
              Phone: +94 11 3456720
            </p>
          </div>
        </div>

        <br></br>

        {/* Footer Bottom */}
        <div className='flex justify-between items-center'>
          <div>
            <p className='text-lg text-amber-500'>
              &copy; {new Date().getFullYear()} Pamona's HarvestHaven, All
              rights reserved.
            </p>
          </div>
          <div>
            <p className='text-lg text-amber-500'>
              Designed with{' '}
              <a
                className='border-b border-gray-300 hover:text-lime-500 text-base'
                href='https://react.dev/'
              >
                React
              </a>{' '}
              By{' '}
              <a
                className='border-b border-gray-300 hover:text-lime-500 text-base'
                href='https://chamudikadesilva.github.io/HasiniChamudikaDeSilva/'
              >
                Chamudika De Silva
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
