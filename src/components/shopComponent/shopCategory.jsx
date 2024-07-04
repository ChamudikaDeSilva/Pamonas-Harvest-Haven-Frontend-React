import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const ShopCategory = () => {
    const [categories, setCategories] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
    const [discountTypes, setDiscountTypes] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedDiscountType, setSelectedDiscountType] = useState(null);

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

    const fetchProducts = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/shop/product/fetch', {
                params: {
                    category_id: selectedCategory,
                    price_range: priceRange,
                    discount_type: selectedDiscountType,
                    page: page,
                },
            });
            setProducts(response.data.data);
            setTotalPages(response.data.last_page);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setIsLoading(false);
        }
    }, [selectedCategory, priceRange, selectedDiscountType, page]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        setPage(1);
    };

    const handlePriceRangeChange = (min, max) => {
        setPriceRange({ min, max });
        setPage(1);
    };

    const handleDiscountTypeChange = (type) => {
        setSelectedDiscountType(type);
        setPage(1);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full p-4 bg-white">
            <div className="w-64">
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Search Products" 
                        className="w-full p-2 border border-lime-500 rounded focus:border-lime-500 focus:ring-lime-500 focus:outline-none"
                    />
                </div>
                <div className="mb-4 pl-3 pr-3 pt-4 pb-4 bg-gray-200">
                    <h2 className="text-lg font-semibold text-green-700">Categories</h2>
                    <ul>
                        {categories.map((category) => (
                            <li key={category.id} className="flex justify-between items-center text-gray-700">
                                <span onClick={() => handleCategoryChange(category.id)}>{category.name}</span>
                                <span>({category.products_count})</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4 pl-3 pr-3 pt-4 pb-4 bg-gray-200">
                    <h2 className="text-lg font-semibold text-green-700">Price</h2>
                    <input
                        type="range"
                        min={priceRange.min}
                        max={priceRange.max}
                        className="w-full bg-lime-500"
                        onChange={(e) => handlePriceRangeChange(priceRange.min, e.target.value)}
                    />
                    <div className="text-right">{priceRange.max}</div>
                </div>
                <div className="mb-4 pl-3 pr-3 pt-4 pb-4 bg-gray-200">
                    <h2 className="text-lg font-semibold text-green-700">Additional</h2>
                    <ul>
                        {discountTypes.map((type) => (
                            <li key={type}>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="additional"
                                        value={type}
                                        className="mr-2 text-lime-600"
                                        onChange={() => handleDiscountTypeChange(type)}
                                    />
                                    {type}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 pb-12 pr-2 pl-2">
                {products.map(product => (
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

            <div className="flex justify-center">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page <= 1}
                    className="px-4 py-2 m-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>
                <span className="px-4 py-2 m-2 bg-gray-200 rounded">{page}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page >= totalPages}
                    className="px-4 py-2 m-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ShopCategory;
