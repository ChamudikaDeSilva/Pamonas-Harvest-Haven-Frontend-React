import React from 'react';

const ImageContainer = () => {
    const images = [
        { src: "/Images/blog-img.jpg", alt: "Description of image 1" },
        { src: "/Images/blog-img-01.jpg", alt: "Description of image 2" },
        { src: "/Images/blog-img-02.jpg", alt: "Description of image 3" },
        
    ];

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
            {images.map((image, index) => (
                <div key={index} className="w-full h-full">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:brightness-50" />
                </div>
            ))}
        </div>
    );
}

export default ImageContainer;
