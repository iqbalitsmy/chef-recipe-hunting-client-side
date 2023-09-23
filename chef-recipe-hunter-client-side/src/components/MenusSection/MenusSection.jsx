import React from 'react';
import dinner from '../../assets/icons/utensils-solid.svg';

const MenusSection = () => {
    return (
        <div
            className='flex '
            style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1514228742587-6b1558fcca3d)',
                backgroundRepeat: 'none',
                backgroundSize: 'cover',
                objectPosition: 'left center'
            }}
        >
            <div className=''>
                <div>
                    <h1>Menus</h1>
                    <p>Browse our traditional menus or let us create
                        something new for you</p>
                </div>
                <div>
                    <div>
                        <div>
                            <div className='border-2 border-[#b49ebf] rounded-full text-center p-5'>
                                <img 
                                className='h-8'
                                 src={dinner} alt="Dinner " />
                            </div>
                        </div>
                        <div>
                            <h4>Dinner Menu</h4>
                            <p>
                                Our menu features time honored favorites that have come to define the perfect Park City dining experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenusSection;