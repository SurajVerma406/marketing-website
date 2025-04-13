import React, { useContext } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js'
import myContext from '../context/myContext';
import CompanyLogoSvg from './CompanyLogoSvg';

const Home = () => {
    const context = useContext(myContext);
    const { dark } = context;


    return (
        <>
            <section className="poppins bg-marketing text-white md:h-screen">
                <div className="bg-triangle h-full" style={{ backdropFilter: 'blur(2px)' }}>

                    <div className="max-w-screen-xl mx-auto py-20">
                        <div className="max-w-screen-md px-5 sm:px-10">
                            <h5 className="text-[18px] py-8 uppercase">Welcome to Delectus</h5>
                            <h1 className="text-4xl md:text-7xl leading-tight font-semibold">Leading Internet Marketing Agency Based on Florida.</h1>
                            <p className="text-xl md:text-2xl md:font-semibold my-4 md:my-8">Sollicitudin eros nulla mus donec a quisque convallis integer condimentum volutpat felis sed aliquet netus dolor dictumst pellentesque.</p>
                            <div className="flex flex-col md:flex-row gap-3">
                                <button type="button" className='bg-indigo-600 hover:bg-indigo-800 px-4 py-2.5 rounded-lg transition-all'>Get a Free Quote</button>
                                <button type="button" className='flex justify-center items-center gap-1 bg-transparent hover:bg-white/10 px-4 py-2.5 rounded-lg transition-all'>
                                    <span>Learn more</span>
                                    <span><Icon icon="flowbite:arrow-right-outline" width="24" height="24"></Icon></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <section className={`${dark ? 'text-white bg-slate-900' : 'text-blackbg-white'} heebo pt-20 pb-20 px-5 md:px-10`}>
                <div className="max-w-screen-xl mx-auto flex">
                    <div className="max-w-screen-lg mx-auto">
                        <h3 className="text-sm sm:text-[18px] mb-4 text-indigo-600 font-semibold uppercase">What we do!</h3>
                        <h1 className="text-2xl sm:text-[3.5rem] leading-tight font-semibold mb-2 max-w-[32rem]">Full-service Internet Marketing Solutions</h1>
                        <p className="text-[18px] text-slate-500">Consequat enim mollis mauris vulputate phasellus neque, eros turpis et eu adipiscing id tempor, nascetur elit vitae molestie pulvinar viverra ut eu lectus mi velit cras integer tristique aliquam proin porta tellus elit neque mi velit sed pharetra morbi proin. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 justify-center items-center gap-3 mt-10 text-center">
                            <div className="flex justify-center items-center mb-5 flex-col">
                                <span className='text-indigo-600'><Icon icon="bi:chat-text" width="30" height="30"></Icon></span>
                                <h5 className="text-2xl my-2">Consulting</h5>
                                <p className="text-[17px] text-slate-500">Pretium accumsan in ipsum convallis pellentesque metus</p>
                            </div>
                            <div className="flex justify-center items-center mb-5 flex-col">
                                <span className='text-indigo-600'><Icon icon="la:telegram-plane" width="30" height="30"></Icon></span>
                                <h5 className="text-2xl my-2">Marketing</h5>
                                <p className="text-[17px] text-slate-500">Lobortis integer nec neque facilisis lacus amet neque</p>
                            </div>
                            <div className="flex justify-center items-center mb-5 flex-col">
                                <span className='text-indigo-600'><Icon icon="ant-design:ant-design-outlined" width="30" height="30"></Icon></span>
                                <h5 className="text-2xl my-2">Design</h5>
                                <p className="text-[17px] text-slate-500">Ut ac viverra tortor ut scelerisque tortor senectus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <img className='h-96 lg:h-full object-cover' src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-about-us-full-width-img.jpg" alt="" /> */}


            <section className={`heebo ${dark ? 'bg-dark-gredient text-white' : 'bg-gredient text-black'} py-20 bg-slate-100`}>
                <div className="max-w-screen-xl mx-auto px-5 sm:px-10">
                    <div className="text-center mb-10">
                        <h5 className="text-xl text-indigo-600">Our Services</h5>
                        <h1 className="text-3xl sm:text-5xl font-semibold my-6">Take Your Business to the next Level</h1>
                        <p className="text-[18px] text-slate-500 max-w-screen-sm mx-auto">Id senectus facilisi enim accumsan ac aliquam suspendisse dapibus morbi ut sed pellentesque elementum velit dictum</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-7">
                        <div className={`${dark ? 'bg-neutral-800 dark-divShadow' : 'bg-white divShadow'} hover:bg-transparent p-10 h-full rounded-lg transition-all`}>
                            <span className='text-indigo-700'><Icon icon="teenyicons:box-outline" width="60" height="60"></Icon></span>
                            <h2 className="text-2xl my-5">Digital Strategy</h2>
                            <p className="text-[18px] text-slate-500">Ultrices dictum integer quam morbi adipiscing suspendisse neque vel egestas commodo sit felis consectetur integer vitae, at mattis turpis id</p>
                        </div>
                        <div className={`${dark ? 'bg-neutral-800 dark-divShadow' : 'bg-white divShadow'} hover:bg-transparent p-10 h-full rounded-lg transition-all`}>
                            <span className='text-indigo-700'><Icon icon="nimbus:marketing" width="60" height="60"></Icon></span>
                            <h2 className="text-2xl my-5">Advertising</h2>
                            <p className="text-[18px] text-slate-500">Quis purus enim et quam eget sed tellus ut tellus sit lectus mauris suscipit lobortis lectus netus eros, habitasse maecenas diam pellentesque integer non</p>
                        </div>
                        <div className={`${dark ? 'bg-neutral-800 dark-divShadow' : 'bg-white divShadow'} hover:bg-transparent p-10 h-full rounded-lg transition-all`}>
                            <span className='text-indigo-700'><Icon icon="fluent:globe-28-filled" width="60" height="60"></Icon></span>
                            <h2 className="text-2xl my-5">Online Marketing</h2>
                            <p className="text-[18px] text-slate-500">Tellus, tristique euismod at fames lorem ut adipiscing amet gravida fermentum tellus ornare eget sed sit bibendum tincidunt diam, dignissim purus aenean</p>
                        </div>
                        <div className={`${dark ? 'bg-neutral-800 dark-divShadow' : 'bg-white divShadow'} hover:bg-transparent p-10 h-full rounded-lg transition-all`}>
                            <span className='text-indigo-700'><Icon icon="fluent:arrow-growth-20-filled" width="60" height="60"></Icon></span>
                            <h2 className="text-2xl my-5">Search Engine Optimization</h2>
                            <p className="text-[18px] text-slate-500">Id vel lectus amet id amet blandit diam arcu senectus ac commodo, sed est sagittis sed aliquam volutpat blandit quam vitae, rutrum euismod sit</p>
                        </div>
                    </div>
                </div>
            </section>




            <section className={`heebo ${dark ? 'bg-slate-900' : 'bg-white'} py-20 pb-0 px-5 sm:px-10`}>
                <h5 className="text-xl text-indigo-600 text-center mb-8 uppercase">Relation & Awards</h5>

                <div className="">
                    <div className="max-w-screen-lg mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-3">
                        <img className={`w-full h-full`} src="https://i.ibb.co/5FFkwXg/depositphotos-449066958-stock-photo-financial-accounting-logo-financial-logo-removebg-preview.png" alt="" />
                        <img className={`w-full h-full`} src="https://i.ibb.co/4Jx34fY/abstract-logo-design-for-any-corporate-brand-business-company-vector-removebg-preview.png" alt="" />
                        <img className={`w-full h-full`} src="https://i.ibb.co/hLTTSZ5/abstract-colorful-logo-design-650075-1506-removebg-preview.png" alt="" />
                        <img className={`w-full h-full`} src="https://i.ibb.co/GHfgX1n/circle-line-simple-design-logo-600nw-2174926871-removebg-preview-1.png" alt="" />
                        <img className={`w-full h-full`} src="https://i.ibb.co/qRTNY5t/cc1b70bc4761268353e65850988524b1-removebg-preview.png" alt="" />
                        <img className={`w-full h-full`} src="https://i.ibb.co/kQgY648/finance-logo-design-finance-logo-design-166727245-removebg-preview.png" alt="" />
                        <img className={`w-full h-full`} src="https://i.ibb.co/YDTLTfq/a-logo-design-company-logo-template-7246ba946d6686a9a5b984a1e4380b1b-screen-removebg-preview-1.png" alt="" />
                        <img className={`w-full h-full`} src="https://i.ibb.co/86RCcnS/cb1264967fdc34b0aab2db2f9c3ff04d-removebg-preview.png" alt="" />
                    </div>
                </div>
            </section>


            {/* <section className=""><CompanyLogoSvg /></section> */}


            <section className={`montserrat ${dark ? 'half-gredient' : 'dark-half-gredient'} relative -bottom-36 px-5 sm:px-10`}>
                <div className={`max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-between items-center border-2 border-[#3535de] ${dark ? 'bg-neutral-800 text-white' : 'bg-white text-black'} p-16 rounded-3xl`}>
                    <div className="flex justify-center items-start gap-3">
                        <span className={`p-2.5 rounded-full ${dark ? 'bg-indigo-950' : 'bg-[#3535de]'} text-white mt-2.5`}><Icon icon="devicon-plain:google" width="30" height="30"></Icon></span>
                        <div className="">
                            <h1 className="text-[3.5rem] font-semibold">4.8</h1>
                            <p className="text-[17px] font-semibold text-slate-500 mt-1">200+ Reviews</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-start gap-3">
                        <span className={`p-2.5 rounded-full ${dark ? 'bg-indigo-950' : 'bg-[#3535de]'} text-white mt-2.5`}><Icon icon="fa-brands:facebook-f" width="30" height="30"></Icon></span>
                        <div className="">
                            <h1 className="text-[3.5rem] font-semibold">4.6</h1>
                            <p className="text-[17px] font-semibold text-slate-500 mt-1">400+ Reviews</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-start gap-3">
                        <span className={`p-2.5 rounded-full ${dark ? 'bg-indigo-950' : 'bg-[#3535de]'} text-white mt-2.5`}><Icon icon="weui:location-filled" width="30" height="30"></Icon></span>
                        <div className="">
                            <h1 className="text-[3.5rem] font-semibold">4.8</h1>
                            <p className="text-[17px] font-semibold text-slate-500 mt-1">100+ Reviews</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-start gap-3">
                        <span className={`p-2.5 rounded-full ${dark ? 'bg-indigo-950' : 'bg-[#3535de]'} text-white mt-2.5`}><Icon icon="flowbite:star-solid" width="30" height="30"></Icon></span>
                        <div className="">
                            <h1 className="text-[3.5rem] font-semibold">4.7</h1>
                            <p className="text-[18px] font-semibold text-slate-500 mt-1">200+ Reviews</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className={`heebo ${dark ? 'bg-indigo-950' : 'bg-[#3535de]'} pt-60 pb-20 text-white`}>
                <div className="max-w-screen-xl mx-auto px-5 sm:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="">
                            <div className="flex gap-[1px]">
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                            </div>
                            <p className="text-[18px] font-semibold mt-6 mb-5">"Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet fermentum adipiscing."</p>
                            <div className="flex items-center gap-3">
                                <img className='w-10 rounded-full' src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-reviewer-img-1.jpg" alt="" />
                                <h5 className="text-[16px] font-semibold uppercase">Matthew Johnson</h5>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex gap-[1px]">
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                            </div>
                            <p className="text-[18px] font-semibold mt-6 mb-5">"Faucibus eget ullamcorper nascetur suspendisse purus nisi, sapien at id ipsum tincidunt quis sed fermentum risus, nibh tristique elit commodo."</p>
                            <div className="flex items-center gap-3">
                                <img className='w-10 rounded-full' src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-reviewer-img-2.jpg   " alt="" />
                                <h5 className="text-[16px] font-semibold uppercase">Luis Carloz</h5>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex gap-[1px]">
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                                <Icon icon="flowbite:star-solid" width="20" height="20"></Icon>
                            </div>
                            <p className="text-[18px] font-semibold mt-6 mb-5">"Malesuada nibh eu sed elit purus, sit sem molestie enim, egestas aliquet etiam donec tristique nec."</p>
                            <div className="flex items-center gap-3">
                                <img className='w-10 rounded-full' src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-reviewer-img-3.jpg" alt="" />
                                <h5 className="text-[16px] font-semibold uppercase">Alice Miles</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className={`heebo py-20 px-5 sm:px-10 ${dark ? 'bg-indigo-950' : 'bg-[#3535de] '} text-white`}>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0">
                    <div className="order-1 lg:order-none lg:px-10">
                        <h1 className="text-[2.3rem] font-semibold">Ready to Take Your Internet Marketing to the next Level?</h1>
                        <p className="text-[18px] mt-5 mb-7 font-semibold">Amet ut elementum, ipsum lobortis amet, ut duis facilisis purus lorem ac pharetra, nunc mi egestas diam id nisl consequat aliquam et nunc justo.</p>
                        <p className="text-[18px]">Risus tincidunt in laoreet risus dignissim montes, velit egestas eu nec et in tincidunt amet, etiam at turpis adipiscing volutpat amet, adipiscing purus elementum risus, vitae euismod leo amet eget quam enim blandit diam quis diam proin enim suspendisse massa.</p>
                    </div>

                    <form className='lg:border-s border-slate-600 lg:px-10'>
                        <h1 className="text-4xl font-semibold mb-5">Let’s talk</h1>

                        <div className="flex justify-center gap-4 flex-col">
                            <input type="text" className={`px-4 py-3 rounded-sm ${dark ? 'bg-slate-700' : 'bg-white'}`} id="name" placeholder='Full name' />
                            <input type="text" className={`px-4 py-3 rounded-sm ${dark ? 'bg-slate-700' : 'bg-white'}`} id="email" placeholder='Email address' />
                            <textarea className={`px-4 py-3 rounded-sm ${dark ? 'bg-slate-700' : 'bg-white'}`} rows='5' placeholder='Your message'></textarea>

                            <button type="submit" className='px-4 py-3 bg-indigo-600 hover:bg-indigo-800 w-fit rounded-md'>Get a Quote</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Home
