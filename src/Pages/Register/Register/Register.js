import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { providerLogin, createUser, updateUserProfile, notify } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.url.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                // const user = result.user;
                // console.log(user);
                // setError('');
                form.reset();
                notify('Registration Successful', 'success')
                handleUpdateUserProfile(name, photoURL);
                navigate('/login', { replace: true });
                // window.location.reload()
            })
            .catch(e => {
                console.error(e)
                notify(e.message, 'error');
            });
    }



    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                // const user = result.user;
                // console.log(user);
                notify('Google Registration Successful', 'success')
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                // const user = result.user;
                // console.log(user);
                notify('Github Registration Successful', 'success')
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='w-1/2 mx-auto my-20'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                <p className='text-center'>Or</p>
                <Button onClick={handleGoogleSignIn} >
                    Registration with Google
                </Button>
                <Button onClick={handleGithubSignIn} >
                    Registration with Github
                </Button>
            </form>
        </div>
    );
};

export default Register;