import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../components/Probider/AuthProvider';

const Login = () => {
    const { signInUser, singInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login successfully.");
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setError('Login failed. Please check your Email or Password.');
            });
    };

    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then((result) => {
                console.log(result.user);
                toast.success('Login successfully.');
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                setError('Login failed. Please check your Google Sign-In.');
            });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p>{error && <span className="text-red-500">{error}</span>}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center'>Or</p>
                            <p className="mx-auto text-2xl" onClick={handleGoogleSignIn}>
                                <FcGoogle />
                            </p>
                            <hr />
                            <p>If you are new here, please<Link to={'/Register'}>
                                <p className='text-blue-600 font-bold'> Register</p>
                            </Link></p>
                            <Toaster></Toaster>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
