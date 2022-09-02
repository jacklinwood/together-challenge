import React from 'react';

export default function PreFooterCta() {
    return (
        <section className="w-auto max-w-[1360px] box-content px-5 sm:px-12 mx-auto mb-20 sm:mb-[120px]">

            <div className="pre-footer-cta relative rounded-2xl px-8 sm:px-12 py-12 sm:py-24 lg:pt-[142px] lg:pb-[128px] overflow-hidden">

                <div className="pre-footer-cta-noise absolute top-0 left-0 w-full h-full opacity-40 mix-blend-soft-light z-10"></div>

                <div className="flex flex-col items-center justify-center relative z-20">

                    <h2 className="font-roobert-medium font-medium text-[1.75rem] md:text-[2.5rem] xl:text-[3rem] text-center text-white leading-[1.2] md:leading-[1.05] mb-8 sm:mb-12">
                        Bring complete visibility <span className="md:block">to your digital assets</span>
                    </h2>

                    <a className="flex items-center justify-center h-[50px] bg-brand-purple hover:bg-brand-pink rounded-md font-roobert-bold font-bold text-white leading-[1.2] px-[78px] py-[15px] transition duration-300" href="#">
                        Get started
                    </a>

                </div>

            </div>

        </section>
    );
}