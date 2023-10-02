import React from 'react';

const Newsletter = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-8'>
            <aside className='text-center pt-14 pb-10'>
                <div className='pb-4'>
                    <h1 className='text-gray-200 text-4xl font-extrabold'>Newsletter</h1>
                    <p className='text-gray-400'>Subscribe to our mailing list</p>
                </div>
                <div className='relative flex flex-col md:flex-row justify-center items-center'>
                    <input
                        className='text-gray-400 bg-gray-700 text-lg py-2 md:py-3 px-8 md:px-10 rounded-3xl'
                        style={{ outline: '0' }}
                        type="email"
                        name="email"
                        placeholder='Your email'
                        id=""
                    />
                    <button
                        className='py-2 md:py-3 px-8 md:px-10 mt-8 md:mt-0 md:absolute md:right-10 text-lg font-medium tracking-widest uppercase bg-[#f4d699] hover:bg-[#e9c98a] rounded-3xl '
                        type="button"
                    >
                        Submit
                    </button>
                </div>
            </aside>
            <aside className=''>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d645.4223112888759!2d90.3698826294246!3d23.780879640992055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ2JzUxLjgiTiA5MMKwMjInMTIuMCJF!5e0!3m2!1sen!2sbd!4v1696267363438!5m2!1sen!2sbd"
                        
                        className='w-full lg:w-[400px] h-[300px]'
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </aside>
        </div>
    );
};

export default Newsletter;