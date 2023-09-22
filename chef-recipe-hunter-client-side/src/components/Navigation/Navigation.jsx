import React from 'react';
import logo from '../../assets/logo/chef hunter-logos_transparent.png'

const Navigation = () => {
    return (
        <nav className='flex justify-between container mx-auto text-[#757475] uppercase text-xl'>
            <div className='flex justify-between items-center gap-2'>
                <a className='hover:text-[#f2ecda]' href="/">Home</a>
                <a className='hover:text-[#f2ecda]' href="/">Menu</a>
                <a className='hover:text-[#f2ecda]' href="/">Services</a>
            </div>
            <div className='w-auto'>
                <a className='' href="/">
                    <img className='h-36 w-auto' src={logo} alt="" />
                </a>
            </div>
            <div className='flex justify-between items-center gap-2'> 
                <a className='hover:text-[#f2ecda]' href="">Private Chef</a>
                <a className='hover:text-[#f2ecda]' href="">Contact Us</a>
                <a className='hover:text-[#f2ecda]' href="">
                    <button type="button">Login</button>
                </a>
            </div>
        </nav>
    );
};

export default Navigation;