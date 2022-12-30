import React from 'react';
import img from '../../../Images/office.jpg'
import { FaArrowCircleRight } from "react-icons/fa";
import Scroll from './Scroll';

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-12 '>
            <div className='lg:col-span-8 bg-blue-900 mt-16 static'>
                <div className=' lg:w-2/4 mx-auto lg:mt-12'>
                    <div className='text-center lg:text-left lg:text-6xl text-5xl text-white font-bold pt-10 lg:pt-0'>
                        <p>Build for </p>
                        <p>enterprice</p>
                        <p>Businesses.</p></div>
                    <p className='py-6 px-5 text-center lg:text-left text-white lg:py-4 lg:pl-0 '>Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.
                    </p>

                    <div className='text-center lg:text-left lg:flex mb-28'>

                        <button className=' lg:ml-0 py-2 px-4 text-white bg-blue-600 hover:bg-blue-400 '><span className='flex'><spam>Learn more</spam> <span className='pl-6 pt-1'><FaArrowCircleRight></FaArrowCircleRight></span></span></button>

                        <p className='text-white lg:pl-6 pt-2'>Explore Pages </p>
                    </div>


                </div>

                <div className='lg:absolute top-64 right-24 '>

                    <img className='p-3  lg:w-2/3 lg:p-0 border-black rounded-md' src={img} />

                    <div className='p-3 m-2 lg:w-2/4 bg-white text-black lg:p-5 lg:m-0 lg:absolute bottom-2 right-12 rounded-md border-collapse'>
                        <p>I felt like I couldn't grow until I

                            moved to Opus. Now I am

                            encouraged to sell more with them.
                        </p>
                        <div className='flex'>
                            <p>
                                <p className='text-xl pt-2 font-bold'>Frank Dublin</p>
                                <p>CEO <span className='text-blue-800'>@STAMPS</span></p>
                            </p>

                            <spam className='pl-36 pt-3 lg:pl-3 lg:pt-4'><svg width="53" height="40" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3883 8.9564C18.759 9.28706 15.2456 10.6924 12.8483 13.1724C10.451 15.5697 9.45896 18.8351 9.87229 22.9684H11.3603C11.939 21.1497 13.4683 20.2404 15.9483 20.2404C18.1803 20.2404 20.123 21.1084 21.7763 22.8444C23.4296 24.5804 24.2563 26.8537 24.2563 29.6644C24.2563 32.7231 23.2643 35.2031 21.2803 37.1044C19.2963 39.0057 16.6923 39.9564 13.4683 39.9564C9.41762 39.9564 6.27629 38.4684 4.04429 35.4924C1.81229 32.4337 0.696289 28.4244 0.696289 23.4644C0.696289 17.4297 2.51496 12.2217 6.15229 7.84039C9.87229 3.37639 15.6176 0.89638 23.3883 0.400391V8.9564ZM51.4123 8.9564C46.783 9.28706 43.2696 10.6924 40.8723 13.1724C38.475 15.5697 37.4416 18.8351 37.7723 22.9684H39.2603C39.839 21.1497 41.4096 20.2404 43.9723 20.2404C46.2043 20.2404 48.147 21.1084 49.8003 22.8444C51.4536 24.5804 52.2803 26.8537 52.2803 29.6644C52.2803 32.7231 51.2883 35.2031 49.3043 37.1044C47.3203 39.0057 44.7163 39.9564 41.4923 39.9564C37.359 39.9564 34.1763 38.4684 31.9443 35.4924C29.795 32.4337 28.7203 28.4244 28.7203 23.4644C28.7203 17.4297 30.539 12.2217 34.1763 7.84039C37.8963 3.37639 43.6416 0.89638 51.4123 0.400391V8.9564Z" fill="#DADDE7" />
                            </svg></spam>
                        </div>
                    </div>
                </div>


            </div>
            <div className='lg:col-span-4 bg-blue-500 lg:mb-16'>

            </div>

        </div>
    );
};

export default Banner;