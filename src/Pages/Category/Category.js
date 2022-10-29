import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseItem from '../Courses/CourseItem/CourseItem';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Category = () => {
    const courseCategory = useLoaderData();
    console.log(courseCategory);

    return (
        <div className='flex justify-center mx-20'>
            <LeftSideNav></LeftSideNav>
            <div>
                <h1 className='text-4xl text-center mt-10 mb-3 font-bold'>This Category has {courseCategory.length} Courses</h1>
                <hr className='w-1/2 mx-auto mb-20' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-20 my-10'>
                    {
                        courseCategory.map(course => <CourseItem
                            key={course.id}
                            course={course}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;