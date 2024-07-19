import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImageContainer = () => {
    const images = [
        { src: "/Images/blog-img.jpg", alt: "Description of image 1", text: "Fresh from the Farm to Your Table" },
        { src: "/Images/blog-img-01.jpg", alt: "Description of image 2", text: "Handpicked for Freshness and Flavor" },
        { src: "/Images/blog-img-02.jpg", alt: "Description of image 3", text: "Discover the Best in Organic Food" },
    ];

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
            {images.map((image, index) => (
                <ImageItem key={index} image={image} />
            ))}
        </div>
    );
}

const ImageItem = ({ image }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.5 });

    React.useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1 });
        } else {
            controls.start({ opacity: 0 });
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="relative">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover opacity-50" />
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <span className="text-lime-900 font-bold text-3xl">{image.text}</span>
            </motion.div>
        </div>
    );
}

export default ImageContainer;
