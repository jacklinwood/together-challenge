import React from 'react';
import Cards from '../Masthead/Cards';
import Partners from '../Masthead/Partners';

import { motion } from 'framer-motion';

const mastheadContainerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const mastheadItemVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }
};

const mastheadOrbVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1.5,
        }
    }
};

const mastheadRingVariants = {
    hidden: {
    	opacity: 0,
        scale: 0.8
    },
    visible: {
    	opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            delay: 2,
        }
    }
};

export default function Masthead() {
    return (
		<section>

		    <div className="relative w-full sm:pb-8 overflow-hidden">

		        <div className="absolute bottom-[88px] left-0 w-[284px]">
		            <img src="./src/img/masthead/star_cluster.png" />
		        </div>

		        <div className="absolute top-0 right-0 w-[828px] opacity-70">
		            <img src="./src/img/masthead/gradient.png" />
		        </div>

		        <div className="container relative z-10">

		            <motion.div 
		            	className="flex flex-col lg:flex-row items-center mt-6 sm:mt-12 lg:mt-6"
		            	variants={mastheadContainerVariants}
		            	initial="hidden"
		            	whileInView="visible">

		                <motion.div 
		                	className="w-full lg:w-[53.666666666666664%]"
		                	variants={mastheadItemVariants}>

		                    <h1 className="font-roobert-medium font-medium text-[2rem] md:text-[3rem] xl:text-[4rem] text-white leading-[1.2] md:leading-[1.05] mb-8">
		                        Asset intelligence at the speed of business 
		                    </h1>

		                    <p className="font-roobert-regular text-lg xl:text-[1.375rem] text-white leading-[1.4] mb-6">
		                        Built for enterprise teams, Hubble’s Technology Intelligence Platform helps you construct a clear map of your technology asset domain and drive digital transformation.
		                    </p>

		                    <div className="flex gap-3 flex-col sm:flex-row">

		                        <a className="flex items-center justify-center w-full sm:w-1/2 lg:w-auto h-[50px] bg-brand-purple hover:bg-brand-pink rounded-md font-roobert-bold font-bold text-white leading-[1.2] px-10 lg:px-[100px] py-[15px] transition duration-300" href="#">
		                            Get started
		                        </a>

		                        <a className="flex items-center justify-center w-full sm:w-1/2 lg:w-auto h-[50px] border border-solid border-white hover:bg-white rounded-md font-roobert-medium font-medium text-white hover:text-brand-purple leading-[1.2] px-10 py-[14px] transition duration-300" href="#">
		                            Why Hubble?
		                        </a>

		                    </div>

		                </motion.div>

		                <motion.div 
		                	className="lg:flex-1 relative pl-0 lg:pl-[70px]"
		                	variants={mastheadItemVariants}>

		                    <motion.div 
		                    	className="absolute bottom-[80px] left-0 w-[35.25%]"
		                    	variants={mastheadOrbVariants}>
		                        <img src="./src/img/masthead/main/orb.png" />
		                    </motion.div>

		                    <div className="relative w-full lg:w-[calc(100%+184px)] pt-[60px] lg:pt-[40px] pb-[36px] z-10">
		                        <img className="backdrop-blur-[37.8143px]" src="./src/img/masthead/main/screenshot.png" />
		                        <div className="absolute bottom-0 w-full h-[230px] bg-gradient-to-t via-brand-navy from-brand-navy z-10"></div>
		                    </div>

		                    <motion.div 
		                    	className="absolute top-[20px] lg:top-0 left-[-20px] lg:left-0 w-[55%] lg:w-[67.27%] z-20"
		                    	variants={mastheadRingVariants}>
		                        <img src="./src/img/masthead/main/ring.png" />
		                    </motion.div>

		                </motion.div>

		            </motion.div>

		            <Cards />

		        </div>

		    </div>

		    <Partners />

		</section>
	);
}