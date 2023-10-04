import React from 'react';
import { Outlet } from 'react-router-dom';
import Newsletter from '../components/Newsletter/Newsletter';
import FooterNav from '../components/FooterNav/FooterNav';
import Navigation from '../components/Navigation/Navigation';
import ConsultingSection from '../components/ConsultingSection/ConsultingSection';

const LoginLayout = () => {
    return (
        <div className='bg-[#000000]'>
            <header>
                <Navigation></Navigation>
            </header>
            <main className='container mx-auto'>
                <section className=''>
                    <Outlet></Outlet>
                </section>
                <section className='pb-28'>
                    <ConsultingSection></ConsultingSection>
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

export default LoginLayout;