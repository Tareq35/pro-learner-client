import { Avatar, Button, Dropdown, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/cover.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const [toggleTooltip, setToggleTooltip] = useState(localStorage.getItem('color-theme') === 'dark' ?
        'Toggle light mode'
        : 'Toggle dark mode');

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);


    useEffect(() => {
        var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        // Change the icons inside the button based on previous settings
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
        }

        var themeToggleBtn = document.getElementById('theme-toggle');

        themeToggleBtn.addEventListener('click', function () {

            // toggle icons inside button
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                    setToggleTooltip('Toggle light mode');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                    setToggleTooltip('Toggle dark mode');
                }

                // if NOT set via local storage previously
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                    setToggleTooltip('Toggle dark mode');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                    setToggleTooltip('Toggle light mode');
                }
            }

        });
    }, [])


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar
            className='shadow-md'
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand>
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9 rounded-full"
                    alt=""
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    <span className='text-blue-600'>Pro</span> Learner
                </span>
            </Navbar.Brand>
            <div className="flex items-center md:order-2 gap-3">
                {/* <div id="toggle">
                    <ToggleSwitch
                        checked={toggleChange}
                        label={
                            toggleChange ?
                                "Light"
                                :
                                "Dark"
                        }
                        onChange={(e) => setToggleChange(e)}

                    />
                </div> */}
                <Tooltip
                    content={toggleTooltip}
                    placement="bottom"
                >
                    <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                        <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </button>
                </Tooltip>


                {
                    !user?.displayName ?
                        <>
                            <Link to='/login'><Button color="gray">
                                Login
                            </Button></Link>
                            <Link to='/register'><Button color="gray">
                                Register
                            </Button></Link>
                        </> :

                        <Tooltip
                            content={user.displayName}
                            placement="bottom"
                        >
                            <Dropdown
                                arrowIcon={false}
                                inline={true}
                                label={<Avatar alt="User settings" img={user.photoURL} rounded={true} />}
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        {user.displayName}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        {user.email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item onClick={handleLogOut}>
                                    Logout
                                </Dropdown.Item>
                            </Dropdown>
                        </Tooltip>}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                    to="/"
                >
                    Home
                </Link>
                <Link className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to="/courses">
                    Courses
                </Link>
                <Link className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to="/blogs">
                    Blogs
                </Link>
                <Link className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to="/faq">
                    FAQ
                </Link>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;