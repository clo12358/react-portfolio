import { useState } from "react";
import { Link } from "react-router-dom";
import projectsJSON from "../../data/projects.json";
import sketch01 from "../../images/sketch1.png";
import sketch02 from "../../images/sketch2.png";

const Index = () => {
  const [projectsList] = useState(projectsJSON);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-primary via-accent to-secondary overflow-hidden px-6 sm:px-12 lg:px-16 py-16 flex flex-col items-center">
      {/* Background Sketches */}
      <div className="absolute inset-0 opacity-10 z-0">
        <img
          src={sketch01}
          alt=""
          className="absolute top-20 left-10 w-72 rotate-12"
        />
        <img
          src={sketch02}
          alt=""
          className="absolute bottom-20 right-10 w-72 -rotate-12"
        />
      </div>

      {/* Page Title */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-handwriting text-white drop-shadow-lg">
          My Projects
        </h1>
        <p className="text-white/90 text-lg sm:text-xl mt-4 max-w-2xl mx-auto">
          Explore my journey through design and development — each project tells
          a unique story.
        </p>
      </div>

      {/* Projects List */}
      <div className="w-full max-w-screen-lg flex flex-col gap-12 relative z-10">
        {projectsList.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            {/* Window Header */}
            <div className="h-12 bg-[#f6f6f6] border-b border-[#e2e2e2] relative flex items-center px-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-sm"></div>
              </div>
            </div>

            {/* Window Content */}
            <div className="flex flex-col sm:flex-row p-8 sm:p-10 gap-8 sm:gap-14">
              {/* Single Static Image */}
              <div className="w-full sm:w-[45%] h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-md">
                <img
                  src={`/images/${project.images[0].url}`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="w-full sm:w-[55%] flex flex-col justify-center sm:items-start gap-6">
                {/* Title and Categories */}
                <div className="space-y-4 w-full">
                  <h2 className="text-4xl sm:text-5xl font-handwriting text-primary drop-shadow-sm text-center sm:text-left">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {project.categories.map((category, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed text-center sm:text-left">
                  {project.description}
                </p>

                {/* View Details Button */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="bg-secondary text-white font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group/button"
                >
                  <span>View Details</span>
                  <svg
                    className="w-4 h-4 transform transition-transform duration-300 group-hover/button:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
