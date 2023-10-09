import React, { useEffect, useState } from 'react';
import ChefProfileCard from '../ChefProfileCard/ChefProfileCard';

const ChefProfileContainer = () => {
    const [chefs, setChef] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const res = await fetch("http://localhost:3000/chefs");
                const res = await fetch("https://chef-recipe-hunting-server-side-iqbalitsmy.vercel.app/chefs");
                const data = await res.json();
                setChef(data);
            } catch (error) {
                console.log("Error:", error.message);
            }
        }
        fetchData();
    }, [])

    return (
        <div className='px-6  pb-28 grid grid-cols-3 justify-center gap-4'>
            {
                chefs.map((chef, i) => {
                    return (<ChefProfileCard key={i} chef={chef}></ChefProfileCard>)
                })
            }
        </div>
    );
};

export default ChefProfileContainer;