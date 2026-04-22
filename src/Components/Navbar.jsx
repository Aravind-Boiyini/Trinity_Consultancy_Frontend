import React from "react";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/white logo.png";

function Navbar() {
  return (
    <div>

      {/* 🔹 TOP BAR (FULL WIDTH) */}
      <div className="w-full flex text-white text-sm">

        <div className="w-1/2 bg-blue-500 py-2 flex justify-center items-center gap-2">
          <Phone size={14} />
          <span>(682) 392-9824</span>
        </div>

        <div className="w-1/2 bg-blue-900 py-2 flex justify-center items-center gap-2">
          <Mail size={14} />
          <span>info@guneshedge.com</span>
        </div>

      </div>

      {/* 🔹 NAVBAR */}
      <header className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <img src={logo} alt="Logo" className="h-12 w-auto" />

        {/* MENU */}
        <nav className="flex items-center gap-8 text-gray-700 font-medium">

          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/about" className="hover:text-orange-500">About Us</Link>

          {/* 🔹 SERVICES DROPDOWN */}
          <div className="relative group">

            <button className="hover:text-orange-500">
              Services
            </button>

            {/* Hover bridge (prevents flicker) */}
            <div className="absolute top-full left-0 w-full h-2"></div>

            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block z-50">
              <ul className="w-72 bg-blue-900 text-white shadow-lg rounded-md py-4">

                <li>
                  <Link to="/it-consulting" className="block px-6 py-2 hover:bg-blue-800 text-orange-400">
                    IT Consulting
                  </Link>
                </li>

                <li>
                  <Link to="/product-engineering" className="block px-6 py-2 hover:bg-blue-800">
                    Product Engineering
                  </Link>
                </li>

                <li>
                  <Link to="/database-management" className="block px-6 py-2 hover:bg-blue-800">
                    Database Management
                  </Link>
                </li>

                <li>
                  <Link to="/mobile-development" className="block px-6 py-2 hover:bg-blue-800">
                    Mobile Development
                  </Link>
                </li>

                <li>
                  <Link to="/data-engineering" className="block px-6 py-2 hover:bg-blue-800">
                    IT Data Engineering
                  </Link>
                </li>

                <li>
                  <Link to="/software-support" className="block px-6 py-2 hover:bg-blue-800">
                    Software Support
                  </Link>
                </li>

                <li>
                  <Link to="/web-development" className="block px-6 py-2 hover:bg-blue-800">
                    Web Development
                  </Link>
                </li>

                <li>
                  <Link to="/digital-marketing" className="block px-6 py-2 hover:bg-blue-800">
                    Digital Marketing
                  </Link>
                </li>

              </ul>
            </div>

          </div>

          <Link to="/portfolio" className="hover:text-orange-500">Portfolios</Link>
          <Link to="/careers" className="hover:text-orange-500">Careers</Link>
          <Link to="/blog" className="hover:text-orange-500">Blog</Link>
          <Link to="/contactus" className="hover:text-orange-500">Contact Us</Link>

        </nav>
      </header>

    </div>
  );
}

export default Navbar;