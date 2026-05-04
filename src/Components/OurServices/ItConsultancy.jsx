import logo from "../../assets/About-Banner.jpg";
import img1 from "../../assets/About-Banner.jpg";
import img2 from "../../assets/About-Banner.jpg";
import teamoflogo from "../../assets/IT-Image.jpg";
import teamoflogo1 from "../../assets/Product-Image.jpg";
import { Mail, Trophy } from "lucide-react";
import { MailCheck } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import contactlogo from "../../assets/About-Banner.jpg";
import React, { useState } from "react";



function ItConsultancy() {
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

        <h1 className="absolute inset-0 flex items-center justify-center text-white md:text-6xl text-4xl font-extrabold">
          IT <span className="text-blue-500 ml-3">Consultancy</span>
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
            <h2 className="text-[32px] font-extrabold text-gray-800 mt-8">
              Can We? <span className="text-blue-500">How Do We Do That?</span>
            </h2>

            <p className="mt-5 text-gray-600 text-[15px] leading-relaxed">
            Yes, we can! At Trinity TX Consulting, we offer expert IT consulting by analyzing your business needs and providing tailored, scalable solutions. Our approach includes assessing your IT infrastructure, identifying challenges, and implementing the best strategies for growth. From web and software development to cloud management and database design, we ensure businesses get the right technology solutions to drive success, efficiency, and innovation.</p>


            <h2 className="text-[32px] font-extrabold text-gray-800 mt-8">
              Understanding Is <span className="text-blue-500">Everything</span>
            </h2>

           <p className="mt-4 text-gray-600 text-[15px] leading-relaxed">
            At Trinity TX Consulting, we believe that true success starts with deep understanding. Before offering a solution, we take the time to analyze business goals, industry challenges, and market trends. This helps us develop custom IT strategies that align with long-term objectives. By focusing on clarity, precision, and collaboration, we create solutions that not only solve problems but also drive sustainable growth and innovation./</p>
           
          </div>

        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gray-900 text-white py-20 px-8 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-[36px] font-extrabold">
              Business <span className="text-blue-500">Analysis</span>
            </h2>

            <p className="mt-6 text-gray-300 text-[15px]">
            At Trinity TX Consulting, we take a structured approach to business analysis for B2B projects. We start by conducting detailed discussions with stakeholders to understand their objectives, pain points, and challenges. Our team then evaluates existing workflows, IT infrastructure, and industry trends to develop data-driven insights. This ensures that our solutions are strategic, cost-effective, and aligned with business goals. By bridging the gap between technology and business needs, we deliver IT solutions that enhance productivity, streamline operations, and provide measurable ROI./</p>


          </div>

          <div>
            <h2 className="text-[36px] font-extrabold">
              Solution <span className="text-blue-500">Design</span>
            </h2>

            <p className="mt-6 text-gray-300 text-[15px]">
            At Trinity TX Consulting, solution design is about precision and innovation. We analyze your business needs, industry trends, and future scalability to create a robust IT strategy. Our experts provide custom software, cloud architecture, and database solutions that integrate seamlessly into your operations. Unlike one-size-fits-all approaches, we focus on efficiency, adaptability, and long-term impact. With a strong emphasis on collaboration and future-proofing, we ensure your business gets the best solution not just any solution.</p>


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
              <input className= "px-4 py-3 rounded-full bg-white" placeholder="Subject" />

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

export default ItConsultancy;