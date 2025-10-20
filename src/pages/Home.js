import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import image01 from "../images/thumbnail_image0.png";
import projectsJSON from "../data/projects.json";

const Home = () => {
  const navigate = useNavigate();
  const [projectsList] = useState(projectsJSON);

  const heroRef = useRef(null);
  const [positionPercent, setPositionPercent] = useState({ x: 50, y: 50 });
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Center the mockup initially
  useEffect(() => {
    if (heroRef.current) {
      const heroRect = heroRef.current.getBoundingClientRect();
      const windowEl = heroRef.current.querySelector(".mockup-window");
      const windowRect = windowEl.getBoundingClientRect();

      const initialX = (heroRect.width - windowRect.width) / 2;
      const initialY = (heroRect.height - windowRect.height) / 2;

      setDragPos({ x: initialX, y: initialY });
      setPositionPercent({
        x: (initialX / heroRect.width) * 100,
        y: (initialY / heroRect.height) * 100,
      });
    }
  }, []);

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    const heroRect = heroRef.current.getBoundingClientRect();
    const left = (positionPercent.x / 100) * heroRect.width;
    const top = (positionPercent.y / 100) * heroRect.height;

    setDragging(true);
    setOffset({
      x: e.clientX - left,
      y: e.clientY - top,
    });
    setDragPos({ x: left, y: top });

    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const heroRect = heroRef.current.getBoundingClientRect();
    const windowEl = heroRef.current.querySelector(".mockup-window");
    const windowWidth = windowEl.offsetWidth;
    const windowHeight = windowEl.offsetHeight;

    let newX = e.clientX - offset.x;
    let newY = e.clientY - offset.y;

    // keep within boundaries
    newX = Math.max(0, Math.min(newX, heroRect.width - windowWidth));
    newY = Math.max(0, Math.min(newY, heroRect.height - windowHeight));

    setDragPos({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    if (dragging) {
      const heroRect = heroRef.current.getBoundingClientRect();
      setPositionPercent({
        x: (dragPos.x / heroRect.width) * 100,
        y: (dragPos.y / heroRect.height) * 100,
      });
      setDragging(false);
      document.body.style.userSelect = "auto";
      document.body.style.cursor = "auto";
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset, dragPos]);

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="min-h-screen bg-gradient-to-br from-primary via-accent to-secondary px-6 sm:px-12 md:px-20 py-16 flex justify-center items-center relative overflow-hidden"
      >
        <div
          className="mockup-window bg-base-100 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden"
          style={{
            position: "absolute",
            left: dragging ? `${dragPos.x}px` : "50%",
            top: dragging ? `${dragPos.y}px` : "50%",
            transform: dragging ? "none" : "translate(-50%, -50%)",
            width: "80vw",
            maxWidth: "1000px",
            height: "70vh",
            maxHeight: "700px",
            minHeight: "400px",
          }}
        >
          {/* Mac Header Bar */}
          <div
            className="flex items-center justify-between h-12 px-4 bg-base-200 rounded-t-3xl cursor-grab"
            onMouseDown={handleMouseDown}
          >
            <div className="flex space-x-2">
              <span className="mockup-btn-red w-3.5 h-3.5 rounded-full hover:bg-[#ff7b70] transition-colors duration-300"></span>
              <span className="mockup-btn-yellow w-3.5 h-3.5 rounded-full hover:bg-[#ffd347] transition-colors duration-300"></span>
              <span className="mockup-btn-green w-3.5 h-3.5 rounded-full hover:bg-[#5fdc5a] transition-colors duration-300"></span>
            </div>
          </div>

          {/* Inner Content */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 md:p-12 bg-base-200 rounded-b-3xl h-full overflow-y-auto">
            <div className="relative w-full flex justify-center order-1 md:order-2 animate-fade-in">
              <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-3xl"></div>
              <img
                src={image01}
                alt="Chloe"
                className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-3xl object-cover shadow-2xl border-4 border-white/50 transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2 order-2 md:order-1 animate-fade-in-delay">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-handwriting text-primary drop-shadow-md">
                Hey, I'm Chloe
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-md">
                A fourth-year <span className="font-semibold text-secondary">Creative Computing</span> student at IADT with a passion for turning{" "}
                <span className="italic">design</span> ideas into{" "}
                <span className="italic">interactive experiences</span>.
              </p>
              <button
                className="mt-4 bg-primary text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:bg-accent transition-all duration-300"
                onClick={() => navigate("/about")}
              >
                Get to know me ;)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="bg-base-200 px-6 sm:px-12 md:px-20 lg:px-32 py-24">
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
              className="mockup-window bg-base-100 overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center h-8 px-4 bg-base-200 rounded-t-2xl">
                <div className="flex space-x-2">
                  <span className="mockup-btn-red w-3 h-3 rounded-full hover:bg-[#ff7b70] transition-colors duration-300"></span>
                  <span className="mockup-btn-yellow w-3 h-3 rounded-full hover:bg-[#ffd347] transition-colors duration-300"></span>
                  <span className="mockup-btn-green w-3 h-3 rounded-full hover:bg-[#5fdc5a] transition-colors duration-300"></span>
                </div>
              </div>

              <div className="bg-white flex flex-col justify-center items-center relative rounded-b-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-b-2xl"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
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
                    className="bg-white text-primary font-semibold px-5 py-2 rounded-xl hover:bg-primary hover:text-white transition-all"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
