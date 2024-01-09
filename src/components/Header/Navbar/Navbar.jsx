import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Probider/AuthProvider";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // const [cartItems, setCarItems] = useState([])
    const [navBg, setNavBg] = useState(false)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .then(error => {
                console.error(error)
            })
    }
    console.log(user);


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
                Car Brand
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
    const navLink2 = <>
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
                    <p className="text-base font-semibold">Car Brand</p>
                </NavLink>
            </li>
            {user && (
                <li>
                    <NavLink
                        to="/addCar"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                    ? " border-b border-transparent text-blue-700 underline hover:border-indigo-500"
                                    : ""
                        }
                    >
                        <p className="text-base font-semibold">Add Car</p>
                    </NavLink>
                </li>
            )}
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
                    to="/addCart"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
                    }
                >
                    <p className="text-base font-semibold">Add cart</p>

                </NavLink>
            </li>

            {
                user && (
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
                )
            }


        </ul>
    </>
    return (
        <div className="navbar  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm bg-white dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {navLink2}

                    </ul>
                </div>
                <img className="w-44" src='../logo-dark.png' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                {navLink2}
            </div>
            <div className="navbar-end">
                {/* <button onClick={() => addToCart(car)}>Add to Cart</button> */}
                {user ? (
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src={user.photoURL} alt="User Avatar" />
                        </div>
                        <p className="text-lg ml-2">{user.displayName}</p>
                        <button
                            className="btn btn-sm ml-2"
                            onClick={handleLogOut}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-sm">Login</button>
                    </Link>
                )}
            </div>
            {/* <Cart cartItems={cartItems} /> */}
        </div >
    );
};

export default Navbar;