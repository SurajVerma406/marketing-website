import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import myContext from '../context/myContext';

const Header = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const active = ['/branding', '/digital-marketing', '/seo-services', '/social-media'].includes(location.pathname);

    const context = useContext(myContext);
    const { dark, setDark } = context;

    const toggleServicesDropdown = () => { setServicesDropdownOpen(!servicesDropdownOpen); };
    const handleToggle = () => { setIsOpen(!isOpen); };

    useEffect(() => { }, [location.pathname]);

    return (
        <nav className={`poppins fixed z-10 backdrop-blur-md ${dark ? 'bg-slate-900/90' : "bg-white"}  ${location.pathname === '/blog' ? 'bg-slate-100' : ''} w-full top-0 start-0 dark:border-gray-600 py-4`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img className="w-28 md:w-36" src={`${dark ? 'https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/06/site-logo-light-new.svg' : 'https://websitedemos.net/digital-marketing-agency-02/wp-content/uploads/sites/865/2021/06/site-logo-new.svg'}`} alt="Flowbite Logo" />
                </Link>
                <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                    <div className="flex justify-center items-center text-white">
                        <button type="button" className="flex">
                            {
                                dark ?
                                    <span onClick={() => setDark(false)} className={`gredient-maker hover:scale-110 p-2.5 rounded-lg`}><Icon icon="icon-park-outline:sun-one" width="20" height="20"></Icon></span> :
                                    <span onClick={() => setDark(true)} className={`gredient-maker hover:scale-110 p-2.5 rounded-lg`}><Icon icon="ph:moon-stars-thin" width="20" height="20"></Icon></span>
                            }
                        </button>
                        <button type="button" className="heebo hidden sm:flex text-white ms-1.5 bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center">Get a Free Quote</button>
                    </div>

                    <button onClick={handleToggle} type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm border border-slate-500 text-gray-500 rounded-lg lg:hidden ${!dark ? "hover:bg-gray-100 " : "hover:bg-gray-700"} focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600`} aria-controls="navbar-sticky" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-center gap-3 w-full lg:flex lg:w-auto lg:order-1`}>
                    <ul className={`text-slate-400 hover:text-white bg-transparent flex flex-col p-4 lg:p-0 mt-4 text-sm text-center font-semibold rounded-lg bg-gray-50 lg:space-x-2 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent uppercase`}>
                        <li>
                            <Link to="/"
                                className={`block lg:bg-transparent lg:hover:bg-transparent px-3 py-2 mt-1 lg:mt-0 rounded-md w-full text-start ${location.pathname === '/' ?
                                        dark ? "text-white bg-slate-400 lg:bg-transparent" : "text-white lg:text-black bg-slate-500 hover:bg-slate-500" :
                                        dark ? "text-slate-400 hover:bg-slate-500 hover:text-white" : "text-slate-400 hover:bg-slate-500 hover:text-white lg:hover:text-black"
                                    }`}>Home
                            </Link>
                        </li>

                        <li className='lg:px-3 lg:py-1.5 mt-1 lg:mt-0 focus:text-white rounded-md w-full relative block text-slate-400'>
                            <span onClick={toggleServicesDropdown} className={`flex justify-between items-center cursor-pointer text-slate-400 ${dark ? "hover:text-white" : "hover:text-white lg:hover:text-black"} hover:bg-slate-700 lg:bg-transparent lg:hover:bg-transparent px-3 py-2 lg:py-0 mt-1 lg:mt-0 rounded-md w-full 
                            ${active ?
                                    dark ? "text-white bg-slate-400 lg:bg-transparent" : "text-white lg:text-black bg-slate-500 hover:bg-slate-500" :
                                    dark ? "text-slate-400 hover:bg-slate-500 hover:text-white" : "text-slate-400 hover:bg-slate-500 hover:text-black lg:hover:text-black"}`}>Services <Icon icon="iconamoon:arrow-down-2" width="24" height="24" /></span>
                            {
                                servicesDropdownOpen && (
                                    <div className={`justify-start text-start items-start gap-1 flex-col w-full lg:w-80 absolute top-12 lg:top-9 z-10 ${dark ? 'bg-slate-800 border-gray-500' : 'bg-white border-2'} p-4 rounded-lg border`}>
                                        <Link to="/branding" className={`block hover:text-white hover:bg-slate-700 px-3 py-2 mt-1 rounded-md w-full ${location.pathname === '/branding' ? 'text-white bg-slate-400' : 'text-slate-400'}`}>Branding</Link>
                                        <Link to="/digital-marketing" className={`block hover:text-white hover:bg-slate-700 px-3 py-2 mt-1 rounded-md w-full ${location.pathname === '/digital-marketing' ? 'text-white bg-slate-400' : 'text-slate-400'}`}>Digital Marketing</Link>
                                        <Link to="/seo-services" className={`block hover:text-white hover:bg-slate-700 px-3 py-2 mt-1 rounded-md w-full ${location.pathname === '/seo-services' ? 'text-white bg-slate-400' : 'text-slate-400'}`}>SEO Services</Link>
                                        <Link to="/social-media" className={`block hover:text-white hover:bg-slate-700 px-3 py-2 mt-1 rounded-md w-full ${location.pathname === '/social-media' ? 'text-white bg-slate-400' : 'text-slate-400'}`}>Social Media</Link>
                                    </div>
                                )
                            }
                        </li>


                        <li>
                            <Link to="/about"
                                className={`block lg:bg-transparent lg:hover:bg-transparent px-3 py-2 mt-1 lg:mt-0 rounded-md w-full text-start ${location.pathname === '/about' ?
                                        dark ? "text-white bg-slate-400 lg:bg-transparent" : "text-white lg:text-black bg-slate-500 hover:bg-slate-500" :
                                        dark ? "text-slate-400 hover:bg-slate-500 hover:text-white" : "text-slate-400 hover:bg-slate-500 hover:text-white lg:hover:text-black"
                                    }`}>About
                            </Link>
                        </li>

                        <li>
                            <Link to="/blog"
                                className={`block lg:bg-transparent lg:hover:bg-transparent px-3 py-2 mt-1 lg:mt-0 rounded-md w-full text-start ${location.pathname === '/blog' ?
                                        dark ? "text-white bg-slate-400 lg:bg-transparent" : "text-white lg:text-black bg-slate-500 hover:bg-slate-500" :
                                        dark ? "text-slate-400 hover:bg-slate-500 hover:text-white" : "text-slate-400 hover:bg-slate-500 hover:text-white lg:hover:text-black"
                                    }`}>Blog
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact"
                                className={`block lg:bg-transparent lg:hover:bg-transparent px-3 py-2 mt-1 lg:mt-0 rounded-md w-full text-start ${location.pathname === '/contact' ?
                                        dark ? "text-white bg-slate-400 lg:bg-transparent" : "text-white lg:text-black bg-slate-500 hover:bg-slate-500" :
                                        dark ? "text-slate-400 hover:bg-slate-500 hover:text-white" : "text-slate-400 hover:bg-slate-500 hover:text-white lg:hover:text-black"
                                    }`}>Contact
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
