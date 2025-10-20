import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import projectsJSON from "../../data/projects.json";
import sketch01 from "../../images/sketch9.png";
import sketch02 from "../../images/sketch10.png";

const Show = () => {
  const [projectsList, setProjectsList] = useState(projectsJSON);
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    const found = projectsList.find((p) => p.slug === slug);
    setProject(found);
  }, [setProjectsList, slug]);

  if (project === null)
    return <h2 className="text-center mt-10 text-xl text-[#637c82]">Loading...</h2>;
  if (project === undefined) return <Navigate to={`/projects/${slug}`} />;

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center w-full overflow-hidden bg-[#fafaf7]">
      {/* Header Section */}
      <div className="relative w-full bg-gradient-to-br from-primary via-accent to-secondary py-24 px-6 sm:px-12 md:px-20 text-center">
        {/* Decorative sketches */}
        <img
          src={sketch01}
          alt=""
          className="absolute top-16 left-[8%] w-32 sm:w-48 opacity-20 rotate-[10deg]"
        />
        <img
          src={sketch02}
          alt=""
          className="absolute bottom-16 right-[8%] w-32 sm:w-48 opacity-20 -rotate-[8deg]"
        />

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-handwriting text-[#637c82] drop-shadow-md relative z-10">
          {project.title}
        </h1>
        <p className="mt-6 inline-block bg-white/30 backdrop-blur-md text-[#637c82] px-6 py-2 rounded-xl text-lg sm:text-xl font-medium shadow-md relative z-10">
          {Array.isArray(project.categories)
            ? project.categories.join(", ")
            : project.categories}
        </p>
      </div>

      {/* Project Details Section */}
      <div className="w-full bg-white/10 backdrop-blur-md py-20 px-6 sm:px-12 md:px-20 flex flex-col items-center gap-16">
        <div className="max-w-6xl w-full flex flex-col gap-12">
          {/* Description & Tech Stack */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Description */}
            <div className="flex-1 bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/30 hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <h2 className="text-3xl font-handwriting text-[#637c82] mb-4">
                About the Project
              </h2>
              <p className="text-[#637c82] text-lg leading-relaxed opacity-90">
                {project.description}
              </p>
            </div>

            {/* Tech Stack + Links */}
            <div className="flex-1 bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/30 hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-handwriting text-[#637c82] mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-[#637c82]/10 rounded-xl"
                    >
                      <span className="text-[#637c82] font-semibold text-base font-handwriting">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {project.gitHub && (
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#637c82] hover:text-[#4f6165] text-lg underline break-words transition-colors"
                  >
                    {project.gitHub}
                  </a>
                )}
                {project.date && (
                  <div className="text-[#637c82]/80 text-base">{project.date}</div>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#637c82]/20"></div>

          {/* Images Section - styled like Photography */}
          <div className="w-full max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/5] cursor-pointer"
                  onClick={() => handleImageClick(`/images/${image.url}`)}
                >
                  <img
                    src={`/images/${image.url}`}
                    alt={image.caption}
                    className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click to expand
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors duration-300"
              aria-label="Close modal"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Show;
