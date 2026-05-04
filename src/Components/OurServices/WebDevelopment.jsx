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






function WebDevelopment() {
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
        Web <span className="text-blue-500 ml-3">Development</span>
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
            At Trinity TX Consulting, we specialize in custom web development solutions
            that help businesses establish a strong digital presence. Whether you need a
            responsive website, web application, or e-commerce platform, our expert team
            delivers scalable, secure, and high-performance web solutions tailored to your
            needs
          </p>

         
        </div>

      </div>
    </section>

      {/* Section 1 */}
<section className="bg-[#0B1F3A] text-white py-20 px-8">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>

          {/* TITLE */}
          <h2 className="text-2xl md:text-4xl  font-extrabold mb-6">
            Types Of{" "}
            <span className="text-blue-500">Web Development Services</span>
          </h2>

          {/* SUBTITLE */}
          <h3 className="font-semibold mb-4 text-lg">
            Web Application Development Services:
          </h3>

          <p className="text-gray-200 leading-relaxed mb-6">
            From design to integration to maintenance, we offer full-cycle web
            application development services. We build apps that are secure,
            scalable, fast, and work well across all devices and platforms
          </p>

          {/* WHAT YOU GET */}
          <h3 className="font-semibold text-lg mb-4">What You Get</h3>

          <p className="text-gray-200 mb-4">
            Our streamlined development process and experience allow us to
            deliver top-of-the-line web development services that tick all the
            boxes.
          </p>

          {/* BULLETS */}
          <ul className="list-disc pl-5 space-y-2 text-gray-200 mb-8">
            <li>Carefully analyzed requirements</li>
            <li>Stand-out, easy-to-navigate UI & UX design</li>
            <li>Secure and scalable solution that works fast</li>
            <li>Responsive design</li>
            <li>Custom features</li>
            <li>Rich and engaging visuals</li>
            <li>Maintenance and support</li>
          </ul>

          {/* PROCESS */}
          <h3 className="font-semibold text-lg mb-4">
            Our Web Development Process:
          </h3>

          <p className="text-gray-200 leading-relaxed">
            As we have been delivering web development services for industries,
            our process is clear, effective and enables timely delivery of your
            web solution. From comprehensive requirement gathering to ensuring
            continuous operation of your web solution after deployment, we have
            everything covered for you
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10">

          {/* KICK OFF */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Kick-Of <span className="text-blue-500">Stage</span>
            </h2>
            <p className="text-gray-200 leading-relaxed">
              On this stage, our experts translate your business requirements
              into technical documents for your web solution. We also gather the
              team, and its designer(s) create a basic design. This stage lays
              the foundation for the entire project.
            </p>
          </div>

          {/* DEVELOPMENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Development <span className="text-blue-500">Stage</span>
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Our software engineers create your web solution. Trinity TX Consulting
              uses the agile methodology, so you will review results every two
              weeks/month. Then, our team perform user Acceptance Testing and
              deploy your web solution.
            </p>
          </div>

          {/* SUPPORT */}
          <div>
            <h2 className="md:text-3xl text-2xl font-extrabold mb-3">
              Support <span className="text-blue-500">Stage</span>
            </h2>
            <p className="text-gray-200 leading-relaxed">
              After your web solution is released, we perform continuous server
              monitoring, allocate team members to fix bugs, and provide general
              customer support.
            </p>
          </div>

          {/* TECHNOLOGIES */}
          <div>
            <h2 className="md:text-3xl text-2xl font-extrabold mb-3">
              Our <span className="text-blue-500">Technologies</span>
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Our software engineers have expertise in all the technologies needed
              to deliver comprehensive web developments services for companies
              across industries.
            </p>
          </div>

          {/* ECOMMERCE */}
          <div>
            <h2 className="md:text-3xl text-2xl font-extrabold mb-3">
              E-Commerce Web{" "}
              <span className="text-blue-500">Development Services</span>
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Build an online store with seamless and user-friendly experience,
              the right extensions, and reliable integration with your other
              processes. Our ecommerce solutions are scalable and secure.
            </p>
          </div>

        </div>

      </div>
    </section>

    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* TITLE */}
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
            <span className="text-[#0B1F3A]">Web Application </span>
            <span className="text-blue-500">Development Process</span>
          </h2>

          {/* JAVA SECTION */}
          <h3 className="font-semibold text-[#0B1F3A] mb-3">
            JAVA web development services:
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            We providing reliable Java web development services, you can trust us
            to build a comprehensive web solution on Java for your business.
          </p>

          {/* CUSTOM DEVELOPMENT */}
          <h3 className="font-semibold text-[#0B1F3A] mb-3">
            Custom web development services for the Enterprise:
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Build a custom solution for your business from the ground-up. Our
            wide-ranging custom web development services allow you to create
            cross-platform solutions for any industry regardless of scale or
            complexity.
          </p>

          {/* TECHNOLOGIES */}
          <h2 className="text-2xl font-extrabold mb-4">
            <span className="text-[#0B1F3A]">Our </span>
            <span className="text-blue-500">Technologies</span>
          </h2>

          <h3 className="font-semibold text-[#0B1F3A] mb-3">
            For Web development:
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our software engineers have expertise in all the technologies needed
            to deliver comprehensive web developments services for companies
            across industries.
          </p>

          {/* LIST */}
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>PHP</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>Symfony</li>
            <li>AngularJS</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>NodeJS</li>
            <li>JQuery</li>
          </ul>

        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={img}
            alt="Web Development"
            className="w-full h-auto rounded-2xl shadow-md"
          />
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

export default WebDevelopment;