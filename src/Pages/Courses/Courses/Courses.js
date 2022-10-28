import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseItem from '../CourseItem/CourseItem';

const Courses = () => {
const courses = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-20 my-10'>
            {
                courses.map(course => <CourseItem 
                    key={course.id} 
                    course={course}
                    />)
            }
        </div>
    );
};

export default Courses;