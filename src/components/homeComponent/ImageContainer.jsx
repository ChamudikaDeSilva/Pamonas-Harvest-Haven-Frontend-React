import React from 'react';

const ImageContainer = () => {
    const images = [
        { src: "/Images/Pamonas/fruits & vegetables/lemon.jpg", alt: "Description of image 1" },
        { src: "/Images/Pamonas/fruits & vegetables/orange.jpg", alt: "Description of image 2" },
        { src: "/Images/Pamonas/fruits & vegetables/watermelon.jpg", alt: "Description of image 3" },
        { src: "/Images/Pamonas/fruits & vegetables/banana.jpg", alt: "Description of image 4" }
    ];

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
            {images.map((image, index) => (
                <div key={index} className="w-full h-full">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
    );
}

export default ImageContainer;
