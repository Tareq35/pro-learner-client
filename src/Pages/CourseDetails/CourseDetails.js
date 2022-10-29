import { Button } from 'flowbite-react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { title, description, img, price } = course;

    return (
        <div className='flex justify-center mt-20'>

            <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl lg:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto pl-4 md:w-80 md:rounded-none" src={img} alt="" />

                <div className="flex flex-col justify-between p-4 leading-normal">

                    <div className='flex justify-between items-center'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        <Button gradientMonochrome="info">
                            Download PDF
                        </Button>
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400 py-5">
                        {description}
                    </p>
                    <div className='flex justify-between items-center'>
                        <p>Price: ${price}</p>
                        <Button gradientMonochrome="info">
                            Get premium access
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;