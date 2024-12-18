import { useNavigate } from "react-router-dom";
import { useState } from "react";
import image01 from "../images/thumbnail_image0.png";
import projectsJSON from "../data/projects.json";

const Home = () => {
  const navigate = useNavigate();
  const [projectsList] = useState(projectsJSON);

  const projectCards = projectsList.map((project, index) => {
    return (
      <div
        key={index}
        className="flex flex-col sm:flex-row bg-white rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out p-4 sm:p-6 gap-4 sm:gap-8"
      >
        {/* Image Section */}
        <div className="w-full sm:w-[50%] h-full bg-[#e0e0e0] rounded-2xl overflow-hidden flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-2xl transition-transform transform hover:scale-110 duration-300 ease-in-out"
          />
        </div>

        {/* Content Section */}
        <div className="w-full sm:w-[50%] flex flex-col justify-center items-center sm:items-start gap-4 sm:gap-6">
          {/* Title */}
          <div className="text-primary text-2xl sm:text-3xl font-handwriting text-center sm:text-left">
            {project.title}
          </div>

          {/* Description */}
          <div className="text-gray-700 text-sm sm:text-base text-center sm:text-left">
            {project.description.length > 100
              ? `${project.description.substring(0, 100)}...`
              : project.description}
          </div>

          {/* Button */}
          <button
            className="btn btn-primary text-white"
            onClick={() => navigate(`/projects/${project.slug}`)}
          >
            View Project
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-accent px-6 sm:px-12 md:px-20 py-16 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start gap-6">
          <h1 className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-handwriting leading-tight">
            Hey, I’m Chloe
          </h1>
          <p className="text-secondary-content text-lg sm:text-xl md:text-2xl lg:text-3xl font-handwriting">
            A third-year Creative Computing student at IADT with a passion for
            design and development.
          </p>
          <button
            className="btn btn-primary btn-md no-animation text-accent px-6 py-3 rounded-md hover:bg-primary-content hover:text-white transition-all duration-300"
            onClick={() => navigate("/about")}
          >
            Get to know me ;)
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={image01}
            alt="Chloe"
            className="w-full h-auto max-h-[500px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-primary px-6 sm:px-12 md:px-20 lg:px-32 py-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-accent text-3xl sm:text-4xl md:text-5xl font-handwriting">
            Some of my projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectCards}
        </div>
      </div>
    </>
  );
};

export default Home;
