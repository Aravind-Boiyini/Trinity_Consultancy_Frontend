import React from "react";
import logo from '../assets/About-Banner.jpg';
import teamlogo1 from '../assets/IT-Image.jpg';
import teamlogo2 from '../assets/Product-Image.jpg';
import teamlogo3 from '../assets/Database-Image.jpg';
import teamlogo4 from '../assets/Mobile-Image.jpg';
import { MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Services() {
    const navigate = useNavigate();

    // Data array to keep the code DRY and easy to maintain
    const servicesData = [
        { title: "IT Consulting", img: teamlogo1, path: "/ItConsultancy" },
        { title: "Product Engineering", img: teamlogo2, path: "/ProductEngineering" },
        { title: "Database Management", img: teamlogo3, path: "/DatabaseManagement" },
        { title: "Mobile Development", img: teamlogo4, path: "/MobileDevelopment" },
        { title: "IT Data Engineering", img: teamlogo1, path: "/ItDataEngineering" },
        { title: "Software Support", img: teamlogo2, path: "/SoftwareSupport" },
        { title: "Web Development", img: teamlogo3, path: "/WebDevelopment" },
        { title: "Cyber Security", img: teamlogo2, path: "/CyberSecurity" },
        { title: "Network Security", img: teamlogo2, path: "/NetworkSecurity" },
    ];

    return (
        <div className="w-full bg-gray-50 pb-20">
            {/* Banner Section */}
            <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden">
                <img
                    src={logo}
                    alt="Services Banner"
                    className="w-full h-full object-cover"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold flex flex-wrap justify-center">
                        Our <span className="text-blue-500 ml-3">Services</span>
                    </h1>
                </div>
            </div>

            {/* Services Grid Section */}
            <div className="px-6 md:px-12 lg:px-20 mt-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {servicesData.map((service, index) => (
                            <div 
                                key={index}
                                className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl flex flex-col"
                            >
                                <div className="relative h-56 w-full">
                                    <img 
                                        src={service.img} 
                                        alt={service.title} 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                                
                                <div className="p-6 flex flex-col flex-grow text-center">
                                    <h3 className="text-xl font-bold text-[#123E6B]">
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-grow">
                                        Yes, we can! At Trinity TX Consulting, we offer expert IT consulting by analyzing your business needs and providing tailored solutions.
                                    </p>

                                    <hr className="my-5 border-gray-100" />

                                    <button
                                        onClick={() => navigate(service.path)}
                                        className="flex items-center justify-center gap-3 w-full sm:w-4/5 mx-auto rounded-full bg-blue-600 hover:bg-blue-700 transition-colors py-3 text-white shadow-md active:scale-95"
                                    >
                                        <MoveUpRight size={18} />
                                        <span className="font-semibold text-base">Read More</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;