import React from "react";
import logo from '../assets/careers-banner.jpg';



function Careers() {
    return (
        <div>
            <div className="relative w-full">

                <img
                    src={logo}
                    alt="Home Banner"
                    className="md:w-full md:h-full w-full h-100 object-cover"
                />

                {/* Overlay Text */}
                <h1 className="absolute inset-0 flex items-center justify-center text-white md:text-6xl text-4xl font-extrabold">
                    Our <span className="text-blue-500 ml-3">Careers</span>
                </h1>
            </div>

            <div className=" md:px-10 bg-white mt-20">


                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                    <div className="relative">

                        <img
                            src={logo}
                            alt="Main"
                            className="relative z-10 w-full h-[430px] object-cover rounded-2xl shadow-lg"
                        />

                    </div>
                    <div>

                        <h2 className="text-3xl md:text-3xl font-extrabold text-black leading-snug">
                            Get To Know Us{" "}
                            <span className="text-blue-500">A Little Better</span>
                        </h2>


                        <p className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed ">
                            Trinity TX Consulting is global Digital Technologydeveloping 
                            company headquartered in Keller, TX 76248  with offices around 
                            the world. Trinity TX Consulting Informatics, Inc. was formed to
                            provide professional web & mobile based services to businesses and
                            non-for-profit organizations. We offer a wide range of design and
                            development services that are all delivered using the latest and
                            greatest technologies with a personal experience.
                        </p>


                        {/* <h3 className="mt-8 text-2xl md:text-3xl font-extrabold text-[#123E6B]">
                            Leaders, Engineers,{" "}
                            <span className="text-blue-500">Innovators</span>
                        </h3> */}


                        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                            Trinity TX Consulting  is an innovative team of engineers,
                            developers and technology experts. We specialize in Custom business
                            software, mobile application development, web design & development,
                            Database management, Reporting, Dashboards, BI, Digital marketing and
                            end to end IT strategy and consulting.
                        </p>

                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center mt-20">
                <div className="w-full bg-[#123E6B] py-16 px-6 md:px-12">

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* LEFT SIDE */}
                        <div className="text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Why Work <span className="text-blue-400">With Us?</span>
                            </h2>

                            <ul className="space-y-4 text-[15px] leading-relaxed">
                                <li className="flex gap-3">
                                    <span>•</span>
                                    <span><strong>Innovative Projects</strong> – Work on exciting and impactful projects that challenge you to push the boundaries of technology.</span>
                                </li>

                                <li className="flex gap-3">
                                    <span>•</span>
                                    <span><strong>Professional Growth</strong> – Access to continuous learning opportunities and career advancement programs.</span>
                                </li>

                                <li className="flex gap-3">
                                    <span>•</span>
                                    <span><strong>Collaborative Environment</strong> – Be part of a supportive, team-oriented culture that values creativity and innovation.</span>
                                </li>

                                <li className="flex gap-3">
                                    <span>•</span>
                                    <span><strong>Work-Life Balance</strong> – We understand the importance of a healthy work-life balance and offer flexible work options.</span>
                                </li>

                                <li className="flex gap-3">
                                    <span>•</span>
                                    <span><strong>Competitive Compensation</strong> – Enjoy a competitive salary, benefits, and incentive programs.</span>
                                </li>
                            </ul>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Current <span className="text-blue-400">Openings</span>
                            </h2>

                            {/* Highlight Box */}
                            <div className=" inline-block px-4 py-2 text-sm font-semibold mb-6">
                                We are currently looking for talented professionals in the following areas:
                            </div>

                            <ul className="space-y-3 text-[15px]">
                                <li className="flex gap-3"><span>•</span> Software Engineers</li>
                                <li className="flex gap-3"><span>•</span> Web Developers</li>
                                <li className="flex gap-3"><span>•</span> Data Engineers</li>
                                <li className="flex gap-3"><span>•</span> Project Managers</li>
                                <li className="flex gap-3"><span>•</span> Cloud Solutions Architects</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <h1 className=" flex items-center justify-center text-black text-3xl font-extrabold mt-15">
                How To <span className="text-blue-500">Apply</span>


            </h1>
            <div className="text-center pb-10">
                <p className="font-normal mt-4">
                    Send your cover letter and resume to <span className="font-semibold">trinityconsultancy.com</span> and tell us how you can contribute to our team.
                </p>
                <p className="font-normal mt-2">Join us at Trinity TX Consulting and help shape the future of technology!</p>
            </div>

        </div>
    );
}

export default Careers;