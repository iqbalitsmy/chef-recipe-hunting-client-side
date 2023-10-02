import React from 'react';

const FooterNav = () => {
    return (
        <div className='py-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='text-center'>
                    <h3 className='text-gray-300 text-2xl uppercase tracking-wider pb-8'
                    >
                        Menu
                    </h3>
                    <ul className='text-gray-400'>
                        <li><a className='hover:text-[#f4d699]' href="">Private Chef</a></li>
                        <li><a className='hover:text-[#f4d699]' href="">Catering</a></li>
                        <li><a className='hover:text-[#f4d699]' href="">Menu</a></li>
                        <li><a className='hover:text-[#f4d699]' href="">About</a></li>
                    </ul>
                </div>
                <div className='text-center'>
                    <h3 className='text-gray-300 text-2xl uppercase tracking-wider pb-8'
                    >
                        CATERING
                    </h3>
                    <ul className='text-gray-400'>
                        <li><a className='hover:text-[#f4d699]' href="">Corporate Events</a></li>
                        <li><a className='hover:text-[#f4d699]' href="">Weddings And Galas</a></li>
                        <li><a className='hover:text-[#f4d699]' href="">Special Events</a></li>
                        <li><a className='hover:text-[#f4d699]' href="">Cooking Classes</a></li>
                    </ul>
                </div>
                <div className='text-center'>
                    <h3 className='text-gray-300 text-2xl uppercase tracking-wider pb-8'
                    >
                        CONTACTS
                    </h3>
                    <ul className='text-gray-400'>
                        <li><a className='hover:text-[#f4d699]' href="">1122 Potter Rd, Antelope</a></li>
                        <li><a className='hover:text-[#f4d699]' href="">info@example.com</a></li>
                        <li><a className='hover:text-[#f4d699]' href="">188XXXXXX</a></li>
                    </ul>
                </div>
                <div className='text-center'>
                    <h3 className='text-gray-300 text-2xl uppercase tracking-wider pb-8'
                    >
                        SOCIAL
                    </h3>
                    <ul className='text-gray-400'>
                        <li><a
                            className='hover:text-[#f4d699]'
                            href=""
                        >
                            Facebook
                        </a></li>
                        <li><a
                            className='hover:text-[#f4d699]'
                            href=""
                        >
                            Instagram
                        </a></li>
                        <li><a
                            className='hover:text-[#f4d699]'
                            href="https://twitter.com/iqbal_itsmy"
                            target='_blank'
                        >Twitter
                        </a></li>
                        <li><a
                            className='hover:text-[#f4d699]'
                            href="https://www.linkedin.com/in/iqbalitsmy/"
                            target='_blank'
                        >
                            linkedin
                        </a></li>
                    </ul>
                </div>
            </div>
            <div className='pt-16'>
                <div>
                    <hr />
                </div>
                <div className='text-center pt-16'>
                    <p><a
                        className='text-gray-300 hover:text-[#f4d699]'
                        href="https://www.linkedin.com/in/iqbalitsmy/"
                        target='_blank'
                    >
                        @iqbalitsmy
                    </a>
                        <span className='text-gray-400'>© 2023. All Rights Reserved.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterNav;