import React from 'react';
import logo from '../../assets/logo/chef hunter-logos_transparent.png'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='flex justify-between container mx-auto text-[#757475] uppercase text-xl'>
            <div className='flex justify-between items-center gap-2'>
                <Link className='hover:text-[#f2ecda]' to='/home'>Home</Link>
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
                <Link to='/login' className='hover:text-[#f2ecda]'>
                    <button type="button">Login</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;