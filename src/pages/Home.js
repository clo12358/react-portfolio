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
      <section className="bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden flex items-center justify-center py-24">
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 md:px-16 flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Text content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2 animate-fade-in">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-handwriting text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] leading-tight">
              Hey, I'm Chloe
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-handwriting text-white font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
              Designer & Developer
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-lg tracking-wide font-normal drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]">
              A fourth-year{" "}
              <span className="font-semibold text-white">
                Creative Computing
              </span>{" "}
              student at IADT with a passion for turning{" "}
              <span className="font-semibold">design</span> ideas into{" "}
              <span className="font-semibold">interactive experiences</span>.
            </p>
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

      {/* ABOUT PREVIEW SECTION */}
      <section className="relative bg-gradient-to-br from-[#f8faf9] via-[#e8f0ed] to-[#fafaf7] py-28 px-6 sm:px-12 md:px-20 overflow-hidden">
        {/* Decorative floating shapes */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow-reverse"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-[#637c82] text-5xl sm:text-6xl font-handwriting mb-10 drop-shadow-md">
            A Little About Me
          </h2>

          {/* Card Container */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl hover:shadow-2xl p-10 sm:p-14 transition-all duration-500 transform hover:scale-[1.01]">
            <p className="text-[#637c82] text-lg sm:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto mb-12">
              I’m a designer and developer with a passion for crafting
              meaningful digital experiences that seamlessly merge{" "}
              <span className="font-semibold text-[#4f6165]">creativity</span>{" "}
              and{" "}
              <span className="font-semibold text-[#4f6165]">
                functionality
              </span>
              . I love bringing ideas to life through thoughtful design and
              interactive development — from engaging{" "}
              <span className="font-semibold">web applications</span> to
              immersive <span className="font-semibold">prototypes</span>.
            </p>

            {/* Button */}
            <button
              onClick={() => navigate("/about")}
              className="bg-[#637c82] text-white font-semibold px-10 py-4 rounded-xl shadow-md hover:bg-[#4f6165] hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="bg-base-200 px-6 sm:px-12 md:px-20 lg:px-32 py-24">
        <div className="bg-white max-w-7xl mx-auto shadow-2xl rounded-xl overflow-hidden">
          {/* Custom Window Header */}
          <div className="h-12 bg-[#f6f6f6] border-b border-[#e2e2e2] relative flex items-center px-4">
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
                    {/* 🖼️ Multiple Images Using Map */}
                    {Array.isArray(project.images) &&
                    project.images.length > 0 ? (
                      <div className="grid grid-cols-2 gap-1">
                        {project.images.slice(0, 4).map((image, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={`/images/${image.url}`}
                            alt={image.caption || project.title}
                            className="w-full h-32 object-cover"
                          />
                        ))}
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                    )}

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
