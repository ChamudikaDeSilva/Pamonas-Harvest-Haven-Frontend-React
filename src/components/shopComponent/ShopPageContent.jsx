import React from 'react';
import ShopCategory from './shopCategory';

const FruitsShop = () => {
    return (
        <div className="container mx-auto mt-10">   
            <div className="flex items-center justify-center pl-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 md:mb-6" style={{ 
                textShadow: '1px 1px 0 #15803d, -1px -1px 0 #15803d, 1px -1px 0 #15803d, -1px 1px 0 #15803d' 
                }}>
                    Our Products
                </h2>
                <div className="h-px flex-1 bg-green-600"></div>
            </div>
            <div className="flex flex-col items-start">
                <ShopCategory className="w-80 max-w-md" />
            </div>
        </div>
        
    );
};

export default FruitsShop;
