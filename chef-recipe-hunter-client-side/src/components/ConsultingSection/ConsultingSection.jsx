import React from 'react';

const ConsultingSection = () => {
    return (
        <div
            className='h-full w-full grid grid-cols-1 lg:grid-cols-2'
            style={{
                background: 'url(https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/bg-14.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                objectPosition: 'bottom right'
            }}
        >
            <div className='bg-gradient-to-r from-black md:p-28 p-4 pb-8'>
                <h1 className='text-4xl font-extrabold text-white mb-8'>Restaurant Consulting Services</h1>
                <p className='text-[#b7b2b2] mb-6'>Alanzo, along with his team, offers culinary and management services. We have the experience to provide concept development strategies and best practice principles in order to achieve maximum sales performance.</p>
                <div className='text-[#f4d68e] flex gap-16 mb-9'>
                    <h5 className='text-[#f4d68e] font-extrabold'>The Process</h5>
                    <div className='gap-16 lg:flex'>
                        <ul className='list-disc'>
                            <li><span className='text-[#ebe3d4]'>Discover</span></li>
                            <li><span className='text-[#ebe3d4]'>Plan</span></li>
                            <li><span className='text-[#ebe3d4]'>Design</span></li>
                        </ul>
                        <ul className='list-disc'>
                            <li><span className='text-[#ebe3d4]'>Organize</span></li>
                            <li><span className='text-[#ebe3d4]'>Grow</span></li>
                        </ul>
                    </div>
                </div>
                <button
                    className='py-3 px-9 mt-4 text-[#f4d699] hover:text-black text-lg font-semibold uppercase bg-[#201f1d] hover:bg-[#f4d699] border-2 border-[#f4d699] rounded-3xl'
                    type="button"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default ConsultingSection;