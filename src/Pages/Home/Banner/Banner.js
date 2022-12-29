import React from 'react';
import img from '../../../Images/office.jpg'
const Banner = () => {
    return (
        <div className='grid lg:grid-cols-12 '>
            <div className='lg:col-span-8 bg-blue-900 mt-16 static'>
                <div className=' lg:w-2/4 mx-auto mt-12'>
                    <div className='text-center lg:text-left lg:text-6xl text-4xl text-white font-bold'>
                        <p>Build for </p>
                        <p>enterprice</p>
                        <p>Businesses</p></div>
                    <p className='px-5 text-center lg:text-left text-white lg:py-4 '>Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.
                    </p>

                    <div className='text-center lg:text-left lg:flex mb-28'>
                        <button className=' py-2 px-4 text-white bg-blue-600 hover:bg-blue-400 '>Learn more</button>
                        <p className='text-white lg:pl-8 pt-2'>Explore Pages</p>
                    </div>


                </div>

                <div className='lg:absolute top-64 right-24 '>

                    <img className='p-3  lg:w-2/3 lg:p-0 border-black rounded-md' src={img} />

                    <div className='p-3 m-2 lg:w-2/4 bg-white text-black lg:p-5 lg:m-0 lg:absolute bottom-2 right-12 rounded-md border-collapse'>
                        <p>I felt like I couldn't grow until I

                            moved to Opus. Now I am

                            encouraged to sell more with them.</p>
                        <p className='text-xl pt-2 font-bold'>Frank Dublin</p>
                        <p>CEO <span className='text-blue-800'>@STAMPS</span></p>
                    </div>
                </div>


            </div>
            <div className='lg:col-span-4 bg-blue-500 mb-16'>
                
            </div>
        </div>
    );
};

export default Banner;