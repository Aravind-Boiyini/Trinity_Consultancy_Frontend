import logo from "../../assets/About-Banner.jpg";
import img1 from "../../assets/About-Banner.jpg";
import img2 from "../../assets/About-Banner.jpg";
import teamoflogo from "../../assets/IT-Image.jpg";
import teamoflogo1 from "../../assets/Product-Image.jpg";
import { Mail, Network, Trophy } from "lucide-react";
import { MailCheck , Check} from "lucide-react";
import { MoveUpRight } from "lucide-react";
import contactlogo from "../../assets/About-Banner.jpg";
import React, { useState } from "react";



function NetworkSecurity() {
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
          Network <span className="text-blue-500 ml-3">Security</span>
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
              At Trinity TX Consulting, our Network Security services are designed to protect your digital assets and ensure compliance. We provide comprehensive security solutions that safeguard your infrastructure, data, and applications from evolving threats.</p>


            


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
              Assessment & Risk Analysis
            </div>
            <p className="text-gray-200 mt-2 text-sm leading-relaxed">
              We begin by evaluating your existing network infrastructure, identifying vulnerabilities, and understanding potential threats. Our team performs detailed risk assessments to design a secure and resilient network strategy.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 font-bold text-lg">
              <span className="bg-blue-500 p-1 rounded">
                <Check size={16} />
              </span>
              Secure Network Design & Implementation
            </div>
            <p className="text-gray-200 mt-2 text-sm leading-relaxed">
              Our experts design and deploy secure network architectures using firewalls, intrusion detection systems (IDS), and encryption protocols to protect your data and systems from unauthorized access.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 font-bold text-lg">
              <span className="bg-blue-500 p-1 rounded">
                <Check size={16} />
              </span>
              Monitoring & Threat Detection
            </div>
            <p className="text-gray-200 mt-2 text-sm leading-relaxed">
              We implement continuous network monitoring solutions to detect suspicious activities in real time. Our proactive approach ensures threats are identified and mitigated before they impact your operations.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 font-bold text-lg">
              <span className="bg-blue-500 p-1 rounded">
                <Check size={16} />
              </span>
              Maintenance & Incident Response
            </div>
            <p className="text-gray-200 mt-2 text-sm leading-relaxed">
              From regular security updates to rapid incident response, we ensure your network remains protected at all times. Our team provides ongoing support to handle breaches, minimize downtime, and maintain business continuity.
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
              End-to-End Network Security Solutions – From assessment to implementation and monitoring, we secure every layer of your network infrastructure.
            </li>
            <li className="flex gap-3">
              <span>•</span>
              Scalable & Adaptive Security – Our solutions grow with your business and adapt to evolving cyber threats.
            </li>
            <li className="flex gap-3">
              <span>•</span>
              Advanced Threat Protection – We use modern tools and technologies to defend against malware, ransomware, and cyber attacks.
            </li>
          </ul>
        </div>

      </div>
    </section>
    
      {/* ✅ Contact Section (separate, NOT inside above section) */}
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
    </section>
    </div>
  );
}

export default NetworkSecurity;