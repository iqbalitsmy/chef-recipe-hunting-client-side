import React, { useState } from 'react';
import './SliderCards.css'
import SliderCard from '../SliderCard/SliderCard';

const SliderCards = () => {

    const cartDetails = [
        {
            title: "Catering Services",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore odio veritatis",
            src: "https://bdbusinessfinder.com/wp-content/uploads/2020/02/List-of-Catering-Service-in-Dhaka-Bangladesh.jpg"
        },
        {
            title: "Table Ready Meals",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit do. Sunt, perspiciatis!",
            src: "https://slenderwonder.co.za/wp-content/uploads/2022/05/Ready-Made-Meals-for-Weight-Loss.png"
        },
        {
            title: "Sample Menus",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore odio",
            src: "https://img.choice.com.au/-/media/f54dfa39e93645c19acd62799a7fe05c.ashx"
        },
    ]

    return (
        <section className='container mx-auto bg-[#f2ece0] grid grid-cols-3 gap-2 pt-2 px-2 mb-36'>
            {
                cartDetails.map((cart, i) => {
                    return (<SliderCard cart={cart} key={i}></SliderCard>)
                })
            }
        </section>
    );
};

export default SliderCards;