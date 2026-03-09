import React from "react";
import { FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-8 px-6 md:px-20 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Section */}
        <div>
          <h2 className="text-white text-xl font-bold">Habib Ullah</h2>
          <p className="text-gray-400 text-sm mt-1">
            Frontend Developer | React & Tailwind CSS
          </p>
        </div>

        {/* Center / Navigation Links */}
        <div className="flex gap-6">
          <a href="#Home" className="hover:text-white transition duration-300">Home</a>
          <a href="#Projects" className="hover:text-white transition duration-300">Projects</a>
          <a href="#Contact" className="hover:text-white transition duration-300">Contact</a>
        </div>

        {/* Right Section / Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/your-linkedin-id" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/your-facebook-id" // Replace with your Facebook
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaFacebook />
          </a>

          <a
            href="mailto:your-email@gmail.com" // Replace with your Gmail
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Habib Ullah. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;