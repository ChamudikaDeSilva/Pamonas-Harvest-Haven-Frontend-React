import React from 'react';

const ShopCategory = ()=> {
    return (
        <div className="w-64 p-4 bg-white h-screen">
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search Products" 
          className="w-full p-2 border border-lime-500 rounded"
        />
      </div>
      <div className="mb-4 pt-2 pb-2">
        <h2 className="text-lg font-semibold text-gray-700">Categories</h2>
        <ul>
          <li className="flex justify-between items-center text-lime-500">
            <span>Apples</span>
            <span>(3)</span>
          </li>
          <li className="flex justify-between items-center text-lime-500">
            <span>Oranges</span>
            <span>(5)</span>
          </li>
          <li className="flex justify-between items-center text-lime-500">
            <span>Strawberry</span>
            <span>(2)</span>
          </li>
          <li className="flex justify-between items-center text-lime-500">
            <span>Banana</span>
            <span>(8)</span>
          </li>
          <li className="flex justify-between items-center text-lime-500">
            <span>Pumpkin</span>
            <span>(5)</span>
          </li>
        </ul>
      </div>
      <div className="mb-4 pt-2 pb-2">
        <h2 className="text-lg text-gray-700 font-semibold">Price</h2>
        <input 
          type="range" 
          min="0" 
          max="200" 
          className="w-full bg-lime-500"
        />
        <div className="text-right">128</div>
      </div>
      <div className="mb-4 pt-2 pb-2">
        <h2 className="text-lg font-semibold text-gray-700">Additional</h2>
        <ul>
          <li>
            <label className="flex items-center text-gray-600">
              <input 
                type="radio" 
                name="additional" 
                value="organic" 
                className="mr-2 text-lime-600"
                defaultChecked
              />
              Organic
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="additional" 
                value="fresh" 
                className="mr-2"
              />
              Fresh
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="additional" 
                value="sales" 
                className="mr-2"
              />
              Sales
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="additional" 
                value="discount" 
                className="mr-2"
              />
              Discount
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="additional" 
                value="expired" 
                className="mr-2"
              />
              Expired
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

   

export default ShopCategory;
