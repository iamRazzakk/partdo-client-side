import { FaPhone } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import { CircleLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";



const Contact = () => {
    const [loading, setLoading] = useState(true);

    const contactUs = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const subject = e.target.subject.value;
        console.log(name, email, message, subject);
        // if (!isSubmit) {
        // toast.success('Thanks For contact us.')
        // setIsSubmit(true)
        // }

    }
    setTimeout(() => {
        setLoading(false);
    }, 500);
    return (
        <div>
            {
                loading ? (
                    <div className="flex items-center justify-center">
                        <CircleLoader
                            color="#000"
                            size={100}
                        />
                    </div>
                ) : (

                    <div className="font-jost">
                        <Helmet>
                            <title>
                                Partdo || Contact
                            </title>
                        </Helmet>
                        <div className="mt-4">
                            <img className="w-[95%] rounded-lg h-80 object-cover m-auto" src="https://cdn.create.vista.com/api/media/small/266368826/stock-photo-finishing-up-a-meeting-handshake-of-two-happy-business-people-a" alt="Contact img" />
                        </div>
                        <div className="flex items-center">
                            <div className="flex-1 p-4">
                                <h1 className="text-4xl text-center font-bold">Contact Details</h1>
                                <div className="ml-6 mt-6">
                                    <h3 className="text-xl">Client Support: </h3>
                                    <div className="flex items-center gap-2">
                                        <FaPhone></FaPhone>
                                        <h1>+8801878265664</h1>
                                    </div>
                                    <div className="divider text-black"></div>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-xl">E-mail:</h3>
                                    <div className="flex items-center gap-2">
                                        <IoIosMail></IoIosMail>
                                        <h1>mdabdurrazzakrakib290@gmail.com</h1>
                                    </div>
                                    <div className="divider text-black"></div>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-xl">Main Office:</h3>
                                    <div className="flex items-center gap-2">
                                        <MdLocationPin></MdLocationPin>
                                        <h1>77/B Opera House Hall, North Streeth, USA -12556.</h1>
                                    </div>
                                    <div className="divider text-black"></div>
                                </div>
                            </div>
                            <div className="flex-1 p-4">
                                <form className="flex-1 font-jost p-20 md:p-5">
                                    <p className="text-lg font-semibold">Name:</p>
                                    <input className="w-[80%] px-4 py-2 rounded-lg bg-gray-700 mb-3 text-white" type="text" name="user_name" id="" placeholder="Enter name" /> <br />
                                    <p className="text-lg font-semibold">Email address:</p>
                                    <input className="w-[80%] px-4 py-2 rounded-lg bg-gray-700 mb-3 text-white" type="text" name="user_email" id="" placeholder="Enter Email" /> <br />
                                    <p className="text-lg font-semibold">Message:</p>
                                    <textarea className="w-[80%] px-4 py-2 rounded-lg bg-gray-700 mb-3 text-white" type="text" name="message" id="" placeholder="Message" /><br />
                                    <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-700 group-hover:h-full"></span>
                                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                                        </span>
                                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                                        </span>
                                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Submit</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div >
                )
            }

        </div>
    );
};

export default Contact;