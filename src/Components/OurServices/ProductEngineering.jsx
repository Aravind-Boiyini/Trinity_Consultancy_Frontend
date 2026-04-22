import logo from "../../assets/About-Banner.jpg";
import img1 from "../../assets/About-Banner.jpg";
import img2 from "../../assets/About-Banner.jpg";
import teamoflogo from "../../assets/IT-Image.jpg";
import teamoflogo1 from "../../assets/Product-Image.jpg";
import { Mail, Trophy } from "lucide-react";
import { MailCheck } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import contactlogo from "../../assets/About-Banner.jpg";




function ProductEngineering() {
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
        Database <span className="text-green-500">Management</span>
        </h1>
      </div>

      {/* Section 1 */}
<section className="bg-[#0B1F3A] text-white py-20 px-8">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-[36px] font-extrabold leading-snug mb-6">
            Why Should You Pay{" "}
            <span className="text-green-500">Attention To</span>{" "}
            Your <span className="text-green-500">Database?</span>
          </h2>

          <p className="text-gray-300 text-[15px] leading-relaxed mb-5">
            Databases are recognized as valuable assets by organizations storing important
            information about business operations, customers, finances and much more.
            These large repositories of commercially sensitive information need to be taken
            seriously – just imagine losing 2 years of financial transactions because your
            database was poorly maintained. What if you are dealing with someone else’s
            data, for example patient details? The problem just gets bigger.
          </p>

          <p className="text-gray-300 text-[15px] leading-relaxed mb-5">
            The ramifications of inadequate database management practices can result in
            businesses falling over or at the very least cause drops in productivity. The
            results are pretty much always the same: lost money, lost business opportunities,
            and lost customers.
          </p>

          <p className="text-gray-300 text-[15px] leading-relaxed">
            The bottom-line is that database maintenance is important. But in itself,
            database maintenance has to be smart and strategic: you cannot simply take off
            your production database for a 10-hour check-up. Your customers will not tolerate
            such long delays – they expect to be able to access the system around the clock
            with almost instant responses. For businesses, this also knocks down the revenues.
            Coming back to Amazon, 10 hours of maintenance would tally up to $18.6 million.
          </p>

          <h2 className="text-[32px] font-extrabold mt-10">
            The Gunesh{" "}
            <span className="text-green-500">Technologies Method</span>
          </h2>

          <p className="text-gray-300 text-[15px] leading-relaxed mt-4">
            The team at Gunesh Technologies has a solid foundation in database design,
            implementation and management. We can ensure that your database systems are
            running smoothly giving your business the best results possible.
          </p>

          <p className="text-gray-300 text-[15px] leading-relaxed mt-4">
            Contact us to explore how our first-class database services can help your
            organisation. In the meantime, click here to read about some of our customers’
            success stories.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-[36px] font-extrabold leading-snug mb-6">
            Database{" "}
            <span className="text-green-500">
              Management & Uses
            </span>
          </h2>

          <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
            So what’s the solution? Essentially, database management and maintenance
            should be a structured, well planned and executed exercise, causing minimal
            disruptions to system availability. The key objectives of database management
            are:
          </p>

          <ul className="space-y-4 text-gray-300 text-[15px] leading-relaxed">
            <li>• <b className="text-white">Stable performance:</b> Maintain the database at optimal performance.</li>
            <li>• <b className="text-white">Safety:</b> Protect your database from unauthorized access, data leakage or data loss.</li>
            <li>• <b className="text-white">Database integrity:</b> Detect database inconsistencies and corrupt data caused by hardware or software errors.</li>
            <li>• <b className="text-white">Business Compliance:</b> Identify database structures, relationships and data that do not conform to business rules or are erroneous.</li>
            <li>• <b className="text-white">Disaster recovery:</b> Support disaster recovery planning through data and transaction log back-ups.</li>
            <li>• <b className="text-white">Downtime:</b> Minimize database downtime for maximum availability.</li>
          </ul>

          <h3 className="text-lg font-bold mt-8 mb-4">
            You should consider investing in database management, if:
          </h3>

          <ul className="space-y-3 text-gray-300 text-[15px] leading-relaxed">
            <li>• You rely on databases to support your organization, but lack an internal IT capability.</li>
            <li>• You want to improve disaster recovery planning through off-site back-ups.</li>
            <li>• You want an independent assessment of your database management practices.</li>
            <li>• You want to improve your overall database performance using industry-grade methods and techniques.</li>
          </ul>
        </div>

      </div>
    </section>

    <section className="bg-[#0B1F3A] py-20 px-8 mt-20 text-white relative overflow-hidden">

  {/* OPTIONAL DECOR (like your design) */}
  <div className="absolute top-0 left-0 w-40 h-40 border-2 border-green-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-500 rounded-full translate-x-1/2 translate-y-1/2"></div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-[36px] font-extrabold mb-8">
        Our <span className="text-green-500">Approach:</span>
      </h2>

      {/* ITEM 1 */}
      <div className="mb-6">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <span className="text-green-500">✔</span> Ideation & Conceptualization
        </h3>
        <p className="text-gray-300 mt-2 text-[15px] leading-relaxed">
          We start by collaborating with you to understand your vision, target audience,
          and business goals. Our team conducts in-depth market research and feasibility
          studies to shape a clear product roadmap.
        </p>
      </div>

      {/* ITEM 2 */}
      <div className="mb-6">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <span className="text-green-500">✔</span> Design & Development
        </h3>
        <p className="text-gray-300 mt-2 text-[15px] leading-relaxed">
          Our skilled engineers and designers use the latest technologies to create
          intuitive user experiences and robust architectures. Whether it’s web, mobile,
          or enterprise software, we focus on scalability, security, and performance.
        </p>
      </div>

      {/* ITEM 3 */}
      <div className="mb-6">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <span className="text-green-500">✔</span> Testing & Quality Assurance
        </h3>
        <p className="text-gray-300 mt-2 text-[15px] leading-relaxed">
          We implement rigorous testing processes to ensure your product is bug-free,
          reliable, and optimized for seamless functionality guaranteeing a smooth user
          experience.
        </p>
      </div>

      {/* ITEM 4 */}
      <div>
        <h3 className="font-bold text-lg flex items-center gap-2">
          <span className="text-green-500">✔</span> Deployment & Support
        </h3>
        <p className="text-gray-300 mt-2 text-[15px] leading-relaxed">
          From product launch to post-deployment support, we provide continuous monitoring,
          updates, and enhancements to keep your product competitive and future-proof.
        </p>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div>
      <h2 className="text-[36px] font-extrabold mb-8">
        Why Choose <span className="text-green-500">Gunesh Technologies?</span>
      </h2>

      <ul className="space-y-4 text-gray-300 text-[15px] leading-relaxed">
        <li>
          • End-to-End Product Development – From concept to launch, we handle every stage of the product lifecycle.
        </li>
        <li>
          • Agile & Scalable Solutions – Our flexible development processes adapt to your evolving business needs.
        </li>
        <li>
          • Innovation-Driven Approach – We leverage the latest technologies to build products that stand out.
        </li>
      </ul>
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

    </div>
  );
}

export default ProductEngineering;