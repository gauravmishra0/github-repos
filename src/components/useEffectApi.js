import React, { useEffect, useState } from "react";

let url = "https://api.github.com/users";
let uname = "gauravmishra0";
const useEffectApi = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(`${url}/${uname}`);
        setUsers(await response.json());
    };
    useEffect(() => {
        getUsers();
    }, []);
    
    return (
        <>
            <div className='flex items-center max-w-xl mx-auto pt-10'>
                <input
                    type='text'
                    placeholder='Github username'
                    className='w-full text-lg px-4 py-4 rounded-md rounded-r-none outline-none bg-gray-200'
                />
                <div className='flex space-x-1'>
                    <button className='bg-indigo-300 hover:bg-indigo-500 transition duration-100 text-xl py-4 px-8 rounded-md rounded-l-none text-white font-semibold'>
                        Go
                    </button>
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-5 '>
                <div key={users.id}>
                    <div className='flex p-5 mt-8 space-x-4 items-center shadow-xl max-w-l rounded-md bg-gray-600'>
                        <img
                            src={users.avatar_url}
                            alt='avatar'
                            className='h-20 w-20 rounded-full'
                        />
                        <div>
                            <h2 className='text-white font-semibold text-xl'>
                                {users.name}
                            </h2>
                            <div className='flex justify-between gap-x-10 text-white'>
                                <div className='flex flex-col'>
                                    <span>Repos</span>
                                    <span>{users.public_repos}</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span>Followers</span>
                                    <span>{users.followers}</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span>Following</span>
                                    <span>{users.following}</span>
                                </div>
                            </div>
                            <a
                                href={users.html_url}
                                rel="noreferrer"
                                target="_blank"
                                className='mt-1 text-black text-sm cursor-pointer'>
                                Visit Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default useEffectApi;
