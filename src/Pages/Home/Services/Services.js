import React from 'react';

const Services = () => {
    return (
        <div className='p-3 lg:py-48 grid lg:grid-cols-6 max-w-screen-xl mx-auto justify-items-end '>
            <div className='col-span-3'>
                <p className='font-bold text-4xl'>
                    <p>Make your site</p>
                    <p>better with Opus</p>
                </p>
                <div className='pl-10 pt-2'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className='mt-9 py-3 px-4 text-white bg-blue-600 hover:bg-blue-400'>Learn More</button>
                </div>
            </div>
            <div className='col-span-3 py-16 lg:py-0'>
                <div>

                    <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.38751 13.95L13.25 24.5675L9.72751 25.85L5.86251 15.2325L0.647507 19.1775L2.51001 0.54126L15.9175 13.62L9.38751 13.95Z" fill="#1355FF" />
                    </svg>
                    <spam className='text-2xl font-bold'>
                        <p>Build or Coustomiza a</p>
                        <p>Website in Minutes</p>
                    </spam>

                </div>
                <div className='mt-20 mr-10'>

                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.599609 21.0675C2.3198 13.4559 5.9954 6.4246 11.2634 0.667528C11.357 0.565618 11.4708 0.484268 11.5976 0.428618C11.7243 0.372968 11.8612 0.344238 11.9996 0.344238C12.138 0.344238 12.2749 0.372968 12.4017 0.428618C12.5284 0.484268 12.6422 0.565618 12.7359 0.667528C12.9434 0.892528 13.1159 1.08253 13.2521 1.23628C18.2478 6.8886 21.7379 13.7092 23.3996 21.0675C20.7234 21.6313 17.9746 22.0013 15.1696 22.16L12.5584 27.3825C12.5064 27.4862 12.4266 27.5734 12.3279 27.6343C12.2293 27.6952 12.1156 27.7275 11.9996 27.7275C11.8836 27.7275 11.77 27.6952 11.6713 27.6343C11.5726 27.5734 11.4928 27.4862 11.4409 27.3825L8.8296 22.16C6.0627 22.0036 3.3115 21.6384 0.599609 21.0675ZM11.9996 17.25C12.9942 17.25 13.948 16.8549 14.6513 16.1517C15.3545 15.4484 15.7496 14.4946 15.7496 13.5C15.7496 12.5055 15.3545 11.5516 14.6513 10.8484C13.948 10.1451 12.9942 9.75 11.9996 9.75C11.005 9.75 10.0512 10.1451 9.348 10.8484C8.6447 11.5516 8.2496 12.5055 8.2496 13.5C8.2496 14.4946 8.6447 15.4484 9.348 16.1517C10.0512 16.8549 11.005 17.25 11.9996 17.25Z" fill="#1355FF" />
                    </svg>

                    <spam className='text-2xl font-bold'>
                        <p>Build or Coustomiza a</p>
                        <p>Website in Minutes</p>
                    </spam>

                </div>
            </div>
        </div>
    );
};

export default Services;