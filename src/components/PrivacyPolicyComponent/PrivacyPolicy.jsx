import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PrivacyPolicy = () => {
    const { ref: policyRef, inView: isPolicyInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 md:mb-6" style={{ 
                    textShadow: '1px 1px 0 #15803d, -1px -1px 0 #15803d, 1px -1px 0 #15803d, -1px 1px 0 #15803d' 
                }}>
                    Privacy Policy
                </h2>
                <div className="h-px flex-1 bg-green-600"></div>
            </div>

            <motion.div
                ref={policyRef}
                initial="hidden"
                animate={isPolicyInView ? "visible" : "hidden"}
                variants={sectionVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p className="text-gray-800 leading-relaxed mb-6 text-lg">
                    Welcome to <span className="text-green-500 font-bold">Pamona’s Harvest Haven.</span> We value your privacy and strive to
                    protect your personal information. This privacy policy outlines how we
                    collect, use, and safeguard your data when you interact with our
                    website.
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
                    <p className="text-gray-700 mb-4">
                        We collect information that you provide directly to us when you sign up,
                        make purchases, or contact us. This may include your name, email address,
                        payment details, and other information you choose to provide.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                    <p className="text-gray-700 mb-4">
                        The information we collect is used to process your orders, communicate
                        with you, and improve our services. We may also use your information for
                        marketing purposes, but only with your consent.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
                    <p className="text-gray-700 mb-4">
                        We implement a variety of security measures to protect your personal
                        information from unauthorized access, use, or disclosure. However, no
                        method of transmission over the internet is 100% secure.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. Changes to This Policy</h2>
                    <p className="text-gray-700 mb-4">
                        We may update this privacy policy from time to time. Any changes will be
                        posted on this page, and we will notify you of significant changes via
                        email.
                    </p>
                    <p className="text-gray-700 mb-4">
                        If you have any questions or concerns about our privacy practices, please
                        contact us at{" "}
                        <span className="font-bold text-lime-500">
                            privacy@pamonasharvesthaven.com
                        </span>.
                    </p>
                </section>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;
