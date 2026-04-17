import React from "react";
import logo from '../assets/About-banner.jpg';
import { Mail, MailCheck } from "lucide-react";


function ContactUs() {
    return (
        <div>
            <div className="relative w-full">

                <img
                    src={logo}
                    alt="Home Banner"
                    className="w-full h-full object-cover"
                />

                {/* Overlay Text */}
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-extrabold">
                    Contact <span className="text-green-500"> Us</span>
                </h1>
            </div>

            <h2 className="text-[40px] font-black text-center text-blue-900 leading-[1.2] mt-10">
                Get In {" "}
                <span className="text-green-500"> Touch </span>
            </h2>

            <div className="flex gap-6 mt-6 px-10 justify-center max-w-5xl mx-auto">
                <div className="border border-gray-200 w-full bg-white rounded-xl shadow-lg p-6 mt-10 flex flex-col items-center text-center gap-4">
                    <div className="border border-black p-6 rounded-full flex items-center justify-center">
                        <Mail size={28} className="text-green-600" />
                    </div>
                    <h1 className="font-bold text-[18px]">Address</h1>
                    <p className="text-gray-600 text-[14px] font-semibold leading-relaxed">
                        HIG-68, near HDFC Bank, KPHB 5th Phase, Kukatpally, Hyderabad, Telangana 500072, India
                    </p>

                </div>
                <div className="border border-gray-200 w-full bg-white rounded-xl shadow-lg p-6 mt-10 flex flex-col items-center text-center gap-4">
                    <div className="border border-black p-6 rounded-full flex items-center justify-center">
                        <Mail size={28} className="text-green-600" />
                    </div>
                    <h1 className="font-bold text-[18px]">Phone</h1>
                    <p className="text-gray-600 text-[14px] font-semibold leading-relaxed">
                        980-890-1234
                    </p>

                </div>
                <div className="border border-gray-200 w-full bg-white rounded-xl shadow-lg p-6 mt-10 flex flex-col items-center text-center gap-4">
                    <div className="border border-black p-6 rounded-full flex items-center justify-center">
                        <MailCheck size={28} className="text-green-600" />
                    </div>
                    <h1 className="font-bold text-[18px]">Email</h1>
                    <p className="text-gray-600 text-[14px] font-semibold leading-relaxed">
                        info@trinityconsultancy.com
                    </p>

                </div>
            </div>

            <h2 className="text-[40px] font-black text-center text-blue-900 leading-[1.2] mt-13">
                Enquiry {" "}
                <span className="text-green-500"> Form </span>
            </h2>

            <div className="flex flex-col items-center justify-center px-4 mt-7">


                <div className="p-6 rounded-xl w-full max-w-4xl">


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="px-4 py-3 rounded-full border border-gray-200 bg-white shadow outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="px-4 py-3 rounded-full border border-gray-200 bg-white shadow outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="px-4 py-3 rounded-full border border-gray-200 bg-white shadow outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="px-4 py-3 rounded-full border border-gray-200 bg-white shadow outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <textarea
                            placeholder="Your Message"
                            className="col-span-1 md:col-span-2 px-4 py-3 rounded-xl border border-gray-200 bg-white shadow outline-none focus:ring-2 focus:ring-green-500 resize-none h-32"
                        ></textarea>

                    </div>

                    {/* Button */}
                    <div className="mt-6 text-center">
                        <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContactUs;