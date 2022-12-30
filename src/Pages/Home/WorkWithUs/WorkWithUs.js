import React from 'react';

const WorkWithUs = () => {
    return (
        <div className='bg-blue-900'>
            <div className=' max-w-screen-xl mx-auto justify-items-end '>

                <div className='text-center pt-10 lg:flex text-white lg:pt-24 justify-between lg:w-3/4 mx-auto'>
                    <p className='text-5xl font-bold'>Ways to work with us</p>
                    <button className='mt-9 py-3 px-4 text-white bg-blue-600 hover:bg-blue-400  lg:mt-0'>Get Started</button>
                </div>

            </div>

            <div className='grid lg:grid-cols-3 p-2 lg:p-5 text-white'>
                <div className="p-10">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="" /></figure>
                    <div className=" bg-blue-900">
                        <h2 className="font-bold py-8 text-xl">Project Management</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                        
                    </div>
                </div>
                <div className="p-10 ">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="" /></figure>
                    <div className=" bg-blue-900">
                        <h2 className="font-bold py-8 text-xl">Advanced Analysis</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                        
                    </div>
                </div>
                <div className="p-10">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="" /></figure>
                    <div className=" bg-blue-900">
                        <h2 className="font-bold py-8 text-xl">Marketing & Dashboard</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                        
                    </div>
                </div>
                 
            </div>

        </div>
    );
};

export default WorkWithUs;