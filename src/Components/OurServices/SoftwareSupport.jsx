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




function SoftwareSupport() {
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
          className="wmd:w-full md:h-full w-full h-100 object-cover"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-white md:text-6xl text-4xl font-extrabold">
        Software <span className="text-blue-500 ml-3">Support</span>
        </h1>
      </div>
       <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        

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

            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
              Software support is an ongoing service that ensures the maintenance of a 
              custom software solution. This service includes fixing bugs, resolving queries, 
              developing new features and code updates.
            </p>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                Regular software maintenance in line with best practice recommendations to
                ensure smooth integration with your existing IT infrastructure.
            </p>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
              24/7 support ensures issues are resolved quickly and drives continuous service 
              improvement.
            </p>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
             Our support team logs new feature requests, which can be prioritised and 
             developed in future software releases.
            </p>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
             If your solution is hosted as a SaaS product, we manage the data integrity while 
             you maintain ownership of the data.            </p>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
             We support SaaS products as well as on-premise deployments, ensuring 
             applications are always optimised for the best possible user experience.
            </p>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
             Our support team logs issues promptly, and where fixes are needed, we aim to 
             deploy these within an agreed SLA response time.

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
            Contact <span className="text-blue-400">Us</span>
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
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full">
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

export default SoftwareSupport;