import React from 'react';

const Footer = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <p className='flex my-5'>
                <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9993 0.166016C21.3593 0.166016 27.3327 6.13935 27.3327 13.4993C27.3327 20.8593 21.3593 26.8327 13.9993 26.8327C6.63935 26.8327 0.666016 20.8593 0.666016 13.4993C0.666016 6.13935 6.63935 0.166016 13.9993 0.166016ZM13.9993 24.166C19.902 24.166 24.666 19.402 24.666 13.4993C24.666 7.5967 19.902 2.83268 13.9993 2.83268C12.5981 2.83093 11.2102 3.10563 9.9153 3.64106C8.6204 4.17649 7.4438 4.96212 6.45296 5.95296C5.46212 6.9438 4.67649 8.1204 4.14106 9.4153C3.60563 10.7102 3.33093 12.0981 3.33268 13.4993C3.33268 19.402 8.0967 24.166 13.9993 24.166ZM13.9993 21.4993C9.5727 21.4993 5.99935 17.926 5.99935 13.4993C5.99935 9.0727 9.5727 5.49935 13.9993 5.49935C18.426 5.49935 21.9993 9.0727 21.9993 13.4993C21.9993 17.926 18.426 21.4993 13.9993 21.4993ZM13.9993 10.8327C12.5327 10.8327 11.3327 12.0327 11.3327 13.4993C11.3327 14.966 12.5327 16.166 13.9993 16.166C15.466 16.166 16.666 14.966 16.666 13.4993C16.666 12.0327 15.466 10.8327 13.9993 10.8327Z" fill="#1355FF" />
                </svg>
                <spam className='font-bold pl-2'>Opus</spam>
            </p>

            <div className='grid lg:grid-cols-2'>
                <div className='grid lg:grid-cols-3 font-semibold pl-3'>
                    <div>
                        <p className='text-slate-400 pb-4'>Overview</p>
                        <p className='pb-4'>Overview</p>
                        <p className='pb-4'>Landing</p>
                        <p className='pb-4'>Company</p>
                        <p className='pb-4'>Pricing</p>
                        <p className='pb-4'>CMS Pages</p>
                        <p className='pb-4'>Accounta</p>
                        <p className='pb-4'>Nuy for Figma</p>
                    </div>
                    <div>
                        <p className='text-slate-400 pb-4'>PAGES</p>
                        <p className='pb-4'>Pages</p>
                        <p className='pb-4'>Loading 1</p>
                        <p className='pb-4'>Loading 2</p>
                        <p className='pb-4'>Loading 3</p>
                        <p className='pb-4'>Company 1</p>
                        <p className='pb-4'>Company 2</p>
                        <p className='pb-4'>Company 3</p>
                        <p className='pb-4'>Blog 1</p>
                        <p className='pb-4'>Blog 2</p>
                        <p className='pb-4'>Contact 1</p>
                        <p className='pb-4'>Contact 2</p>
                        <p className='pb-4'>Contact 3</p>
                    </div>
                    <div>
                        <p className='text-slate-400 pb-4'>PAGES</p>
                        <p className='pb-4'>Pages</p>
                        <p className='pb-4'>Case Studies</p>
                        <p className='pb-4'>Careers</p>
                        <p className='pb-4'>Pricing 1</p>
                        <p className='pb-4'>Pricing 2</p>
                        <p className='pb-4'>Pricing 3</p>
                        <p className='pb-4'>Login</p>
                        <p className='pb-4'>Register</p>
                        <p className='pb-4'>Forget Password</p>
                        <p className='pb-4'>Blog Post</p>
                        <p className='pb-4'>Team Member</p>
                        <p className='pb-4'>Case Study</p>
                        <p className='pb-4'>Job Post</p>
                    </div>
                </div>

                <div>
                    <spam className='grid grid-cols-2'>

                        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <button className=' py-3 px-4 text-white bg-blue-600 hover:bg-blue-400  lg:mt-0 sm:mt-0'>Get Started</button>
                    </spam>
                    <div className='flex m-2'>
                        <spam className='mt-5'>
                            <p className='text-slate-400 pt-5 font-semibold'>OPUS FOR WEBFLOW</p>
                            <p className='text-3xl font-bold text-blue-600 mt-4'>Lorem Ipsum</p>
                        </spam>
                        <spam className='mt-5 ml-20'>
                            <p className='text-slate-400 pt-5 font-semibold'>OPUS FOR WEBFLOW</p>
                            <p className='text-3xl font-bold text-blue-600 mt-4'>Lorem Ipsum</p>
                        </spam>
                    </div>
                    <p className='mt-10 mx-2'><spam className='text-slate-400'>© Template by</spam> <spam className='text-blue-600'>Lorem</spam><spam className='text-slate-400'>- Powered by </spam><spam className='text-blue-600'>Ipsum</spam></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;