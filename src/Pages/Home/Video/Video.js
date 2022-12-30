import React from 'react';
import ReactPlayer from 'react-player'

const Video = () => {

    return (
        <div className='max-w-screen-xl mx-auto '>
            <div className='m-10 flex lg:justify-center'>
                <spam className=' lg:w-1/2'>
                    <p className='text-slate-400 py-3'>Video Title</p>

                    <p className='lg:text-4xl font-bold pb-5'>Inform user with video sections</p>
                    <p className=''><ReactPlayer url='https://www.youtube.com/watch?v=fkorWPoi6E0' controls='true'/></p>
                </spam>


            </div>
            <div className='grid lg:grid-cols-2'>
                <p></p>
                <p className='m-4 lg:w-1/2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
        </div>
    );
};

export default Video;