import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useContext } from 'react';
import myContext from '../context/myContext';

const Branding = () => {
    const context = useContext(myContext);
    const { dark } = context;

    return (
        <>
            <section className="poppins text-white">
                <div className="h-full bg-branding">
                    {/* <div className="" style={{ backdropFilter: 'blur(5px)' }}> */}

                        <div className="max-w-screen-xl mx-auto pt-64 pb-20">
                            <div className="max-w-screen-md px-5 sm:px-10">
                                <h5 className="text-[16px] md:text-xl leading-tight uppercase">Services</h5>
                                <h1 className="text-4xl md:text-7xl leading-tight font-semibold my-7">Branding</h1>
                                <p className="text-[18px] md:text-2xl my-4 md:my-8">Sollicitudin eros nulla mus donec quisque convallis integer condimentum volutpat.</p>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </section>



            <section className={`heebo ${dark ? 'bg-transparent' : 'bg-slate-100'} py-40 px-5 md:px-10`}>
                <div className="max-w-screen-xl mx-auto">
                    <div className="mx-auto flex gap-5 flex-col md:flex-row md:gap-40">

                        <hr className='border-[1.5px] border-indigo-600 w-20 md:w-80 mb-10' />
                        <div className="">
                            <h1 className="text-3xl sm:text-4xl leading-tight mb-10 max-w-[35rem]">We are helping brands get where they need to be</h1>

                            <div className="flex flex-col md:flex-row gap-5 text-[16px] text-slate-500">
                                <p className="">Euismod tincidunt euismod lectus etiam dolor nulla nec, molestie mi non semper proin id donec sollicitudin massa, egestas tempus, tortor neque, augue velit sit faucibus facilisis massa aenean posuere dui vitae ac risus faucibus turpis accumsan urna vitae commodo.</p>
                                <p className="">Dignissim tellus tempor sit faucibus mi diam posuere etiam at fermentum a vestibulum in eget cursus a id adipiscing scelerisque blandit neque, scelerisque velit commodo sit quam vel massa sit aliquam arcu nulla velit magna enim dolor enim eu.</p>
                            </div>

                            <button type="button" className='flex justify-center items-center gap-1 bg-transparent hover:text-indigo-600 py-2.5 rounded-lg transition-all'>
                                <span className='text-[18px] sm:text-2xl'>Let's work together</span>
                                <span><Icon icon="lets-icons:arrow-right-long-light" width="50" height="50"></Icon></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section className={`${dark ? 'bg-indigo-950' : 'bg-[#3535de]'} text-white py-28 px-5 sm:px-10`}>
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center">
                        <h1 className={`text-sm sm:text-[18px] mb-4 ${dark ? 'text-white/70' : 'text-indigo-200'} font-semibold uppercase`}>Our approach</h1>
                        <h1 className="text-2xl sm:text-[3.5rem] leading-tight font-semibold mb-4">Insight. Creativity. Technology.</h1>
                        <p className={`text-[18px] ${dark ? 'text-slate-400/70' : 'text-slate-400'} text-slate-200 max-w-[40rem] mx-auto`}>Faucibus vestibulum mi adipiscing phasellus sagittis fringilla potenti volutpat quam elit fermentum, viverra faucibus ante fringilla.</p>
                        <hr className='border-[1.5px] border-slate-400 w-20 mb-10 mx-auto my-10' />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 justify-center items-center gap-3 mt-16 text-center">
                        <div className="flex justify-center items-center mb-5 flex-col">
                            <span className={`${dark ? 'text-indigo-500' : 'text-white/70'}`}><Icon icon="icon-park-outline:concept-sharing" width="30" height="30"></Icon></span>
                            <h5 className="text-2xl my-2">Concept</h5>
                            <p className={`text-[17px] ${dark ? 'text-gray-400/70' : 'text-slate-400'}`}>At pellentesque pellentesque egestas enim luctus in sed urna ullamcorper accumsan ut pulvinar eu id ultricies</p>
                        </div>
                        <div className="flex justify-center items-center mb-5 flex-col">
                            <span className={`${dark ? 'text-indigo-500' : 'text-white/70'}`}><Icon icon="carbon:model-builder" width="30" height="30"></Icon></span>
                            <h5 className="text-2xl my-2">Build</h5>
                            <p className={`text-[17px] ${dark ? 'text-gray-400/70' : 'text-slate-400'}`}>Dis interdum proin quis tempus augue interdum bibendum ornare habitant mattis mauris bibendum duis cursus venenatis</p>
                        </div>
                        <div className="flex justify-center items-center mb-5 flex-col">
                            <span className={`${dark ? 'text-indigo-500' : 'text-white/70'}`}><Icon icon="fluent:task-list-ltr-24-filled" width="30" height="30"></Icon></span>
                            <h5 className="text-2xl my-2">Test</h5>
                            <p className={`text-[17px] ${dark ? 'text-gray-400/70' : 'text-slate-400'}`}>Commodo amet, eget mattis dui egestas ridiculus aenean non aliquet lorem sed nunc pulvinar mauris viverra amet cras</p>
                        </div>
                    </div>
                </div>
            </section>




            <section className={`${dark ? 'bg-transparent' : 'bg-slate-100'} py-20 px-5 md:px-10`}>
                <div className="max-w-screen-xl mx-auto">
                    <h1 className="text-3xl sm:text-5xl text-center">Our Works</h1>
                    <p className="text-[18px] sm:text-2xl text-center mt-5 mb-10 sm:font-semibold text-slate-500">Commodo ultricies lacus, faucibus nisl, ut vulputate nullam mattis placerat dolor nec diam neque consequat ac, vel consectetur integer habitant pharetra vitae.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-20 flex-wrap">
                        <div className="h-full">
                            <img className='w-full h-[27rem] object-cover' src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-work-2.jpg" alt="" />
                            <h1 className="text-2xl mt-5 mb-3">NeatBuds</h1>
                            <p className="text-[18px] text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className="h-full">
                            <img className='w-full h-[27rem] object-cover' src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-work-1.jpg" alt="" />
                            <h1 className="text-2xl mt-5 mb-3">Glang Smartwatch</h1>
                            <p className="text-[18px] text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className="h-full">
                            <img className='w-full h-[27rem] object-cover' src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-work-4.jpg" alt="" />
                            <h1 className="text-2xl mt-5 mb-3">Roogitec</h1>
                            <p className="text-[18px] text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className="h-full">
                            <img className='w-full h-[27rem] object-cover' src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-work-3.jpg" alt="" />
                            <h1 className="text-2xl mt-5 mb-3">Nyez Water</h1>
                            <p className="text-[18px] text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className="h-full">
                            <img className='w-full h-[27rem] object-cover' src="https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <h1 className="text-2xl mt-5 mb-3">Laptop SmartChoice</h1>
                            <p className="text-[18px] text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>
            </section>





            <section className="montserrat py-20 px-5 sm:px-10">
                <div className="max-w-screen-xl mx-auto">

                    <div className="flex justify-start items-start flex-col md:flex-row md:gap-8">
                        <span className='relative -top-3 text-indigo-600'><Icon icon="fa6-solid:quote-right" width="70" height="70"></Icon></span>
                        <div className="max-w-screen-lg">
                            <h1 className="text-3xl font-semibold">Since the beginning rhoncus ut enim, elit amet nisl, tempor etiam eget vestibulum, amet, sem porttitor ultrices tristique quis metus fringilla etiam tellus sed sit vestibulum blandit.</h1>

                            <div className="mt-7 mb-1">
                                <img className='w-12 rounded-full mb-3' src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-executive-chariman-img.jpg" alt="" />
                                <h1 className="text-sm font-semibold text-slate-500 uppercase">Matthew Johnson</h1>
                            </div>

                            <div className="flex gap-[1px] text-[#3535de]">
                                <Icon icon="flowbite:star-solid" width="16" height="16"></Icon>
                                <Icon icon="flowbite:star-solid" width="16" height="16"></Icon>
                                <Icon icon="flowbite:star-solid" width="16" height="16"></Icon>
                                <Icon icon="flowbite:star-solid" width="16" height="16"></Icon>
                                <Icon icon="flowbite:star-solid" width="16" height="16"></Icon>
                            </div>
                        </div>
                    </div>

                </div>
            </section>






            <section className={`heebo py-20 px-5 sm:px-10 ${dark ? 'bg-slate-800' : 'bg-[#3535de] '} text-white`}>
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

export default Branding
