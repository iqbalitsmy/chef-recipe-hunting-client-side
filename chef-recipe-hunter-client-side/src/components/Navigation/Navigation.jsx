import React from 'react';
import logo from '../../assets/logo/chef hunter-logos_transparent.png'

const Navigation = () => {
    return (
        <nav className='flex container mx-auto'>
            <div className='flex gap-2'>
                <a className='' href="/">Home</a>
                <a href="/">Menu</a>
                <a href="/">Services</a>
            </div>
            <div className=''>
                <a className='' href="/">
                    <img className='h-1/3 w-auto' src={logo} alt="" />
                </a>
            </div>
            <div>
                <a href="">Private Chef</a>
                <a href="">Features</a>
                <a href="">Contact Us</a>
            </div>
        </nav>
    );
};

export default Navigation;