import React from 'react';
import './SliderCard.css'

const SliderCard = ({ cart }) => {
    
    return (
        <div>
            <div className="slider-container">
                <div
                    style={{
                        background: `url(${cart.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                    className='slider-div'
                >
                    <div
                        className="text-[#f2ece0] text-center h-full w-full bg-black bg-opacity-40 p-4"
                    >
                        <h3 className='text-3xl font-semibold mt-2'>{cart.title}</h3>
                        <p className='text-lg mt-2'>{cart.description}</p>
                    </div>
                </div>
                <div
                    className='slider-div'
                    style={{
                        background: 'url(https://bdbusinessfinder.com/wp-content/uploads/2020/02/List-of-Catering-Service-in-Dhaka-Bangladesh.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                >
                    <div
                        className="text-[#f2ece0] text-center h-full w-full bg-black bg-opacity-40 p-4"
                    >
                        <h3 className='text-3xl font-semibold mt-2'>{cart.title}</h3>
                        <p className='text-lg mt-2'>{cart.description}</p>
                        <button className='py-3 px-9 mt-2 text-white text-2xl bg-[#a8a6a3] rounded-3xl' type="button">Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SliderCard;