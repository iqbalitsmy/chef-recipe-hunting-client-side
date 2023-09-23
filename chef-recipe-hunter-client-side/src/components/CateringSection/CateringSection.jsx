import React from 'react';
import './CateringSection.css'
import CateringCard from '../CateringCard/CateringCard';

const CateringSection = () => {
    const cardDetails = [
        {
            title: "Corporate Events",
            src: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/service-4-270x343.jpg"
        },
        {
            title: "Weddings And Galas",
            src: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/service-5-270x343.jpg"
        },
        {
            title: "Special Events",
            src: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/service-6-270x343.jpg"
        },
        {
            title: "Cooking Classes",
            src: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/service-7-270x343.jpg"
        },
    ]


    return (
        <div className='my-14 overflow-hidden pb-16'>
            <div className='text-center pb-6'>
                <h1 className='text-5xl font-bold text-[#41444b] pb-10'>We Specialize in Intimate Catering</h1>
                <p className='text-[#707173]'>Think back to your last party. It was probably a great time with amazing friends.</p>
            </div>
            <div className='mx-[5%] lg:mx-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8'>
                {
                    cardDetails.map((detais, i) => {
                        return (<CateringCard detais={detais} key={i}></CateringCard>)
                    })
                }
            </div>
        </div>
    );
};

export default CateringSection;