import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/Probider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [haveUser, setHaveUser] = useState(false);
    const navigate = useNavigate()
    const handleAddedUser = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Account created Successfully")
                setHaveUser(true)
                e.target.reset()
                navigate('/login')

            })
            .catch(error => {
                console.log(error);
                setHaveUser(false)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sing Up!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleAddedUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
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
                            <p className={haveUser ? '' : 'text-red-500'}>{haveUser ? '' : 'Already have an account please login'}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Have an account? <Link to={'/login'}><span className='font-bold text-blue-600'>Login</span></Link></p>
                            <Toaster></Toaster>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;