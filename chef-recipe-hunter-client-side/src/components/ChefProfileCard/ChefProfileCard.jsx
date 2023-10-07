import React from 'react';
import { Link } from 'react-router-dom';

const ChefProfileCard = ({ chef }) => {
    const { id, profile, name, yearsOfExperience, numberOfRecipes, likes } = chef;

    return (
        <div className="shadow-xl">
            <figure className="px-10 pt-10 h-72 w-full">
                <img
                    src={profile}
                    alt="Profile"
                    className="rounded-xl h-full w-full object-contain"
                />
            </figure>
            <div className="my-4">
                <h2 className="text-xl font-semibold text-center mb-4">{name}</h2>
                <div className='flex justify-around font-semibold mb-8'>
                    <p>{yearsOfExperience} Years Experience</p>
                    <p>{numberOfRecipes} Recipes</p>
                    <p className='text-red-600'>{likes} Likes</p>
                </div>
                <div className="text-center mb-8">
                    <Link
                        className='py-2 px-4 text-[#b49ebf] hover:text-white font-semibold uppercase hover:bg-[#b49ebf] border-2 border-[#b49ebf] rounded'
                        to={`/chefs/${id}`}
                    >
                        View Recipes
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChefProfileCard;