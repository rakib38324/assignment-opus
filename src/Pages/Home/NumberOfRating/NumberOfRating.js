import React from 'react';

const NumberOfRating = () => {
    return (
        <div className='flex justify-around py-48'>
            <div>
                <p className='text-5xl font-bold text-center'>99.95%</p>
                <p className='font-semibold pt-3 text-center'>Accuracy rate</p>
                <p className='text-slate-400 pt-1 text-center' >in fulfiling order</p>
            </div>
            <div>
                <p className='text-5xl font-bold text-center'>5,000+</p>
                <p className='font-semibold pt-3 text-center'>Ecommerce Businesses</p>
                <p className='text-slate-400 pt-1 text-center' >partner with Opus</p>
            </div>
            <div>
                <p className='text-5xl font-bold text-center'>99.96%</p>
                <p className='font-semibold pt-3 text-center'>of order ship on time</p>
                <p className='text-slate-400 pt-1 text-center' >with SLA</p>
            </div>
            <div>
                <p className='text-5xl font-bold text-center'><spam className='text-slate-400'>#</spam>1</p>
                <p className='font-semibold pt-3 text-center'>Best fulfillment Technology</p>
                <p className='text-slate-400 pt-1 text-center' >by AdWeek's Retail Awards</p>
            </div>
        </div>
    );
};

export default NumberOfRating;