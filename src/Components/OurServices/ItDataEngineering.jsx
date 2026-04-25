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
import React, { useState } from "react";




function ItDataEngineering() {
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
        IT{" "}
          <span className="text-green-500">Data</span>{" "}
          Engineering{" "}
          <span className="text-green-500">Services</span>
        </h1>
      </div>
     <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={img1}
              alt="Data Engineering"
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
              At Trinity Consultancy, we provide end-to-end Data Engineering solutions to help businesses transform raw data into actionable insights. 
              Our expertise in data architecture, ETL processes, cloud integration, and big data technologies ensures that your business can efficiently 
              collect, process, and analyze data for informed decision-making.
            </p>

            <h2 className="text-3xl font-extrabold mb-6">
              <span className="text-[#0B1F3A]">Our Data </span>
              <span className="text-green-500">Engineering Services :</span>
            </h2>

            {/* POINT 1 */}
            <div className="mb-5 flex gap-3">
              <div className="mt-1">
                <div className="w-5 h-5 bg-green-500 text-white flex items-center justify-center text-xs rounded">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3A]">
                  Data Architecture & Modeling
                </h3>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  We design scalable and high-performance data architectures tailored to your business needs. 
                  Our structured and unstructured data models ensure optimal data storage, accessibility, and management.
                </p>
              </div>
            </div>

            {/* POINT 2 */}
            <div className="flex gap-3">
              <div className="mt-1">
                <div className="w-5 h-5 bg-green-500 text-white flex items-center justify-center text-xs rounded">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3A]">
                  ETL (Extract, Transform, Load) Pipelines
                </h3>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  We develop robust ETL workflows to automate data extraction, transformation, and loading processes, 
                  ensuring clean, reliable, and real-time data availability.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">

          {/* LEFT CONTENT */}
          <div>

            {/* POINT 3 */}
            <div className="mb-5 flex gap-3">
              <div className="mt-1">
                <div className="w-5 h-5 bg-green-500 text-white flex items-center justify-center text-xs rounded">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3A]">
                  Big Data Processing & Analytics
                </h3>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  Our expertise in big data frameworks like Apache Spark and Hadoop allows us to process large datasets efficiently, 
                  enabling businesses to derive meaningful insights from vast amounts of information.
                </p>
              </div>
            </div>

            {/* POINT 4 */}
            <div className="flex gap-3">
              <div className="mt-1">
                <div className="w-5 h-5 bg-green-500 text-white flex items-center justify-center text-xs rounded">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3A]">
                  Cloud Data Engineering
                </h3>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  We help businesses migrate and manage data on cloud platforms such as AWS, Google Cloud, and Azure, 
                  ensuring scalability, security, and cost efficiency.
                </p>
              </div>
            </div>

            {/* POINT 5*/}
            <div className="mb-5 flex gap-3">
              <div className="mt-1">
                <div className="w-5 h-5 bg-green-500 text-white flex items-center justify-center text-xs rounded">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3A]">
                    Data Governance & Security
                </h3>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                   We implement best practices in data governance to ensure compliance, security, and data quality, protecting 
                   sensitive business information.
                </p>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  At Trinity Consultancy, we turn data into a strategic asset, helping businesses gain a competitive edge through
                   seamless data management and analytics. Let’s build a data-driven future together! 🚀
                </p>
              </div>
            </div>

            

          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src={img2}
              alt="Cloud Data Engineering"
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>

        </div>

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

export default ItDataEngineering;