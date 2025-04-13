import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const BlogDetails = () => {
    return (
        <>
            <section className="bg-slate-200 py-20 px-5 sm:px-10">
                <div className="max-w-screen-xl mx-auto">
                    <div className="heebo p-10 lg:p-28 bg-white text-xl text-slate-500">
                        <img src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-blog-post-img-3.jpg" alt="" />

                        <h1 className="text-2xl mt-5 font-semibold text-slate-500">What do aliquam sed fringilla</h1>
                        <p className="poppins text-[18px] mt-2">Leave a Comment / Digital Marketing / akbarh</p>

                        <div className="">
                            <p className="mt-5">Massa fringilla bibendum vitae in suspendisse tortor suspendisse est pretium risus pulvinar mauris facilisis egestas at eu odio semper lacinia pulvinar aenean tortor nunc scelerisque nulla ac nibh rhoncus pretium arcu risus.</p>
                            <p className="mt-5">Nunc enim in malesuada ultricies amet mi risus et malesuada volutpat fusce viverra rutrum justo, tincidunt nisi urna lectus et, dignissim leo id eros, amet, a, pretium elementum dictum adipiscing aenean interdum laoreet dolor elementum quis fringilla nunc ultricies consequat urna velit gravida egestas elit volutpat morbi consectetur.</p>
                        </div>


                        <div className="italic ps-10 border-s-4 border-gray-300">
                            <p className="mt-5">Libero dui quis ultrices morbi integer sagittis sapien lobortis ut tincidunt felis consectetur sagittis at mattis donec sed quis erat id nisl ut consequat.</p>
                            <p className="mt-5">Lorem Ipsum</p>
                        </div>

                        <p className="mt-5 text-xl">Et mi proin facilisis odio id a et ut id nulla vitae turpis vel nec in amet, amet, nullam id consequat aliquam sed fringilla</p>
                    </div>


                    <button className='flex justify-center items-center gap-3 py-3 my-10' type="submit">
                        <span className=''><Icon icon="guidance:right-arrow" width="24" height="24"></Icon></span>
                        <span className='montserrat'>Previous Post</span>
                    </button>


                    <form action="" className='montserrat p-10 lg:p-28 bg-white'>
                        <h1 className="text-3xl">Leave a Comment</h1>
                        <p className="text-slate-500 my-2">Your email address will not be published. Required fields are marked *</p>

                        <textarea className='px-4 mt-2 md:my-5 py-3 border border-gray-300 focus:outline-gray-300 focus:bg-white bg-[#fafafa] w-full transition-all outline-none' rows="8" placeholder='Type here..'></textarea>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
                            <input className='px-4 py-3 border border-gray-300 focus:outline-gray-300 focus:bg-white bg-[#fafafa] transition-all outline-none' type="text" placeholder='Name*' />
                            <input className='px-4 py-3 border border-gray-300 focus:outline-gray-300 focus:bg-white bg-[#fafafa] transition-all outline-none' type="email" placeholder='Email*' />
                            <input className='px-4 py-3 border border-gray-300 focus:outline-gray-300 focus:bg-white bg-[#fafafa] transition-all outline-none' type="url" placeholder='Website*' />
                        </div>

                        <div className="flex justify-start items-start gap-2 my-5">
                            <input type="checkbox" />
                            <span className='text-[18px]'>Save my name, email, and website in this browser for the next time I comment.</span>
                        </div>

                        <button className='flex justify-center items-center gap-3 px-4 py-3 bg-[#3535de] text-white mt-4 md:mt-10' type="submit">
                            <span className='montserrat'>Previous Post</span>
                            <span className=''><Icon icon="guidance:left-arrow" width="30" height="30"></Icon></span>
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default BlogDetails
