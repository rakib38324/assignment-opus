import React from 'react';

const ChooseSection = () => {
    return (
        <div className='p-3 lg:py-48 grid lg:flex max-w-screen-xl mx-auto lg:flex-row-reverse '>


            <div className='lg:w-3/4'>
                <p className='font-bold text-4xl'>
                    <p>Create pages using</p>
                    <p>beautiful components.</p>
                </p>
                <div className='pl-10 pt-5'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className='mt-9 py-3 px-4 text-black bg-base-200 hover:bg-base-400'>Learn More</button>
                </div>
            </div>

            <div className='lg:w-3/4 py-16 lg:py-0'>
                <div>
                    <div className='flex'>
                        <div>
                            <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="64" height="64" transform="translate(0 0.5)" fill="#1355FF" />
                                <path d="M24.4595 30.4863C24.068 30.3558 24.0643 30.145 24.467 30.0108L38.7822 25.2393C39.179 25.1073 39.4062 25.3293 39.2952 25.7178L35.2048 40.0323C35.0923 40.429 34.8635 40.4425 34.6955 40.066L32 34L36.5 28L30.5 32.5L24.4595 30.4863Z" fill="white" />
                            </svg>

                        </div>
                        <div className='pl-10'>
                            <spam className='text-2xl font-bold'>
                                <p>Choose</p>
                                <p>your Sections</p>
                            </spam>
                            <p className='pt-3'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>

                    <div className='flex mt-20'>
                        <div>
                            <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="64" height="64" transform="translate(0 0.5)" fill="#1355FF" />
                                <path d="M38 27.25H26V37.75L32.969 30.7795C33.1096 30.6389 33.3004 30.5599 33.4992 30.5599C33.6981 30.5599 33.8889 30.6389 34.0295 30.7795L38 34.7575V27.25ZM24.5 26.4948C24.5014 26.2978 24.5802 26.1093 24.7194 25.9699C24.8586 25.8306 25.047 25.7516 25.244 25.75H38.756C39.167 25.75 39.5 26.0838 39.5 26.4948V38.5052C39.4986 38.7022 39.4198 38.8907 39.2806 39.0301C39.1414 39.1694 38.953 39.2484 38.756 39.25H25.244C25.0466 39.2498 24.8574 39.1712 24.7179 39.0316C24.5784 38.892 24.5 38.7026 24.5 38.5052V26.4948ZM29 31.75C28.6022 31.75 28.2206 31.592 27.9393 31.3107C27.658 31.0294 27.5 30.6478 27.5 30.25C27.5 29.8522 27.658 29.4706 27.9393 29.1893C28.2206 28.908 28.6022 28.75 29 28.75C29.3978 28.75 29.7794 28.908 30.0607 29.1893C30.342 29.4706 30.5 29.8522 30.5 30.25C30.5 30.6478 30.342 31.0294 30.0607 31.3107C29.7794 31.592 29.3978 31.75 29 31.75Z" fill="white" />
                            </svg>


                        </div>
                        <div className='pl-10'>
                            <spam className='text-2xl font-bold'>
                                <p>Add the images</p>
                                <p>and text you need</p>
                            </spam>
                            <p className='pt-3'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChooseSection;