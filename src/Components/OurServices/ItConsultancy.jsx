import logo from "../../assets/About-Banner.jpg";
import img1 from "../../assets/About-Banner.jpg";
import img2 from "../../assets/About-Banner.jpg";
import teamoflogo from "../../assets/IT-Image.jpg";
import teamoflogo1 from "../../assets/Product-Image.jpg";
import { Mail, Trophy } from "lucide-react";
import { MailCheck } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import contactlogo from "../../assets/About-Banner.jpg";




function ItConsultancy() {
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
          IT <span className="text-green-500">Consultancy</span>
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
            <h2 className="text-[32px] font-extrabold text-gray-800 mt-8">
              Can We? <span className="text-green-500">How Do We Do That?</span>
            </h2>

            <p className="mt-5 text-gray-600 text-[15px] leading-relaxed">
            Yes, we can! At Gunesh Technologies, we offer expert IT consulting by analyzing your business needs and providing tailored, scalable solutions. Our approach includes assessing your IT infrastructure, identifying challenges, and implementing the best strategies for growth. From web and software development to cloud management and database design, we ensure businesses get the right technology solutions to drive success, efficiency, and innovation.</p>

            


            <h2 className="text-[32px] font-extrabold text-gray-800 mt-8">
              Understanding Is <span className="text-green-500">Everything</span>
            </h2>

           <p className="mt-4 text-gray-600 text-[15px] leading-relaxed">
            At Gunesh Technologies, we believe that true success starts with deep understanding. Before offering a solution, we take the time to analyze business goals, industry challenges, and market trends. This helps us develop custom IT strategies that align with long-term objectives. By focusing on clarity, precision, and collaboration, we create solutions that not only solve problems but also drive sustainable growth and innovation./</p>
           
          </div>

        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gray-900 text-white py-20 px-8 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-[36px] font-extrabold">
              Business <span className="text-green-500">Analysis</span>
            </h2>

            <p className="mt-6 text-gray-300 text-[15px]">
            At Gunesh Technologies, we take a structured approach to business analysis for B2B projects. We start by conducting detailed discussions with stakeholders to understand their objectives, pain points, and challenges. Our team then evaluates existing workflows, IT infrastructure, and industry trends to develop data-driven insights. This ensures that our solutions are strategic, cost-effective, and aligned with business goals. By bridging the gap between technology and business needs, we deliver IT solutions that enhance productivity, streamline operations, and provide measurable ROI./</p>


          </div>

          <div>
            <h2 className="text-[36px] font-extrabold">
              Solution <span className="text-green-500">Design</span>
            </h2>

            <p className="mt-6 text-gray-300 text-[15px]">
            At Gunesh Technologies, solution design is about precision and innovation. We analyze your business needs, industry trends, and future scalability to create a robust IT strategy. Our experts provide custom software, cloud architecture, and database solutions that integrate seamlessly into your operations. Unlike one-size-fits-all approaches, we focus on efficiency, adaptability, and long-term impact. With a strong emphasis on collaboration and future-proofing, we ensure your business gets the best solution not just any solution.</p>


          </div>

        </div>
      </section>

      {/* ✅ Contact Section (separate, NOT inside above section) */}
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
              <input className= The data face certain no space Yadav Karunanidhi Space is cheap daughter"px-4 py-3 rounded-full bg-white" placeholder="Subject" />

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

    </div>
  );
}

export default ItConsultancy;