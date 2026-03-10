import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="bg-[#020617] text-white py-20 px-6 md:px-20">

      <div className="max-w-4xl mx-auto flex flex-col gap-10">

        <h2 className="text-4xl font-bold text-center">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-[#0f172a] p-8 rounded-2xl shadow-lg"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#1e293b] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#1e293b] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="bg-[#1e293b] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            required
          />

          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 transition duration-300 text-white py-3 rounded-xl font-semibold"
          >
            Send Message
          </button>

        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />

    </section>
  );
};

export default Contact;