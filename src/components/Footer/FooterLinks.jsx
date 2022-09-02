import React from 'react';

export default function FooterLinks() {
    return (
        <div className="flex flex-col lg:flex-row justify-between mb-20 sm:mb-[88px]">

            <div className="flex-shrink-0 lg:mr-20">

                <div className="w-[140px] mb-4">
                    <img src="./src/img/misc/logo.png" />
                </div>

                <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="mailto:info@hubble.net">
                    info@hubble.net
                </a>

                <div className="flex items-center mt-12 space-x-4">

                    <a className="block w-[16px] transition duration-300 hover:opacity-70" href="#">
                        <img src="./src/img/misc/social/linkedin.png" />
                    </a>

                    <a className="block w-[9px] transition duration-300 hover:opacity-70" href="#">
                        <img src="./src/img/misc/social/facebook.png" />
                    </a>

                    <a className="block w-[16px] transition duration-300 hover:opacity-70" href="#">
                        <img src="./src/img/misc/social/twitter.png" />
                    </a>

                </div>

            </div>

            <div className="flex flex-wrap md:flex-nowrap mt-20 lg:mt-0 md:space-x-12">

                <div className="w-1/2 md:w-auto">

                    <div className="font-roobert-medium font-medium text-lg text-[#EAFFFFB2] leading-[1.4] mb-8">
                        Hubble
                    </div>

                    <ul className="space-y-4">

                        <li>
                            <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                Home
                            </a>
                        </li>

                        <li>
                            <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                Why Hubble?
                            </a>
                        </li>

                        <li>
                            <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                Platform
                            </a>
                        </li>

                        <li>
                            <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                Security
                            </a>
                        </li>

                    </ul>

                </div>

                <div className="w-1/2 md:w-auto">

                    <div className="font-roobert-medium font-medium text-lg text-[#EAFFFFB2] leading-[1.4] mb-8">
                        Solutions
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-20 space-y-4 md:space-y-0">

                        <ul className="space-y-4">

                            <li>
                                <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                    Vulnerability Management
                                </a>
                            </li>

                            <li>
                                <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                    Security Operations
                                </a>
                            </li>

                            <li>
                                <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                    Data Governance
                                </a>
                            </li>

                            <li>
                                <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                    IT Blind Spots
                                </a>
                            </li>

                            <li>
                                <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                    Business Continuity
                                </a>
                            </li>

                        </ul>

                        <ul className="space-y-4">

                            <li>
                                <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                    For CISOs
                                </a>
                            </li>

                            <li>
                                <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                    For CIOs
                                </a>
                            </li>

                            <li>
                                <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                    For Security Operators
                                </a>
                            </li>

                            <li>
                                <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                    For IT Operators
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

                <div className="w-1/2 md:w-auto mt-12 md:mt-0">

                    <div className="font-roobert-medium font-medium text-lg text-[#EAFFFFB2] leading-[1.4] mb-8">
                        Resources
                    </div>

                    <ul className="space-y-4">

                        <li>
                            <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                Customer Stories
                            </a>
                        </li>

                        <li>
                            <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                Articles
                            </a>
                        </li>

                        <li>
                            <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                Press
                            </a>
                        </li>

                        <li>
                            <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                Guides
                            </a>
                        </li>

                    </ul>

                </div>

                <div className="w-1/2 md:w-auto mt-12 md:mt-0">

                    <div className="font-roobert-medium font-medium text-lg text-[#EAFFFFB2] leading-[1.4] mb-8">
                        Company
                    </div>

                    <ul className="space-y-4">

                        <li>
                            <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                About
                            </a>
                        </li>

                        <li>
                            <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                Careers
                            </a>
                        </li>

                        <li>
                            <a className="font-roobert-medium font-medium text-white hover:text-brand-pink leading-[1.2] transition duration-300" href="#">
                                Contact
                            </a>
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    );
}