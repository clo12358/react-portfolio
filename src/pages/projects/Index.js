import { useState } from "react";
import {  Link  } from "react-router-dom";
import projectsJSON from "../../data/projects.json";

const Index = () => {
  const [projectsList, setProjectsList] = useState(projectsJSON);

  const projectCards = projectsList.map((project, index) => {
    return (
      <div
        key={index}
        className="flex flex-col sm:flex-row bg-white rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out p-6 sm:p-8 gap-8 sm:gap-12 font-light"
      >
        {/* Image Section */}
        <div className="w-full sm:w-[50%] h-[250px] sm:h-[400px] bg-[#e0e0e0] rounded-2xl overflow-hidden ">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-2xl transition-transform transform hover:scale-110 duration-300 ease-in-out"
          />
        </div>

        {/* Content Section */}
        <div className="w-full sm:w-[50%] flex flex-col justify-center items-center sm:items-start gap-6 sm:gap-8">
          {/* Title */}
          <div className="text-primary text-3xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-left">
            {project.title}
          </div>

          {/* Categories */}
          <div className="px-2 py-1 bg-secondary rounded-[15px] text-white text-xs sm:text-sm lg:text-base font-semibold text-center sm:text-left">
            {project.categories}
          </div>

          {/* Description */}
          <div className="text-gray-700 text-sm sm:text-base lg:text-lg font-normal text-center sm:text-left">
            {project.description}
          </div>

          {/* Button */}
          <Link to={`/projects/${project.slug}`} className="btn btn-primary text-white">View Project</Link>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="min-h-screen px-6 sm:px-12 lg:px-16 py-12 bg-[#fafafa] flex flex-col justify-center items-center">
        <div className="w-full max-w-screen-lg flex flex-col gap-12">
          {projectCards}
        </div>
      </div>
    </>
  );
};

export default Index;
