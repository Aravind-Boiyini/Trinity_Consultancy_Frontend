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




function MobileDevelopment() {
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
        Mobile <span className="text-green-500">Development</span>
        </h1>
      </div>
       <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP TEXT */}
        <div className="text-center mb-12">
          <h3 className="italic text-lg text-gray-700 mb-4">
            “Combining Custom Development And InHouse Built Platform For Faster Time To Market.”
          </h3>

          <p className="text-gray-600 max-w-4xl mx-auto text-[15px] leading-relaxed">
            Going mobile will help your business streamline operations, bring value to the demanding modern customers,
            and help you tackle big data. Weather it is your first app or second, our decade-long expertise in mobile
            app development will help you succeed with your mobile strategy.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={img}
              alt="Mobile Development"
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <h2 className="text-3xl font-extrabold mb-6">
              <span className="text-[#0B1F3A]">Our Mobile App </span>
              <span className="text-green-500">Development Services:</span>
            </h2>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
              Build a solid app faster with our mobile platform that has pre-made feature modules.
              Leverage our extensive expertise for an industry specific solutions, or an enterprise suite,
              more so, add technologies like block chain and Augmented Reality to elevate your business
              security, key operations, and employee productivity.
            </p>

            <p className="text-gray-700 text-[15px] mb-4 leading-relaxed">
              <span className="font-semibold">IOS:</span> Trinity Consultancy has been creating impactful apps for all Apple devices,
              helping the world’s leading brands go mobile. Leverage our rich expertise in IOS app development to build a beautiful,
              engaging, and consistent app for your industry, regardless of complexity.
            </p>

            <p className="text-gray-700 text-[15px] mb-4 leading-relaxed">
              <span className="font-semibold">Android:</span> Our more than a decade on the market, Trinity Consultancy has gained a
              reputation of one of the most reliable Android app development companies. Weather you a need an app for an android smartphone,
              wearable, or TV, we can help you build a solid solution that works on every device regardless of brand and your industry operation.
            </p>

             <p className="text-gray-700 text-[15px] mb-4 leading-relaxed">
              <span className="font-semibold">Windows:</span>  We develop Windows Phone applications for a variety of industries, and
              our app developers have extensive experience in windows mobile app development. This makes us uniquely qualified to navigate 
              complex digital environments where other developers tend to struggle.
            </p>

             <p className="text-gray-700 text-[15px] mb-4 leading-relaxed">
              <span className="font-semibold">Hybrid platform:</span> Make your software available to your clients and customers regardless of 
              the platform they prefer to use. Trinity Consultancy can help your business create software that will bring consistent 
              functionality and intuitive UI/UX on any device.
            </p>

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

export default MobileDevelopment;