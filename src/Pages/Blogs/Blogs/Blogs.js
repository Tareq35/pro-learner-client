import { Card } from 'flowbite-react';
import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10 w-fit mx-20'>
            <h2 className='text-4xl text-center mb-5 font-bold'>Blogs</h2>
            <hr className='mx-auto mb-20' />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <Card href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        what is cors?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <strong>Cross-Origin Resource Sharing</strong> (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </p>
                </Card>
                <Card href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Why are you using firebase? What other options do you have to implement authentication?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        I am using firebase because, The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                        <strong> Some other options to implement authentication are </strong> Auth0, MongoDB, Passport, Okta, etc.
                    </p>
                </Card>
                <Card href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        How does the private route work?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </p>
                </Card>
                <Card href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        What is Node? How does Node work?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default Blogs;