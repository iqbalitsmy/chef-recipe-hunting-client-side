import React, { useContext } from 'react';
import './Login.css'
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub, user } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                console.log(result.user)
            }).catch(err => {
                console.log(err.message)
            })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user)
            }).catch(err => {
                console.log(err.message)
            })
    }

    const handleSignInWithGithub = () => {
        signInWithGithub()
            .then((result) => {
                console.log(result.user)
            }).catch(err => {
                console.log(err.message)
            })
    }

    if (user) {
        return <Navigate to="/home"  replace/>;
    }

    return (
        <section className='container mx-auto grid justify-center pt-8 pb-20' >
            <form className='text-gray-400 text-center' onSubmit={handleLogin}>
                <div className='mb-16 flex'>
                    <h1 className='text-gray-200 text-5xl font-extrabold'>
                        We Can’t Wait to Get You Started
                    </h1>
                </div>
                <div className='flex flex-col md:flex-row justify-center gap-8 w-full'>
                    <div className="mb-10 w-3/4">
                        <input
                            type="email"
                            id="email"
                            className="login-in text-base w-full py-4 bg-transparent transition-all"
                            placeholder="E-mail*" required
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-center gap-8 w-full'>
                    <div className="mb-10 w-3/4">
                        <input
                            type="password"
                            id="password"
                            className="login-in text-base w-full py-4 bg-transparent transition-all"
                            placeholder="Password*" required
                        />
                    </div>
                </div>
                <div className='mb-4'>
                    <button
                        className='py-2 px-11 text-lg font-medium tracking-widest uppercase text-white bg-gray-800 hover:bg-gray-900 border-[1px] border-[#f4d699] rounded-md'
                        type="submit"
                    >
                        Login
                    </button>
                </div>
                <div className='mb-6'>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium">Don't have an account? <Link className='text-blue-600' to='/register'>Sign up</Link></label>
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
                        onClick={handleSignInWithGoogle}
                    >
                        Login with Google
                    </button>
                    <button
                        className='py-2 px-11 text-lg font-medium tracking-widest uppercase text-white bg-gray-800 hover:bg-gray-900 border-[1px] border-[#f4d699] rounded-md'
                        type="button"
                        onClick={handleSignInWithGithub}
                    >
                        Login with Github
                    </button>
                </div>
            </form>
        </section >
    );
};

export default Login;