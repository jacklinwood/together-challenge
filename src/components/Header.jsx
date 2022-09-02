import React from 'react';
import { useEffect, useState } from 'react';

export default function Header() {
    const [scroll, setScroll] = useState(false);

    const addBoxShadow = () => {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 37) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    window.addEventListener('scroll', addBoxShadow);

    return (
        <header className={`sticky top-0 flex items-center justify-between w-full bg-brand-navy px-5 sm:px-8 xl:px-12 py-6 mx-auto z-50 transition duration-300 ${scroll ? 'header-shadow' : ''}`}>

            <a className="block w-[118px]" href="#">
                <img src="./src/img/misc/logo.png" />
            </a>

            <nav className="hidden lg:flex space-x-8 xl:space-x-12">

                <div>
                    <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                        Platform
                    </a>
                </div>

                <div>
                    <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                        Solution
                    </a>
                </div>

                <div>
                    <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                        Resources
                    </a>
                </div>

                <div>
                    <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                        Company
                    </a>
                </div>

            </nav>

            <a className="hidden lg:flex items-center justify-center h-[50px] bg-brand-purple hover:bg-brand-pink rounded-md font-roobert-bold font-bold text-white leading-[1.2] px-10 py-[15px] transition duration-300" href="#">
                Get a demo
            </a>

            <button className="burger flex items-center lg:hidden w-[30px] h-[50px]" type="button"></button>

        </header>
    );
}