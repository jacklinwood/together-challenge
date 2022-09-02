import React from 'react';
import Marquee from 'react-fast-marquee';

export default function NewsTicker() {
    return (
    	<div className="sticky top-0 w-full bg-brand-purple py-2.5 overflow-hidden z-50">

        	<Marquee 
	            speed={20}
	            gradient={false}>

            	<a className="flex items-center mx-[50px] space-x-4" href="#">
                	<span className="font-roobert-bold font-bold text-xs text-white leading-[1.4] tracking-[0.15em]">LATEST NEWS</span>
                	<span className="font-roobert-medium font-medium text-xs text-white leading-[1.4] tracking-[0.15em]">HUBBLE ANNOUNCES IT’S LATEST ANNOUNCEMENT</span>
                	<span className="w-[12px]">
                        <img src="./src/img/misc/link_arrow.png" />
                    </span>
            	</a>

            	<a className="flex items-center mx-[50px] space-x-4" href="#">
                	<span className="font-roobert-bold font-bold text-xs text-white leading-[1.4] tracking-[0.15em]">LATEST NEWS</span>
                	<span className="font-roobert-medium font-medium text-xs text-white leading-[1.4] tracking-[0.15em]">HUBBLE ANNOUNCES IT’S LATEST ANNOUNCEMENT</span>
                	<span className="w-[12px]">
                        <img src="./src/img/misc/link_arrow.png" />
                    </span>
            	</a>

            	<a className="flex items-center mx-[50px] space-x-4" href="#">
                	<span className="font-roobert-bold font-bold text-xs text-white leading-[1.4] tracking-[0.15em]">LATEST NEWS</span>
                	<span className="font-roobert-medium font-medium text-xs text-white leading-[1.4] tracking-[0.15em]">HUBBLE ANNOUNCES IT’S LATEST ANNOUNCEMENT</span>
                	<span className="w-[12px]">
                        <img src="./src/img/misc/link_arrow.png" />
                    </span>
            	</a>

        	</Marquee>

        </div>
	);
}