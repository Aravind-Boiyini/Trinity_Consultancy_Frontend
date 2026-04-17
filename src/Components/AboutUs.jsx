import React from "react";
import logo from '../assets/About-Banner.jpg';
import img1 from '../assets/About-Banner.jpg';
import img2 from '../assets/About-Banner.jpg';
import teamoflogo from '../assets/IT-Image.jpg';
import teamoflogo1 from '../assets/Product-Image.jpg';
import { Mail, Trophy } from "lucide-react";
import { MailCheck } from "lucide-react";
import { MoveUpRight } from "lucide-react";




function AboutUs() {

    const points = [
        "Our secret ingredients: curiosity, hard work, and good intentions.",
        "We are here to help you realize your potential and discover what's next.",
        "The future of our company is wide open and we're ready to tackle it.",
    ];
    return (
        <div >
            <div className="relative w-full">

                <img
                    src={logo}
                    alt="Home Banner"
                    className="w-full h-full object-cover"
                />

                {/* Overlay Text */}
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-extrabold">
                    About <span className="text-green-500"> Us</span>
                </h1>
            </div>
            {/* <div className="max-w-8xl mx-auto flex justify-center items-center relative -top-30">
                <div className="bg-[#123E6B] py-16 px-4 md:px-10 relative overflow-hidden rounded-4xl">

                    
                    <div className="absolute top-0 left-0 w-48 h-48 border-2 border-orange-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 border-2 border-orange-400 rounded-full translate-x-1/2 translate-y-1/2"></div>


                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Who <span className="text-orange-500">We Are</span>
                        </h2>

                        <p className="mt-4 text-sm md:text-base leading-relaxed">
                            At Gunesh Technologies, we are a dynamic IT consulting and development firm
                            specializing in web development, software solutions, database design, and
                            cloud management. Our mission is to provide innovative, scalable, and
                            cost-effective IT solutions that empower businesses to thrive in the
                            digital era.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={logo}
                                alt="Who We Are"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-lg font-bold text-[#123E6B]">Who We Are</h3>
                                <p className="text-sm mt-3 text-gray-600 leading-relaxed">
                                    We are years old successfully running IT Consulting and Product
                                    Engineering like Database Management service providing company based
                                    in Hyderabad India.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={logo}
                                alt="Vision"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-lg font-bold text-[#123E6B]">Our vision</h3>
                                <p className="text-sm mt-3 text-gray-600 leading-relaxed">
                                    Our vision is to bring all the businesses online to grow them
                                    globally at very reasonable investment through IT Consulting and
                                    digital marketing services.
                                </p>
                            </div>
                        </div>

                     
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={logo}
                                alt="What We Do"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-lg font-bold text-[#123E6B]">What We Do</h3>
                                <p className="text-sm mt-3 text-gray-600 leading-relaxed">
                                    We help clients get online presence of their business and generate
                                    more leads through our top IT Consulting, Product Engineering,
                                    Database Management and few more services.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}

            {/* <div className=" md:px-10 bg-white">

              
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-30 items-center">

                    <div className="relative">

                       
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500 rounded-full z-0"></div>

                       
                        <img
                            src={logo}
                            alt="Main"
                            className="relative z-10 w-full h-[430px] object-cover rounded-2xl shadow-lg"
                        />

                        
                        <img
                            src={logo}
                            alt="Small"
                            className="absolute bottom-[-40px] right-[-20px] w-44 h-44 object-cover rounded-full border-8 border-white shadow-xl z-20"
                        />
                    </div>

                   
                    <div>

                        <h2 className="text-3xl md:text-3xl font-extrabold text-[#123E6B] leading-snug">
                            Get To Know Us{" "}
                            <span className="text-orange-500">A Little Better</span>
                        </h2>


                        <p className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed ">
                            Gunesh Technologies Informatics is global Digital Technology
                            developing company headquartered in Hyderabad, Telangana with offices
                            around the world. Gunesh Technologies Informatics, Inc. was formed to
                            provide professional web & mobile based services to businesses and
                            non-for-profit organizations. We offer a wide range of design and
                            development services that are all delivered using the latest and
                            greatest technologies with a personal experience.
                        </p>


                        <h3 className="mt-8 text-2xl md:text-3xl font-extrabold text-[#123E6B]">
                            Leaders, Engineers,{" "}
                            <span className="text-orange-500">Innovators</span>
                        </h3>


                        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                            Gunesh Technologies Informatics is an innovative team of engineers,
                            developers and technology experts. We specialize in Custom business
                            software, mobile application development, web design & development,
                            Database management, Reporting, Dashboards, BI, Digital marketing and
                            end to end IT strategy and consulting.
                        </p>

                    </div>
                </div>
            </div> */}

            <section className="px-8 mt-15">
                <div className="max-w-6xl mx-auto flex gap-12 items-center">
                    <div className="relative flex-[0_0_42%] min-h-[480px]">
                        <div className="absolute left-[-40px] top-[50%] -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-gray-200/60" />
                        <div className="absolute left-[200px] top-0 w-[240px] h-[260px] overflow-hidden z-10">
                            <img src={img1} alt="consultant 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute left-0 top-[80px] z-20 bg-green-500 text-white p-5 w-[190px]">
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
                            <span className="text-green-500">*Management</span>
                            <br />Consultancy
                        </h2>
                        <p className="text-gray-500 text-[15px] leading-[1.8] mb-6 max-w-[500px]">
                            Beguiled & demoralized by the charms of pleasure of the moment so
                            blinded desire, that they cannot foresee the pain and trouble frequently
                            occur that pleasures have to be repudiated annoyances accepted the wise
                            man therefore always holds in these matters.
                        </p>
                        <h3 className="text-[18px] font-black text-gray-900 mb-4">Focus on Results</h3>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {points.map((point, i) => (
                                <div key={i} className={`flex items-start gap-3 ${i === 2 ? "col-span-1" : ""}`}>
                                    <div className="mt-1 shrink-0 w-3 h-3 bg-green-500 rotate-45" />
                                    <p className="text-gray-500 text-[14px] leading-[1.7]">{point}</p>
                                </div>
                            ))}
                        </div>
                        <a href="#" className="flex items-center gap-2 text-gray-900 font-bold text-[15px] border border-gray-300 w-fit px-4 py-3 hover:border-green-500 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M7 17L17 7M7 7h10v10" />
                            </svg>
                            More About Us
                        </a>
                    </div>
                </div>
            </section>

            <h2 className="text-[40px] font-black text-center text-gray-900 leading-[1.2] mt-20">
                Team of {" "}
                <span className="text-green-500"> * Proffesionals</span>
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <div className="bg-white overflow-hidden shadow-lg">
                    <img src={teamoflogo} alt="Who We Are" className="w-full h-60 object-cover" />
                    <div className="p-6">
                        <h3 className="text-md text-[#123E6B]">Ceo & Founder</h3>
                        <p className="text-xl font-bold mt-1 text-gray-600 leading-relaxed">John Doe</p>
                        <h3 className="text-md text-[#123E6B] mt-2 flex items-center gap-2"><Mail size={18} /> Info@trinityconsultancy.com</h3>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg">
                    <img src={teamoflogo1} alt="Vision" className="w-full h-60 object-cover" />
                    <div className="p-6">
                        <h3 className="text-sm text-[#123E6B]">Precident</h3>
                        <p className="text-xl font-bold mt-1 text-gray-600 leading-relaxed">Samuel Rowan</p>
                        <h3 className="text-md text-[#123E6B] mt-2 flex items-center gap-2"><Mail size={18} /> Info@trinityconsultancy.com</h3>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg">
                    <img src={teamoflogo} alt="Who We Are" className="w-full h-60 object-cover" />
                    <div className="p-6">
                        <h3 className="text-md text-[#123E6B]">Ceo & Founder</h3>
                        <p className="text-xl font-bold mt-1 text-gray-600 leading-relaxed">John Doe</p>
                        <h3 className="text-md text-[#123E6B] mt-2 flex items-center gap-2"><Mail size={18} /> Info@trinityconsultancy.com</h3>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg">
                    <img src={teamoflogo} alt="What We Do" className="w-full h-60 object-cover" />
                    <div className="p-6">
                        <h3 className="text-sm text-[#123E6B]">Vice Precident</h3>
                        <p className="text-xl font-bold mt-1 text-gray-600 leading-relaxed">Eleanor Alice</p>
                        <h3 className="text-md text-[#123E6B] mt-2 flex items-center gap-2"><Mail size={18} /> Info@trinityconsultancy.com</h3>

                    </div>
                </div>
            </div>

            <h2 className="text-[40px] font-black text-center text-gray-900 leading-[1.2] mt-25">
                Our Awards & {" "}
                <span className="text-green-500"> *Achievements</span>
            </h2>

            <div className="flex gap-6 mt-6 px-10 justify-center max-w-7xl mx-auto">
                <div className="border border-gray-200 bg-white shadow-xl p-6 mt-10 flex flex-col w-[100%] pb-10 h-full gap-4">
                    <div className="p-5 bg-gray-100 w-fit">
                        <Trophy size={28} className="text-green-600" />
                    </div>
                    <h3 className="font-semibold text-[17px] text-blue-500">MCA's AWARD</h3>
                    <h1 className="font-semibold text-[24px]">Best Consulting Firm In Germany</h1>
                   
                   <h1 className="font-semibold text-[17px] text-gray-600">2022</h1>
                </div>
                <div className="border border-gray-200 bg-white shadow-xl p-6 mt-10 flex flex-col w-[100%] pb-14 h-full gap-4">
                    <div className="p-5 bg-gray-100 w-fit">
                        <Trophy size={28} className="text-green-600" />
                    </div>
                    <h3 className="font-semibold text-[17px] text-blue-500">USA's AWARD</h3>
                    <h1 className="font-semibold text-[18px]">Best International Consulting Firm IN USA</h1>
                   
                    <h1 className="font-semibold text-[17px] text-gray-600">2023</h1>
                </div>
                <div className="border border-gray-200 bg-white shadow-xl p-6 mt-10 flex flex-col w-[100%] pb-14 h-full gap-4">
                    <div className="p-5 bg-gray-100 w-fit">
                        <Trophy size={28} className="text-green-600" />
                    </div>
                    <h1 className="font-semibold text-[18px] text-blue-500">Innovation Award</h1>
                    <h1 className="font-semibold text-[18px]">Best International Consulting Firm IN USA</h1>
                    <h1 className="font-semibold text-[17px] text-gray-600">2023</h1>
                   
                </div>
                <div className="border border-gray-200 bg-white shadow-xl p-6 mt-10 flex flex-col w-[100%] pb-14 h-full gap-4">
                    <div className="p-5 bg-gray-100 w-fit">
                        <Trophy size={28} className="text-green-600" />
                    </div>
                    <h1 className="font-semibold text-[18px] text-blue-500">UK AWARD</h1>
                    <h1 className="font-semibold text-[18px]">Best International Consulting Firm IN UK</h1>
                    <h1 className="font-semibold text-[17px] text-gray-600">2023</h1>
                </div>
            </div>


        </div>
    );
}

export default AboutUs;