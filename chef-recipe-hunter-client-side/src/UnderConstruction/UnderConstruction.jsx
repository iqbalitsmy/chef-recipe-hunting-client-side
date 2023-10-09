import React from 'react';

const UnderConstruction = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full max-h-screen pt-20'>
            
            <figure className='h-44'>
                <img
                    className='h-full w-full'
                    src="https://media.istockphoto.com/id/1266504988/vector/under-construction-website-page.jpg?s=612x612&w=0&k=20&c=rNz7dfcK12J-gmsxnpVVleqtMRluDsxcLmQWHJ9PWpw="
                    alt=""
                    loading='lazy'
                />
            </figure>
            <h1 className='text-5xl font-extrabold uppercase'>Under Construction</h1>
        </div>
    );
};

export default UnderConstruction;