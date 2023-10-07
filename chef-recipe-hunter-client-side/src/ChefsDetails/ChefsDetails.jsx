import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const ChefsDetails = () => {
    const { id } = useParams();
    const chefDetails = useLoaderData();
    const { recipes, profile, name, yearsOfExperience, numberOfRecipes, likes, bio } = chefDetails;

    return (
        <div className='bg-[#f2ece0] py-10 flex justify-center items-center flex-col'>
            <div className="h-full md:w-1/3">
                <figure className="px-10 h-72 w-full">
                    <img
                        src={profile}
                        alt="Profile"
                        className="rounded-xl h-full w-full object-contain"
                    />
                </figure>
                <div className="py-4">
                    <h2 className="text-2xl font-bold text-center mb-4">{name}</h2>
                    <div className='text-center grid gap-4 mb-8'>
                        <p className='font-extralight'>{bio}</p>
                        <p className='font-semibold'>{yearsOfExperience} Years Experience</p>
                        <div className='flex justify-evenly font-semibold'>
                            <p>{numberOfRecipes} Recipes</p>
                            <p className='text-red-600'>{likes} Likes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full px-8 flex flex-col gap-8'>
                {
                    recipes.map((recipe, i) => {
                        return (
                            <div
                                key={i}
                                className="shadow-lg grid grid-cols-5 justify-center items-center gap-8 hover:scale-105 transition-all ease-in-out bg-[#e6dcc8] rounded-md p-8"
                            >
                                {
                                    console.log(recipe?.name)
                                }
                                <figure className=''>
                                    <img
                                        className='w-full h-full object-contain'
                                        src={recipe?.link}
                                        alt="Movie"
                                    />
                                </figure>
                                <div className='text-2xl font-extrabold flex text-center items-center'>
                                    <h1>{recipes[i]?.name}</h1>
                                </div>
                                <div className='font-medium'>
                                    <h2 className='text-xl font-bold mb-4'>Ingredients</h2>
                                    <ul>
                                        {recipes[i]?.ingredients.map((ingredient, j) => <li key={j} className='mb-1' >{ingredient}</li>)}
                                    </ul>
                                </div>
                                <div className='font-medium'>
                                    <h2 className='text-xl font-bold mb-4'>Cooking Method</h2>
                                    <ol>
                                        {recipes[i]?.cookingMethod.map((method, k) => <li key={k} className='mb-1' >{method}</li>)}
                                    </ol>
                                </div>
                                <div className='h-full flex flex-col justify-around items-end'>
                                    <div className='mb-8'>
                                        <button type="button">
                                            <FontAwesomeIcon
                                                icon={faBookmark}
                                                style={{ fontSize: 30 }}
                                            />
                                        </button>
                                    </div>
                                    <div>
                                        <ul className="flex justify-center">
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="mr-1 h-5 w-5 text-warning">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd" />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="mr-1 h-5 w-5 text-warning">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd" />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="mr-1 h-5 w-5 text-warning">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd" />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="mr-1 h-5 w-5 text-warning">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="mr-1 h-5 w-5 text-warning">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};


export default ChefsDetails;