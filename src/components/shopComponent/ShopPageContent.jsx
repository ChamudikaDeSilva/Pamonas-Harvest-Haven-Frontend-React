import React from 'react';
import ShopCategory from './shopCategory';

const FruitsShop = () => {
    return (
        <div className="container mx-auto mt-10">
            <div>
                <h1 className="text-gray-900 text-4xl font-bold mb-6">Our Products</h1>
                <div className="flex flex-col items-start">
                    <ShopCategory className="w-80 max-w-md" />
                </div>
            </div>
        </div>
    );
};

export default FruitsShop;
