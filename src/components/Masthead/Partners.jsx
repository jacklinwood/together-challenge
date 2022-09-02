import React from 'react';
import Marquee from 'react-fast-marquee';

export default function Partners() {
    return (
        <div className="container mt-20 sm:mt-[88px]">

            <h3 className="font-roobert-regular text-[1.75rem] md:text-[2rem] text-center text-white leading-[1.2] md:leading-[1.05] mb-12">
                Trusted by pioneering enterprise players
            </h3>

            <div className="w-full border-solid border border-[#EAFFFF26] rounded-[10px] py-8">

                <Marquee 
                    speed={80}
                    gradient={false}>

                    <div className="w-[150px] mx-8">
                        <img src="./src/img/masthead/partners/codelify.png" />
                    </div>

                    <div className="w-[150px] mx-8">
                        <img src="./src/img/masthead/partners/marketly.png" />
                    </div>

                    <div className="w-[118px] mx-8">
                        <img src="./src/img/masthead/partners/startup.png" />
                    </div>

                    <div className="w-[150px] mx-8">
                        <img src="./src/img/masthead/partners/codelify.png" />
                    </div>

                    <div className="w-[150px] mx-8">
                        <img src="./src/img/masthead/partners/marketly.png" />
                    </div>

                    <div className="w-[118px] mx-8">
                        <img src="./src/img/masthead/partners/startup.png" />
                    </div>

                    <div className="w-[150px] mx-8">
                        <img src="./src/img/masthead/partners/codelify.png" />
                    </div>

                    <div className="w-[150px] mx-8">
                        <img src="./src/img/masthead/partners/marketly.png" />
                    </div>

                    <div className="w-[118px] mx-8">
                        <img src="./src/img/masthead/partners/startup.png" />
                    </div>

                </Marquee>

            </div>

        </div>
    );
}