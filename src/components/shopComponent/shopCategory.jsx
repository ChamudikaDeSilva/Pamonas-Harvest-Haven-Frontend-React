import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShopCategory = () => {
    const [categories, setCategories] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
    const [discountTypes, setDiscountTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchShopData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/shop/data/fetch');
                const { categories, priceRange, discountTypes } = response.data;
                setCategories(categories);
                setPriceRange(priceRange);
                setDiscountTypes(discountTypes);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching shop data:', error);
                setIsLoading(false);
            }
        };

        fetchShopData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-64 p-4 bg-white h-screen">
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Search Products" 
              className="w-full p-2 border border-lime-500 rounded"
            />
          </div>
            {/* Categories */}
            <div className="mb-4 pl-3 pr-3 pt-4 pb-4 bg-gray-200">
                <h2 className="text-lg font-semibold text-green-700">Categories</h2>
                <ul>
                    {categories.map((category) => (
                        <li key={category.id} className="flex justify-between items-center text-gray-700">
                            <span>{category.name}</span>
                            <span>({category.products_count})</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Range */}
            <div className="mb-4 pl-3 pr-3 pt-4 pb-4 bg-gray-200">
                <h2 className="text-lg font-semibold text-green-700">Price</h2>
                <input
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                    className="w-full bg-lime-500"
                />
                <div className="text-right">{priceRange.max}</div>
            </div>

            {/* Additional Types (Discount Types) */}
            <div className="mb-4 pl-3 pr-3 pt-4 pb-4 bg-gray-200">
                <h2 className="text-lg font-semibold text-green-700">Additional</h2>
                <ul>
                    {discountTypes.map((type) => (
                        <li key={type.value}>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="additional"
                                    value={type.value}
                                    className="mr-2 text-lime-600"
                                    defaultChecked={type.defaultChecked}
                                />
                                {type.label}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ShopCategory;