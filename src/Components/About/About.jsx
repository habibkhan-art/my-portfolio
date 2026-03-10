import React from "react";
import { FaArrowRight } from "react-icons/fa";
import habib from "../../assets/habib.jpeg";
const About = () => {
  return (
    <section id="About" className="bg-[#0f0f0f] text-white py-20 px-8 m-10">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-16">About</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img className="w-80 h-80"
              src={habib}
              alt=""
              
            />
          </div>

          {/* Right Content */}
          <div className="space-y-10">

            {/* Frontend */}
            <div className="flex gap-4">
              <FaArrowRight className="text-xl mt-2 text-gray-300" />
              <div>
                <h3 className="text-2xl font-semibold">
                  Frontend developer
                </h3>
                <p className="text-gray-400 mt-2">
                  I build modern and responsive user interfaces using
                  HTML, CSS, JavaScript, React and Tailwind CSS. My focus
                  is on creating smooth user experiences and clean design.
                </p>
              </div>
            </div>

            {/* Database */}
            <div className="flex gap-4">
              <FaArrowRight className="text-xl mt-2 text-gray-300" />
              <div>
                <h3 className="text-2xl font-semibold">
                  Database developer
                </h3>
                <p className="text-gray-400 mt-2">
                  I work with databases to store and manage application
                  data efficiently. I understand database structure,
                  queries and data relationships.
                </p>
              </div>
            </div>

            {/* Backend */}
            <div className="flex gap-4">
              <FaArrowRight className="text-xl mt-2 text-gray-300" />
              <div>
                <h3 className="text-2xl font-semibold">
                  Backend developer
                </h3>
                <p className="text-gray-400 mt-2">
                  I build server-side logic and APIs to power web
                  applications. I focus on performance, security and
                  scalable backend systems.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;