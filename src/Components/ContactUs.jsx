// import React from "react";
// import logo from '../assets/About-Banner.jpg';
// import { Mail, MailCheck } from "lucide-react";


// function ContactUs() {
//     return (
//         <div>
//             <div className="relative w-full">

//                 <img
//                     src={logo}
//                     alt="Home Banner"
//                     className="w-full h-full object-cover"
//                 />

//                 {/* Overlay Text */}
//                 <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-extrabold">
//                     Contact <span className="text-green-500"> Us</span>
//                 </h1>
//             </div>

//             <h2 className="text-[40px] font-black text-center text-blue-900 leading-[1.2] mt-10">
//                 Get In {" "}
//                 <span className="text-green-500"> Touch </span>
//             </h2>

//             <div className="flex gap-6 mt-6 px-10 justify-center max-w-5xl mx-auto">
//                 <div className="border border-gray-200 w-full bg-white rounded-xl shadow-lg p-6 mt-10 flex flex-col items-center text-center gap-4">
//                     <div className="border border-black p-6 rounded-full flex items-center justify-center">
//                         <Mail size={28} className="text-green-600" />
//                     </div>
//                     <h1 className="font-bold text-[18px]">Address</h1>
//                     <p className="text-gray-600 text-[14px] font-semibold leading-relaxed">
//                         HIG-68, near HDFC Bank, KPHB 5th Phase, Kukatpally, Hyderabad, Telangana 500072, India
//                     </p>

//                 </div>
//                 <div className="border border-gray-200 w-full bg-white rounded-xl shadow-lg p-6 mt-10 flex flex-col items-center text-center gap-4">
//                     <div className="border border-black p-6 rounded-full flex items-center justify-center">
//                         <Mail size={28} className="text-green-600" />
//                     </div>
//                     <h1 className="font-bold text-[18px]">Phone</h1>
//                     <p className="text-gray-600 text-[14px] font-semibold leading-relaxed">
//                         980-890-1234
//                     </p>

//                 </div>
//                 <div className="border border-gray-200 w-full bg-white rounded-xl shadow-lg p-6 mt-10 flex flex-col items-center text-center gap-4">
//                     <div className="border border-black p-6 rounded-full flex items-center justify-center">
//                         <MailCheck size={28} className="text-green-600" />
//                     </div>
//                     <h1 className="font-bold text-[18px]">Email</h1>
//                     <p className="text-gray-600 text-[14px] font-semibold leading-relaxed">
//                         info@trinityconsultancy.com
//                     </p>

//                 </div>
//             </div>

//             <h2 className="text-[40px] font-black text-center text-blue-900 leading-[1.2] mt-13">
//                 Enquiry {" "}
//                 <span className="text-green-500"> Form </span>
//             </h2>

//             <div className="flex flex-col items-center justify-center px-4 mt-7">


//                 <div className="p-6 rounded-xl w-full max-w-4xl">


//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             className="px-4 py-3 rounded-full border border-gray-200 bg-white shadow outline-none focus:ring-2 focus:ring-green-500"
//                         />
//                         <input
//                             type="email"
//                             placeholder="Email Address"
//                             className="px-4 py-3 rounded-full border border-gray-200 bg-white shadow outline-none focus:ring-2 focus:ring-green-500"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Phone Number"
//                             className="px-4 py-3 rounded-full border border-gray-200 bg-white shadow outline-none focus:ring-2 focus:ring-green-500"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Subject"
//                             className="px-4 py-3 rounded-full border border-gray-200 bg-white shadow outline-none focus:ring-2 focus:ring-green-500"
//                         />

//                         <textarea
//                             placeholder="Your Message"
//                             className="col-span-1 md:col-span-2 px-4 py-3 rounded-xl border border-gray-200 bg-white shadow outline-none focus:ring-2 focus:ring-green-500 resize-none h-32"
//                         ></textarea>

//                     </div>

//                     {/* Button */}
//                     <div className="mt-6 text-center">
//                         <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition">
//                             Submit
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// }

// export default ContactUs;
import React, { useState } from "react";
import logo from '../assets/About-Banner.jpg';
import { Mail, MailCheck } from "lucide-react";

function ContactUs() {

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

      // clear form
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
        <img src={logo} alt="Home Banner" className="md:w-full md:h-full w-full h-100 object-cover" />

        <h1 className="absolute inset-0 flex items-center justify-center text-white md:text-6xl text-4xl font-extrabold">
          Contact <span className="text-blue-500 ml-3 "> Us</span>
        </h1>
      </div>

      {/* Get In Touch */}
      <h2 className="text-[40px] font-black text-center text-black mt-10">
        Get In <span className="text-blue-500">Touch</span>
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 mt-6 px-10 justify-center max-w-5xl mx-auto">

        <div className="border w-full bg-white rounded-xl shadow-lg p-6 mt-10 text-center">
          <Mail className="mx-auto text-blue-600" size={28} />
          <h1 className="font-bold mt-2">Address</h1>
          <p className="text-gray-600 text-sm">
            1416 Shady Hollow Ct, Keller, TX 76248
          </p>
        </div>

        <div className="border w-full bg-white rounded-xl shadow-lg p-6 mt-10 text-center">
          <Mail className="mx-auto text-blue-600" size={28} />
          <h1 className="font-bold mt-2">Phone</h1>
          <p className="text-gray-600 text-sm"> (682) 392-9824</p>
        </div>

        <div className="border w-full bg-white rounded-xl shadow-lg p-6 mt-10 text-center">
          <MailCheck className="mx-auto text-blue-600" size={28} />
          <h1 className="font-bold mt-2">Email</h1>
          <p className="text-gray-600 text-sm">hr@trinitytxconsulting.com</p>
        </div>

      </div>

      {/* Enquiry Form */}
      <h2 className="text-[40px] font-black text-center text-black mt-10">
        Enquiry <span className="text-blue-500">Form</span>
      </h2>

      {/* FORM START */}
      <form onSubmit={handleSubmit} className="flex flex-col  items-center px-4 mt-7">

        <div className="p-6 w-full max-w-4xl">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full block px-4 py-3 rounded-full border bg-white"
              required
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full block px-4 py-3 rounded-full border bg-white"
              required
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full block px-4 py-3 rounded-full border bg-white"
              required
            />

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full block px-4 py-3 rounded-full border bg-white"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full md:col-span-2 px-4 py-3 rounded-xl border bg-white h-32"
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

        </div>

      </form>
      {/* FORM END */}

    </div>
  );
}

export default ContactUs;