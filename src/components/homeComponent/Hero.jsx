import React, { useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

const Hero = () => {
    const images = [
        '/Images/hero-img-1.png',
        '/Images/hero-img-2.jpg',
    ];

    // State to manage the visibility of the full paragraph
    const [isReadMore, setIsReadMore] = useState(false);

    // Function to toggle the Read More state
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    // Shortened paragraph
    const shortParagraph = "Indulge in the freshest, 100% organic produce, meticulously sourced and delivered straight to your doorstep.";

    // Full paragraph
    const fullParagraph = "Indulge in the freshest, 100% organic produce, meticulously sourced and delivered straight to your doorstep. From succulent fruits to crisp vegetables, each bite is a celebration of nature's bounty. Elevate your meals with our premium selection, handpicked for their unrivaled quality and flavor. Rediscover the joy of wholesome eating, crafted with care and dedication to your well-being.";

    return (
        <div className="bg-cover bg-center bg-no-repeat pb-10 md:pb-20" style={{ backgroundImage: "url('Images/hero-img.jpg')" }}>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20">
                {/* Text Column */}
                <div className="p-5 flex justify-center items-center flex-col">
                    <div>
                        <h3 className="text-3xl lg:text-2xl font-bold text-amber-500 mb-4">100% organic products</h3>
                        <h1 className="text-3xl lg:text-6xl font-bold text-lime-500 mb-4">Organic Veggies & Fruits</h1>
                    </div>
                    <div className="text-center max-w-lg">
                        <p className="text-lg text-gray-600 mb-8 italic">
                            {isReadMore ? fullParagraph : shortParagraph}
                        </p>
                        <button 
                            onClick={toggleReadMore} 
                            className="bg-lime-500 text-white font-bold py-2 px-4 md:px-6 rounded-full shadow-md hover:bg-lime-500 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full md:w-auto"
                        >
                            {isReadMore ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </div>
                {/* Image Gallery Column */}
                <div>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center">
                                    <img
                                        src={img}
                                        alt={`slide-${index + 1}`}
                                        className="rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Hero;
