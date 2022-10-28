import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-1/2 mx-auto my-20'>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="fullName"
                            value="Your full name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="name"
                        name='name'
                        placeholder="enter your name"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="url"
                            value="Your photo url"
                        />
                    </div>
                    <TextInput
                        id="url"
                        type="url"
                        name='url'
                        placeholder="enter your photo url"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        name='email'
                        placeholder="name@gmail.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        name='password'
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Label htmlFor="remember">
                        Already Registered? <Link className='text-blue-600' to='/login'>Login</Link>
                    </Label>
                </div>
                <Button type="submit">
                    Register
                </Button>
            </form>
        </div>
    );
};

export default Register;