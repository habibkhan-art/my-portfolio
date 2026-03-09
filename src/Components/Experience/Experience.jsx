import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaAmazon } from "react-icons/fa";
import { SiFigma, SiMongodb, SiRedis, SiNetflix } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const Experience = () => {
  return (
    <section id="Experience" className="bg-[#0f172a] text-white py-20 px-10">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SKILLS */}
          <div className="grid grid-cols-3 gap-6">

            <div className="bg-[#1e293b] h-20 w-20 flex items-center justify-center rounded-xl hover:scale-110 transition">
              <FaHtml5 size={40} className="text-orange-500"/>
            </div>

            <div className="bg-[#1e293b] h-20 w-20 flex items-center justify-center rounded-xl hover:scale-110 transition">
              <FaCss3Alt size={40} className="text-blue-500"/>
            </div>

            <div className="bg-[#1e293b] h-20 w-20 flex items-center justify-center rounded-xl hover:scale-110 transition">
              <FaReact size={40} className="text-cyan-400"/>
            </div>

            <div className="bg-[#1e293b] h-20 w-20 flex items-center justify-center rounded-xl hover:scale-110 transition">
              <FaJs size={40} className="text-yellow-400"/>
            </div>

            <div className="bg-[#1e293b] h-20 w-20 flex items-center justify-center rounded-xl hover:scale-110 transition">
              <SiFigma size={40} className="text-pink-500"/>
            </div>

            <div className="bg-[#1e293b] h-20 w-20 flex items-center justify-center rounded-xl hover:scale-110 transition">
              <SiMongodb size={40} className="text-green-500"/>
            </div>

            <div className="bg-[#1e293b] h-20 w-20 flex items-center justify-center rounded-xl hover:scale-110 transition">
              <SiRedis size={40} className="text-red-500"/>
            </div>

          </div>

          {/* RIGHT EXPERIENCE */}
          <div className="space-y-6">

            <div className="bg-[#1e293b] p-6 rounded-xl flex gap-4 items-start hover:scale-[1.02] transition">
              <FcGoogle size={40}/>
              <div>
                <h3 className="font-semibold text-lg">Software Engineer, Google</h3>
                <p className="text-gray-400 text-sm">Sept 2023 - Present</p>
                <ul className="text-gray-300 text-sm mt-2 list-disc ml-4">
                  <li>Work as software developer</li>
                  <li>Senior SDE developer</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1e293b] p-6 rounded-xl flex gap-4 items-start hover:scale-[1.02] transition">
              <SiNetflix size={40} className="text-red-600"/>
              <div>
                <h3 className="font-semibold text-lg">Software Engineer, Netflix</h3>
                <p className="text-gray-400 text-sm">Sept 2023 - Present</p>
                <ul className="text-gray-300 text-sm mt-2 list-disc ml-4">
                  <li>Work as software developer</li>
                  <li>Senior SDE developer</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1e293b] p-6 rounded-xl flex gap-4 items-start hover:scale-[1.02] transition">
              <FaAmazon size={40} className="text-yellow-500"/>
              <div>
                <h3 className="font-semibold text-lg">Software Engineer, Amazon</h3>
                <p className="text-gray-400 text-sm">Sept 2023 - Present</p>
                <ul className="text-gray-300 text-sm mt-2 list-disc ml-4">
                  <li>Work as software developer</li>
                  <li>Senior SDE developer</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;