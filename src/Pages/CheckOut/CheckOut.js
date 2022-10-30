import { Button, Card } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { notify } = useContext(AuthContext);

    const navigate = useNavigate();
    // const location = useLocation();

    const course = useLoaderData();
    const { title, price } = course;

    // const from = location.state?.from?.pathname || '/';

    return (
        <div className='max-w-md px-3 mx-auto mt-20 mb-96 pb-24'>
            <Card>
                <div className='flex justify-between items-center'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="font-medium text-gray-700 dark:text-gray-400">
                        Price: ${price}
                    </p>
                    <div className='flex gap-2'>
                        <Button onClick={() => {
                            notify('Your Premium Access Confirmed', 'success')
                            navigate('/', { replace: true })
                        }}>
                            Confirm
                        </Button>
                        <Button onClick={() => {
                            notify('Your Premium Access Cancelled', 'error');
                            navigate('/courses', { replace: true })

                        }}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Card>

        </div>
    );
};

export default CheckOut;