import React, { useEffect, useState } from "react";

const PrivacyPolicy = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowContent(true);
        }, 300); // Delay for effect
    }, []);

    return (
        <div className="relative min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div
                className={`transform transition-all duration-1000 ease-in-out ${
                    showContent ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
            >
                <h1 className="text-4xl font-extrabold text-lime-600 mb-8 text-center animate-bounce">
                    Privacy Policy
                </h1>
                <div className="bg-white p-8 rounded-xl shadow-2xl max-w-3xl mx-auto">
                    <p className="text-gray-800 leading-relaxed mb-6 text-lg">
                        Welcome to <span className="text-green-500 font-bold ">Pamona’s Harvest Haven.</span> We value your privacy and strive to
                        protect your personal information. This privacy policy outlines how we
                        collect, use, and safeguard your data when you interact with our
                        website.
                    </p>
                    <h2 className="text-3xl font-semibold text-lime-600 mb-6">
                        1. Information Collection
                    </h2>
                    <p className="text-gray-800 leading-relaxed mb-6 text-lg font-light">
                        We collect information that you provide directly to us when you sign up,
                        make purchases, or contact us. This may include your name, email address,
                        payment details, and other information you choose to provide.
                    </p>
                    <h2 className="text-3xl font-semibold text-lime-600 mb-6">
                        2. How We Use Your Information
                    </h2>
                    <p className="text-gray-800 leading-relaxed mb-6 text-lg font-light">
                        The information we collect is used to process your orders, communicate
                        with you, and improve our services. We may also use your information for
                        marketing purposes, but only with your consent.
                    </p>
                    <h2 className="text-3xl font-semibold text-lime-600 mb-6">
                        3. Data Security
                    </h2>
                    <p className="text-gray-800 leading-relaxed mb-6 text-lg font-light">
                        We implement a variety of security measures to protect your personal
                        information from unauthorized access, use, or disclosure. However, no
                        method of transmission over the internet is 100% secure.
                    </p>
                    <h2 className="text-3xl font-semibold text-lime-600 mb-6">
                        4. Changes to This Policy
                    </h2>
                    <p className="text-gray-800 leading-relaxed mb-6 text-lg font-light">
                        We may update this privacy policy from time to time. Any changes will be
                        posted on this page, and we will notify you of significant changes via
                        email.
                    </p>
                    <p className="text-gray-800 leading-relaxed text-lg font-light">
                        If you have any questions or concerns about our privacy practices, please
                        contact us at{" "}
                        <span className="font-bold text-black">
                            privacy@pamonasharvesthaven.com
                        </span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
