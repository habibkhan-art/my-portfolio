import React from "react";

const ProjectCard = ({ image, title, desc, demoLink, codeLink }) => {
  return (
    <div className="bg-[#1e293b] p-5 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      
      <img
        src={image}
        alt={title}
        className="rounded-xl mb-4 w-full h-48 object-cover"
      />

      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-300 text-sm mb-6">{desc}</p>

      <div className="flex gap-4">
        {demoLink && (
         <a
  href={demoLink}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-amber-600 px-4 py-2 rounded-full text-white hover:bg-amber-500 transition duration-300"
>
  Click
</a>
        )}

        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-4 py-2 rounded-full text-white hover:bg-green-600 transition-colors"
          >
            Source Code
          </a>
        )}
      </div>

    </div>
  );
};

export default ProjectCard;