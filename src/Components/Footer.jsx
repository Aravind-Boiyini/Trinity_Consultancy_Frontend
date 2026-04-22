import React from "react";
import Logo2 from "../assets/white logo.png";
import { Mail, MapPin, Phone } from "lucide-react";

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
              <p className="mt-3 text-sm">Home</p>
              <p className="mt-2 text-sm">About Us</p>
              <p className="mt-2 text-sm">Services</p>
              <p className="mt-2 text-sm">Portfolios</p>
              <p className="mt-2 text-sm">Careers</p>
              <p className="mt-2 text-sm">Blog</p>
              <p className="mt-2 text-sm">Contact Us</p>
            </div>

            {/* SERVICES */}
            <div>
              <h1 className="font-bold text-green-500">Services</h1>
              <p className="mt-3 text-sm">IT Consulting</p>
              <p className="mt-2 text-sm">Product Engineering</p>
              <p className="mt-2 text-sm">Database Management</p>
              <p className="mt-2 text-sm">Mobile Management</p>
              <p className="mt-2 text-sm">IT Data Engineering</p>
              <p className="mt-2 text-sm">Software Support</p>
              <p className="mt-2 text-sm">Digital Marketing</p>
            </div>

            {/* CONTACT */}
            <div>
              <h1 className="font-bold text-green-500">Contact Us</h1>

              <p className="mt-3 flex gap-2 text-sm leading-relaxed">
                <MapPin size={16} />
                HIG-68, near HDFC Bank,<br />
                KPHB 5th Phase, Kukatpally,<br />
                Hyderabad, Telangana 500072, India
              </p>

              <p className="mt-3 flex items-center gap-2 text-sm">
                <Mail size={16} />
                info@trinityconsultancy.com
              </p>

              <p className="mt-2 flex items-center gap-2 text-sm">
                <Phone size={16} />
                +1 (123) 456-7890
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
              <span>980-890-1234</span>
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