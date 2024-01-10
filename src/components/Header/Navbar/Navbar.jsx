import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Probider/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // const [cartItems, setCarItems] = useState([])
    const [navBg, setNavBg] = useState(false)
    let { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/') {
            setNavBg(false)

        }
        else {
            setNavBg(true)
        }
    }, [pathname]);

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 80) {
            setNavBg(true)
        }
        else {
            if (pathname === '/') {
                return setNavBg(false)
            }
            setNavBg(true)
        }
    })

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


    // const navLink = <>
    //     <li>
    //         <NavLink
    //             to="/"
    //             className={({ isActive, isPending }) =>
    //                 isPending ? "pending" : isActive ? "active" : ""
    //             }
    //         >
    //             Home
    //         </NavLink>
    //     </li>
    //     <li>
    //         <NavLink
    //             to="/car"
    //             className={({ isActive, isPending }) =>
    //                 isPending ? "pending" : isActive ? "active" : ""
    //             }
    //         >
    //             Car Brand
    //         </NavLink>
    //     </li>
    //     <li>
    //         <NavLink
    //             to="/product"
    //             className={({ isActive, isPending }) =>
    //                 isPending ? "pending" : isActive ? "border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
    //             }
    //         >
    //             Product
    //         </NavLink>
    //     </li>
    //     <li>
    //         <NavLink
    //             to="/contact"
    //             className={({ isActive, isPending }) =>
    //                 isPending ? "pending" : isActive ? "active" : ""
    //             }
    //         >
    //             Contact
    //         </NavLink>
    //     </li>

    // </>
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
            {/* {user && (
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
            )} */}



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
            <li>
                <NavLink
                    to="/addCart"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
                    }
                >
                    <p className="text-base font-semibold">Cart</p>

                </NavLink>
            </li>


        </ul>
    </>
    return (
        <div className={navBg ? "sticky top-0 z-10 flex navbar bg-gray-500 text-white rounded" : "sticky flex top-0 navbar z-10"}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm bg-black text-white dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {navLink2}

                    </ul>
                </div>
                <img className="w-16 md:w-44" src='../logo-dark.png' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                {navLink2}
            </div>
            <div className="navbar-end">

                {user ? (
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src={user.photoURL} alt="User Avatar" />
                        </div>
                        <p className="text-lg ml-2">{user.displayName}</p>
                        <button onClick={handleLogOut} className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 ">
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Log out</span>
                        </button>
                    </div>
                ) : (

                    <Link to="/login">
                        <button className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 ">
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Login</span>
                        </button>
                    </Link>
                )}
            </div>
        </div >
    );
};

export default Navbar;