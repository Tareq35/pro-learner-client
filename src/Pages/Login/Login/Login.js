import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { providerLogin, signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const notify = (message) => toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const from = location.state?.from?.pathname || '/';



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                // setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                notify(error.message);
            });
    }



    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch(error => console.error(error));
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='w-1/2 mx-auto my-20'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                        Haven't Register Yet? <Link className='text-blue-600' to='/register'>Register</Link>
                    </Label>
                </div>
                <Button name='login' type="submit">
                    Login
                </Button>
                <p className='text-center'>Or</p>
                <Button onClick={handleGoogleSignIn} >
                    Login with Google
                </Button>
                <Button onClick={handleGithubSignIn} >
                    Login with Github
                </Button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default Login;