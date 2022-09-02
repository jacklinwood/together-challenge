import React from 'react';

import { motion } from 'framer-motion';

const stackedCardVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};

const stackedCardGradientVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2
        }
    }
};

const stackedCardTextVariants = {
    hidden: {
        y: -20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2
        }
    }
};

export default function StackedCards() {
    return (
        <section className="container my-20 sm:my-40">

            <h2 className="font-roobert-medium font-medium text-[1.75rem] md:text-[2.5rem] xl:text-[3rem] text-center text-white leading-[1.2] md:leading-[1.05] mb-12 sm:mb-[88px]">
                Build a single source of truth and <span className="lg:block">drive transformation</span>
            </h2>

            <motion.div 
                className="md:sticky top-[198px] w-full bg-brand-navy rounded-2xl border border-solid border-[#EAFFFF26] mx-auto overflow-hidden"
                variants={stackedCardVariants}
                initial="hidden"
                whileInView="visible">

                <motion.div 
                    className="absolute top-0 right-0 w-[46.56%]"
                    variants={stackedCardGradientVariants}>
                    <img src="./src/img/stacked_cards/eliminate_risk/gradient.png" />
                </motion.div>

                <div className="stacked-card-noise absolute top-0 left-0 w-full h-full opacity-20 mix-blend-soft-light z-10"></div>

                <div className="flex flex-col md:flex-row items-center relative w-full z-20">

                    <div className="relative w-full md:w-[49%]">
                        <img src="./src/img/stacked_cards/eliminate_risk/infographic.png" />
                    </div>

                    <motion.div 
                        className="flex-1 flex justify-end px-8 md:pr-8 lg:pr-[88px] py-8"
                        variants={stackedCardTextVariants}>

                        <div className="w-full max-w-none md:max-w-[412px]">

                            <div className="flex items-center mb-4 space-x-2">

                                <div className="w-[30px]">
                                    <img src="./src/img/stacked_cards/eliminate_risk/icon.png" />
                                </div>

                                <div className="font-roobert-medium font-medium text-[0.8125rem] text-[#FB3D5D] leading-[1.4] tracking-[0.15rem]">SEE</div>

                            </div>

                            <h3 className="font-roobert-medium font-medium text-[1.75rem] lg:text-[2rem] text-white leading-[1.2] md:leading-[1.05] mb-8">
                                Eliminate risk
                            </h3>

                            <p className="font-roobert-regular text-base lg:text-lg text-white">
                                We provide visibility into your organization's environment. Giving you knowledge you don’t currently have — a single source of truth to eliminate risk.
                            </p>

                        </div>

                    </motion.div>

                </div>

            </motion.div>

            <motion.div 
                className="md:sticky top-[198px] w-full bg-brand-navy rounded-2xl border border-solid border-[#EAFFFF26] mx-auto mt-16 overflow-hidden"
                variants={stackedCardVariants}
                initial="hidden"
                whileInView="visible">

                <motion.div 
                    className="absolute top-0 right-0 w-[59.18%]"
                    variants={stackedCardGradientVariants}>
                    <img src="./src/img/stacked_cards/gain_context/gradient.png" />
                </motion.div>

                <div className="stacked-card-noise absolute top-0 left-0 w-full h-full opacity-20 mix-blend-soft-light z-10"></div>

                <div className="flex flex-col md:flex-row items-center relative w-full z-20">

                    <div className="relative w-full md:w-[49%]">
                        <img src="./src/img/stacked_cards/gain_context/infographic.png" />
                    </div>

                    <motion.div 
                        className="flex-1 flex justify-end px-8 md:pr-8 lg:pr-[88px] py-8"
                        variants={stackedCardTextVariants}>

                        <div className="w-full max-w-none md:max-w-[412px]">

                            <div className="flex items-center mb-4 space-x-2">

                                <div className="w-[30px]">
                                    <img src="./src/img/stacked_cards/gain_context/icon.png" />
                                </div>

                                <div className="font-roobert-medium font-medium text-[0.8125rem] text-[#E359FF] leading-[1.4] tracking-[0.15rem]">UNDERSTAND</div>

                            </div>

                            <h3 className="font-roobert-medium font-medium text-[1.75rem] lg:text-[2rem] text-white leading-[1.2] md:leading-[1.05] mb-8">
                                Gain context
                            </h3>

                            <p className="font-roobert-regular text-base lg:text-lg text-white">
                                Unlike other asset management tools, we bring context to existing data — providing the insights needed for a resilient business
                            </p>

                        </div>

                    </motion.div>

                </div>

            </motion.div>

            <motion.div 
                className="md:sticky top-[198px] w-full bg-brand-navy rounded-2xl border border-solid border-[#EAFFFF26] mx-auto mt-16 overflow-hidden"
                variants={stackedCardVariants}
                initial="hidden"
                whileInView="visible">

                <motion.div 
                    className="absolute right-0 bottom-0 w-[46.15%]"
                    variants={stackedCardGradientVariants}>
                    <img src="./src/img/stacked_cards/unlock_value/gradient.png" />
                </motion.div>

                <div className="stacked-card-noise absolute top-0 left-0 w-full h-full opacity-20 mix-blend-soft-light z-10"></div>

                <div className="flex flex-col md:flex-row items-center relative w-full z-20">

                    <div className="relative w-full md:w-[49%]">
                        <img src="./src/img/stacked_cards/unlock_value/infographic.png" />
                    </div>

                    <motion.div 
                        className="flex-1 flex justify-end px-8 md:pr-8 lg:pr-[88px] py-8"
                        variants={stackedCardTextVariants}>

                        <div className="w-full max-w-none md:max-w-[412px]">

                            <div className="flex items-center mb-4 space-x-2">

                                <div className="w-[30px]">
                                    <img src="./src/img/stacked_cards/unlock_value/icon.png" />
                                </div>

                                <div className="font-roobert-medium font-medium text-[0.8125rem] text-[#3AFCFC] leading-[1.4] tracking-[0.15rem]">ENABLE</div>

                            </div>

                            <h3 className="font-roobert-medium font-medium text-[1.75rem] lg:text-[2rem] text-white leading-[1.2] md:leading-[1.05] mb-8">
                                Unlock value
                            </h3>

                            <p className="font-roobert-regular text-base lg:text-lg text-white">
                                Turn insights into action. Unlock value and drive digital transformation across your business with asset intelligence workflows.
                            </p>

                        </div>

                    </motion.div>

                </div>

            </motion.div>

        </section>
    );
}