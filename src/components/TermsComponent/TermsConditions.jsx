import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TermsConditions = () => {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center">
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 md:mb-6"
                    style={{
                        textShadow:
                            '1px 1px 0 #15803d, -1px -1px 0 #15803d, 1px -1px 0 #15803d, -1px 1px 0 #15803d',
                    }}
                >
                    Terms & Conditions
                </h2>
                <div className="h-px flex-1 bg-green-600"></div>
            </div>

            <motion.div
                ref={sectionRef}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                variants={sectionVariants}
            >
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">GENERAL</h2>
                    <p className="text-gray-700 mb-4">
                        Products sold under any promotional scheme, including but not limited to discount coupons/gift coupons issued under any promotional scheme or by any third party, will not be eligible for exchange or refund.
                    </p>
                    <p className="text-gray-700 mb-4">
                        No warranty/guarantee/exchange for products purchased on discount or during the sale period.
                    </p>
                    <p className="text-gray-700 mb-4">
                        All items to be returned or exchanged must be unused and in their original condition with all original tags and packaging intact (e.g., shoes must be packed in the original shoe box).
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">OFFER AND COUPON</h2>
                    <p className="text-gray-700 mb-4">
                        Offers are for limited inventory and are subject to availability.
                    </p>
                    <p className="text-gray-700 mb-4">
                        An offer shall not be settled with cash in lieu and is not transferable.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Coupon codes are time-bound and details regarding the start and end time of the promotion will be available on the company’s social media platform and website desktop banner.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">PRICING & AVAILABILITY</h2>
                    <p className="text-gray-700 mb-4">
                        Whilst we try to ensure that all details, descriptions, stock availability, and prices, which appear on this Site, are accurate, errors may occur.
                    </p>
                    <p className="text-gray-700 mb-4">
                        If we discover an error in the price or availability of any goods, which you have ordered, we will inform you of this as soon as possible and give you the option of reconfirming your order at the correct price or canceling it. If we are unable to contact you, we will treat the order as canceled. If you cancel and you have already paid for the goods, you will receive a full refund.
                    </p>
                    <p className="text-gray-700 mb-4">
                        All prices shall be listed in Sri Lankan Rupees (LKR).
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">EXCHANGE POLICY AND PROCESS</h2>
                    <p className="text-gray-700 mb-4">
                        If you would like to exchange an item due to a mismatch of size or receipt of a defective item, you will be provided with a replacement.
                    </p>
                    <p className="text-gray-700 mb-4">
                        You can create an exchange request via electronic media (WhatsApp, Email, Social media) for products purchased from Pamonas Harvest Haven within 07 (seven) days from the date of purchase.
                    </p>
                    <p className="text-gray-700 mb-4">
                        All exchanges are subject to stock availability, and it is required that your address has not changed from the previous delivery address.
                    </p>
                    <p className="text-gray-700 mb-4">
                        If the value of the replaced products is less than the original value of the exchanged/claimed product, there will be no cash refund or a credit note issued.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Please note lingerie and clearance sale items cannot be exchanged.
                    </p>
                    <p className="text-gray-700 mb-4">
                        The company will not accept return/exchange items that have been worn, washed, damaged, used, altered, or returned without the attached company tags and receipt.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">EXCHANGE PROCESS</h2>
                    <p className="text-gray-700 mb-4">
                        When you need to do the exchange, you must hand over the original product to our delivery staff/third party courier service person and receive the exchange item from them. Please ensure that you have the original item available at the same address selected for the delivery of the exchange item.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Replacement against exchange/claims will be subject to the availability of the same product. In case the same product/size is not available at the store/warehouse, the replacement will be adjusted against a subsequent purchase at the store.
                    </p>
                    <p className="text-gray-700 mb-4">
                        All exchanges are subject to additional delivery charges.
                    </p>
                </section>
            </motion.div>
        </div>
    );
};

export default TermsConditions;
