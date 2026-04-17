import './App.css'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import logo3 from './assets/white logo.png'
import Services from './Components/Services'
import { useEffect, useState } from 'react'
import Blogs from './Components/Blogs'
import Careers from './Components/Careers'


function App() {
  // const navigate = useNavigate();
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTopBar(false); // hide top bar
      } else {
        setShowTopBar(true); // show top bar
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>

      {/* Fixed Navbar — transparent so hero image shows through */}
      <div className={`w-full z-50 ${showTopBar ? "absolute top-0" : "fixed -top-16 "}`}>

        {/* Top Bar */}
        <div
          className={`transition-all duration-300 ${showTopBar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
            } flex justify-between items-center px-12 py-4 text-[13px] text-gray-300 max-w-7xl mx-auto mt-3`}
        >
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-2 text-gray-300 font-semibold text-[15px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              +1-800-555-44-00
            </span>
            <span className="flex items-center gap-2 text-gray-300 font-semibold text-[15px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@example.com
            </span>
          </div>
          <div className="flex gap-2 items-center text-white font-semibold text-[15px]">
            {["About Us", "Career", "Faqs", "Contact Us"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-2">
                <a href="#" className="hover:text-green-400 transition-colors">{item}</a>
                {i < arr.length - 1 && <span className="text-gray-500">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Main Navbar */}
        <div className="    bg-gradient-to-r from-black/80 via-black/60 to-green-700/80 flex justify-between items-center pl-12 p-10 pr-0 h-16 max-w-7xl mx-auto  ">
          <div className="flex items-center gap-3 text-white font-bold text-xl">
            <img src={logo3} alt="Logo" className="h-18 w-30" />
            {/* Trinity Consultancy */}
          </div>
          <nav className="flex items-center h-16">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Blog", path: "/blog" },
              { name: "Careers", path: "/careers" },
              // { name: "Shop", path: "/shop" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-5 h-full text-[16px] font-semibold transition-colors hover:text-green-300 ${isActive ? "text-green-400" : "text-white"
                  }`
                }
              >
                {item.name}
                {/* <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                </svg> */}
              </NavLink>
            ))}
          </nav>
          <NavLink
            to="/contactus"
            className="hover:bg-green-700 transition-colors text-white h-16 px-6 text-[14px] font-semibold flex items-center gap-3 ml-6 whitespace-nowrap leading-snug"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M8 10h8M8 14h5" />
            </svg>
            <span>Book a<br />Consultation</span>
          </NavLink>
        </div>

      </div>

      {/* Page Content — no padding top, hero goes behind navbar */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App