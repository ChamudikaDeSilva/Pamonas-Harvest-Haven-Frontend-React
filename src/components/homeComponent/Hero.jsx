import React, { useState } from 'react';

import 'swiper/css';
import 'swiper/css/autoplay';

const Hero = () => {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const shortParagraph = "Indulge in the freshest, 100% organic produce, meticulously sourced and delivered straight to your doorstep.";
    const fullParagraph = "Indulge in the freshest, 100% organic produce, meticulously sourced and delivered straight to your doorstep. From succulent fruits to crisp vegetables, each bite is a celebration of nature's bounty. Elevate your meals with our premium selection, handpicked for their unrivaled quality and flavor. Rediscover the joy of wholesome eating, crafted with care and dedication to your well-being.";

    return (
        <div className="bg-cover bg-center bg-no-repeat pt-10 md:pt-20 pb-16 md:pb-24 lg:pb-64" style={{ backgroundImage: "url('/Images/pamonas/fruits & vegetables/fruits3.jpg')" }}>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20">
                <div className="p-5 flex flex-col justify-center">
                    <div>
                        <h3 className="text-3xl lg:text-2xl font-bold text-amber-500 mb-4">100% Organic Products</h3>
                        <h1 className="text-3xl lg:text-6xl font-bold text-black mb-4">Organic Veggies & Fruits</h1>
                    </div>
                    <div className="text-left max-w-lg">
                        <p className="text-lg text-gray-800 mb-8 italic">
                            {isReadMore ? fullParagraph : shortParagraph}
                        </p>
                        <button 
                            onClick={toggleReadMore} 
                            className="bg-lime-500 text-white font-bold py-2 px-4 md:px-6 rounded-full shadow-md hover:bg-lime-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full md:w-auto"
                        >
                            {isReadMore ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
