import React from "react";
import ProjectCard from "./ProjectCard";
import quiz from "../../assets/quiz.jpg";
import todolist from "../../assets/todolist.jpg";
import wheather from "../../assets/wheather.jpg";

const Projects = () => {

 const projects = [
  {
    title: "Quiz Website",
    image: quiz,
    desc: "This is a Quiz website created in React.",
    demoLink: "https://wheather-app-iota-roan.vercel.app/"
  },
  {
    title: "To Do List",
    image: todolist,
    desc: "This is a ToDo List created in React with Tailwind CSS.",
    demoLink: "https://todo-list-theta-pink.vercel.app/"
  },
  {
    title: "Weather Website",
    image: wheather,
    desc: "This is a Weather website created in React.",
    demoLink: "https://dev-wheather.vercel.app/"
  }
];
  

  return (
    <section id="Projects"  className="bg-[#020617] py-20 px-6 md:px-10">
      <div  className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-white font-bold mb-12">Projects</h2>

        <div  className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              desc={project.desc}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;