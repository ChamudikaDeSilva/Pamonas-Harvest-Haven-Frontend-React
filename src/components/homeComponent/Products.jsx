import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// Sample data for products
const productsData = [
  {
    id: 1,
    name: 'Tomato',
    category: 'vegetable',
    image: '/Images/Pamonas/fruits & vegetables/vegetables/tomato.jpg',
    description: 'Fresh and organic Tomatoes',
    price: 'Rs.220/500g',
  },
  {
    id: 2,
    name: 'Broccoli',
    category: 'vegetable',
    image: '/Images/Pamonas/fruits & vegetables/vegetables/broccoli1.jpg',
    description: 'Fresh and organic Broccoli',
    price: 'Rs.285/250g',
  },
  {
    id: 3,
    name: 'Potato',
    category: 'vegetable',
    image: '/Images/Pamonas/fruits & vegetables/vegetables/potato.jpg',
    description: 'Fresh and organic Potatoes',
    price: 'Rs.150/500g',
  },
  {
    id: 4,
    name: 'Orange',
    category: 'fruit',
    image: '/Images/Pamonas/fruits & vegetables/fruits/orange2.jpg',
    description: 'Juicy and delicious Oranges',
    price: 'Rs.290/250g',
  },
  {
    id: 5,
    name: 'Raspberry',
    category: 'fruit',
    image: '/Images/Pamonas/fruits & vegetables/fruits/raspberry.jpg',
    description: 'Juicy and delicious Raspberry',
    price: 'Rs.440/250g',
  },
  {
    id: 6,
    name: 'Banana',
    category: 'fruit',
    image: '/Images/Pamonas/fruits & vegetables/fruits/banana1.jpg',
    description: 'Juicy and delicious Banana',
    price: 'Rs.100/500g',
  },
];

const Products = () => {
  const [currentCategory, setCurrentCategory] = useState('all');

  // Filter products based on the selected category
  const filteredProducts = currentCategory === 'all' ? productsData : productsData.filter(product => product.category === currentCategory);

  return (
    <div
      className="container-fluid banner relative bg-cover bg-center bg-no-repeat py-10"
      style={{
        backgroundImage: `url('/Images/greeny2.jpg')`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container relative mx-auto mt-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 pb-2">
        <div className="flex items-center justify-center pl-24 pr-22">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 md:mb-6" style={{ 
            textShadow: '1px 1px 0 #15803d, -1px -1px 0 #15803d, 1px -1px 0 #15803d, -1px 1px 0 #15803d' 
          }}>
            Best Sellers
          </h2>
          {/*<div className="h-px flex-1 bg-green-600 pr-24"></div>*/}
      </div>
          <div className="flex space-x-2 md:space-x-4 flex-wrap justify-center md:justify-end">
            <button
              className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full ${currentCategory === 'all' ? 'bg-gray-400 text-white text-sm sm:text-lg' : 'bg-amber-500 text-gray-700 text-sm sm:text-lg'}`}
              onClick={() => setCurrentCategory('all')}
            >
              All Products
            </button>
            <button
              className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full ${currentCategory === 'vegetable' ? 'bg-gray-400 text-white text-sm sm:text-lg' : 'bg-amber-500 text-gray-700 text-sm sm:text-lg'}`}
              onClick={() => setCurrentCategory('vegetable')}
            >
              Vegetables
            </button>
            <button
              className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full ${currentCategory === 'fruit' ? 'bg-gray-400 text-white text-sm sm:text-lg' : 'bg-amber-500 text-gray-700 text-sm sm:text-lg'}`}
              onClick={() => setCurrentCategory('fruit')}
            >
              Fruits
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 pb-12 pr-2 pl-2">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensure the animation only happens once
    threshold: 0.1, // Adjust the threshold as needed
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white border border-white rounded-md shadow-md overflow-hidden shadow hover:shadow-2xl hover:shadow-gray-400 relative max-w-full sm:max-w-sm"
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full h-36 sm:h-44 md:h-52 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-300 zoom-in transform hover:scale-105" />
      </div>
      <div className="p-3 sm:p-4 text-center">
        <h2 className="text-gray-900 text-md sm:text-lg md:text-xl font-semibold mb-1">{product.name}</h2>
        <p className="text-gray-600 text-sm sm:text-base mb-1 line-clamp-2">{product.description}</p>
        <p className="text-gray-800 font-semibold text-sm sm:text-base mb-1">{product.price}</p>
        <div className="flex justify-center items-center space-x-4 mt-2">
        <Link to="/shop">
          <FontAwesomeIcon icon={faCartShopping} className="text-amber-500 text-lg hover:text-gray-700 transition duration-300 cursor-pointer" />
        </Link>
        <Link to="/shop">
          <FontAwesomeIcon icon={faEye} className="text-amber-500 text-lg hover:text-gray-700 transition duration-300 cursor-pointer" />
        </Link>
        <Link to="/shop">
          <FontAwesomeIcon icon={faHeart} className="text-amber-500 text-lg hover:text-gray-700 transition duration-300 cursor-pointer" />
        </Link>
      </div>
      </div>
    </motion.div>
  );
};

export default Products;
