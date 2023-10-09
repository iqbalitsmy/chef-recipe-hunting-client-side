import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const ToastMessage = () => {
    // console.log(mes, showToast)
    // const [isVisible, setIsVisible] = useState(showToast);
    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false)
        }, 8000)
    }

    return (
        <div className='h-full flex flex-col justify-around items-end'>
            <div className="flex items-center justify-center">
                <button
                    type="button"
                    className="font-bold rounded"
                    onClick={() => handleShowToast()}
                >
                    <FontAwesomeIcon
                        icon={faBookmark}
                        style={{ fontSize: 30 }}
                    />
                </button>
                {
                    showToast && (
                        <div
                            className={`fixed top-0 right-0 m-4 p-4 bg-green-500 text-white rounded-lg shadow-md transition-transform transform duration-300 ease-in-out`}
                        >
                            This is a custom toast message.
                            <button
                                className="ml-4 text-white font-bold uppercase"
                                onClick={() => setShowToast(false)}
                            >
                                Close
                            </button>
                        </div>
                    )
                }
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


        // <div
        //     className={`${isVisible ? 'block' : 'hidden'
        //         } fixed top-0 right-0 m-4 p-4 bg-green-500 text-white rounded-lg shadow-md transition-transform transform duration-300 ease-in-out`}
        // >
        //     {mes}
        //     <button
        //         className="ml-4 text-white font-bold uppercase"
        //         onClick={() => setIsVisible(false)}
        //     >
        //         Close
        //     </button>
        // </div>
    );
};

export default ToastMessage;