/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div>
            <div  className="md:flex md:mt-40 ">
                <div data-aos="fade-right" className="flex-1 md:p-[80px] space-y-6">
                    <h3 className="text-3xl font-bold mb-2">FREQUENTLY ASKED QUESTIONS</h3>
                    <h1 className="text-5xl font-bold mb-2">Here Our Most Question</h1>
                    <p className="space-y-4">Nam in massa feugiat, varius est ut, molestie purus. Maecenas non turpis in nibh tincidunt posuere. Mauris ligula nunc, pulvinar sit amet tempor a, mattis in libero. Aenean non lectus auctor, aliquet neque a, vestibulum enim. Integer in dui leo. Phasellus sit amet laoreet ex.</p>
                </div>
                <div data-aos="fade-left" className="flex-1 ">
                    <div  className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            How often Should I Have My Car Professionally Detailed ?
                        </div>
                        <div className="collapse-content">
                            <p>The frequency of professional car detailing depends on various factors such as your driving habits, weather conditions, and personal preference. As a general guideline, it is recommended to have your car detailed at least once or twice a year to maintain its appearance and protect its value.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can Car Detailing Remove Scratches From My Vehicle's Paint ?
                        </div>
                        <div className="collapse-content">
                            <p>While car detailing can significantly improve the appearance of your vehicle's paint, it may not completely remove deep scratches. However, professional paint correction techniques used during detailing can diminish the visibility of minor scratches and swirl marks, restoring the paint's shine and smoothness.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            How Long Does It Take To Detail A Car ?
                        </div>
                        <div className="collapse-content">
                            <p>The time required for car detailing can vary depending on the size and condition of the vehicle, as well as the specific detailing services requested. On average, a thorough car detailing can take anywhere from a few hours to a full day. It's best to check with the detailing service provider for a more accurate estimate based on your vehicle's needs.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            What Types Of Car Repair Services Do You Offer ?
                        </div>
                        <div className="collapse-content">
                            <p>Our car repair services cover a wide range of mechanical and electrical issues. We provide diagnostics and repairs for engines, brakes, suspension systems, electrical systems, and more. Whether it's routine maintenance, troubleshooting a specific problem, or major repairs, our skilled technicians are equipped to handle various car repair needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;