import logo from "../../assets/About-Banner.jpg";
import img1 from "../../assets/About-Banner.jpg";
import img2 from "../../assets/About-Banner.jpg";
import teamoflogo from "../../assets/IT-Image.jpg";
import teamoflogo1 from "../../assets/Product-Image.jpg";
import { Mail, Trophy } from "lucide-react";
import { MailCheck , Check} from "lucide-react";
import { MoveUpRight } from "lucide-react";
import contactlogo from "../../assets/About-Banner.jpg";
import {Code, BarChart3, ShieldCheck, UserCheck, Settings, } from "lucide-react";
import React, { useState } from "react";


const features = [
    {
      icon: <Code size={32} />,
      title: "Responsive & User Friendly Services",
      desc: "All our IT consulting are friendly and user friendly. Easy navigation and fast services.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Search Engine Optimized",
      desc: "Every IT Consulting & Product Engineering for you is Data Management and as a result will help you higher levels.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Highly Secured",
      desc: "Secured and reliable Data Management is one of the few things we hold high at Web Gen World. With us you are fully secured.",
    },
    {
      icon: <UserCheck size={32} />,
      title: "Professional Services",
      desc: "Our best services are delivered in a professional and efficient manner, with you at heart.",
    },
    {
      icon: <Settings size={32} />,
      title: "Top Rated Support",
      desc: "For every service we offer, you are sure of quality technical support and customer service.",
    },
  ];

function ProductEngineering() {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby41cpL4OpuFxZaIoLHUCxu5l93xOQ8FAqGvqrV6aBAYGzXCp4CjtkSHUA54CetpGOW/exec"; // 👈 your /exec link
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
  
        // ✅ clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
  
        alert("Message sent successfully!");
  
      } catch (error) {
        console.error(error);
        alert("Error submitting form");
      }
    };
  return (
    <div>

      {/* Banner */}
      <div className="relative w-full">
        <img
          src={logo}
          alt="Home Banner"
          className="md:w-full md:h-full w-full h-100 object-cover"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-white md:text-6xl text-3xl font-extrabold">
          Product <span className="text-blue-500 ml-3">Engineering</span>
        </h1>
      </div>

      {/* Section 1 */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src={img1}
              alt="consulting"
              className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div>
            

            <p className="mt-5 text-gray-600 text-[15px] leading-relaxed">
              At Trinity TX Consulting, our Product Engineering services are designed to transform ideas into innovative, scalable, and market-ready solutions. We combine cutting-edge technology, agile methodologies, and strategic planning to deliver products that not only meet your business goals but also exceed customer expectations.</p>


            


          </div>
        </div>
      </section>

   <section className="relative bg-[#0B1F3A] text-white py-16 px-6 overflow-hidden">
      
      {/* Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-40 h-40 border-4 border-blue-500 rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500 rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-extrabold mb-6">
            Our <span className="text-blue-500">Approach:</span>
          </h2>

          {/* ITEM */}
          <div className="mb-6">
            <div className="flex items-center gap-3 font-bold text-lg">
              <span className="bg-blue-500 p-1 rounded">
                <Check size={16} />
              </span>
              Ideation & Conceptualization
            </div>
            <p className="text-gray-200 mt-2 text-sm leading-relaxed">
              We start by collaborating with you to understand your vision, target audience,
              and business goals. Our team conducts in-depth market research and feasibility
              studies to shape a clear product roadmap.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 font-bold text-lg">
              <span className="bg-blue-500 p-1 rounded">
                <Check size={16} />
              </span>
              Design & Development
            </div>
            <p className="text-gray-200 mt-2 text-sm leading-relaxed">
              Our skilled engineers and designers use the latest technologies to create
              intuitive user experiences and robust architectures.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 font-bold text-lg">
              <span className="bg-blue-500 p-1 rounded">
                <Check size={16} />
              </span>
              Testing & Quality Assurance
            </div>
            <p className="text-gray-200 mt-2 text-sm leading-relaxed">
              We implement rigorous testing processes to ensure your product is bug-free,
              reliable, and optimized for seamless functionality.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 font-bold text-lg">
              <span className="bg-blue-500 p-1 rounded">
                <Check size={16} />
              </span>
              Deployment & Support
            </div>
            <p className="text-gray-200 mt-2 text-sm leading-relaxed">
              From product launch to post-deployment support, we provide continuous monitoring,
              updates, and enhancements to keep your product competitive.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-3xl font-extrabold mb-6">
            Why Choose <span className="text-blue-500">Trinity TX Consulting?</span>
          </h2>

          <ul className="space-y-4 text-gray-200 text-sm leading-relaxed">
            <li className="flex gap-3">
              <span>•</span>
              End-to-End Product Development – From concept to launch, we handle every stage of the product lifecycle.
            </li>
            <li className="flex gap-3">
              <span>•</span>
              Agile & Scalable Solutions – Our flexible development processes adapt to your evolving business needs.
            </li>
            <li className="flex gap-3">
              <span>•</span>
              Innovation-Driven Approach – We leverage the latest technologies to build products that stand out.
            </li>
          </ul>
        </div>

      </div>
    </section>
    <section className="bg-gray-100 py-16 px-6">
      
      {/* Heading */}
      <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-12">
        Experience. <span className="text-blue-500">Execute.</span> Excellence.
      </h2>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition duration-300"
          >
            {/* Icon Circle */}
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-blue-500 text-white mb-6">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
      {/* ✅ Contact Section (separate, NOT inside above section) */}
      {/* <section>
      <div className="relative w-full mt-20">

        <img
          src={contactlogo}
          alt="Contact Banner"
          className="w-full h-[600px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">

          <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
            Contact <span className="text-green-400">Us</span>
          </h1>

          <div className="p-6 rounded-xl w-full max-w-3xl">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input className="px-4 py-3 rounded-full bg-white" placeholder="Full Name" />
              <input className="px-4 py-3 rounded-full bg-white" placeholder="Email Address" />
              <input className="px-4 py-3 rounded-full bg-white" placeholder="Phone Number" />
              <input className="px-4 py-3 rounded-full bg-white" placeholder="Subject" />

              <textarea
                placeholder="Your Message"
                className="col-span-2 px-4 py-3 rounded-xl bg-white h-32"
              />

            </div>

            <div className="mt-6 text-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-full">
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>
        </section> */}
        <section>
              <div className="relative w-full mt-20">
        
                <img
                  src={contactlogo}
                  alt="Contact Banner"
                  className="w-full h-[600px] object-cover"
                />
        
                <div className="absolute inset-0 bg-black/50"></div>
        
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        
                  <h1 className="text-white text-4xl md:text-5xl font-bold mb-8 md:mt-0 mt-10">
                    Contact <span className="text-blue-400">Us</span>
                  </h1>
        
                  {/* ✅ FORM START */}
                  <form onSubmit={handleSubmit} className="p-6 rounded-xl w-full max-w-3xl">
        
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full block px-4 py-3 rounded-full bg-white"
                        placeholder="Full Name"
                        required
                      />
        
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full block px-4 py-3 rounded-full bg-white"
                        placeholder="Email Address"
                        required
                      />
        
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full block px-4 py-3 rounded-full bg-white"
                        placeholder="Phone Number"
                        required
                      />
        
                      <input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full block px-4 py-3 rounded-full bg-white"
                        placeholder="Subject"
                        required
                      />
        
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full md:col-span-2 px-4 py-3 rounded-xl bg-white h-32"
                        required
                      />
        
                    </div>
        
                    <div className="mt-6 text-center">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-8 py-3 rounded-full"
                      >
                        Submit
                      </button>
                    </div>
        
                  </form>
                  {/* ✅ FORM END */}
        
                </div>
              </div>
            </section>
    </div>
  );
}

export default ProductEngineering;