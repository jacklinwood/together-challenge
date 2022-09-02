import React from 'react';
import { useState } from 'react';
import { initialTabs as tabs } from '../data/tabs';
import { motion, AnimatePresence } from 'framer-motion';

export default function TabbedCards() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <section className="container my-20 sm:my-40">

            <h2 className="font-roobert-medium font-medium text-[1.75rem] md:text-[2.5rem] xl:text-[3rem] text-center text-white leading-[1.2] md:leading-[1.05] mb-12 sm:mb-[88px]">
                Customize to your use case
            </h2>

            <div className="flex flex-col">

                <div className="hidden lg:flex items-center relative bg-brand-navy border border-solid border-[#EAFFFF26] rounded-lg p-1.5 mx-auto space-x-8 xl:space-x-12 z-10">

                    {tabs.map((item) => (
                        <button 
                            type="button" 
                            key={item.name}
                            className="flex items-center justify-center relative h-[44px] px-6 py-[12px]"
                            onClick={() => setSelectedTab(item)}>
                            <span className="relative font-roobert-medium font-medium text-white leading-[1.2] z-10">{`${item.name}`}</span>
                            {item === selectedTab ? <motion.div className="absolute inset-0 bg-brand-purple rounded-md" layoutId="desktop-highlight" /> : null}
                        </button>
                    ))}

                </div>

                <div className="relative w-full rounded-2xl border border-solid border-[#EAFFFF26] mx-auto lg:mt-[-29px] overflow-hidden pointer-events-none">

                    <div className="absolute top-0 left-[8.33%] w-[387px]">
                        <img src="./src/img/tabbed_cards/vulnerability_management/gradient_purple.png" />
                    </div>

                    <div className="absolute right-0 bottom-0 w-[71.8%]">
                        <img src="./src/img/tabbed_cards/vulnerability_management/gradient_blue.png" />
                    </div>

                    <div className="tabbed-card-noise absolute top-0 left-0 w-full h-full opacity-20 mix-blend-soft-light z-10"></div>

                    <AnimatePresence exitBeforeEnter>
                        <motion.div 
                            className="flex flex-col md:flex-row items-center relative w-full z-20"
                            key={selectedTab ? selectedTab.name : 'empty'}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}>

                            <div className="flex-1 flex justify-end px-8 pt-12 pb-0 md:py-8">

                                <div className="w-full max-w-none md:max-w-[460px] pointer-events-auto">

                                    <h3 className="font-roobert-medium font-medium text-[1.75rem] lg:text-[2rem] text-white leading-[1.2] md:leading-[1.05] mb-8">
                                        {selectedTab.name}
                                    </h3>

                                    <p className="font-roobert-regular text-base lg:text-lg text-white mb-8">
                                        {selectedTab.description}
                                    </p>

                                    <a className="inline-flex items-center group" href="#">

                                        <span className="font-roobert-medium font-medium text-white pr-4">
                                            Learn more
                                        </span>

                                        <span className="flex items-center justify-center w-8 h-8 bg-brand-pink rounded-full transition duration-300 group-hover:translate-x-1">
                                            <img className="w-[12px]" src="./src/img/misc/link_arrow.png" />
                                        </span>

                                    </a>

                                </div>

                            </div>

                            <div className="relative w-full md:w-[49%]">
                                <img src={selectedTab.imageUrl} />
                            </div>

                        </motion.div>

                    </AnimatePresence>

                </div>

                <div className="lg:hidden flex w-full max-w-[500px] mx-auto mt-12 space-x-8">

                    {tabs.map((item) => (
                        <button 
                            type="button" 
                            key={item.name}
                            className="flex-1 relative h-[4px] bg-[rgba(255,255,255,0.2)] rounded-[2px]"
                            onClick={() => setSelectedTab(item)}>
                            {item === selectedTab ? <motion.div className="absolute inset-0 bg-brand-purple rounded-[2px]" layoutId="mobile-highlight" /> : null}
                        </button>
                    ))}

                </div>

            </div>

        </section>
    );
}