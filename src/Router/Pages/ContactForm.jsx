import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
    const [isSubmit, setIsSubmit] = useState(false)

    const contactUs = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const subject = e.target.subject.value;
        console.log(name, email, message, subject);
        if (!isSubmit) {
            toast.success('Thanks For contact us.')
            setIsSubmit(true)
        }

    }
    return (
        <div>
            <div className="lg:h-screen   lg:flex justify-center items-center mr-4 text-white">
                <div className="flex-1 lg:ml-6 rounded bg-blue-700 px-20 text-white px-">
                    <h1 className="text-5xl mt-12 mb-12 underline">Contact Information</h1>
                    <p className="mb-12">For inquiries and assistance, please contact us. We're here to help. Reach out today!</p>
                    <h1 className="text-xl mb-12"><b>Address:</b> 77/B Opera House Hall,
                        North Streeth, USA -12556.</h1>
                    <h1 className="text-xl mb-12">
                        <b>Phone:</b> +1 2022 3325 666
                        +1 2236 5226 111
                    </h1>

                    <h1 className="text-xl mb-12">
                        <b>E-mail:</b> Rakib@company.com
                        company@Rakib.info
                    </h1>

                </div>
                <div className="flex-1 ml-4">
                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <form onSubmit={contactUs} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" name="subject" placeholder="Subject" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <input type="text" name="message" placeholder="your message" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Send</button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default ContactForm;