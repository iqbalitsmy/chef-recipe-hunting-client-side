import React, { useContext, useState } from 'react';
import logo from '../../assets/logo/chef hunter-logos_transparent.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext);
    const [nameShow, setNameShow] = useState(false);

    const handleLogout = () => {
        logOut()
            .then(() => {

            }).catch(err => {
                console.log(err.message)
            })
    }

    return (
        <nav className='flex justify-between container mx-auto text-[#757475] uppercase text-xl'>
            <div className='flex justify-between items-center gap-2 md:gap-10'>

                {/* Active Home Link */}
                <NavLink
                    to='/home'
                    className={({ isActive }) => isActive ? "text-[#f2ecda]" : "hover:text-[#f2ecda]"}
                >
                    Home
                </NavLink>

                {/* Active Services Link */}
                <a
                    href='#services'
                >
                    Services
                </a>
            </div>
            <div className='w-auto'>
                <a className='' href="/">
                    <img className='h-36 w-auto' src={logo} alt="" />
                </a>
            </div>
            <div className='flex justify-between items-center gap-2 md:gap-10'>
                {/* Contact us */}
                <NavLink
                    to='/contact'
                    className={({ isActive }) => isActive ? "text-[#f2ecda]" : "hover:text-[#f2ecda]"}
                >
                    Contact Us
                </NavLink>
                {/* Blogs */}
                <NavLink
                    to='/blogs'
                    className={({ isActive }) => isActive ? "text-[#f2ecda]" : "hover:text-[#f2ecda]"}
                >
                    Blogs
                </NavLink>
                {
                    !user ?
                        // Login Active link
                        <NavLink
                            to='/login'
                            className={({ isActive }) => isActive ? "text-[#f2ecda]" : "hover:text-[#f2ecda]"}
                        >
                            Login
                        </NavLink>
                        :
                        <Link
                            to='/'
                            className='hover:text-[#f2ecda]'
                        >
                            <button
                                type="button"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </Link>
                }
                {
                    user && (
                        // Profile Image
                        <figure
                            className='h-12 w-12'
                            onMouseOver={() => setNameShow(true)}
                            onMouseLeave={() => setNameShow(false)}
                        >
                            <img
                                className='h-full w-full rounded-full'
                                src={user?.photoURL}
                                alt="No Image"
                            />
                            <p
                                className={`text-base font-normal text-[#f2ecda] ${nameShow ? 'block' : 'hidden'}`}
                            >
                                {user?.displayName}
                            </p>
                        </figure>
                    )
                }

            </div>
        </nav >
    );
};

export default Navigation;