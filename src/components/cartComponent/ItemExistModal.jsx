import React from 'react';


const ItemExistModal = ({ isOpen, onClose }) => {
    

    if (!isOpen) return null;

    const handleClose = () => {
        onClose(); 
    
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg className="h-6 w-6 text-amber-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.356-.893 1.57-.893 1.927 0l6.516 16.34A1 1 0 0115.86 21H4.14a1 1 0 01-.94-1.56L8.257 3.1zM11 9a1 1 0 00-2 0v4a1 1 0 002 0V9zm-1 7a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                        </svg>
                    </div>

                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Warning
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm leading-5 text-gray-500">
                                    This item is already in your cart!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                            <button type="button" onClick={handleClose}
                                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-lime-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                Close
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemExistModal;
