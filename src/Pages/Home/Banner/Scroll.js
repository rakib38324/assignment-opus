import React from 'react';
import { FaMouse } from "react-icons/fa";

const Scroll = () => {
    return (
        <div className='invisible lg:visible w-3/4 mx-auto grid grid-cols-12'>
            <div className='col-span-6'>
                <p className='flex pl-20 py-6'><spam className='pt-2 text-slate-400 text-xl'><FaMouse></FaMouse></spam> <spam className='pl-9 text-slate-400 text-xl'>SCROLL FOR MORE</spam></p>
            </div>
            <div className='col-span-6 bg-blue-500'>
                
            </div>
        </div>
    );
};

export default Scroll;