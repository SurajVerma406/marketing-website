import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useContext } from 'react';
import myContext from '../context/myContext';
import { Link } from 'react-router-dom';

const Footer = () => {
    const context = useContext(myContext);
    const { dark } = context;

    return (
        <footer className={`montserrat py-20 ${dark ? 'bg-slate-900' : 'bg-slate-100'}`}>
            <div className="max-w-screen-xl mx-auto px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-7">
                    <div className="flex justify-between flex-col gap-3 lg:gap-0 h-full text-center lg:text-start">
                        <Link to="/"><img className={`w-40 mx-auto lg:mx-0 ${dark ? 'mix-blend-plus-lighter' : 'mix-blend-normal'}`} src="https://websitedemos.net/digital-marketing-agency-02/wp-content/uploads/sites/865/2021/06/site-logo-new.svg" alt="" /></Link>
                        <p className="">Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet fermentum.</p>

                        <div className="flex gap-2 mx-auto lg:mx-0 mb-10 lg:mb-0">
                            {/* <Icon icon="lineicons:facebook-fill" width="24" height="24"></Icon> */}
                            <span className={`bg-[#262626] hover:scale-110 p-2 text-white rounded-lg transition-all`}><Icon icon="line-md:twitter-x" width="24" height="24"></Icon></span>
                            <span className={`bg-[#1d4ed8] hover:scale-110 p-2 text-white rounded-lg transition-all`}><Icon icon="line-md:facebook" width="24" height="24"></Icon></span>
                            <span className={`insta-gradient hover:scale-110 p-2 text-white rounded-lg transition-all`}><Icon icon="line-md:instagram" width="24" height="24"></Icon></span>
                        </div>
                    </div>

                    <div className="text-center lg:text-end">
                        <h1 className="text-2xl mb-4">Services</h1>
                        <ul className='text-slate-500'>
                            <li className='my-1'><Link to="" className={`${dark ? 'hover:text-white' : 'hover:text-black'} transition-all`}>SEO</Link></li>
                            <li className='my-1'><Link to="" className={`${dark ? 'hover:text-white' : 'hover:text-black'} transition-all`}>Digital Marketing</Link></li>
                            <li className='my-1'><Link to="" className={`${dark ? 'hover:text-white' : 'hover:text-black'} transition-all`}>Digital Strategy</Link></li>
                            <li className='my-1'><Link to="" className={`${dark ? 'hover:text-white' : 'hover:text-black'} transition-all`}>CRO</Link></li>
                            <li className='my-1'><Link to="" className={`${dark ? 'hover:text-white' : 'hover:text-black'} transition-all`}>Analytics</Link></li>
                        </ul>
                    </div>

                    <div className="text-center lg:text-end">
                        <h1 className="text-2xl mb-4">Agency</h1>
                        <ul className='text-slate-500'>
                            <li className='my-1'><Link to="" className={`${dark ? 'hover:text-white' : 'hover:text-black'} transition-all`}>About Us</Link></li>
                            <li className='my-1'><Link to="" className={`${dark ? 'hover:text-white' : 'hover:text-black'} transition-all`}>Our Team</Link></li>
                            <li className='my-1'><Link to="" className={`${dark ? 'hover:text-white' : 'hover:text-black'} transition-all`}>Careers</Link></li>
                            <li className='my-1'><Link to="" className={`${dark ? 'hover:text-white' : 'hover:text-black'} transition-all`}>News & Blog</Link></li>
                            <li className='my-1'><Link to="" className={`${dark ? 'hover:text-white' : 'hover:text-black'} transition-all`}>Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="text-center lg:text-end">
                        <h1 className="text-2xl mb-4">Contact Info</h1>
                        <ul className='text-slate-500'>
                            <li className='my-1'>123 Demo St,</li>
                            <li className="my-1">Lakeland,</li>
                            <li className="my-1">United States.</li>
                            <li className='my-1'><Link to="" className={`${dark ? 'hover:text-white' : 'hover:text-black'} transition-all`}>mail@example.com</Link></li>
                            <li className='my-1'><Link to="" className={`${dark ? 'hover:text-white' : 'hover:text-black'} transition-al`}l>+1 123-456-7890</Link></li>
                        </ul>
                    </div>
                </div>
                <p className="mt-20 text-slate-500 text-sm text-center">© 2024 Digital Marketing Agency | Powered by Digital Marketing Agency</p>
            </div>

        </footer>
    )
}

export default Footer
