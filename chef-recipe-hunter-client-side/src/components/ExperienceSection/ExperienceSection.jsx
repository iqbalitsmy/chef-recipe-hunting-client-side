import React from 'react';

const ExperienceSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 mx-auto px-6 pb-16'>
            <div className="flex items-center justify-center">
                <figure className="">
                    <img
                        className="object-cover object-center w-full h-full"
                        src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/bg-8.png"
                        alt="Image"
                    />
                </figure>
            </div>
            <aside className='items-center'>
                <h1 className='text-4xl font-semibold'>Experience The Sublime!</h1>
                <p className='font-medium pt-4 text-[#6c6d6f]'>
                    Chef Alanzo prepares and serves exquisite dinners to parties from two to 200 at your home, business or private catering event. His blend of French-Mediterranean cuisine draws on a lifetime of skills and the knowledge that all meals, no matter how large or how small, are special events among family and friends
                </p>
                <button
                    className='py-3 px-9 mt-4 text-[#b49ebf] hover:text-white font-semibold uppercase hover:bg-[#b49ebf] border-2 border-[#b49ebf] rounded-3xl' type="button"
                >About Us</button>
            </aside>
        </div>
    );
};

export default ExperienceSection;