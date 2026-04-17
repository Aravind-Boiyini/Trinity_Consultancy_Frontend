import React from "react";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/white logo.png'; // replace with your logo path

function Navbar() {
    return (
        <div className="">
            <header max-w-7xl mx-auto >

                {/* Top Bar */}
                <div className="flex text-white text-sm">

                    {/* Left - Phone */}
                    <div className="bg-blue-500 w-1/2 px-6 py-3">
                        <div className="flex items-center justify-start ml-40">
                            <Phone size={16} className="mr-2" />
                            <span>980-890-1234</span>
                        </div>
                    </div>

                    {/* Right - Email */}
                    <div className="bg-blue-900 w-1/2  px-6 py-3">
                        <div className="flex items-center justify-end mr-40">
                            <Mail size={16} className="mr-2" />
                            <span>info@guneshedge.com</span>
                        </div>
                    </div>

                </div>

                {/* Navbar */}
                <div className="flex items-center justify-between px-10  max-w-7xl mx-auto ">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            src={logo}// replace with your logo path
                            alt="Logo"
                            className="h-50 w-30 "
                        />
                    </div>

                    {/* Menu */}
                    <nav className="flex items-center gap-10 text-gray-700 font-medium">
                        <Link to="/" className="hover:text-orange-500">Home</Link>
                        <Link to="/about" className="hover:text-orange-500">About Us</Link>
                        <Link to="#" className="hover:text-orange-500">Our Services</Link>
                        <Link to="#" className="hover:text-orange-500">Portfolios</Link>
                        <Link to="#" className="hover:text-orange-500">Careers</Link>
                        <Link to="#" className="hover:text-orange-500">Blog</Link>
                        <Link to="/contactus" className="hover:text-orange-500">Contact Us</Link>
                    </nav>

                </div>

            </header>

        </div>
    );
}

export default Navbar;