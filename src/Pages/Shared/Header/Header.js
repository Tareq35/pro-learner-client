import { Avatar, Button, Dropdown, Navbar, ToggleSwitch } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/cover.png'

const Header = () => {
    const [toggleChange, setToggleChange] = useState(false);
    return (
        <Navbar
            className='shadow-md'
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9 rounded-full"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Pro Learner
                </span>
            </Navbar.Brand>
            <div className="flex items-center md:order-2 gap-3">
                <div id="toggle">
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
                </div>

                <Link to='/login'><Button color="gray">
                    Login
                </Button></Link>
                <Link to='/register'><Button color="gray">
                    Register
                </Button></Link>

                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Logout
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link
                    to="/"
                >
                    Home
                </Link>
                <Link to="/courses">
                    Courses
                </Link>
                <Link to="/blogs">
                    Blogs
                </Link>
                <Link to="/faq">
                    FAQ
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;