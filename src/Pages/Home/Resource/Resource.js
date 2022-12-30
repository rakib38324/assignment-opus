import React from 'react';

const Resource = () => {
    return (
        <div >
            <div className=' max-w-screen-xl mx-auto justify-items-end '>

                <div className='text-center pt-10 lg:flex lg:pt-24 justify-between lg:w-3/4 mx-auto'>
                    <p className='text-5xl font-bold'>Resources</p>
                    <button className='mt-9 py-3 px-4 text-white bg-blue-600 hover:bg-blue-400  lg:mt-0'>Get Started</button>
                </div>

            </div>

            <div className='grid lg:grid-cols-3 p-2 lg:p-5'>
                <div className="p-10">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="" /></figure>
                    <div className="">
                        <h2 className="font-bold py-8 text-xl">A High -convertng, high-performing templete</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>

                    </div>
                    <button className='bg-base-200 p-3 m-4'>Read Article</button>
                </div>
                <div className="p-10 ">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="" /></figure>
                    <div className="">
                        <h2 className="font-bold py-8 text-xl">With a clear, minimal and professional look</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>

                    </div>
                    <button className='bg-base-200 p-3 m-4'>Read Article</button>
                </div>
                <div className="p-10">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="" /></figure>
                    <div className=" ">
                        <h2 className="font-bold py-8 text-xl">Opus made our journy possible</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>

                    </div>
                    <button className='bg-base-200 p-3 m-4'>Read Article</button>
                </div>

            </div>

        </div>
    );
};

export default Resource;