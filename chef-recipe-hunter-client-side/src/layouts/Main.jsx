import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Carousels from '../components/Carousels/Carousels';
import SliderCards from '../components/SliderCards/SliderCards';

const Main = () => {
    const images = [
        {
            src: 'https://img.freepik.com/free-photo/chef-kitchen-taking-notes_23-2148006636.jpg',
            title: "Welcome & Enjoy World-class Cuisine",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea eveniet obcaecati facilis, iusto unde."
        },
        {
            src: 'https://img.freepik.com/free-photo/table-full-food-chairs_23-2148941561.jpg',
            title: "We'll Take Care Of All The Details",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea eveniet obcaecati facilis, iusto unde."
        },
        {
            src: 'https://img.freepik.com/premium-photo/plate-steak-with-vegetables-fork-it_954226-96668.jpg',
            title: "Delicious Food Is My Passion",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea eveniet obcaecati facilis, iusto unde."
        },
    ];

    return (
        <div className='bg-[#201f1d]'>
            <header>
                <Navigation></Navigation>
                <Carousels images={images} />
                <SliderCards></SliderCards>
            </header>
            <main>
                
            </main>
        </div>
    );
};

export default Main;