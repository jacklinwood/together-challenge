import React from 'react';

export default function Legal() {
    return (
        <div className="flex flex-col md:flex-row justify-between">

            <ul className="flex flex-col md:flex-row mb-6 md:mb-0 space-x-0 md:space-x-10">

                <li>
                    <a className="font-roobert-regular text-sm text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                        Privacy Policy
                    </a>
                </li>

                <li>
                    <a className="font-roobert-regular text-sm text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                        Cookie Policy
                    </a>
                </li>

                <li>
                    <a className="font-roobert-regular text-sm text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                        Terms & Conditions
                    </a>
                </li>

            </ul>

            <p className="font-roobert-regular text-sm text-[#EAFFFFB2]">
                &copy; Hubble 2022 All right reserved
            </p>

        </div>
    );
}