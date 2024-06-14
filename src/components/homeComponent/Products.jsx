import React, { useState } from 'react';

// Sample data for products
const productsData = [
  {
    id: 1,
    name: 'Tomato',
    category: 'vegetable',
    image: '/Images/Pamonas/fruits & vegetables/tomato.jpg',
    description: 'Fresh and organic Tomatoes',
    price: '$2.99/kg',
  },
  {
    id: 2,
    name: 'Broccoli',
    category: 'vegetable',
    image: '/Images/Pamonas/fruits & vegetables/broccoli1.jpg',
    description: 'Fresh and organic Broccoli',
    price: '$2.99/kg',
  },
  {
    id: 3,
    name: 'Potato',
    category: 'vegetable',
    image: '/Images/Pamonas/fruits & vegetables/potato.jpg',
    description: 'Fresh and organic Potatoes',
    price: '$2.99/kg',
  },
  {
    id: 4,
    name: 'Orange',
    category: 'fruit',
    image: '/Images/Pamonas/fruits & vegetables/orange2.jpg',
    description: 'Juicy and delicious Oranges',
    price: '$3.99/kg',
  },
  {
    id: 5,
    name: 'Raspberry',
    category: 'fruit',
    image: '/Images/Pamonas/fruits & vegetables/raspberry.jpg',
    description: 'Juicy and delicious Raspberry',
    price: '$3.99/kg',
  },
  {
    id: 6,
    name: 'Banana',
    category: 'fruit',
    image: '/Images/Pamonas/fruits & vegetables/banana1.jpg',
    description: 'Juicy and delicious Banana',
    price: '$3.99/kg',
  },
];

const Products = () => {
  const [currentCategory, setCurrentCategory] = useState('all');

  // Filter products based on the selected category
  const filteredProducts = currentCategory === 'all' ? productsData : productsData.filter(product => product.category === currentCategory);

  return (
    <div className="container-fluid banner bg-gray-200 my-0 left-0 w-full z-10 relative py-10">
      <div className="container mx-auto mt-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 pb-2">
          <h1 className="text-3xl md:text-5xl text-left text-gray-600 font-semibold mb-4 md:mb-0">
            Best Seller Products
          </h1>
          <div className="flex space-x-2 md:space-x-4  flex-wrap justify-center md:justify-end">
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
            <div key={product.id} className="bg-white border border-white rounded-md shadow-md overflow-hidden shadow hover:shadow-2xl hover:shadow-gray-400 relative max-w-full sm:max-w-sm">
              <div className="w-full h-36 sm:h-44 md:h-52 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-300 zoom-in transform hover:scale-105" />
              </div>
              <div className="p-3 sm:p-4">
                <h2 className="text-gray-900 text-md sm:text-lg md:text-xl font-semibold mb-1">{product.name}</h2>
                <p className="text-gray-600 text-sm sm:text-base mb-1 line-clamp-2">{product.description}</p>
                <p className="text-gray-800 font-semibold text-sm sm:text-base mb-1">{product.price}</p>
                <button className="bg-amber-500 text-white text-xs sm:text-sm lg:text-base px-2 py-1 sm:px-3 sm:py-1 rounded-full hover:bg-lime-500 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
