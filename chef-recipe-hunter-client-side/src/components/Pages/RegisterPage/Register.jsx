import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <section className='container mx-auto grid justify-center pt-8 pb-20'>
            <form className='text-gray-400 text-center'>
                <div className='mb-16 flex'>
                    <h1 className='text-gray-200 text-5xl font-extrabold'>
                        We Can’t Wait to Get You Started
                    </h1>
                </div>
                <div className='flex flex-col md:flex-row gap-8 w-full'>
                    <div className="mb-10 w-full">
                        <input
                            type="text"
                            id="first-name"
                            className="register-in text-base w-full py-4 bg-transparent transition-all"
                            placeholder="First Name*" required
                        />
                    </div>
                    <div className="mb-10 w-full">
                        <input
                            type="text"
                            id="last-name"
                            className="register-in text-base w-full py-4 bg-transparent transition-all"
                            placeholder="Last Name*" required
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8 w-full'>
                    <div className="mb-10 w-full">
                        <input
                            type="email"
                            id="email"
                            className="register-in text-base w-full py-4 bg-transparent transition-all"
                            placeholder="E-mail*" required
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8 w-full'>
                    <div className="mb-10 w-full">
                        <input
                            type="password"
                            id="password"
                            className="register-in text-base w-full py-4 bg-transparent transition-all"
                            placeholder="Password*" required
                        />
                    </div>
                    <div className="mb-10 w-full">
                        <input
                            type="password"
                            id="confirm-password"
                            className="register-in text-base w-full py-4 bg-transparent transition-all"
                            placeholder="Confirm Password*" required
                        />
                    </div>
                </div>
                <div className="flex items-start mb-10">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-[rgba(255, 255, 255, 0.2)]"
                            required
                        />
                    </div>
                    <label htmlFor="" className="ml-2 text-sm font-medium">I have read and agreed the Terms, Conditions and Privacy Policy.</label>
                </div>
                <div className='mb-4'>
                    <button
                        className='py-2 px-11 text-lg font-medium tracking-widest uppercase text-white bg-gray-800 hover:bg-gray-900 border-[1px] border-[#f4d699] rounded-md'
                        type="button"
                    >
                        Sign Up
                    </button>
                </div>
                <div className='mb-6'>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium">Already Have an Account? <Link className='text-blue-600' to='/login'>Login</Link></label>
                </div>
                <div className='mb-4 flex justify-center items-center gap-4'>
                    <hr className='w-full opacity-70' />
                    <p>Or</p>
                    <hr className='w-full opacity-70' />
                </div>
                <div className='flex flex-col gap-8 w-fit mx-auto'>
                    <button
                        className='py-2 px-11 text-lg font-medium tracking-widest uppercase text-white bg-gray-800 hover:bg-gray-900 border-[1px] border-[#f4d699] rounded-md'
                        type="button"
                    >
                        Sign Up with Google
                    </button>
                    <button
                        className='py-2 px-11 text-lg font-medium tracking-widest uppercase text-white bg-gray-800 hover:bg-gray-900 border-[1px] border-[#f4d699] rounded-md'
                        type="button"
                    >
                        Sign Up with Github
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Register;