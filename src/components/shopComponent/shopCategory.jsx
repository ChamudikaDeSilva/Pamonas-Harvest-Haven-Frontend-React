import React from 'react';

const ShopCategory = ({ className }) => {
    return (
        <div className={`mb-3 flex flex-col ${className}`}>
            <h4 className="text-gray-600 text-lg font-semibold mb-2">Categories</h4>
            <ul className="list-none">
                <li className="flex justify-between items-center">
                    <a href=" " className="text-lime-500 hover:text-amber-500 flex items-center">
                        <i className="fas fa-apple-alt mr-2"></i>
                        Apples
                    </a>      
                </li>
                <li className="flex justify-between items-center">
                    <a href=" " className="text-lime-500 hover:text-amber-500 flex items-center">
                        <i className="fas fa-apple-alt mr-2"></i>
                        Oranges
                    </a>       
                </li>
                <li className="flex justify-between items-center">
                    <a href=" " className="text-lime-500 hover:text-amber-500 flex items-center">
                        <i className="fas fa-apple-alt mr-2"></i>
                        Strawbery
                    </a>        
                </li>
                <li className="flex justify-between items-center">
                    <a href=" " className="text-lime-500 hover:text-amber-500 flex items-center">
                        <i className="fas fa-apple-alt mr-2"></i>
                        Banana
                    </a>        
                </li>
                <li className="flex justify-between items-center">
                    <a href=" " className="text-lime-500 hover:text-amber-500 flex items-center">
                        <i className="fas fa-apple-alt mr-2"></i>
                        Pumpkin
                    </a>        
                </li>
            </ul>
        </div>
    );
};

export default ShopCategory;
