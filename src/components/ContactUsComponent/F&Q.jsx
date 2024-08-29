import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FaqItem = ({ faq, index, openQuestion, toggleQuestion }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const questionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
    };

    return (
        <motion.div
            ref={ref}
            variants={questionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
        >
            <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleQuestion(index)}
            >
                <span className="flex text-lg font-semibold text-gray-700">
                    {faq.question}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                        openQuestion === index ? "rotate-0" : "rotate-180"
                    }`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {openQuestion === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-green-700">{faq.answer}</p>
                </div>
            )}
        </motion.div>
    );
};

const FrequentlyAskQuestion = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (questionIndex) => {
        setOpenQuestion(openQuestion === questionIndex ? null : questionIndex);
    };

    const faqs = [
        {
            question: "What types of organic foods do you offer?",
            answer: "We offer a wide variety of organic fruits, vegetables, grains, dairy products, meats, and more. All our products are sourced from certified organic farms."
        },
        {
            question: "How do you ensure the quality of your organic products?",
            answer: "We work closely with trusted organic farmers and conduct regular quality checks to ensure that our products meet the highest standards."
        },
        {
            question: "Can I customize my orders?",
            answer: "Yes, you can customize your orders by selecting specific quantities and types of products. We also offer personalized subscription boxes based on your preferences."
        },
        {
            question: "What is your delivery process for organic foods?",
            answer: "We deliver your organic food orders directly to your doorstep, ensuring freshness and quality. Delivery times may vary based on your location."
        },
        {
            question: "Do you offer any discounts or promotions?",
            answer: "We regularly offer discounts and promotions on select products. Sign up for our newsletter to stay informed about our latest offers."
        },
        {
            question: "Is there a minimum order amount for free delivery?",
            answer: "Yes, we offer free delivery on orders above a certain amount. Please check our delivery policy for the latest details."
        },
        {
            question: "How can I ensure my organic produce stays fresh?",
            answer: "We provide storage tips for each type of organic produce to help you maintain freshness. Proper refrigeration and storage are key to extending shelf life."
        },
        {
            question: "Can I track my order?",
            answer: "Yes, you can track your order through your account dashboard. You will also receive email updates on your order status."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods, including credit/debit cards, and Cash on delivery. All transactions are secure and encrypted."
        },
        {
            question: "What should I do if I receive damaged or spoiled products?",
            answer: "If you receive any damaged or spoiled products, please contact our customer support immediately. We will arrange for a replacement or refund."
        },
    ];

    return (
        <section
            className="py-10 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: `url('/Images/Pamonas/greens.jpg')` }}
        >
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-lime-200 sm:text-4xl lg:text-5xl">
                        Frequently Asked Questions...
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            faq={faq}
                            index={index}
                            openQuestion={openQuestion}
                            toggleQuestion={toggleQuestion}
                        />
                    ))}
                </div>
                <p className="text-center text-gray-100 text-base mt-9">
                    Still have questions?{" "}
                    <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover:underline">
                        Contact our support <span className="text-lime-200">pamonaorg@gmail.com</span>
                    </span>
                </p>
            </div>
        </section>
    );
};

export default FrequentlyAskQuestion;
