import React, { useState } from 'react';

const Carousels = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className='container mx-auto mt-8'>
            <div className="relative w-full h-[500px]">
                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-4 text-3xl text-white rounded bg-gray-700 hover:bg-gray-900 z-10 bg-opacity-25 hover:bg-opacity-50 opacity-80"
                >
                    &lt;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-4 text-3xl text-white rounded bg-gray-700 hover:bg-gray-900 z-10 bg-opacity-25 hover:bg-opacity-50 opacity-80"
                >
                    &gt;
                </button>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
                            width: `${images.length * 100}%`,
                        }}
                    >
                        {images.map((image, index) => (
                            <div key={index}
                                style={{ 'backgroundImage': `url(${image?.src})` }}
                                className="w-full md:h-[500px] bg-no-repeat bg-cover rounded-md grid grid-cols-1 md:grid-cols-2">
                                <div className='bg-gradient-to-r from-[#201f1d] via-[#201f1d] p-9 h-full'>
                                    <div className='flex flex-col items-center'>
                                        <h1
                                            className='text-5xl font-extrabold text-white pb-4'
                                        >{image?.title}</h1>
                                        <p
                                            className='text-base text-[#a8a6a3]'
                                        >{image?.description}</p>
                                        <button
                                            className='py-3 px-9 mt-4 text-white hover:text-black text-lg font-semibold uppercase bg-[#201f1d] hover:bg-[#a8a6a3] border-2 border-[#a8a6a3] rounded-3xl' type="button"
                                        >Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousels;