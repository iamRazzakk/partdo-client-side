import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Probider/AuthProvider";
import auth from "../../Firebase";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .then(error => {
                console.error(error)
            })
    }

    const navLink = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/car"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Car
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/product"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
                }
            >
                Product
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Contact
            </NavLink>
        </li>

    </>
    return (
        <div className="navbar  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {navLink}

                    </ul>
                </div>
                <img className="w-44" src='../logo-dark.png' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
                            }
                        >
                            <p className="text-base font-semibold">Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/car"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
                            }
                        >
                            <p className="text-base font-semibold">Car</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/addCar"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
                            }
                        >
                            <p className="text-base font-semibold">Add Car</p>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/product"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
                            }
                        >
                            <p className="text-base font-semibold">Product</p>

                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
                            }
                        >
                            <p className="text-base font-semibold">Contact</p>
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        <span>{user.displayName}</span>
                        <button onClick={handleLogOut} className="btn btn-sm">Logout</button>
                    </>
                ) : (
                    
                    <Link to="/login">
                        <button className="btn btn-sm">Login</button>
                    </Link>
                )}
            </div>
        </div >
    );
};

export default Navbar;