import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/bg/home-bg.jpg'

const Home = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${bg})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }} className='md:h-[60vh]'>

                <div className='text-center pt-32 w-1/2 mx-auto'>
                    <h1 className='text-4xl font-bold'>Welcome To <span className='text-blue-500'>Pro</span> Learner</h1>

                    <h2 className='text-2xl py-3'>The best learning platform like you've never experienced before</h2>
                    <p className='text-black text-lg'>
                        Empower yourself with world-class courses from educators and institutions in a practical and social learning environment.Expert-led courses across a variety of online class topics for every step of your career.
                    </p>

                </div>
                <div className='flex justify-center mt-10'>
                    <Link to='/courses'>
                        <Button>
                            Visit Courses
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Home;