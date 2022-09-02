import React from 'react';
import CardStats from '../WhyHubble/CardStats';

import { motion } from 'framer-motion';

const whyHubbleContainerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
    }
};

const whyHubbleLeftVariants = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
};

const whyHubbleRightVariants = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
};

export default function WhyHubble() {
    return (
        <section className="w-full my-20 sm:my-40 overflow-hidden">

            <div className="container">

                <motion.div 
                    className="flex flex-col lg:flex-row items-center justify-between mb-20"
                    variants={whyHubbleContainerVariants}
                    initial='hidden'
                    whileInView='visible'>

                    <motion.div 
                        className="w-full lg:w-1/2 max-w-none lg:max-w-[510px] mr-0 lg:mr-12 mb-16 sm:mb-20 lg:mb-0"
                        variants={whyHubbleLeftVariants}>

                        <h2 className="font-roobert-medium font-medium text-[1.75rem] md:text-[2.5rem] xl:text-[3rem] text-white leading-[1.2] md:leading-[1.05] mb-6">
                            We help organizations make sense of infinity
                        </h2>

                        <p className="font-roobert-regular text-lg text-white mb-12">
                            Built by experts, for everyone — Hubble guarantees rapid time-to-value for teams across your enterprise, providing a telescopic view of everything.
                        </p>

                        <a className="inline-flex items-center group" href="#">

                            <span className="font-roobert-medium font-medium text-white pr-4">
                                Why Hubble?
                            </span>

                            <span className="flex items-center justify-center w-8 h-8 bg-brand-pink rounded-full transition duration-300 group-hover:translate-x-1">
                                <img className="w-[12px]" src="./src/img/misc/link_arrow.png" />
                            </span>

                        </a>

                    </motion.div>

                    <motion.div 
                        className="w-full lg:w-1/2 max-w-none lg:max-w-[588px]"
                        variants={whyHubbleRightVariants}>
                        <img src="./src/img/why_hubble/infographic.png" />
                    </motion.div>

                </motion.div>

                <CardStats />

            </div>

        </section>
    );
}