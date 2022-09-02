import React from 'react';

import { motion } from 'framer-motion';

const cardVariants = {
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

export default function CardStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            <div className="card flex-1 flex relative bg-[rgba(10,22,40,0.5)] border-solid border border-[#EAFFFF26] rounded-lg backdrop-blur-[50px] p-6 overflow-hidden">

                <motion.div 
                    className="absolute top-0 left-0 w-[145px] h-full z-10"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible">
                    <img className="h-full" src="./src/img/why_hubble/card_stats/gradient_light_blue.png" />
                </motion.div>

                <div className="card-noise absolute top-0 left-0 w-full h-full opacity-20 mix-blend-soft-light z-20"></div>

                <div className="flex items-center relative space-x-6 z-30">

                    <div className="font-roobert-regular text-[1.75rem] md:text-[2.5rem] xl:text-[3rem] text-white leading-[1.05]">
                        74
                    </div>

                    <div className="w-px h-full bg-[#3AFCFC]"></div>

                    <div className="font-roobert-medium font-medium text-lg text-white leading-[1.4]">
                        Magna lectus cursus neque, enim
                    </div>

                </div>

            </div>

            <div className="card flex-1 flex relative bg-[rgba(10,22,40,0.5)] border-solid border border-[#EAFFFF26] rounded-lg backdrop-blur-[50px] p-6 overflow-hidden">

                <motion.div 
                    className="absolute top-0 left-0 w-[145px] h-full z-10"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible">
                    <img className="h-full" src="./src/img/why_hubble/card_stats/gradient_yellow.png" />
                </motion.div>

                <div className="card-noise absolute top-0 left-0 w-full h-full opacity-20 mix-blend-soft-light z-20"></div>

                <div className="flex items-center relative space-x-6 z-30">

                    <div className="font-roobert-regular text-[1.75rem] md:text-[2.5rem] xl:text-[3rem] text-white leading-[1.05]">
                        500+
                    </div>

                    <div className="w-px h-full bg-[#D1FF5F]"></div>

                    <div className="font-roobert-medium font-medium text-lg text-white leading-[1.4]">
                        Magna lectus cursus neque
                    </div>

                </div>

            </div>

            <div className="card flex-1 flex relative bg-[rgba(10,22,40,0.5)] border-solid border border-[#EAFFFF26] rounded-lg backdrop-blur-[50px] p-6 overflow-hidden">

                <motion.div 
                    className="absolute top-0 left-0 w-[145px] h-full z-10"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible">
                    <img className="h-full" src="./src/img/why_hubble/card_stats/gradient_blue.png" />
                </motion.div>

                <div className="card-noise absolute top-0 left-0 w-full h-full opacity-20 mix-blend-soft-light z-20"></div>

                <div className="flex items-center relative space-x-6 z-30">

                    <div className="font-roobert-regular text-[1.75rem] md:text-[2.5rem] xl:text-[3rem] text-white leading-[1.05]">
                        74
                    </div>

                    <div className="w-px h-full bg-[#0091FF]"></div>

                    <div className="font-roobert-medium font-medium text-lg text-white leading-[1.4]">
                        Magna lectus cursus neque, enim
                    </div>

                </div>

            </div>

        </div>
    );
}