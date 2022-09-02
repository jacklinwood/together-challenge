import React from 'react';

import { motion } from 'framer-motion';

const cardContainerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.2,
            when: 'beforeChildren',
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
};

export default function Cards() {
    return (
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 relative z-[10]"
            variants={cardContainerVariants}
            initial='hidden'
            whileInView='visible'>

            <motion.a 
                className="card group block relative bg-[rgba(10,22,40,0.5)] border-solid border border-[#EAFFFF26] rounded-lg backdrop-blur-[50px] p-8 overflow-hidden"
                href="#"
                variants={cardVariants}>

                <div className="absolute top-0 right-0 w-[210px] h-full opacity-0 group-hover:opacity-100 z-10 transition duration-300">
                    <img className="h-full float-right" src="./src/img/masthead/cards/hover_gradient.png" />
                </div>

                <div className="card-noise absolute top-0 left-0 w-full h-full opacity-20 mix-blend-soft-light z-20"></div>

                <div className="relative z-30">

                    <div className="flex justify-between mb-3">

                        <div className="w-12">
                            <img src="./src/img/masthead/cards/ciso.png" />
                        </div>

                        <div className="w-5 opacity-0 group-hover:opacity-100 transition">
                            <img src="./src/img/masthead/cards/link_arrow.png" />
                        </div>

                    </div>

                    <h5 className="font-roobert-medium font-medium text-xl text-white mb-3">
                        I’m a CISO
                    </h5>

                    <div className="font-roobert-medium font-medium text-white">
                        Report confidently on the state of your assets and data.
                    </div>

                </div>

            </motion.a>

            <motion.a 
                className="card group block relative bg-[rgba(10,22,40,0.5)] border-solid border border-[#EAFFFF26] rounded-lg backdrop-blur-[50px] p-8 overflow-hidden"
                href="#"
                variants={cardVariants}>

                <div className="absolute top-0 right-0 w-[210px] h-full opacity-0 group-hover:opacity-100 z-10 transition duration-300">
                    <img className="h-full float-right" src="./src/img/masthead/cards/hover_gradient.png" />
                </div>

                <div className="card-noise absolute top-0 left-0 w-full h-full opacity-20 mix-blend-soft-light z-20"></div>

                <div className="relative z-30">

                    <div className="flex justify-between mb-3">

                        <div className="w-12">
                            <img src="./src/img/masthead/cards/cio.png" />
                        </div>

                        <div className="w-5 opacity-0 group-hover:opacity-100 transition">
                            <img src="./src/img/masthead/cards/link_arrow.png" />
                        </div>

                    </div>

                    <h5 className="font-roobert-medium font-medium text-xl text-white mb-3">
                        I’m a CIO
                    </h5>

                    <div className="font-roobert-medium font-medium text-white">
                        Understand, quantify, and mitigate underlying risk.
                    </div>

                </div>

            </motion.a>

            <motion.a 
                className="card group block relative bg-[rgba(10,22,40,0.5)] border-solid border border-[#EAFFFF26] rounded-lg backdrop-blur-[50px] p-8 overflow-hidden"
                href="#"
                variants={cardVariants}>

                <div className="absolute top-0 right-0 w-[210px] h-full opacity-0 group-hover:opacity-100 z-10 transition duration-300">
                    <img className="h-full float-right" src="./src/img/masthead/cards/hover_gradient.png" />
                </div>

                <div className="card-noise absolute top-0 left-0 w-full h-full opacity-20 mix-blend-soft-light z-20"></div>

                <div className="relative z-30">

                    <div className="flex justify-between mb-3">

                        <div className="w-12">
                            <img src="./src/img/masthead/cards/security_operator.png" />
                        </div>

                        <div className="w-5 opacity-0 group-hover:opacity-100 transition">
                            <img src="./src/img/masthead/cards/link_arrow.png" />
                        </div>

                    </div>

                    <h5 className="font-roobert-medium font-medium text-xl text-white mb-3">
                        I’m a Security Operator
                    </h5>

                    <div className="font-roobert-medium font-medium text-white">
                        Get answers to questions for every investigation.
                    </div>

                </div>

            </motion.a>

            <motion.a 
                className="card group block relative bg-[rgba(10,22,40,0.5)] border-solid border border-[#EAFFFF26] rounded-lg backdrop-blur-[50px] p-8 overflow-hidden"
                href="#"
                variants={cardVariants}>

                <div className="absolute top-0 right-0 w-[210px] h-full opacity-0 group-hover:opacity-100 z-10 transition duration-300">
                    <img className="h-full float-right" src="./src/img/masthead/cards/hover_gradient.png" />
                </div>

                <div className="card-noise absolute top-0 left-0 w-full h-full opacity-20 mix-blend-soft-light z-20"></div>

                <div className="relative z-30">

                    <div className="flex justify-between mb-3">

                        <div className="w-12">
                            <img src="./src/img/masthead/cards/it_operator.png" />
                        </div>

                        <div className="w-5 opacity-0 group-hover:opacity-100 transition">
                            <img src="./src/img/masthead/cards/link_arrow.png" />
                        </div>

                    </div>

                    <h5 className="font-roobert-medium font-medium text-xl text-white mb-3">
                        I’m an IT Operator
                    </h5>

                    <div className="font-roobert-medium font-medium text-white">
                        Understand the entire landscape of your assets.
                    </div>

                </div>

            </motion.a>

        </motion.div>
    );
}