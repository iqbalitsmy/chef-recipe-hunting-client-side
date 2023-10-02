import React from 'react';
import Testimonials from '../Testimonials/Testimonials';

const AboutUsSection = () => {
    return (
        <div className='py-24'>
            <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <h3
                    className="mb-6 text-4xl font-bold text-neutral-800 dark:text-neutral-200">
                    What Customers Are Saying About Us
                </h3>
                <p className="mb-6 pb-2 md:mb-12 md:pb-0 text-gray-500">
                    We pride ourselves on what our happy clients say.
                </p>
            </div>
            <div className='overflow-hidden'>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default AboutUsSection;