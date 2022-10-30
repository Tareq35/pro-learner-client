import { Avatar, Button, Dropdown, Navbar, ToggleSwitch, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/cover.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const [toggleChange, setToggleChange] = useState(false);

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

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