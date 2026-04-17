import React from "react";
import Logo2 from '../assets/white logo.png'; 
import { Mail, MapPin, Phone } from "lucide-react";

function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className="bg-gray-800 text-white py-10 mt-5">
                <div className="max-w-7xl mx-auto px-4 md:px-10">
                    <div className="flex gap-20 flex-col md:flex-row justify-between mt-10 mb-10">
                        <div>
                            <img src={Logo2} alt="Footer Logo" className="h-30 w-60" />
                        </div>
                        <div>
                            <h1 className="font-bold text-green-600">Quick links</h1>
                            <p className="mt-3 text-sm font-semibold">Home</p>
                            <p className="mt-2 text-sm font-semibold">About Us</p>
                            <p className="mt-2 text-sm font-semibold">Services</p>
                            <p className="mt-2 text-sm font-semibold">Portfolis</p>
                            <p className="mt-2 text-sm font-semibold">Careers</p>
                            <p className="mt-2 text-sm font-semibold">Blog</p>
                            <p className="mt-2 text-sm font-semibold">Contact Us</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-green-600">Services</h1>
                            <p className="mt-3 text-sm font-semibold">IT Consulting</p>
                            <p className="mt-2 text-sm font-semibold">Product Engineering</p>
                            <p className="mt-2 text-sm font-semibold">Database Management</p>
                            <p className="mt-2 text-sm font-semibold">Mobile Management</p>
                            <p className="mt-2 text-sm font-semibold">IT Data Engineering</p>
                            <p className="mt-2 text-sm font-semibold">Software Support</p>
                            <p className="mt-2 text-sm font-semibold">Digital Marketing</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-green-600">Contact Us</h1>

                            <p className="mt-3 flex  justify-content gap-1"><MapPin size={15} />HIG-68, near HDFC Bank,<br /> KPHB 5th Phase, Kukatpally,Hyderabad,<br /> Telangana 500072, India</p>

                            <p className="mt-2 flex  items-center justify-content gap-2"><Mail size={15} /> info@trinityconsultancy.com</p>
                            <p className="mt-2 flex items-center justify-content gap-2"><Phone size={15} /> +1 (123) 456-7890</p>
                        </div>
                    </div>

                </div>

            </footer>
            <div className="flex text-white text-sm">

                {/* Left - Phone */}
                <div className="bg-green-600 w-1/2 px-6 py-3">
                    <div className="flex items-center justify-start ml-40">
                        <Phone size={16} className="mr-2" />
                        <span>980-890-1234</span>
                    </div>
                </div>

                {/* Right - Email */}
                <div className="bg-blue-900 w-1/2  px-6 py-3">
                    <div className="flex items-center justify-end mr-40">
                        <Mail size={16} className="mr-2" />
                        <span>info@trinityconsultancy.com</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;