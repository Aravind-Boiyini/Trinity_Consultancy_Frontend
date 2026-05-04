
import { Routes, Route, NavLink, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import logo3 from './assets/white logo.png'
import Services from './Components/Services'
import Blogs from './Components/Blogs'
import Careers from './Components/Careers'
import ItConsultancy from './Components/OurServices/ItConsultancy'
import ProductEngineering from './Components/OurServices/ProductEngineering'
import DatabaseManagement from './Components/OurServices/DatabaseManagement'
import MobileDevelopment from './Components/OurServices/MobileDevelopment'
import ItDataEngineering from './Components/OurServices/ItDataEngineering'
import SoftwareSupport from './Components/OurServices/SoftwareSupport'
import WebDevelopment from './Components/OurServices/WebDevelopment'
import CyberSecurity from './Components/OurServices/CyberSecurity'
import NetworkSecurity from './Components/OurServices/NetworkSecurity'
import ScrollToTop from './Components/Services/ScrollToTop'
import { CircleUserRound, Cog, Handshake, House, Lightbulb, Menu, MonitorCloud, PersonStanding, UserRound, UsersRound, X } from 'lucide-react'




function App() {
  // const navigate = useNavigate();
  const [showTopBar, setShowTopBar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [openService, setOpenService] = useState(false);

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

      <ScrollToTop />

      {/* Fixed Navbar — transparent so hero image shows through */}
      <div className={`w-full z-50 ${showTopBar ? "absolute top-0" : "fixed -top-16 "}`}>

        {/* Top Bar */}
        <div
          className={`transition-all duration-300 ${showTopBar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
            } flex justify-between items-center px-12 py-4 text-[13px] text-gray-300 max-w-7xl mx-auto mt-3`}
        >
          <div className="flex justify-between sm:justify-start sm:gap-6 w-full items-center">
            <span className="whitespace-nowrap flex items-center gap-2 text-gray-300 font-semibold text-[12px] md:text-[15px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              (682) 392-9824
            </span>
            <span className="whitespace-nowrap flex items-center gap-2 text-gray-300 font-semibold text-[12px] md:text-[15px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hr@trinitytxconsulting.com
            </span>
          </div>

        </div>

        {/* Main Navbar */}
        <div className="    bg-gradient-to-r from-black/80 via-black/60 to-pink-600/80 flex justify-between items-center md:pl-12 pl-3 p-10 pr-0 h-16 max-w-7xl mx-auto  ">
          {/* <div className="flex items-center gap-3 text-white font-bold text-xl">
            <img src={logo3} alt="Logo" className="h-18 w-30" />
         
          </div> */}
          <div className="flex items-center gap-3 text-white font-bold text-xl">
            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
            <Link to="/">
              <img src={logo3} alt="Logo" className=" h-18 w-30 cursor-pointer" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center h-16">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              {
                name: "Our Services",
                path: "/services",
                isDropdown: true,
                subMenu: [
                  { name: "IT Consultancy", path: "/ItConsultancy" },
                  { name: "Product Engineering", path: "/ProductEngineering" },
                  { name: "Database Management", path: "/DatabaseManagement" },
                  { name: "Mobile Development", path: "/MobileDevelopment" },
                  { name: "IT Data Engineering", path: "/ItDataEngineering" },
                  { name: "Software Support", path: "/SoftwareSupport" },
                  { name: "Web Development", path: "/WebDevelopment" },
                  { name: "Cyber Security", path: "/CyberSecurity" },
                  { name: "Network Security", path: "/NetworkSecurity" },
                ]
              },
              { name: "Blog", path: "/blog" },
              { name: "Careers", path: "/careers" },
            ].map((item) => (
              item.isDropdown ? (
                /* 🔹 DROPDOWN WRAPPER */
                <div key={item.name} className="relative group h-full">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-5 h-full text-[16px] font-semibold transition-colors hover:text-pink-300 ${isActive ? "text-pink-600" : "text-white"
                      }`
                    }
                  >
                    {item.name}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </NavLink>

                  {/* 🔹 DROPDOWN MENU - Matching your specific image style */}
                  <div className="absolute left-0 top-full hidden group-hover:block z-50">
                    {/* Transparent bridge to prevent closing on hover move */}
                    <div className="h-0 w-full" />
                    <ul className="w-72 bg-[#0A335C] text-white shadow-2xl py-2">
                      {item.subMenu.map((sub) => (
                        <li key={sub.path}>
                          <NavLink
                            to={sub.path}
                            onClick={() => setOpenDropdown(null)}  // ✅ CLOSE HERE
                            className="block px-6 py-4 text-[15px] font-semibold hover:bg-white/10 transition-all border-b border-white/5 last:border-0"
                          >
                            {sub.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                /* 🔹 REGULAR LINK */
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-5 h-full text-[16px] font-semibold transition-colors hover:text-pink-300 ${isActive ? "text-pink-600" : "text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            ))}
          </nav>
          <NavLink
            to="/contactus"
            className="hover:bg-pink-700 transition-colors text-white h-16 px-6 text-[14px] font-semibold flex items-center gap-3 ml-6 whitespace-nowrap leading-snug"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M8 10h8M8 14h5" />
            </svg>
            <span>Book a<br />Consultation</span>
          </NavLink>

          {/* MOBILE SIDEBAR */}
          {/* {isOpen && (
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsOpen(false)}
            />
          )} */}
          <div
            className={`fixed top-0 left-0 h-full w-[280px] bg-black text-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <Link to="/">
                <img src={logo3} alt="Logo" className=" h-16 w-26 cursor-pointer" />
              </Link>
              <button onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col p-4 space-y-4">
              <NavLink to="/" onClick={() => setIsOpen(false)} className="flex gap-3 items-center"><House size={20} />Home</NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)} className="flex gap-3 items-center"><UsersRound size={20} />About Us</NavLink>
              {/* <NavLink to="/services" onClick={() => setIsOpen(false)} className="flex gap-3 items-center"><Cog size={20} />Our Services</NavLink> */}
              <div>
                {/* CLICKABLE HEADER */}
                <div
                  onClick={() => setOpenService(!openService)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <div className="flex gap-3 items-center">

                    <NavLink to="/services" onClick={() => setIsOpen(false)} className="flex gap-3 items-center"> <MonitorCloud size={18} />Our Services</NavLink>

                  </div>

                  {/* ARROW */}
                  <svg
                    className={`transition-transform ${openService ? "rotate-180" : ""}`}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>

                {/* DROPDOWN ITEMS */}
                {openService && (
                  <div className="ml-8 mt-2 flex flex-col gap-2">
                    {[
                      { name: "IT Consultancy", path: "/ItConsultancy" },
                      { name: "Product Engineering", path: "/ProductEngineering" },
                      { name: "Database Management", path: "/DatabaseManagement" },
                      { name: "Mobile Development", path: "/MobileDevelopment" },
                      { name: "IT Data Engineering", path: "/ItDataEngineering" },
                      { name: "Software Support", path: "/SoftwareSupport" },
                      { name: "Web Development", path: "/WebDevelopment" },
                      { name: "Cyber Security", path: "/CyberSecurity" },
                      { name: "Network Security", path: "/NetworkSecurity" },
                    ].map((sub) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-gray-300"
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
              <NavLink to="/blog" onClick={() => setIsOpen(false)} className="flex gap-3 items-center"><Lightbulb size={20} />Blog</NavLink>
              <NavLink to="/careers" onClick={() => setIsOpen(false)} className="flex gap-3 items-center"><PersonStanding size={20} />Careers</NavLink>
              <NavLink to="/contactus" onClick={() => setIsOpen(false)} className="flex gap-3 items-center">
                <UserRound size={20} />Book a Consultation
              </NavLink>
            </div>
          </div>
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
          <Route path="/ItConsultancy" element={<ItConsultancy />} />
          <Route path="/ProductEngineering" element={<ProductEngineering />} />
          <Route path="/DatabaseManagement" element={<DatabaseManagement />} />
          <Route path="/MobileDevelopment" element={<MobileDevelopment />} />
          <Route path="/ItDataEngineering" element={<ItDataEngineering />} />
          <Route path="/SoftwareSupport" element={<SoftwareSupport />} />
          <Route path="/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/NetworkSecurity" element={<NetworkSecurity />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App