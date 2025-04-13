import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useContext } from 'react'
import myContext from '../context/myContext'

const Contact = () => {
    const context = useContext(myContext);
    const { dark } = context;

    return (
        <div>
            <section className="poppins bg-[#121240] text-white">
                <div className="bg-triangle h-full bg-triangle-2">

                    <div className="max-w-screen-xl mx-auto pt-40 pb-20">
                        <div className="max-w-screen-md px-5 sm:px-10">
                            <h1 className="text-4xl md:text-7xl leading-tight font-semibold">Contact</h1>
                            <p className="text-xl md:text-2xl md:font-semibold my-4 md:my-8">Sollicitudin eros nulla mus donec quisque convallis integer condimentum volutpat.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className={`heebo ${dark ? 'bg-transparent' : 'bg-slate-100'} pt-20 pb-20 px-5 md:px-10`}>
                <div className="max-w-screen-xl mx-auto flex">
                    <div className="mx-auto grid-cols-1 grid lg:grid-cols-2 justify-center gap-5">

                        <div className="">
                            <h3 className="text-sm sm:text-[18px] mb-4 text-indigo-600 uppercase">What we do!</h3>
                            <h1 className="text-2xl sm:text-[3.5rem] leading-tight mb-10 max-w-[32rem]">Don't Hesitate To Get in Touch.</h1>

                            <hr className='border-[1.5px] border-indigo-600 w-12 mb-10' />
                            <p className="text-[16px] text-slate-500">Consequat enim mollis mauris vulputate phasellus neque, eros turpis et eu adipiscing id tempor, nascetur elit vitae molestie pulvinar viverra ut eu lectus mi velit cras integer tristique aliquam proin porta tellus elit neque mi velit sed pharetra morbi proin. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                            <button type="button" className='flex justify-center items-center gap-1 bg-transparent hover:text-indigo-600 py-2.5 rounded-lg transition-all'>
                                <span className='text-[18px] sm:text-2xl'>Email Us</span>
                                <span><Icon icon="lets-icons:arrow-right-long-light" width="50" height="50"></Icon></span>
                            </button>
                        </div>

                        <div className="">

                            <div className="montserrat grid grid-cols-1 justify-center items-center gap-10 mt-10">
                                <div className="flex gap-5">
                                    <span className='relative top-2 text-indigo-600'><Icon icon="weui:location-filled" width="30" height="30"></Icon></span>
                                    <div className="">
                                        <h5 className="text-[17px] font-semibold my-2 text-slate-500 uppercase">Address</h5>
                                        <p className={`text-sm ${dark ? 'text-white' : 'text-black'} sm:text-[23px] max-w-[400px"`}>123 Demo St, Lakeland, FL 45678, United States.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <span className='relative top-2 text-indigo-600'><Icon icon="teenyicons:phone-solid" width="30" height="30"></Icon></span>
                                    <div className="">
                                        <h5 className="text-[17px] font-semibold my-2 text-slate-500 uppercase">Phone</h5>
                                        <p className={`text-sm ${dark ? 'text-white' : 'text-black'} sm:text-[23px] max-w-[400px]`}>+1 123-456-7890</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <span className='relative top-2 text-indigo-600'><Icon icon="ic:baseline-email" width="30" height="30"></Icon></span>
                                    <div className="">
                                        <h5 className="text-[17px] font-semibold my-2 text-slate-500 uppercase">Email</h5>
                                        <p className={`text-sm ${dark ? 'text-white' : 'text-black'} sm:text-[23px] max-w-[400px"`}>mail@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <section className='heebo py-32 px-5 lg:px-10 bg-slate-800 text-white'>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0">
                    <div className="order-1 lg:order-none lg:px-10">
                        <h1 className="text-[2.3rem] font-semibold">Ready to Take Your Internet Marketing to the next Level?</h1>
                        <p className="text-[18px] mt-5 mb-7 font-semibold">Amet ut elementum, ipsum lobortis amet, ut duis facilisis purus lorem ac pharetra, nunc mi egestas diam id nisl consequat aliquam et nunc justo.</p>
                        <p className="text-[18px]">Risus tincidunt in laoreet risus dignissim montes, velit egestas eu nec et in tincidunt amet, etiam at turpis adipiscing volutpat amet, adipiscing purus elementum risus, vitae euismod leo amet eget quam enim blandit diam quis diam proin enim suspendisse massa.</p>
                    </div>

                    <form className='lg:border-s border-slate-600 lg:px-20'>
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
        </div>
    )
}

export default Contact
