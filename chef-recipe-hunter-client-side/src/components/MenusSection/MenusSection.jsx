import React from 'react';
import dinnerImg from '../../assets/icons/utensils-solid.svg';
import brunchImg from '../../assets/icons/newspaper-regular.svg'
import veganImg from '../../assets/icons/leaf-solid.svg'

const MenusSection = () => {
    return (
        <div
            className='container mx-auto grid grid-cols-1 md:grid-cols-2 py-24'
            style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1514228742587-6b1558fcca3d)',
                backgroundRepeat: 'none',
                backgroundSize: 'cover',
                objectPosition: 'left center'
            }}
        >
            <div className=''>

            </div>
            <div className='mx-[5%] lg:mx-[15%]'>
                <div className='mb-8'>
                    <h1 className='text-5xl font-semibold mb-8'>Menus</h1>
                    <p className='text-gray-500'>Browse our traditional menus or let us create
                        something new for you</p>
                </div>
                <div>
                    <div className='flex gap-8 justify-center items-center pb-6'>
                        <div className='rounded-[50%] hover:bg-[#b49ebf] flex justify-center items-center'>
                            <img
                                className='h-14 w-full object-fill object-center rounded-[50%]'
                                src={dinnerImg} alt="Dinner"
                                loading='lazy'
                            />
                        </div>
                        <div
                            className='grow'
                        >
                            <h4 className='font-bold hover:text-[#b49ebf] transition-colors'>
                                <a href="">Dinner Menu</a>
                            </h4>
                            <p className='text-gray-500'>
                                Our menu features time honored favorites that have come to define the perfect Park City dining experience.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-8 justify-center items-center pb-6'>
                        <div className='rounded-[50%] hover:bg-[#b49ebf] flex justify-center items-center'>
                            <img
                                className='h-14 w-full object-fill object-center rounded-[50%]'
                                src={brunchImg} alt="Dinner"
                                loading='lazy'
                            />
                        </div>
                        <div
                            className='grow'
                        >
                            <h4 className='font-bold hover:text-[#b49ebf] transition-colors'>
                                <a href="">Brunch Menu</a>
                            </h4>
                            <p className='text-gray-500'>
                                Savor the stuffed French toast with warm syrup or delight in a classic eggs benedict with rich hollandaise.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-8 justify-center items-center'>
                        <div className='rounded-[50%] hover:bg-[#b49ebf] flex justify-center items-center'>
                            <img
                                className='h-14 w-full object-fill object-center rounded-[50%]'
                                src={veganImg} alt="Dinner "
                                loading='lazy'
                            />
                        </div>
                        <div
                            className='grow'
                        >
                            <h4 className='font-bold hover:text-[#b49ebf] transition-colors'>
                                <a href="">Vegan & Gluten Free Menu</a>
                            </h4>
                            <p className='text-gray-500'>
                                100% vegan, vegetarian & gluten free cuisine from our kitchen to your table.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenusSection;