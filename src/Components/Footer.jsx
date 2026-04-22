import React from "react";
import Logo2 from "../assets/white logo.png";

import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";




function Footer() {
  return (
    <>
      {/* 🔹 MAIN FOOTER */}
      <footer className="bg-gray-800 text-white py-10 mt-5">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between gap-12">

            {/* LOGO */}
            <div>
              <img
                src={Logo2}
                alt="Footer Logo"
                className="h-20 w-60 object-contain"
              />
            </div>

            {/* QUICK LINKS */}
            <div>
              <h1 className="font-bold text-green-500">Quick Links</h1>
              <Link to="/" className="mt-3 text-sm block hover:text-green-300">Home</Link>
              <Link to="/about" className="mt-2 text-sm block hover:text-green-300">About Us</Link>
              <Link to="/services" className="mt-2 text-sm block hover:text-green-300">Services</Link>
              {/* <Link to="/portfolio" className="mt-2 text-sm block hover:text-green-300">Portfolios</Link> */}
              <Link to="/careers" className="mt-2 text-sm block hover:text-green-300">Careers</Link>
              <Link to="/blog" className="mt-2 text-sm block hover:text-green-300">Blog</Link>
              <Link to="/contactus" className="mt-2 text-sm block hover:text-green-300">Contact Us</Link>
            </div>

            {/* SERVICES */}
            <div>
              <h1 className="font-bold text-green-500">Services</h1>
              <Link to="/ItConsultancy" className="mt-3 text-sm block hover:text-green-300">IT Consulting</Link>
              <Link to="/ProductEngineering" className="mt-2 text-sm block hover:text-green-300">Product Engineering</Link>
              <Link to="/DatabaseManagement" className="mt-2 text-sm block hover:text-green-300">Database Management</Link>
              <Link to="/MobileDevelopment" className="mt-2 text-sm block hover:text-green-300">Mobile Development</Link>
              <Link to="/ItDataEngineering" className="mt-2 text-sm block hover:text-green-300">IT Data Engineering</Link>
              <Link to="/SoftwareSupport" className="mt-2 text-sm block hover:text-green-300">Software Support</Link>
              {/* <Link to="/digital-marketing" className="mt-2 text-sm block hover:text-green-300">Digital Marketing</Link> */}
            </div>

            {/* CONTACT */}
            <div>
              <h1 className="font-bold text-green-500">Contact Us</h1>

              <p className="mt-3 flex gap-2 text-sm leading-relaxed">
                <MapPin size={16} />
                 1416 Shady Hollow Ct,<br />
                 Keller,<br />
                 TX 76244
              </p>

              <p className="mt-3 flex items-center gap-2 text-sm">
                <Mail size={16} />
                info@trinityconsultancy.com
              </p>

              <p className="mt-2 flex items-center gap-2 text-sm">
                <Phone size={16} />
                (682) 392-9824
              </p>
            </div>

          </div>
        </div>
      </footer>

      {/* 🔹 ANGLED COLOR BAR */}
      <div className="w-full relative text-white text-sm overflow-hidden">

        {/* BLUE BASE */}
        <div className="bg-[#6ea8dc] py-2">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

            {/* LEFT - PHONE */}
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>(682) 392-9824</span>
            </div>

            {/* EMPTY SPACE (keeps alignment clean) */}
            <div></div>

          </div>
        </div>

        {/* PINK ANGLED SECTION */}
        <div
          className="absolute top-0 right-0 h-full w-[28%] bg-[#e91e63]"
          style={{
            clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-end">
            <Mail size={14} className="mr-2" />
            <span>info@trinityconsultancy.com</span>
          </div>
        </div>

      </div>
    </>
  );
}

export default Footer;