import React from "react";
import logo from '../assets/Blog-Banner.jpg';

function Blogs() {
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
                    Our <span className="text-blue-500 ml-3">Blogs</span>
                </h1>
            </div>
        </div>
    );
}

export default Blogs;