import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useContext } from 'react';
import myContext from '../context/myContext';

const Blog = () => {
    const context = useContext(myContext);
    const { dark } = context;

    return (
        <>
            <section className="heebo py-28">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
                    <div className="w-full lg:max-w-[850px] grid grid-cols-1 justify-center items-center gap-20 px-5 lg:px-12">
                        <div className="">
                            <div className="">
                                <img className='w-full' src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-blog-post-img-3.jpg" alt="" />
                                <h1 className="text-2xl mt-5 font-semibold text-slate-500">How artist can nulla vitae turpis vel</h1>
                                <p className="text-[18px] text-slate-600 mt-2">Leave a Comment / Digital Marketing / akbarh</p>
                                <p className="text-[18px] text-slate-500 mt-5">Massa fringilla bibendum vitae in suspendisse tortor suspendisse est pretium risus pulvinar mauris facilisis egestas at eu odio semper lacinia pulvinar aenean tortor nunc scelerisque nulla ac nibh rhoncus pretium arcu risus. Nunc enim in malesuada ultricies amet mi risus et malesuada volutpat fusce viverra rutrum justo, tincidunt nisi urna lectus et, dignissim leo id</p>
                                <button type="button" className='py-2.5 mt-3 text-[18px] flex justify-center items-center gap-1'><span>Read More</span>
                                    <span>
                                        <Icon icon="material-symbols:double-arrow" width="18" height="18"></Icon>
                                    </span></button>
                            </div>
                        </div>
                        <div className="">
                            <hr className={`border ${dark ? 'border-slate-700' : 'border-slate-300'} mb-10 w-full`} />
                            <div className="">
                                <img className='w-full' src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-blog-post-img-2.jpg" alt="" />
                                <h1 className="text-2xl mt-5 font-semibold text-slate-500">What do aliquam sed fringilla</h1>
                                <p className="text-[18px] text-slate-600 mt-2">Leave a Comment / Digital Marketing / akbarh</p>
                                <p className="text-[18px] text-slate-500 mt-5">Massa fringilla bibendum vitae in suspendisse tortor suspendisse est pretium risus pulvinar mauris facilisis egestas at eu odio semper lacinia pulvinar aenean tortor nunc scelerisque nulla ac nibh rhoncus pretium arcu risus. Nunc enim in malesuada ultricies amet mi risus et malesuada volutpat fusce viverra rutrum justo, tincidunt nisi urna lectus et, dignissim leo id</p>
                                <button type="button" className='py-2.5 mt-3 text-[18px] flex justify-center items-center gap-1'><span>Read More</span>
                                    <span>
                                        <Icon icon="material-symbols:double-arrow" width="18" height="18"></Icon>
                                    </span></button>
                            </div>
                        </div>
                        <div className="">
                            <hr className={`border ${dark ? 'border-slate-700' : 'border-slate-300'} border-slate-300 mb-10 w-full`} />
                            <div className="">
                                <img className='w-full' src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-blog-post-img-1.jpg" alt="" />
                                <h1 className="text-2xl mt-5 font-semibold text-slate-500">How do you vulputate nullam mattis?</h1>
                                <p className="text-[18px] text-slate-600 mt-2">Leave a Comment / Digital Marketing / akbarh</p>
                                <p className="text-[18px] text-slate-500 mt-5">Massa fringilla bibendum vitae in suspendisse tortor suspendisse est pretium risus pulvinar mauris facilisis egestas at eu odio semper lacinia pulvinar aenean tortor nunc scelerisque nulla ac nibh rhoncus pretium arcu risus. Nunc enim in malesuada ultricies amet mi risus et malesuada volutpat fusce viverra rutrum justo, tincidunt nisi urna lectus et, dignissim leo id</p>
                                <button type="button" className='py-2.5 mt-3 text-[18px] flex justify-center items-center gap-1'><span>Read More</span>
                                    <span>
                                        <Icon icon="material-symbols:double-arrow" width="18" height="18"></Icon>
                                    </span></button>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '600px' }} className={`border-s ${dark ? 'border-slate-700' : 'border-slate-300'} border-slate-300 px-5 lg:px-10 mt-20 lg:mt-0`}>
                        <div className="">
                            <h1 className="text-2xl mb-3  font-semibold text-slate-500">Recent Posts</h1>
                            <ul className="montserrat text-[18px] text-slate-500">
                                <li className='my-1.5 hover:text-indigo-600 transition-all'>How artist can nulla vitae turpis vel</li>
                                <li className='my-1.5 hover:text-indigo-600 transition-all'>What do aliquam sed fringilla</li>
                                <li className='my-1.5 hover:text-indigo-600 transition-all'>How do you vulputate nullam mattis?</li>
                            </ul>
                        </div>

                        <div className="mt-16 text-[18px] text-slate-500">
                            <h1 className="text-2xl my-3  font-semibold text-slate-500">Categories</h1>
                            <ul className="montserrat">
                                <li className='my-1.5 hover:text-indigo-600 transition-all'>Creative</li>
                                <li className='my-1.5 hover:text-indigo-600 transition-all'>Digital Marketing</li>
                                <li className='my-1.5 hover:text-indigo-600 transition-all'>Social Media</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>




            <section className='heebo py-32 px-5 lg:px-10 bg-slate-800   text-white'>
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
        </>
    )
}

export default Blog
