import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-lime-600">Privacy Policy</h1>

            <p className="text-gray-800 leading-relaxed mb-6 text-lg">
                Welcome to <span className="text-green-500 font-bold ">Pamona’s Harvest Haven.</span> We value your privacy and strive to
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

            
        </div>
    );
};

export default PrivacyPolicy;
