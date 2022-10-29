import { Sidebar } from 'flowbite-react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://pro-learner-server.vercel.app/courses-category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className='mt-44 sticky top-44'>
            <div className="w-fit shadow-md border rounded-md">
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            {
                                categories.map(category => <Link
                                    key={category.id}
                                    to={`/courses-category/${category.id}`}
                                >
                                    <p className='rounded-lg p-3 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>


                                        {category.name}

                                    </p>
                                </Link>)
                            }
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>

        
    );
};

export default LeftSideNav;