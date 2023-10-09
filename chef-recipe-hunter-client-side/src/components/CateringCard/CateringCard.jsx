import React from 'react';

const CateringCard = ({ detais }) => {
    return (
        <div
            className='cursor-pointer hover:shadow-lg lg:w-full'
        >
            <div className='relative'>
                <div className='sc_services_item_thumb'>
                    <img
                        className='object-cover object-center w-full'
                        src={detais?.src}
                        alt=""
                        loading='lazy'
                    />
                </div>
            </div>
            <div className='bg-white pt-8 text-center relative card-details h-32'>
                <div className='card-title absolute w-full'>
                    <h2 className='text-2xl font-bold hover:text-[#b49ebf] transition-colors'>{detais?.title}</h2>
                </div>
                <div className='cart-button absolute -bottom-full w-full'>
                    <button
                        className='py-2 px-6 mt-4 text-lg text-white font-medium tracking-widest uppercase bg-[#b49ebf] hover:bg-[#b089b9] border-2 rounded-3xl'
                        type="button"
                    >
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CateringCard;