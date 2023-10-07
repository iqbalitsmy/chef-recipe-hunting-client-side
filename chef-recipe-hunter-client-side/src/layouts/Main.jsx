import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Carousels from '../components/Carousels/Carousels';
import SliderCards from '../components/SliderCards/SliderCards';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import ConsultingSection from '../components/ConsultingSection/ConsultingSection';
import CateringSection from '../components/CateringSection/CateringSection';
import MenusSection from '../components/MenusSection/MenusSection';
import AboutUsSection from '../components/AboutUsSection/AboutUsSection';
import Newsletter from '../components/Newsletter/Newsletter';
import FooterNav from '../components/FooterNav/FooterNav';
import ChefProfileContainer from '../components/ChefProfileContainer/ChefProfileContainer';

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
                <section className='container mx-auto bg-[#f2ece0]'>
                    <ChefProfileContainer></ChefProfileContainer>
                </section>
                <section className='container mx-auto bg-[#f2ece0]'>
                    <ExperienceSection></ExperienceSection>
                </section>
                <section className='container mx-auto bg-[#f2ece0] p-2'>
                    <ConsultingSection></ConsultingSection>
                </section>
                <section className='container mx-auto bg-[#f2ece0] p-2'>
                    <CateringSection></CateringSection>
                </section>
                {/* <section className='container mx-auto bg-[#f2ece0]'>
                    <MenusSection></MenusSection>
                </section> */}
                <section className='container mx-auto bg-[#f2ece0]'>
                    
                </section>
                <section className='container mx-auto bg-[#f2ece0]'>
                    <AboutUsSection></AboutUsSection>
                </section>
            </main>
            <footer>
                <section className='container mx-auto'>
                    <Newsletter></Newsletter>
                </section>
                <section className='container mx-auto'>
                    <FooterNav></FooterNav>
                </section>
            </footer>
        </div>
    );
};

export default Main;