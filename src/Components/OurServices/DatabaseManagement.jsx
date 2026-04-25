import logo from "../../assets/About-Banner.jpg";
import img1 from "../../assets/About-Banner.jpg";
import img2 from "../../assets/About-Banner.jpg";
import teamoflogo from "../../assets/IT-Image.jpg";
import teamoflogo1 from "../../assets/Product-Image.jpg";
import { Mail, Trophy } from "lucide-react";
import { MailCheck } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import contactlogo from "../../assets/About-Banner.jpg";
import img from "../../assets/Database-Image.jpg";
import { Code, BarChart3, ShieldCheck, UserCheck, Settings } from "lucide-react";
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

function DatabaseManagement() {
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
          className="w-full h-full object-cover"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-extrabold">
        Database <span className="text-green-500">Management</span>
        </h1>
      </div>
      <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src={img}
            alt="Database"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="text-gray-700 text-[16px] leading-relaxed space-y-6">

          <p>
            Developing new database systems can be a labor intensive process and requires
            a strong foundation of database concepts including normalization, integrity and
            optimization. Getting the balance between these factors is essential for
            minimizing problems, maximizing the value from time invested, and creating
            maintainable and extendable systems while providing effective and responsive
            support for application systems.
          </p>

          <p>
            Databases can be developed on top of a number of database management systems to
            support many varying application frameworks, but all of these use a common theme
            and Structured Query Language (SQL).
          </p>

        </div>

      </div>
    </section>

      {/* Section 1 */}
<section className="bg-[#0B1F3A] text-white py-20 px-8">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-[36px] font-extrabold leading-snug mb-6">
            Why Should You Pay{" "}
            <span className="text-green-500">Attention To</span>{" "}
            Your <span className="text-green-500">Database?</span>
          </h2>

          <p className="text-gray-300 text-[15px] leading-relaxed mb-5">
            Databases are recognized as valuable assets by organizations storing important
            information about business operations, customers, finances and much more.
            These large repositories of commercially sensitive information need to be taken
            seriously – just imagine losing 2 years of financial transactions because your
            database was poorly maintained. What if you are dealing with someone else’s
            data, for example patient details? The problem just gets bigger.
          </p>

          <p className="text-gray-300 text-[15px] leading-relaxed mb-5">
            The ramifications of inadequate database management practices can result in
            businesses falling over or at the very least cause drops in productivity. The
            results are pretty much always the same: lost money, lost business opportunities,
            and lost customers.
          </p>

          <p className="text-gray-300 text-[15px] leading-relaxed">
            The bottom-line is that database maintenance is important. But in itself,
            database maintenance has to be smart and strategic: you cannot simply take off
            your production database for a 10-hour check-up. Your customers will not tolerate
            such long delays – they expect to be able to access the system around the clock
            with almost instant responses. For businesses, this also knocks down the revenues.
            Coming back to Amazon, 10 hours of maintenance would tally up to $18.6 million.
          </p>

          <h2 className="text-[32px] font-extrabold mt-10">
            The Trinity{" "}
            <span className="text-green-500">Counsultancy Method</span>
          </h2>

          <p className="text-gray-300 text-[15px] leading-relaxed mt-4">
            The team at Trinity Consultancy has a solid foundation in database design,
            implementation and management. We can ensure that your database systems are
            running smoothly giving your business the best results possible.
          </p>

          <p className="text-gray-300 text-[15px] leading-relaxed mt-4">
            Contact us to explore how our first-class database services can help your
            organisation. In the meantime, click here to read about some of our customers’
            success stories.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-[36px] font-extrabold leading-snug mb-6">
            Database{" "}
            <span className="text-green-500">
              Management & Uses
            </span>
          </h2>

          <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
            So what’s the solution? Essentially, database management and maintenance
            should be a structured, well planned and executed exercise, causing minimal
            disruptions to system availability. The key objectives of database management
            are:
          </p>

          <ul className="space-y-4 text-gray-300 text-[15px] leading-relaxed">
            <li>• <b className="text-white">Stable performance:</b> Maintain the database at optimal performance.</li>
            <li>• <b className="text-white">Safety:</b> Protect your database from unauthorized access, data leakage or data loss.</li>
            <li>• <b className="text-white">Database integrity:</b> Detect database inconsistencies and corrupt data caused by hardware or software errors.</li>
            <li>• <b className="text-white">Business Compliance:</b> Identify database structures, relationships and data that do not conform to business rules or are erroneous.</li>
            <li>• <b className="text-white">Disaster recovery:</b> Support disaster recovery planning through data and transaction log back-ups.</li>
            <li>• <b className="text-white">Downtime:</b> Minimize database downtime for maximum availability.</li>
          </ul>

          <h3 className="text-lg font-bold mt-8 mb-4">
            You should consider investing in database management, if:
          </h3>

          <ul className="space-y-3 text-gray-300 text-[15px] leading-relaxed">
            <li>• You rely on databases to support your organization, but lack an internal IT capability.</li>
            <li>• You want to improve disaster recovery planning through off-site back-ups.</li>
            <li>• You want an independent assessment of your database management practices.</li>
            <li>• You want to improve your overall database performance using industry-grade methods and techniques.</li>
          </ul>
        </div>

      </div>
    </section>

    <section className="bg-gray-100 py-16 px-6">
      
      {/* Heading */}
      <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-12">
        Experience. <span className="text-green-500">Execute.</span> Excellence.
      </h2>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition duration-300"
          >
            {/* Icon Circle */}
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-green-500 text-white mb-6">
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
        
                  <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
                    Contact <span className="text-green-400">Us</span>
                  </h1>
        
                  {/* ✅ FORM START */}
                  <form onSubmit={handleSubmit} className="p-6 rounded-xl w-full max-w-3xl">
        
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-full bg-white"
                        placeholder="Full Name"
                        required
                      />
        
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-full bg-white"
                        placeholder="Email Address"
                        required
                      />
        
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-full bg-white"
                        placeholder="Phone Number"
                        required
                      />
        
                      <input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-full bg-white"
                        placeholder="Subject"
                        required
                      />
        
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="col-span-2 px-4 py-3 rounded-xl bg-white h-32"
                        required
                      />
        
                    </div>
        
                    <div className="mt-6 text-center">
                      <button
                        type="submit"
                        className="bg-green-600 text-white px-8 py-3 rounded-full"
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

export default DatabaseManagement;