import React from "react";
import habib from "../../assets/habib.jpeg";
import Textchange from "../../Textchange"; 

const Home = () => {
  return (
    <div
      id="Home"
      className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 gap-10"
    >
      {/* Left Content */}
      <div className="md:w-2/4 flex flex-col gap-5 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tighter ">
          <Textchange />
        </h1>

        <p className="text-sm md:text-2xl tracking-tight">
          I am Habib Ullah, a passionate React Frontend Developer. I build
          modern, responsive, and interactive websites using React, JavaScript,
          and Tailwind CSS.
        </p>

       <button
  onClick={() => {
    const contactSection = document.getElementById("Contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  }}
  className="mt-5 w-40 bg-amber-600 text-white text-sm md:text-lg py-2 px-4 md:py-3 md:px-6 font-bold rounded-3xl  hover:opacity-85 hover:scale-105 transition duration-300 bg-amber-500"
>
  Contact Me
</button>
      </div>

      {/* Right Image */}
      <div className="md:w-2/4 flex justify-center">
        <img
          className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover"
          src={habib}
          alt="Habib Ullah"
        />
      </div>
    </div>
  );
};

export default Home;