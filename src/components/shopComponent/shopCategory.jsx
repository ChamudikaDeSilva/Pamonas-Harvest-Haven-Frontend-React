import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';

const ShopCategory = () => {
    const [categories, setCategories] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 0, current: 0 });
    const [discountTypes, setDiscountTypes] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedDiscountType, setSelectedDiscountType] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch initial shop data (categories, price range, discount types)
    useEffect(() => {
        const fetchShopData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/shop/data/fetch');
                const { categories, priceRange, discountTypes } = response.data;
                setCategories(categories);
                setPriceRange({ ...priceRange, current: priceRange.max });
                setDiscountTypes(discountTypes);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching shop data:', error);
                setIsLoading(false);
            }
        };

        fetchShopData();
    }, []);

    // Fetch products based on selected filters and search term
    const fetchProducts = useCallback(async () => {
        setIsLoading(true);
        try {
            const params = {
                // Only use pagination params when not searching
                ...(searchTerm
                    ? {}
                    : {
                          page: page,
                      }),
            };

            if (selectedCategory) {
                params.category_id = selectedCategory;
            }

            if (priceRange.current > 0) {
                params.min_price = priceRange.min;
                params.max_price = priceRange.current;
            }

            if (selectedDiscountType) {
                params.discount_type = selectedDiscountType;
            }

            const response = await axios.get('http://127.0.0.1:8000/api/shop/product/fetch', {
                params: params,
            });

            setProducts(response.data.data);
            setTotalPages(response.data.last_page);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setIsLoading(false);
        }
    }, [selectedCategory, priceRange, selectedDiscountType, page, searchTerm]);

    // Effect to fetch products when filters or page change
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts, selectedCategory, priceRange, selectedDiscountType, page, searchTerm]);

    // Handle search term change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setPage(1); // Reset page number when search term changes
    };

    // Filter products based on search term
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle category change
    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        setPage(1); // Reset page number when category changes
    };

    // Handle price range change
    const handlePriceRangeChange = (event) => {
        const newMax = parseInt(event.target.value, 10);

        setPriceRange((prevPriceRange) => ({
            ...prevPriceRange,
            current: newMax,
        }));

        setSelectedCategory(null); // Clear selected category when price range changes
        setPage(1); // Reset page number when price range changes
    };

    // Handle discount type change
    const handleDiscountTypeChange = (type) => {
        setSelectedDiscountType(type);
        setPage(1); // Reset page number when discount type changes
    };

    // Handle page change
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    // Placeholder items for layout consistency
    const placeholders = new Array(Math.max(0, 9 - filteredProducts.length)).fill(null);

    return (
        <div className="flex flex-col w-full p-4 bg-white">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 p-4">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search Products"
                            className="w-full p-2 border border-lime-500 rounded focus:border-lime-500 focus:ring-lime-500 focus:outline-none"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="mb-4 pl-3 pr-3 pt-4 pb-4 bg-lime-100">
                        <h2 className="text-lg font-semibold text-lime-500">Categories</h2>
                        <ul>
                            {categories.map((category) => (
                                <li
                                    key={category.id}
                                    className="flex justify-between items-center text-gray-700"
                                >
                                    <a
                                        href="#"
                                        onClick={() => handleCategoryChange(category.id)}
                                        className="text-gray-500"
                                    >
                                        {category.name}
                                    </a>
                                    <span>({category.products_count})</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4 pl-3 pr-3 pt-4 pb-4 bg-lime-100">
                        <h2 className="text-lg font-semibold text-lime-500">Price</h2>
                        <input
                            type="range"
                            min={priceRange.min}
                            max={priceRange.max}
                            value={priceRange.current}
                            className="w-full bg-lime-500"
                            onChange={handlePriceRangeChange}
                        />
                        <div className="text-right">{priceRange.current}</div>
                    </div>
                    <div className="mb-4 pl-3 pr-3 pt-4 pb-4 bg-lime-100">
                        <h2 className="text-lg font-semibold text-lime-500">Discounts</h2>
                        <ul>
                            {discountTypes.map((type) => (
                                <li key={type}>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="additional"
                                            value={type}
                                            className="mr-2 text-lime-600"
                                            checked={type === selectedDiscountType}
                                            onChange={() => handleDiscountTypeChange(type)}
                                        />
                                        {type}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4 pt-4 pb-4 opacity-50">
                        <img
                        src="/Images/Pamonas/fruis-slider.jpg" // Replace with your actual image path
                        alt="Promotional"
                        className="w-full"
                        />
                        
                    </div>
                </div>

                <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 pb-12 pr-2 pl-2 pt-3">
                    {filteredProducts.map((product) => (
                        <div
                        key={product.id}
                        className="border rounded-md shadow-xl overflow-hidden shadow hover:shadow-2xl hover:shadow-gray-400 relative max-w-full sm:max-w-sm"
                        >
                        <div className="w-full h-36 sm:h-44 md:h-52 overflow-hidden">
                            <img
                            src={`http://localhost:8000${product.image}`}
                            alt={product.name}
                            className="w-full h-full object-cover transition duration-300 transform hover:scale-105"
                            />
                        </div>
                        <div className="p-3 sm:p-4 text-center">
                            <h2 className="text-gray-900 text-md sm:text-lg md:text-xl font-semibold mb-1">
                            {product.name}
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base mb-1 line-clamp-2">
                            {product.description}
                            </p>
                            <p className="text-gray-800 font-semibold text-sm sm:text-base mb-1">
                            Rs.{product.price}/1Kg
                            </p>
                            <div className="flex justify-center items-center space-x-4 mt-2">
                            <FontAwesomeIcon icon={faCartShopping} className="text-amber-500 text-lg hover:text-gray-700 transition duration-300" />
                            <FontAwesomeIcon icon={faEye} className="text-amber-500 text-lg hover:text-gray-700 transition duration-300" />
                            <FontAwesomeIcon icon={faHeart} className="text-amber-500 text-lg hover:text-gray-700 transition duration-300" />
                            </div>
                        </div>
                        </div>
                    ))}
                    {placeholders.map((_, index) => (
                        <div
                        key={`placeholder-${index}`}
                        className="bg-white border border-white rounded-md shadow-md overflow-hidden shadow hover:shadow-2xl hover:shadow-gray-400 relative max-w-full sm:max-w-sm invisible"
                        >
                        <div className="w-full h-36 sm:h-44 md:h-52"></div>
                        <div className="p-3 sm:p-4"></div>
                        </div>
                    ))}
                    </div>
                </div>
            
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page <= 1}
                    className="px-4 py-2 m-2 bg-lime-500 rounded hover:bg-lime-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>
                <span className="px-4 py-2 m-2 border border-lime-500 rounded">{page}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page >= totalPages}
                    className="px-4 py-2 m-2 bg-lime-500 rounded hover:bg-lime-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ShopCategory;
