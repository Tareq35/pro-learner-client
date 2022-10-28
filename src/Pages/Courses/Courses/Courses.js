import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseItem from '../CourseItem/CourseItem';

const Courses = () => {
const courses = useLoaderData();
    return (
        <div>
            {
                courses.map(course => <CourseItem key={course.id}></CourseItem>)
            }
        </div>
    );
};

export default Courses;