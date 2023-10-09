import React from 'react';

const PageNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full max-h-screen pt-20'>
            <figure className='h-32'>
                <img
                    className='h-full w-full'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNToOr1gzggzbMm-J17NiI-bxevemeERP902DzpJXC4Rwggnud5CTj8m_Bdn52Zjii6Tk&usqp=CAU"
                    alt=""
                    loading='lazy'
                />
            </figure>
            <h1 className='text-5xl font-extrabold'>404 Page is not found!</h1>
        </div>
    );
};

export default PageNotFound;