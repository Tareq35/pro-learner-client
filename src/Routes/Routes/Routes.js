import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs/Blogs";
import Category from "../../Pages/Category/Category";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import Register from "../../Pages/Register/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://pro-learner-server.vercel.app/courses')
            },
            {
                path: '/courses-category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://pro-learner-server.vercel.app/courses-category/${params.id}`)
            },
            {
                path: '/coursesDetails/:id',
                element:
                    <CourseDetails></CourseDetails>
                ,
                loader: ({ params }) => fetch(`https://pro-learner-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute>
                    <CheckOut></CheckOut>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://pro-learner-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            },
        ]
    }
])