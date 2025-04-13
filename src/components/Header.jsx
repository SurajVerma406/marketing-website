import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import myContext from '../context/myContext';

const Header = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const context = useContext(myContext);
    const { dark, setDark } = context;

    const handleToggle = () => { setIsOpen(!isOpen); };
    useEffect(() => { }, [location.pathname]);

    return (
        <nav className={`poppins absolute  ${location.pathname === '/blog' ? 'bg-slate-900 dark:bg-slate-900' : 'bg-transparent dark:bg-transparent'} w-full z-20 top-0 start-0 dark:border-gray-600 py-4`}   >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img className="w-28 md:w-36" src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/06/site-logo-light-new.svg" alt="Flowbite Logo" />
                </Link>
                <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                    <div className="flex justify-center items-center text-white">
                        <div className="flex gap-2">
                            {
                                dark ?
                                    <span onClick={() => setDark(false)} className={`gredient-maker hover:scale-110 p-2 rounded-lg`}><Icon icon="icon-park-outline:sun-one" width="20" height="20"></Icon></span> :
                                    <span onClick={() => setDark(true)} className={`gredient-maker hover:scale-110 p-2 rounded-lg`}><Icon icon="ph:moon-stars-thin" width="20" height="20"></Icon></span>
                            }
                        </div>
                        <span className='gredient-maker hover:bg-slate-700 hover:scale-110 p-2 rounded-lg ms-2'><Icon icon="iconamoon:search-fill" width="20" height="20"></Icon></span>
                        <button type="button" className="heebo hidden sm:flex text-white ms-3 bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Get a Free Quote</button>
                    </div>

                    <button onClick={handleToggle} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm border border-slate-500 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-center gap-3 w-full lg:flex lg:w-auto lg:order-1`} id="navbar-sticky">
                    <ul className={`${dark ? 'bg-slate-800' : 'bg-white'} flex flex-col p-4 lg:p-0 mt-4 text-sm text-center font-semibold rounded-lg bg-gray-50 lg:space-x-2 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent uppercase`}>
                        <li><Link to="/" className={`block text-slate-400 hover:text-white hover:bg-slate-400 lg:bg-transparent lg:hover:bg-transparent px-3 py-2 mt-1 lg:mt-0 rounded-md w-full ${location.pathname === '/' ? 'text-white bg-slate-400 lg:bg-transparent' : 'text-slate-400'}`}>Home</Link></li>
                        <li className='group lg:px-3 lg:py-1.5 mt-0 focus:text-white rounded-md w-full relative block text-slate-400 hover:text-white'>
                            <span className={`flex justify-center items-center text-slate-400 hover:text-white hover:bg-slate-400 lg:bg-transparent lg:hover:bg-transparent px-3 py-2 lg:py-0 mt-1 lg:mt-0 rounded-md w-full ${location.pathname === '/branding' || location.pathname === '/digital-marketing' || location.pathname === '/seo-services' || location.pathname === '/social-media' ? 'text-white bg-slate-400 lg:bg-transparent' : 'text-slate-400'}`}>Services <Icon icon="iconamoon:arrow-down-2" width="24" height="24"></Icon></span>
                            <div className={`hidden group-hover:block justify-start text-start items-start gap-1 flex-col w-80 absolute top-5 lg:top-9 z-10 ${dark ? 'bg-slate-800 border-gray-500' : 'bg-white border-2'} p-4 rounded-lg border`}>
                                <Link to="/branding" className={`block text-slate-400 hover:text-white hover:bg-slate-400 px-3 py-2 mt-1 rounded-md w-full ${location.pathname === '/branding' ? 'text-white bg-slate-400' : 'text-slate-400'}`}>Branding</Link>
                                <Link to="/digital-marketing" className={`block text-slate-400 hover:text-white hover:bg-slate-400 px-3 py-2 mt-1 rounded-md w-full ${location.pathname === '/digital-marketing' ? 'text-white bg-slate-400' : 'text-slate-400'}`}>Didital Marketing</Link>
                                <Link to="/seo-services" className={`block text-slate-400 hover:text-white hover:bg-slate-400 px-3 py-2 mt-1 rounded-md w-full ${location.pathname === '/seo-services' ? 'text-white bg-slate-400' : 'text-slate-400'}`}>SEO Services</Link>
                                <Link to="/social-media" className={`block text-slate-400 hover:text-white hover:bg-slate-400 px-3 py-2 mt-1 rounded-md w-full ${location.pathname === '/social-media' ? 'text-white bg-slate-400' : 'text-slate-400'}`}>Social Media</Link>
                            </div>
                        </li>
                        <li><Link to="/about" className={`block text-slate-400 hover:text-white hover:bg-slate-400 lg:bg-transparent lg:hover:bg-transparent px-3 py-2 mt-1 lg:mt-0 rounded-md w-full ${location.pathname === '/about' ? 'text-white bg-slate-400 lg:bg-transparent' : 'text-slate-400'}`}>About</Link></li>
                        <li><Link to="/blog" className={`block text-slate-400 hover:text-white hover:bg-slate-400 lg:bg-transparent lg:hover:bg-transparent px-3 py-2 mt-1 lg:mt-0 rounded-md w-full ${location.pathname === '/blog' ? 'text-white bg-slate-400 lg:bg-transparent' : 'text-slate-400'}`}>Blog</Link></li>
                        <li><Link to="/contact" className={`block text-slate-400 hover:text-white hover:bg-slate-400 lg:bg-transparent lg:hover:bg-transparent px-3 py-2 mt-1 lg:mt-0 rounded-md w-full ${location.pathname === '/contact' ? 'text-white bg-slate-400 lg:bg-transparent' : 'text-slate-400'}`}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
