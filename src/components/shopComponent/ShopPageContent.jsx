import React from 'react';
import ShopCategory from './shopCategory';

const FruitsShop = () => {
    return (
        <div className="container mx-auto mt-10">
            <div>
                <h1 className="text-gray-600 text-4xl font-semibold mb-6">Fresh Organic Products</h1>
                <div className="flex flex-col items-start">
                    {/*<div className="relative w-80 max-w-md mb-6">
                        <input type="text" className="border border-amber-500 focus:outline-none focus:border-lime-500 rounded-md py-2 px-3 block w-full appearance-none leading-normal" placeholder="Search Products" />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <i className="fas fa-search text-gray-400"></i>
                        </div>
                    </div>*/}
                    <ShopCategory className="w-80 max-w-md" />
                </div>
            </div>
        </div>
    );
};

export default FruitsShop;
