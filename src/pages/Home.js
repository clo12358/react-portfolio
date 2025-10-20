import { useNavigate } from "react-router-dom";
import { useState } from "react";
import image01 from "../images/thumbnail_image0.png";
import projectsJSON from "../data/projects.json";

const Home = () => {
  const navigate = useNavigate();
  const [projectsList] = useState(projectsJSON);

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-[80vh] bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden flex items-center justify-center">
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 sm:px-12 md:px-16 py-12 flex flex-col md:flex-row items-center justify-center gap-12 z-10">
          {/* Text content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2 animate-fade-in">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-handwriting text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] leading-tight">
              Hey, I'm Chloe
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-handwriting text-white font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
              Designer & Developer
            </h2>
            <p
              className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-lg 
                tracking-wide font-normal drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]"
            >
              A fourth-year{" "}
              <span className="font-semibold text-white">
                Creative Computing
              </span>{" "}
              student at IADT with a passion for turning{" "}
              <span className="font-semibold">design</span> ideas into{" "}
              <span className="font-semibold">interactive experiences</span>.
            </p>
            <div className="flex gap-6 mt-4">
              <button
                onClick={() => navigate("/about")}
                className="bg-white text-primary font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg sm:text-xl"
              >
                About Me
              </button>
              <button
                onClick={() => navigate("/projects")}
                className="bg-transparent text-white font-semibold px-10 py-4 rounded-xl border-2 border-white/50 hover:bg-white/10 transition-all duration-300 text-lg sm:text-xl"
              >
                View Work
              </button>
            </div>
          </div>

          {/* Image content */}
          <div className="relative md:w-1/2 flex justify-center items-center animate-fade-in-delay">
            <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full animate-float-slow"></div>
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] transform transition-all duration-500 hover:scale-105 hover:-rotate-2 hover:shadow-2xl">
              <img
                src={image01}
                alt="Chloe"
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/30"
              />
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-white/30 rounded-full blur-2xl -z-10 animate-float-slow-reverse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="bg-base-200 px-6 sm:px-12 md:px-20 lg:px-32 py-24">
        <div className="bg-white max-w-7xl mx-auto shadow-2xl rounded-xl overflow-hidden">
          {/* Custom Window Header */}
          <div className="h-12 bg-[#f6f6f6] border-b border-[#e2e2e2] relative flex items-center px-4">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-sm hover:bg-[#ff4b47] transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-sm hover:bg-[#feac14] transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-sm hover:bg-[#24b639] transition-colors"></div>
            </div>
          </div>

          {/* Window Content */}
          <div className="px-8 py-12 bg-base-200">
            <div className="text-center mb-16">
              <h2 className="text-primary text-4xl md:text-5xl font-handwriting">
                Featured Projects
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
                A selection of projects I've designed and developed — blending
                creativity with code.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {projectsList.map((project, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden rounded-2xl shadow-md hover:shadow-xl 
                     transition-all duration-500 group"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500 flex flex-col justify-center 
                            items-center text-center p-6"
                    >
                      <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-md">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-4">
                        {project.description.length > 100
                          ? `${project.description.substring(0, 100)}...`
                          : project.description}
                      </p>
                      <button
                        onClick={() => navigate(`/projects/${project.slug}`)}
                        className="bg-white text-primary font-semibold px-5 py-2 rounded-xl 
                           hover:bg-primary hover:text-white transition-all"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
