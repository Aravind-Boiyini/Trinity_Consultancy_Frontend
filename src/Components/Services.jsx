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
    return (
        <div>
            <div className="relative w-full">

                <img
                    src={logo}
                    alt="Home Banner"
                    className="w-full h-full object-cover"
                />

                {/* Overlay Text */}
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-extrabold">
                    Our <span className="text-green-600"> Services</span>
                </h1>
            </div>

            <div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white overflow-hidden shadow-lg rounded-lg">
                        <img src={teamlogo1} alt="IT" className="w-full h-60 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-bold text-[#123E6B]">IT Consulting</h3> <p className="mt-2 text-sm ">Yes, we can! At Trinity Consultancy, we offer expert IT consulting by analyzing your business needs and providing tailored.</p>

                            <hr className="mt-4 border border-gray-200" />
                            <div onClick={() => navigate("/ItConsultancy")} className="flex items-center justify-center gap-4 mt-2 border border-gray-200 w-50 mx-auto rounded-full bg-green-500 py-3">
                                <MoveUpRight size={20} className="text-white" />
                                <h1 className="font-semibold text-[16px] text-white">Read More</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-lg rounded-lg">
                        <img src={teamlogo2} alt="Product" className="w-full h-60 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-bold text-[#123E6B]">Product Engineering</h3>
                            <p className="mt-2 text-sm ">Yes, we can! At Trinity Consultancy, we offer expert IT consulting by analyzing your business needs and providing tailored.</p>

                            <hr className="mt-4 border border-gray-200" />
                            <div onClick={() => navigate("/ProductEngineering")} className="flex items-center justify-center gap-4 mt-2 border border-gray-200 w-50 mx-auto rounded-full bg-green-500 py-3">
                                <MoveUpRight size={20} className="text-white" />
                                <h1 className="font-semibold text-[16px] text-white">Read More</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-lg rounded-lg">
                        <img src={teamlogo3} alt="Database" className="w-full h-60 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-bold text-[#123E6B]">Database Management</h3>
                            <p className="mt-2 text-sm ">Yes, we can! At Trinity Consultancy, we offer expert IT consulting by analyzing your business needs and providing tailored.</p>

                            <hr className="mt-4 border border-gray-200" />
                            <div onClick={() => navigate("/DatabaseManagement")} className="flex items-center justify-center gap-4 mt-2 border border-gray-200 w-50 mx-auto rounded-full bg-green-500 py-3">
                                <MoveUpRight size={20} className="text-white" />
                                <h1 className="font-semibold text-[16px] text-white">Read More</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-lg rounded-lg">
                        <img src={teamlogo4} alt="Mobile" className="w-full h-60 object-cover" />
                        <div onClick={()=> navigate("/MobileDevelopment")} className="p-6 text-center">
                            <h3 className="text-lg font-bold text-[#123E6B]">Mobile Development</h3>
                            <p className="mt-2 text-sm ">Yes, we can! At Trinity Consultancy, we offer expert IT consulting by analyzing your business needs and providing tailored.</p>

                            <hr className="mt-4 border border-gray-200" />
                            <div className="flex items-center justify-center gap-4 mt-2  border border-gray-200 w-50 mx-auto rounded-full bg-green-500 py-3">
                                <MoveUpRight size={20} className="text-white" />
                                <h1 className="font-semibold text-[16px] text-white">Read More</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-lg rounded-lg">
                        <img src={teamlogo1} alt="IT" className="w-full h-60 object-cover" />
                        <div onClick={() => navigate("/ItDataEngineering")} className="p-6 text-center">
                            <h3 className="text-lg font-bold text-[#123E6B]">IT Data Engineering</h3>
                            <p className="mt-2 text-sm ">Yes, we can! At Trinity Consultancy, we offer expert IT consulting by analyzing your business needs and providing tailored.</p>

                            <hr className="mt-4 border border-gray-200" />
                            <div className="flex items-center justify-center gap-4 mt-2  border border-gray-200 w-50 mx-auto rounded-full bg-green-500 py-3">
                                <MoveUpRight size={20} className="text-white" />
                                <h1 className="font-semibold text-[16px] text-white">Read More</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-lg rounded-lg">
                        <img src={teamlogo2} alt="Product" className="w-full h-60 object-cover" />
                        <div onClick={() => navigate("/SoftwareSupport")} className="p-6 text-center">
                            <h3 className="text-lg font-bold text-[#123E6B]">Software Support</h3>
                            <p className="mt-2 text-sm ">Yes, we can! At Trinity Consultancy, we offer expert IT consulting by analyzing your business needs and providing tailored.</p>
                            <hr className="mt-4 border border-gray-200" />
                            <div className="flex items-center justify-center gap-4 mt-2 border border-gray-200 w-50 mx-auto rounded-full bg-green-500 py-3">
                                <MoveUpRight size={20} className="text-white" />
                                <h1 className="font-semibold text-[16px] text-white">Read More</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-lg rounded-lg">
                        <img src={teamlogo3} alt="Database" className="w-full h-60 object-cover" />
                        <div onClick={() => navigate("/WebDevelopment")} className="p-6 text-center">
                            <h3 className="text-lg font-bold text-[#123E6B]">Web Development</h3>
                            <p className="mt-2 text-sm ">Yes, we can! At Trinity Consultancy, we offer expert IT consulting by analyzing your business needs and providing tailored.</p>

                            <hr className="mt-4 border border-gray-200" />
                            <div className="flex items-center justify-center gap-4 mt-2 border border-gray-200 w-50 mx-auto rounded-full bg-green-500 py-3">
                                <MoveUpRight size={20} className="text-white" />
                                <h1 className="font-semibold text-[16px] text-white">Read More</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;