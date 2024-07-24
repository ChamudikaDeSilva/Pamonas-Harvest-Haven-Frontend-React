import React, { useState, useEffect, useCallback,useContext } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../CartContext';

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
    const { addToCart } = useContext(CartContext);

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

    const fetchProducts = useCallback(async () => {
        setIsLoading(true);
        try {
            const params = {
                page: page,
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
    }, [selectedCategory, priceRange, selectedDiscountType, page]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts, selectedCategory, selectedDiscountType, priceRange.current, page]);

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        setPriceRange({ ...priceRange, current: priceRange.max }); // Reset price range to max when category changes
        setSelectedDiscountType(null); // Reset discount type when category changes
        setPage(1);
    };

    const handlePriceRangeChange = (event) => {
        const newMax = parseInt(event.target.value); // Convert value to integer

        // Update state
        setPriceRange((prevPriceRange) => ({
            ...prevPriceRange,
            current: newMax, // Update current price range dynamically
        }));

        // Reset other filters
        setSelectedCategory(null);
        setSelectedDiscountType(null);
        setPage(1);
    };

    const handleDiscountTypeChange = (type) => {
        setSelectedDiscountType(type);
        setSelectedCategory(null); // Reset category when discount type changes
        setPriceRange({ ...priceRange, current: priceRange.max }); // Reset price range to max when discount type changes
        setPage(1);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    

    // Create placeholders to fill the remaining grid space
    const placeholders = new Array(Math.max(0, 9 - products.length)).fill(null);

    return (
        <div className="flex flex-col w-full p-4 bg-white">
            {isLoading && (
                <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50">
                    <div className="relative w-64 p-4">
                        <span id="ProgressLabel" className="sr-only">Loading</span>
                        <span
                            role="progressbar"
                            aria-labelledby="ProgressLabel"
                            aria-valuenow="75"
                            className="block rounded-full bg-gray-200"
                        >
                            <span
                                className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-lime-400 to-lime-500 animate-pulse"
                                style={{ width: '75%' }}
                            ></span>
                        </span>
                    </div>
                </div>
            )}
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 p-4">
                    <div className="mb-4">
                    <input 
                            type="text" 
                            placeholder="Search Products" 
                            className="w-full p-2 border border-lime-500 rounded focus:border-lime-500 focus:ring-lime-500 focus:outline-none"
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
                    {products.map(product => (
                        <div key={product.id} className="bg-white border border-white rounded-md shadow-md overflow-hidden shadow hover:shadow-2xl hover:shadow-gray-400 relative max-w-full sm:max-w-sm">
                            <div className="w-full h-36 sm:h-44 md:h-52 overflow-hidden">
                                <img src={`http://localhost:8000${product.image}`} alt={product.name} className="w-full h-full object-cover transition duration-300 transform hover:scale-105" />
                            </div><span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-md bg-red-600 px-4 py-2 font-medium uppercase tracking-widest text-white">
                            Save 5%
                        </span>
                            <div className="p-3 sm:p-4 text-center">
                                <h2 className="text-gray-900 text-md sm:text-lg md:text-xl font-semibold mb-1">{product.name}</h2>
                                <p className="text-gray-600 text-sm sm:text-base mb-1 line-clamp-2">{product.description}</p>
                                <p className="text-gray-800 font-semibold text-sm sm:text-base mb-1">Rs.{product.price}/1Kg</p>
                                <div className="flex justify-center items-center space-x-4 mt-2">
                                    <FontAwesomeIcon icon={faCartShopping} className="text-amber-500 text-lg hover:text-gray-700 transition duration-300" onClick={() => addToCart(product)} />
                                    <FontAwesomeIcon icon={faEye} className="text-amber-500 text-lg hover:text-gray-700 transition duration-300" />
                                    <FontAwesomeIcon icon={faHeart} className="text-amber-500 text-lg hover:text-gray-700 transition duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                    {placeholders.map((_, index) => (
                        <div key={`placeholder-${index}`} className="bg-white border border-white rounded-md shadow-md overflow-hidden shadow hover:shadow-2xl hover:shadow-gray-400 relative max-w-full sm:max-w-sm invisible">
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