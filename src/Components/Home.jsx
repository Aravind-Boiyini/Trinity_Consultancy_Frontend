// import React from "react";
// import banner2 from '../assets/BANNER-IMG2.jpg'; // replace with your banner image path
// import Homebanner2 from '../assets/About-Banner.jpg'; // replace with your logo path
// import { Mail } from "lucide-react";
// import logo from '../assets/About-Banner.jpg'; // replace with your logo path
// import { Star } from "lucide-react";



// function Home() {
//     return (
//         <div>
//             <div className="relative w-full">
//                 {/* Image */}
//                 <img
//                     src={banner2}
//                     alt="Home Banner"
//                     className="w-full h-full object-cover"
//                 />

//                 {/* Overlay Text */}
//                 <div className="absolute inset-0 mt-55 ml-38  ">
//                     <p className="text-3xl  text-orange-500">Welcome To</p>
//                     <p className="text-6xl font-extrabold mt-3   text-white">Trinit<span className="text-orange-500">y</span></p>
//                     <p className="text-6xl font-extrabold mt-3   text-white">Consultancy</p>

//                     <button className="rounded-full text-white mt-8 bg-blue-500 py-4 px-13">VIEW MORE</button>
//                 </div>
//             </div>

//             <div className=" md:px-10 bg-white py-20">

//                 {/* Container */}
//                 <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-30 items-center">

//                     {/* LEFT SIDE (Images) */}
//                     <div className="relative">

//                         {/* Orange Circle */}
//                         <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500 rounded-full z-0"></div>

//                         {/* Main Image */}
//                         <img
//                             src={Homebanner2}
//                             alt="Main"
//                             className="relative z-10 w-full h-[430px] object-cover rounded-2xl shadow-lg"
//                         />

//                         {/* Small Overlapping Circle Image */}
//                         <img
//                             src={Homebanner2}
//                             alt="Small"
//                             className="absolute bottom-[-40px] right-[-20px] w-44 h-44 object-cover rounded-full border-8 border-white shadow-xl z-20"
//                         />
//                     </div>

//                     {/* RIGHT SIDE (Text) */}
//                     <div>


//                         <h2 className="text-3xl md:text-3xl  font-extrabold text-[#123E6B] leading-snug">
//                             About{" "}
//                             <span className="text-orange-500">US</span>
//                         </h2>

//                         <p className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed ">
//                             Gunesh Technologies Informatics is global Digital Technology
//                             developing company headquartered in Hyderabad, Telangana with offices
//                             around the world. Gunesh Technologies Informatics, Inc. was formed to
//                             provide professional web & mobile based services to businesses and
//                             non-for-profit organizations. We offer a wide range of design and
//                             development services that are all delivered using the latest and
//                             greatest technologies with a personal experience.
//                         </p>
//                         <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
//                             Gunesh Technologies Informatics is an innovative team of engineers,
//                             developers and technology experts. We specialize in Custom business
//                             software, mobile application development, web design & development,
//                             Database management, Reporting, Dashboards, BI, Digital marketing and
//                             end to end IT strategy and consulting.
//                         </p>

//                         <button className="rounded-full text-white mt-8 bg-green-500 py-2 px-13">VIEW MORE</button>





//                     </div>
//                 </div>
//             </div>

//             {/* Our features */}

//             <div>
//                 <h1 className="text-3xl md:text-3xl  font-extrabold text-[#123E6B] leading-snug text-center">
//                     Our <span className="text-orange-500">Features</span>
//                 </h1>
//                 <div className="flex gap-6 mt-6 px-10 justify-center max-w-7xl mx-auto ">
//                     <div className="border border-gray-200  shadow-xl rounded-xl p-6 mt-10 flex flex-col items-center text-center gap-4 ">
//                         <div className="bg-blue-900 p-6 rounded-full flex items-center justify-center">
//                             <Mail size={28} className="text-white" />
//                         </div>
//                         <h1 className="font-extrabold text-blue-900 text-1xl">We Value Our Customers</h1>
//                         <p className="text-gray-600 text-[13px] font-semibold leading-relaxed">
//                             At Gunesh Technologies Informatics, we believe in building long-term relationships with our clients. We are committed to providing exceptional service and support to ensure your satisfaction.
//                         </p>
//                     </div>
//                     <div className="border border-gray-200  shadow-xl rounded-xl p-6 mt-10 flex flex-col items-center text-center gap-4 ">
//                         <div className="bg-blue-900 p-6 rounded-full flex items-center justify-center">
//                             <Mail size={28} className="text-white" />
//                         </div>
//                         <h1 className="font-extrabold text-blue-900 text-1xl">We Value Our Customers</h1>
//                         <p className="text-gray-600 text-[13px] font-semibold leading-relaxed">
//                             At Gunesh Technologies Informatics, we believe in building long-term relationships with our clients. We are committed to providing exceptional service and support to ensure your satisfaction.
//                         </p>
//                     </div>
//                     <div className="border border-gray-200  shadow-xl rounded-xl p-6 mt-10 flex flex-col items-center text-center gap-4 ">
//                         <div className="bg-blue-900 p-6 rounded-full flex items-center justify-center">
//                             <Mail size={28} className="text-white" />
//                         </div>
//                         <h1 className="font-extrabold text-blue-900 text-1xl">We Value Our Customers</h1>
//                         <p className="text-gray-600 text-[13px] font-semibold leading-relaxed">
//                             At Gunesh Technologies Informatics, we believe in building long-term relationships with our clients. We are committed to providing exceptional service and support to ensure your satisfaction.
//                         </p>
//                     </div>
//                     <div className="border border-gray-200  shadow-xl rounded-xl p-6 mt-10 flex flex-col items-center text-center gap-4 ">
//                         <div className="bg-blue-900 p-6 rounded-full flex items-center justify-center">
//                             <Mail size={28} className="text-white" />
//                         </div>
//                         <h1 className="font-extrabold text-blue-900 text-1xl">We Value Our Customers</h1>
//                         <p className="text-gray-600 text-[13px] font-semibold leading-relaxed">
//                             At Gunesh Technologies Informatics, we believe in building long-term relationships with our clients. We are committed to providing exceptional service and support to ensure your satisfaction.
//                         </p>
//                     </div>



//                 </div>
//             </div>

//             {/* Our Services */}

//             <div className="flex justify-center items-center mt-20 ">
//                 <div className="bg-[#123E6B] w-full py-16 px-4 md:px-10 relative overflow-hidden ">

//                     {/* Decorative Circles */}
//                     <div className="absolute top-0 left-0 w-48 h-48 border-2 border-orange-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//                     <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
//                     <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>
//                     <div className="absolute bottom-0 right-0 w-40 h-40 border-2 border-orange-400 rounded-full translate-x-1/2 translate-y-1/2"></div>


//                     <div className="text-center text-white ">
//                         <h2 className="text-3xl md:text-4xl font-bold">
//                             Our <span className="text-orange-500">Services</span>
//                         </h2>

//                     </div>

//                     {/* Cards */}
//                     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center ">

//                         {/* Card 1 */}
//                         <div className="bg-white rounded-xl overflow-hidden shadow-lg">
//                             <img
//                                 src={logo}
//                                 alt="Who We Are"
//                                 className="w-full h-56 object-cover"
//                             />
//                             <div className="p-6 text-center">
//                                 <h3 className="text-lg font-bold text-[#123E6B]">Who We Are</h3>
//                                 <p className="text-sm mt-3 text-gray-600 leading-relaxed">
//                                     We are years old successfully running IT Consulting and Product
//                                     Engineering like Database Management service providing company based
//                                     in Hyderabad India.
//                                 </p>
//                                 <button className="rounded-full text-white mt-8 bg-green-500 py-2 px-8">VIEW MORE</button>
//                             </div>
//                         </div>

//                         {/* Card 2 */}
//                         <div className="bg-white rounded-xl overflow-hidden shadow-lg">
//                             <img
//                                 src={logo}
//                                 alt="Vision"
//                                 className="w-full h-56 object-cover"
//                             />
//                             <div className="p-6 text-center">
//                                 <h3 className="text-lg font-bold text-[#123E6B]">Our vision</h3>
//                                 <p className="text-sm mt-3 text-gray-600 leading-relaxed">
//                                     Our vision is to bring all the businesses online to grow them
//                                     globally at very reasonable investment through IT Consulting and
//                                     digital marketing services.
//                                 </p>
//                                 <button className="rounded-full text-white mt-8 bg-green-500 py-2 px-8">VIEW MORE</button>
//                             </div>
//                         </div>

//                         {/* Card 3 */}
//                         <div className="bg-white rounded-xl overflow-hidden shadow-lg">
//                             <img
//                                 src={logo}
//                                 alt="What We Do"
//                                 className="w-full h-56 object-cover"
//                             />
//                             <div className="p-6 text-center">
//                                 <h3 className="text-lg font-bold text-[#123E6B]">What We Do</h3>
//                                 <p className="text-sm mt-3 text-gray-600 leading-relaxed">
//                                     We help clients get online presence of their business and generate
//                                     more leads through our top IT Consulting, Product Engineering,
//                                     Database Management and few more services.
//                                 </p>
//                                 <button className="rounded-full text-white mt-8 bg-green-500 py-2 px-8">VIEW MORE</button>
//                             </div>
//                         </div>

//                         {/* Card 4 */}
//                         <div className="bg-white rounded-xl overflow-hidden shadow-lg">
//                             <img
//                                 src={logo}
//                                 alt="What We Do"
//                                 className="w-full h-56 object-cover"
//                             />
//                             <div className="p-6 text-center">
//                                 <h3 className="text-lg font-bold text-[#123E6B]">What We Do</h3>
//                                 <p className="text-sm mt-3 text-gray-600 leading-relaxed">
//                                     We help clients get online presence of their business and generate
//                                     more leads through our top IT Consulting, Product Engineering,
//                                     Database Management and few more services.
//                                 </p>
//                                 <button className="rounded-full text-white mt-8 bg-green-500 py-2 px-8">VIEW MORE</button>
//                             </div>
//                         </div>

//                         {/* Card 5 */}
//                         <div className="bg-white rounded-xl overflow-hidden shadow-lg">
//                             <img
//                                 src={logo}
//                                 alt="What We Do"
//                                 className="w-full h-56 object-cover"
//                             />
//                             <div className="p-6 text-center">
//                                 <h3 className="text-lg font-bold text-[#123E6B]">What We Do</h3>
//                                 <p className="text-sm mt-3 text-gray-600 leading-relaxed">
//                                     We help clients get online presence of their business and generate
//                                     more leads through our top IT Consulting, Product Engineering,
//                                     Database Management and few more services.
//                                 </p>
//                                 <button className="rounded-full text-white mt-8 bg-green-500 py-2 px-8">VIEW MORE</button>
//                             </div>
//                         </div>

//                         {/* Card 6 */}
//                         <div className="bg-white rounded-xl overflow-hidden shadow-lg">
//                             <img
//                                 src={logo}
//                                 alt="What We Do"
//                                 className="w-full h-56 object-cover"
//                             />
//                             <div className="p-6 text-center">
//                                 <h3 className="text-lg font-bold text-[#123E6B]">What We Do</h3>
//                                 <p className="text-sm mt-3 text-gray-600 leading-relaxed">
//                                     We help clients get online presence of their business and generate
//                                     more leads through our top IT Consulting, Product Engineering,
//                                     Database Management and few more services.
//                                 </p>
//                                 <button className="rounded-full text-white mt-8 bg-green-500 py-2 px-8">VIEW MORE</button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>


//             {/* Testimonials */}

//             <div className="w-full  mt-20 ">
//                 <h2 className="text-3xl md:text-4xl text-center text-[#123E6B] font-bold">
//                     Testimonials
//                 </h2>

//                 <div className="w-full flex justify-center items-center py-16 ">

//                     {/* Card */}
//                     <div className="relative bg-gray-200 rounded-2xl shadow-lg max-w-5xl w-full flex overflow-hidden">

//                         {/* Left Orange Section */}
//                         <div className="w-1/3 bg-green-500 relative flex items-center justify-center">

//                             {/* Circle Image */}
//                             <div className="absolute w-64 h-64 rounded-full border-8 border-white overflow-hidden">
//                                 <img
//                                     src="https://via.placeholder.com/300"
//                                     alt="profile"
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                         </div>

//                         {/* Right Content */}
//                         <div className="w-2/3 p-10 flex flex-col justify-center">

//                             {/* Text */}
//                             <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//                                 We partnered with Gunesh Technologies for database management and
//                                 cloud migration, and they exceeded our expectations. The project
//                                 was completed on time, and our systems are now more secure,
//                                 efficient, and scalable. The team is responsive, and their
//                                 solutions are always forward-thinking. It's been a pleasure working
//                                 with them, and we look forward to future collaborations!
//                             </p>

//                             {/* Stars */}
//                             <div className="flex gap-1 mt-4 text-orange-500">
//                                 {[...Array(5)].map((_, i) => (
//                                     <Star key={i} size={18} fill="currentColor" />
//                                 ))}
//                             </div>

//                             <h3 className="mt-4 font-bold text-blue-900 text-lg">
//                                 David L.
//                             </h3>


//                             <p className="text-orange-500 text-sm font-medium">
//                                 CTO, FinTech Solutions
//                             </p>
//                         </div>
//                     </div>

//                     {/* Dots */}
//                     <div className="absolute bottom-6 flex gap-2">
//                         <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
//                         <span className="w-3 h-3 border-2 border-orange-500 rounded-full"></span>
//                         <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
//                     </div>

//                 </div>

//             </div>


//             {/* latest news and blogs */}

//             <h2 className="text-3xl md:text-3xl text-center font-extrabold text-[#123E6B] leading-snug">
//                 Latest{" "}
//                 <span className="text-orange-500"> News</span>{" "}
//                 & <span className="text-orange-500">Blogs</span>
//             </h2>

//             <div className="w-full  py-16 flex justify-center">
//                 <div className="max-w-6xl w-full px-4 grid md:grid-cols-3 gap-8">

//                     {/* LEFT BIG CARD */}
//                     <div className="md:col-span-2">
//                         <div className="bg-white rounded-xl overflow-hidden shadow-sm">
//                             <img
//                                 src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
//                                 alt="blog"
//                                 className="w-full h-[300px] object-cover"
//                             />

//                             <div className="p-6">
//                                 <p className="text-orange-500 text-sm flex items-center gap-2 mb-2">
//                                     📅 06 Feb 2025
//                                 </p>

//                                 <h2 className="text-xl font-bold text-gray-900 mb-3">
//                                     Gunesh Technologies Expands IT Consulting Services to New Markets
//                                 </h2>

//                                 <p className="text-gray-600 mb-4">
//                                     Gunesh Technologies is excited to announce the expansion of its
//                                     IT consulting services to new global markets.
//                                 </p>

//                                 <button className="text-orange-500 font-semibold flex items-center gap-2">
//                                     VIEW MORE →
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT SIDE */}
//                     <div className="flex flex-col gap-6">

//                         {/* CARD 1 */}
//                         <div className="flex gap-4 bg-white rounded-xl overflow-hidden shadow-sm">
//                             <img
//                                 src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
//                                 alt="blog"
//                                 className="w-40 h-32 object-cover"
//                             />

//                             <div className="p-3">
//                                 <p className="text-orange-500 text-xs mb-1">
//                                     📅 06 Feb 2025
//                                 </p>

//                                 <h3 className="text-sm font-bold text-gray-900 mb-2">
//                                     Gunesh Technologies Launches New Cloud-Based Data Solutions for Businesses
//                                 </h3>

//                                 <p className="text-gray-500 text-xs mb-2">
//                                     Gunesh Technologies is proud to announce the launch of its latest offering cloud-based data engineering solutions.
//                                 </p>

//                                 <button className="text-orange-500 text-xs font-semibold">
//                                     VIEW MORE →
//                                 </button>
//                             </div>
//                         </div>

//                         {/* CARD 2 */}
//                         <div className="flex gap-4 bg-white rounded-xl overflow-hidden shadow-sm">
//                             <img
//                                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//                                 alt="blog"
//                                 className="w-40 h-32 object-cover"
//                             />

//                             <div className="p-3">
//                                 <p className="text-orange-500 text-xs mb-1">
//                                     📅 06 Feb 2025
//                                 </p>

//                                 <h3 className="text-sm font-bold text-gray-900 mb-2">
//                                     Why Custom Web Development is Essential for Your Business in 2025
//                                 </h3>

//                                 <p className="text-gray-500 text-xs mb-2">
//                                     It is a long established fact that a reader will be distracted by the readable content.
//                                 </p>

//                                 <button className="text-orange-500 text-xs font-semibold">
//                                     VIEW MORE →
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//             </div>

//             <div className="text-center">
//                 <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-green-600 transition">
//                     VIEW MORE BLOG
//                 </button>
//             </div>


//             {/* Contact US */}

//             <div className="relative w-full mt-15">


//                 <img
//                     src={logo}
//                     alt="Home Banner"
//                     className="w-full h-[600px] object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/50"></div>

//                 {/* Form Container */}
//                 <div className="absolute inset-0 flex flex-col items-center justify-center px-4 mt-20">


//                     <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
//                         Contact <span className="text-green-400">Us</span>
//                     </h1>

//                     <div className="p-6 rounded-xl w-full max-w-3xl">


//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                             <input
//                                 type="text"
//                                 placeholder="Full Name"
//                                 className="px-4 py-3 rounded-full border border-gray-100 bg-white shadow outline-none focus:ring-2 focus:ring-green-500"
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Email Address"
//                                 className="px-4 py-3 rounded-full border border-gray-100 bg-white shadow outline-none focus:ring-2 focus:ring-green-500"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Phone Number"
//                                 className="px-4 py-3 rounded-full border border-gray-100 bg-white shadow outline-none focus:ring-2 focus:ring-green-500"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Subject"
//                                 className="px-4 py-3 rounded-full border border-gray-100 bg-white shadow outline-none focus:ring-2 focus:ring-green-500"
//                             />

//                             <textarea
//                                 placeholder="Your Message"
//                                 className="col-span-1 md:col-span-2 px-4 py-3 rounded-xl border border-gray-100 bg-white shadow outline-none focus:ring-2 focus:ring-green-500 resize-none h-32"
//                             ></textarea>

//                         </div>

//                         {/* Button */}
//                         <div className="mt-6 text-center">
//                             <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
//                                 Submit
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>





//         </div>
//     );
// }

// export default Home;


import { useState, useEffect, useRef } from "react";
import Slider_home_31 from '../assets/slider_home_31.png';
import Slider_home_32 from '../assets/slider_home_32.png';
import Slider_home_33 from '../assets/slider_home_33.png';
import { Mail, MailCheck, MoveUpRight } from "lucide-react";
import img1 from '../assets/About-Banner.jpg';
import img2 from '../assets/About-Banner.jpg';
import teamlogo1 from '../assets/IT-Image.jpg';
import teamlogo2 from '../assets/Mobile-Image.jpg';
import teamlogo3 from '../assets/Product-Image.jpg';
import teamlogo4 from '../assets/Database-Image.jpg';
import teamoflogo from '../assets/team_img_6.jpg';
import teamoflogo1 from '../assets/team_img_7.jpg';
import contactlogo from '../assets/About-Banner.jpg';



  
  

const slides = [
    {
        tag: " Welcome to Trinity TX Consulting",
        title: ["Planning for the", "Future Creates the", "Present!.."],
        desc: "Ever undertakes laborious physical exercise, except to obtain some advantage from it but who has any right.",
        img: Slider_home_31,
    },
    {
        tag: " Innovation at its Best",
        title: ["Building Tomorrow's", "Solutions with", "Today's Vision!"],
        desc: "We deliver cutting-edge strategies that empower businesses to grow faster, smarter, and more sustainably.",
        img: Slider_home_32,
    },
    {
        tag: " Trusted by Leaders",
        title: ["Transforming Ideas", "into Powerful", "Realities!.."],
        desc: "Our expert team partners with you to craft innovative solutions that drive measurable impact and lasting success.",
        img: Slider_home_33,
    },
];

export default function Home({ onSlideChange }) {

    const [current, setCurrent] = useState(0);
    const [animState, setAnimState] = useState("visible");
    const [imgFade, setImgFade] = useState(true);
    const [nextImgSrc, setNextImgSrc] = useState("");
    const timerRef = useRef(null);
    const animating = useRef(false);

    const points = [
        "Our secret ingredients: curiosity, hard work, and good intentions.",
        "We are here to help you realize your potential and discover what's next.",
        "The future of our company is wide open and we're ready to tackle it.",
    ];

    useEffect(() => {
        onSlideChange && onSlideChange(slides[0].img);
    }, []);

    const goTo = (index) => {
        if (animating.current || index === current) return;
        animating.current = true;
        onSlideChange && onSlideChange(slides[index].img);
        setNextImgSrc(slides[index].img);
        setImgFade(false);
        setAnimState("leaving");
        setTimeout(() => {
            setCurrent(index);
            setAnimState("entering");
            setTimeout(() => {
                setAnimState("visible");
                setImgFade(true);
                animating.current = false;
            }, 50);
        }, 380);
    };
    const testimonialsData = [
  {
    name: "Jessica M.",
    role: "Operations Director, Retail Hub",
    text: "Trinity TX Consulting transformed our digital strategy with their custom software development services. Their team is professional, attentive, and always goes above and beyond. We’re extremely satisfied with the results!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BKPyVgwi0Gm130HqeOGysQRnB56argEQMA&s",
  },
  {
    name: "Rahul Sharma",
    role: "CEO, TechNova",
    text: "Their development team delivered a scalable and high-performance solution. Communication was excellent and deadlines were always met.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg",
  },
  {
    name: "Anita Verma",
    role: "Marketing Head, GrowthX",
    text: "Amazing experience working with them. They understood our requirements perfectly and executed beyond expectations.",
    image: "https://static.vecteezy.com/system/resources/previews/026/497/723/large_2x/businessman-on-isolated-png.png",
  },
];

  
  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

    const next = () => goTo((current + 1) % slides.length);
    const prev = () => goTo((current - 1 + slides.length) % slides.length);

    const resetTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(next, 4000);
    };

    useEffect(() => {
        timerRef.current = setInterval(() => {
            if (!animating.current) {
                const nxt = (current + 1) % slides.length;
                goTo(nxt);
            }
        }, 4000);
        return () => clearInterval(timerRef.current);
    }, [current]);

    const slide = slides[current];

    const textTransition =
        animState === "visible"
            ? "opacity-100 translate-y-0"
            : animState === "leaving"
                ? "opacity-0 -translate-y-5"
                : "opacity-0 translate-y-5";
    
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
        <div className="w-full font-sans overflow-hidden select-none">

            {/* Background Image Wrapper */}
            <div
                className="relative"
                style={{
                    backgroundImage: `url(${slide.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    transition: 'background-image 0.6s ease-in-out',
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50 z-0" />

                {/* Hero */}
                <div className="relative z-10 flex min-h-[500px]">

                    {/* Left: Pagination + Content */}
                    <div className="flex flex-[0_0_56%] items-center px-8 py-14 pl-10">

                        {/* Pagination */}
                        <div className="flex flex-col items-center mr-7 gap-0 shrink-0">
                            <button
                                onClick={() => { resetTimer(); prev(); }}
                                className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-blue-500 transition-colors"
                            />
                            <div className="flex flex-col items-center py-2 gap-2">
                                <span className="text-[15px] font-bold text-white tracking-wide leading-none">
                                    {String(current + 1).padStart(2, "0")}
                                </span>
                                <div className="w-[2px] h-10 bg-blue-500 rounded-full" />
                            </div>
                            <button
                                onClick={() => { resetTimer(); next(); }}
                                className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-blue-500 transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <polyline points="4,6 10,14 16,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Slide Content */}
                        <div className="flex-1 relative min-h-[500px] flex items-center pt-[130px]">
                            <div className={`transition-all duration-[420ms] ease-in-out ${textTransition}`}>
                                <p className="text-blue-400 text-[14px] font-semibold mb-3 tracking-wide">
                                    {slide.tag}
                                </p>
                                <h1 className="text-[42px] font-black text-white leading-[1.15] mb-4">
                                    {slide.title.map((line, i) => (
                                        <span key={i} className="block">{line}</span>
                                    ))}
                                </h1>
                                <p className="text-gray-300 text-[15px] leading-[1.7] mb-8 max-w-[460px]">
                                    {slide.desc}
                                </p>
                                <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-8 py-4 text-[15px] font-bold tracking-wide rounded-[2px]">
                                    Let's Get Started
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex-[0_0_44%]" />

                    {/* Progress Dots */}
                    <div className="absolute bottom-5 left-[calc(2.5rem+2rem+28px+8px)] flex gap-2 items-center">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { resetTimer(); goTo(i); }}
                                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-blue-500" : "w-2 bg-gray-400 hover:bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="relative bottom-25">
                <div className="flex gap-6 mt-6 px-10 justify-center max-w-6xl mx-auto">
                    <div className="border border-gray-200 bg-white shadow-xl p-6 mt-10 flex flex-col items-center text-center gap-4">
                        <div className="border border-black p-6 rounded-full flex items-center justify-center">
                            <Mail size={28} className="text-blue-600" />
                        </div>
                        <h1 className="font-semibold text-[18px]">Our Vision</h1>
                        <p className="text-gray-600 text-[13px] font-semibold leading-relaxed">
                            At Trinity TX Consulting, we believe in building long-term relationships with our clients. We are committed to providing exceptional service and support to ensure your satisfaction.
                        </p>
                        <div className="flex gap-4 items-center font-semibold">
                            <MoveUpRight size={20} />
                            <h1 className="font-semibold text-[18px]">Read More</h1>
                        </div>
                    </div>
                    <div className="border border-gray-200 bg-white shadow-xl p-6 mt-10 flex flex-col items-center text-center gap-4">
                        <div className="border border-black p-6 rounded-full flex items-center justify-center">
                            <Mail size={28} className="text-blue-600" />
                        </div>
                        <h1 className="font-semibold text-[18px]">Our Plan</h1>
                        <p className="text-gray-600 text-[13px] font-semibold leading-relaxed">
                            At Trinity TX Consultancy Informatics, we believe in building long-term relationships with our clients. We are committed to providing exceptional service and support to ensure your satisfaction.
                        </p>
                        <div className="flex gap-4 items-center font-semibold">
                            <MoveUpRight size={20} />
                            <h1 className="font-semibold text-[18px]">Read More</h1>
                        </div>
                    </div>
                    <div className="border border-gray-200 bg-white shadow-xl p-6 mt-10 flex flex-col items-center text-center gap-4">
                        <div className="border border-black p-6 rounded-full flex items-center justify-center">
                            <MailCheck size={28} className="text-blue-600" />
                        </div>
                        <h1 className="font-semibold text-[18px]">Design</h1>
                        <p className="text-gray-600 text-[13px] font-semibold leading-relaxed">
                            At Trinity TX Consulting, we believe in building long-term relationships with our clients. We are committed to providing exceptional service and support to ensure your satisfaction.
                        </p>
                        <div className="flex gap-4 items-center font-semibold">
                            <MoveUpRight size={20} />
                            <h1 className="font-semibold text-[18px]">Read More</h1>
                        </div>
                    </div>
                    <div className="border border-gray-200 bg-white shadow-xl p-6 mt-10 flex flex-col items-center text-center gap-4">
                        <div className="border border-black p-6 rounded-full flex items-center justify-center">
                            <Mail size={28} className="text-blue-600" />
                        </div>
                        <h1 className="font-semibold text-[18px]">Quality</h1>
                        <p className="text-gray-600 text-[13px] font-semibold leading-relaxed">
                            At Trinity TX Consulting, we believe in building long-term relationships with our clients. We are committed to providing exceptional service and support to ensure your satisfaction.
                        </p>
                        <div className="flex gap-4 items-center font-semibold">
                            <MoveUpRight size={20} />
                            <h1 className="font-semibold text-[18px]">Read More</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section className="px-8">
                <div className="max-w-6xl mx-auto flex gap-12 items-center">
                    <div className="relative flex-[0_0_42%] min-h-[480px]">
                        <div className="absolute left-[-40px] top-[50%] -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-gray-200/60" />
                        <div className="absolute left-[200px] top-0 w-[240px] h-[260px] overflow-hidden z-10">
                            <img src={img1} alt="consultant 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute left-0 top-[80px] z-20 bg-blue-500 text-white p-5 w-[190px]">
                            <p className="text-[36px] font-black leading-none">11<span className="text-[22px]">+</span></p>
                            <p className="text-[14px] font-semibold">Years</p>
                            <p className="text-[12px] mt-2 leading-snug">Experience in Consulting Service</p>
                        </div>
                        <div className="absolute left-[30px] top-[230px] w-[270px] h-[260px] overflow-hidden z-10">
                            <img src={img2} alt="consultant 2" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-[38px] font-black text-gray-900 leading-[1.2] mb-4">
                            The Trinity{" "}
                            <span className="text-blue-500">Management</span>
                            <br />Consultancy
                        </h2>
                        <p className="text-gray-500 text-[15px] leading-[1.8] mb-6 max-w-[500px]">
                            Captivated & demoralized by the charms of pleasure of the moment so
                            blinded desire, that they cannot foresee the pain and trouble frequently
                            occur that pleasures have to be repudiated annoyances accepted the wise
                            man therefore always holds in these matters.
                        </p>
                        <h3 className="text-[18px] font-black text-gray-900 mb-4">Focus on Results</h3>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {points.map((point, i) => (
                                <div key={i} className={`flex items-start gap-3 ${i === 2 ? "col-span-1" : ""}`}>
                                    <div className="mt-1 shrink-0 w-3 h-3 bg-blue-500 rotate-45" />
                                    <p className="text-gray-500 text-[14px] leading-[1.7]">{point}</p>
                                </div>
                            ))}
                        </div>
                        <a href="#" className="flex items-center gap-2 text-gray-900 font-bold text-[15px] border border-gray-300 w-fit px-4 py-3 hover:border-blue-500 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M7 17L17 7M7 7h10v10" />
                            </svg>
                            More About Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Awards */}
            {/* <h2 className="text-[40px] font-black text-center text-gray-900 leading-[1.2] mt-25">
                Our Awards & {" "}
                <span className="text-green-500"> Achievements</span>
            </h2>
            <h2 className="text-[20px] text-center text-gray-700 leading-[1.2] mt-5">
                Laborious physical exercise except obtain some advantage.
            </h2>

            <div className="flex gap-6 mt-6 px-10 justify-center max-w-7xl mx-auto">
                <div className="border border-gray-200 bg-white shadow-xl p-6 mt-10 flex flex-col items-center text-center gap-4">
                    <div className="border border-black p-6 rounded-full flex items-center justify-center">
                        <Mail size={28} className="text-green-600" />
                    </div>
                    <h1 className="font-semibold text-[18px]">Our Vision</h1>
                    <p className="text-gray-600 text-[13px] font-semibold leading-relaxed">
                        At Trinity Consultancy Informatics, we believe in building long-term relationships with our clients. We are committed to providing exceptional service and support to ensure your satisfaction.
                    </p>
                    <div className="flex gap-4 items-center font-semibold">
                        <MoveUpRight size={20} />
                        <h1 className="font-semibold text-[18px]">Read More</h1>
                    </div>
                </div>
                <div className="border border-gray-200 bg-white shadow-xl p-6 mt-10 flex flex-col items-center text-center gap-4">
                    <div className="border border-black p-6 rounded-full flex items-center justify-center">
                        <Mail size={28} className="text-green-600" />
                    </div>
                    <h1 className="font-semibold text-[18px]">Our Plan</h1>
                    <p className="text-gray-600 text-[13px] font-semibold leading-relaxed">
                        At Trinity Consultancy Informatics, we believe in building long-term relationships with our clients. We are committed to providing exceptional service and support to ensure your satisfaction.
                    </p>
                    <div className="flex gap-4 items-center font-semibold">
                        <MoveUpRight size={20} />
                        <h1 className="font-semibold text-[18px]">Read More</h1>
                    </div>
                </div>
                <div className="border border-gray-200 bg-white shadow-xl p-6 mt-10 flex flex-col items-center text-center gap-4">
                    <div className="border border-black p-6 rounded-full flex items-center justify-center">
                        <MailCheck size={28} className="text-green-600" />
                    </div>
                    <h1 className="font-semibold text-[18px]">Design</h1>
                    <p className="text-gray-600 text-[13px] font-semibold leading-relaxed">
                        At Trinity Consultancy Informatics, we believe in building long-term relationships with our clients. We are committed to providing exceptional service and support to ensure your satisfaction.
                    </p>
                    <div className="flex gap-4 items-center font-semibold">
                        <MoveUpRight size={20} />
                        <h1 className="font-semibold text-[18px]">Read More</h1>
                    </div>
                </div>
                <div className="border border-gray-200 bg-white shadow-xl p-6 mt-10 flex flex-col items-center text-center gap-4">
                    <div className="border border-black p-6 rounded-full flex items-center justify-center">
                        <Mail size={28} className="text-green-600" />
                    </div>
                    <h1 className="font-semibold text-[18px]">Quality</h1>
                    <p className="text-gray-600 text-[13px] font-semibold leading-relaxed">
                        At Trinity Consultancy Informatics, we believe in building long-term relationships with our clients. We are committed to providing exceptional service and support to ensure your satisfaction.
                    </p>
                    <div className="flex gap-4 items-center font-semibold">
                        <MoveUpRight size={20} />
                        <h1 className="font-semibold text-[18px]">Read More</h1>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <a href="#" className="flex items-center gap-2 text-gray-900 font-bold text-[19px] w-fit px-4 py-3 hover:border-green-500 transition-colors">
                    <MoveUpRight size={20} /> More About Us
                </a>
            </div> */}

    

    <section className="bg-gray-100 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Testimonials
      </h2>

      <div className="max-w-5xl mx-auto relative">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          
          {/* LEFT IMAGE + ORANGE PANEL */}
          <div className="bg-blue-300 md:w-1/3 flex items-center justify-center p-8">
            <img
              src={testimonialsData[current].image}
              alt="user"
              className="w-40 h-40 rounded-full border-4 border-white object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-2/3 p-8">
            <p className="text-gray-700 leading-relaxed text-[16px]">
              {testimonialsData[current].text}
            </p>

            {/* STARS */}
            <div className="flex gap-1 text-blue-500 mt-4 text-xl">
              ★ ★ ★ ★ ★
            </div>

            {/* NAME */}
            <h3 className="mt-4 text-xl font-bold text-gray-800">
              {testimonialsData[current].name}
            </h3>

            <p className="text-blue-500 text-sm">
              {testimonialsData[current].role}
            </p>
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-blue-500 scale-125" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>

            {/* Industries */}
            <h2 className="text-[40px] font-black text-gray-900 leading-[1.2] ml-28 mt-15">
                Major {" "}
                <span className="text-blue-500">  Industries </span> We Served
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <div className="bg-white overflow-hidden shadow-lg">
                    <img src={teamlogo1} alt="IT" className="w-full h-60 object-cover" />
                    <div className="p-6 text-center">
                        <h3 className="text-lg font-bold text-[#123E6B]">IT Consulting</h3>
                        <hr className="mt-4 border border-gray-200" />
                        <div className="flex items-center justify-center gap-4 mt-2">
                            <MoveUpRight size={20} />
                            <h1 className="font-semibold text-[13px]">Read More</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg">
                    <img src={teamlogo2} alt="Product" className="w-full h-60 object-cover" />
                    <div className="p-6 text-center">
                        <h3 className="text-lg font-bold text-[#123E6B]">Product Engineering</h3>
                        <hr className="mt-4 border border-gray-200" />
                        <div className="flex items-center justify-center gap-4 mt-2">
                            <MoveUpRight size={20} />
                            <h1 className="font-semibold text-[13px]">Read More</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg">
                    <img src={teamlogo3} alt="Database" className="w-full h-60 object-cover" />
                    <div className="p-6 text-center">
                        <h3 className="text-lg font-bold text-[#123E6B]">Database Management</h3>
                        <hr className="mt-4 border border-gray-200" />
                        <div className="flex items-center justify-center gap-4 mt-2">
                            <MoveUpRight size={20} />
                            <h1 className="font-semibold text-[13px]">Read More</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg">
                    <img src={teamlogo4} alt="Mobile" className="w-full h-60 object-cover" />
                    <div className="p-6 text-center">
                        <h3 className="text-lg font-bold text-[#123E6B]">Mobile Development</h3>
                        <hr className="mt-4 border border-gray-200" />
                        <div className="flex items-center justify-center gap-4 mt-2">
                            <MoveUpRight size={20} />
                            <h1 className="font-semibold text-[13px]">Read More</h1>
                        </div>
                    </div>
                </div>
            </div>


            {/* contact us */}
        <section>
              <div className="relative w-full mt-20">
                
                {/* Background Image */}
                <img
                  src={contactlogo}
                  alt="Contact Banner"
                  className="w-full h-[600px] object-cover"
                />
        
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
        
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        
                  <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
                    Contact <span className="text-blue-400">Us</span>
                  </h1>
        
                  <form onSubmit={handleSubmit} className="w-full max-w-3xl">
                    <div className="p-6 rounded-xl">
        
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="px-4 py-3 rounded-full bg-white"
                          placeholder="Name"
                          required
                        />
        
                        <input
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="px-4 py-3 rounded-full bg-white"
                          placeholder="Email"
                          required
                        />
        
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="px-4 py-3 rounded-full bg-white"
                          placeholder="Phone"
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
                          placeholder="Message"
                          className="col-span-2 px-4 py-3 rounded-xl bg-white h-32"
                          required
                        />
        
                      </div>
        
                      {/* Submit Button */}
                      <div className="mt-6 text-center">
                        <button
                          type="submit"
                          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
                        >
                          Submit
                        </button>
                      </div>
        
                      {/* Status Messages */}
                      <div className="mt-4 text-center">
                        {status === "submitting" && (
                          <p className="text-white">Submitting...</p>
                        )}
                        {status === "success" && (
                          <p className="text-blue-400 font-semibold">
                            ✅ Message sent successfully!
                          </p>
                        )}
                        {status === "error" && (
                          <p className="text-red-400 font-semibold">
                            ❌ Failed to send message. Try again.
                          </p>
                        )}
                      </div>
        
                    </div>
                  </form>
        
                </div>
              </div>
            </section>

           

        </div>
    );
}
