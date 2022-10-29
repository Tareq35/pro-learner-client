import { Dropdown } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseItem from '../CourseItem/CourseItem';

const Courses = () => {
const courses = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl text-center mt-10 mb-3 font-bold'>Our Courses</h1>
            <hr className='w-1/2 mx-auto mb-20' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-20 my-10'>
            {
                courses.map(course => <CourseItem 
                    key={course.id} 
                    course={course}
                    />)
            }
        </div>
        </div>
    );
};

export default Courses;