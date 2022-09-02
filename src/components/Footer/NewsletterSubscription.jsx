import React from 'react';

export default function NewsletterSubscription() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-solid border-[#EAFFFF26] pb-16 mb-16">

            <div className="w-full lg:w-1/2 max-w-none lg:max-w-[486px] font-roobert-medium font-medium text-[1.75rem] text-white leading-[1.2] pr-12 mb-12 lg:mb-0">
                Get the latest updates. <span className="sm:block">Subscribe for our newsletter</span>
            </div>

            <div className="flex items-center flex-col sm:flex-row w-full lg:w-1/2 max-w-none lg:max-w-[588px] sm:border sm:border-solid sm:border-[#EAFFFF26] rounded-lg sm:p-2 sm:pl-6">

                <input className="sm:flex-1 w-full sm:w-auto h-[50px] sm:h-auto bg-transparent border border-solid border-[#EAFFFF26] sm:border-none rounded-lg sm:rounded-none appearance-none focus:outline-none font-roobert-medium font-medium text-white leading-[1.2] px-6 sm:px-0 py-[14px] sm:py-0" type="text" placeholder="Enter your email" />

                <button className="flex items-center justify-center w-full sm:w-auto h-[50px] bg-brand-purple hover:bg-brand-pink rounded-md font-roobert-bold font-bold text-white leading-[1.2] px-10 py-[15px] mt-6 sm:mt-0 sm:ml-6 transition duration-300" type="submit">
                    Subscribe
                </button>

            </div>

        </div>
    );
}