import React from 'react';

import { motion } from 'framer-motion';

const exploreContainerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};

const exploreTextVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
};

const exploreScreenshotVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5,
        }
    }
};

const exploreOrbVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1,
        }
    }
};

const exploreRingVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            delay: 1.5,
        }
    }
};

export default function ExplorePlatform() {
    return (
        <motion.section 
            className="relative bg-brand-purple overflow-hidden"
            variants={exploreContainerVariants}
            initial="hidden"
            whileInView="visible">

            <div className="absolute top-0 left-0 w-[697px] z-10">
                <img src="./src/img/explore_platform/left.png" />
            </div>

            <div className="absolute top-0 right-0 w-[697px] z-10">
                <img src="./src/img/explore_platform/right.png" />
            </div>

            <motion.div 
                className="hidden lg:block absolute bottom-[-62px] left-1/2 translate-x-[-598px] w-[300px] z-10"
                variants={exploreOrbVariants}>
                <img src="./src/img/explore_platform/orb.png" />
            </motion.div>

            <div className="explore-platform-noise absolute inset-0 z-20"></div>

            <div className="absolute left-0 bottom-0 w-full h-[800px] bg-gradient-to-t from-brand-navy z-30"></div>

            <div className="container relative pt-20 sm:pt-24 z-40">

                <motion.div
                    variants={exploreTextVariants}>

                    <h2 className="font-roobert-medium font-medium text-[1.75rem] md:text-[2.5rem] xl:text-[3rem] text-center text-white leading-[1.2] md:leading-[1.05] mb-6">
                        The Technology Intelligence Platform
                    </h2>

                    <div className="flex flex-col items-center w-full max-w-[656px] mx-auto mb-12">

                        <p className="font-roobert-regular text-lg text-center text-white mb-6">
                            Hubble is the world's first Technology Intelligence Platform that helps you see things more clearly than ever before.
                        </p>

                        <a className="inline-flex items-center group" href="#">

                            <span className="font-roobert-medium font-medium text-white pr-4">
                                Explore our Platform
                            </span>

                            <span className="flex items-center justify-center w-8 h-8 bg-black rounded-full transition duration-300 group-hover:translate-x-1">
                                <img className="w-[12px]" src="./src/img/misc/link_arrow.png" />
                            </span>

                        </a>

                    </div>

                </motion.div>

                <div className="relative w-full max-w-[886px] mx-auto">

                    <motion.div 
                        className="relative z-20"
                        variants={exploreScreenshotVariants}>
                        <img className="explore-platform backdrop-blur-[50px]" src="./src/img/explore_platform/screenshot.png" />
                    </motion.div>

                    <motion.div 
                        className="absolute top-[-7.56%] right-[-9.59%] w-[31.6%] z-30"
                        variants={exploreRingVariants}>
                        <img src="./src/img/explore_platform/ring.png" />
                    </motion.div>

                </div>

            </div>

        </motion.section>
    );
}