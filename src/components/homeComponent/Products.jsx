import React, { useState } from 'react';

// Sample data for products
const productsData = [
  {
    id: 1,
    name: 'Tomato',
    category: 'vegetable',
    image: '/Images/vegetable-item-1.jpg',
    description: 'Fresh and organic Tomatoes',
    price: '$2.99/kg',
  },
  {
    id: 2,
    name: 'Broccoli',
    category: 'vegetable',
    image: '/Images/vegetable-item-2.jpg',
    description: 'Fresh and organic Broccoli',
    price: '$2.99/kg',
  },
  {
    id: 3,
    name: 'Potato',
    category: 'vegetable',
    image: '/Images/vegetable-item-5.jpg',
    description: 'Fresh and organic Potatoes',
    price: '$2.99/kg',
  },
  {
    id: 4,
    name: 'Orange',
    category: 'fruit',
    image: '/Images/fruite-item-1.jpg',
    description: 'Juicy and delicious Oranges',
    price: '$3.99/kg',
  },
  {
    id: 5,
    name: 'Raspberry',
    category: 'fruit',
    image: '/Images/fruite-item-2.jpg',
    description: 'Juicy and delicious Raspberry',
    price: '$3.99/kg',
  },
  {
    id: 6,
    name: 'Banana',
    category: 'fruit',
    image: '/Images/fruite-item-3.jpg',
    description: 'Juicy and delicious Banana',
    price: '$3.99/kg',
  },
  
];

const Products = () => {
  const [currentCategory, setCurrentCategory] = useState('all');

  // Filter products based on the selected category
  const filteredProducts = currentCategory === 'all' ? productsData : productsData.filter(product => product.category === currentCategory);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-5xl text-left text-gray-600 font-semibold mb-6"> Best Seller Products</h1>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${currentCategory === 'all' ? 'bg-amber-500 text-white text-lg' : 'bg-gray-200 text-gray-700 text-lg'}`}
            onClick={() => setCurrentCategory('all')}
          >
            All Products
          </button>
          <button
            className={`px-4 py-2 rounded-full ${currentCategory === 'vegetable' ? 'bg-amber-500 text-white text-lg' : 'bg-gray-200 text-gray-700 text-lg'}`}
            onClick={() => setCurrentCategory('vegetable')}
          >
            Vegetables
          </button>
          <button
            className={`px-4 py-2 rounded-full ${currentCategory === 'fruit' ? 'bg-amber-500 text-white text-lg' : 'bg-gray-200 text-gray-700 text-lg'}`}
            onClick={() => setCurrentCategory('fruit')}
          >
            Fruits
          </button>
        </div>
      </div><br></br>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white border border-amber-500 rounded-lg shadow-md overflow-hidden transition duration-300 zoom-in transform hover:scale-105 hover:bg-gray-200">
            <div className="w-100 h-80 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-gray-900 text-3xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 text-xl mb-2 italic">{product.description}</p>
              <p className="text-gray-800 font-semibold mb-2">{product.price}</p>
              <button className="bg-amber-500 text-white text-lg px-4 py-2 rounded-full hover:bg-lime-500 transition duration-300">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <br></br>
    </div>
    
  );
};

export default Products;
