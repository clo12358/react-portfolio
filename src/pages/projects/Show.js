import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import projectsJSON from "../../data/projects.json";

const Show = () => {
  const [projectsList, setProjectsList] = useState(projectsJSON);
  const [project, setProject] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    const found = projectsList.find((project) => {
      return project.slug === slug;
    });
    setProject(found);
  }, [setProjectsList, slug]);

  if (project === null) return <h2>Loading...</h2>;

  if (project === undefined) return <Navigate to={`/project/${slug}`} />;

  return (
    <>
      {/* Project Information Section */}
      <div className="h-auto px-4 py-6 sm:px-8 sm:py-10 bg-accent flex justify-center items-center">
        <div className="w-full max-w-5xl flex flex-col gap-6 sm:gap-8">
          {/* Title and Category Section */}
          <div className="text-center sm:text-left">
            <div className="text-primary text-[30px] sm:text-[40px] md:text-[50px] font-semibold font-handwriting">
              {project.title}
            </div>
            <div className="mt-2 sm:mt-4 px-4 py-2 bg-secondary-content rounded-[3px] inline-flex justify-center items-center">
              <div className="text-accent text-[16px] sm:text-[18px] font-semibold">
                {project.categories}
              </div>
            </div>
          </div>

          {/* Description and Technologies Section */}
          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-12">
            {/* Description */}
            <div className="text-black text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal flex-1">
              {project.description}
            </div>

            {/* Technologies */}
            <div className="flex flex-col gap-4 sm:w-[45%]">
              <div className="flex gap-4 flex-wrap">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-primary-content rounded-[3px] flex items-center justify-center"
                  >
                    <div className="text-accent text-[14px] sm:text-[16px] font-semibold font-handwriting">
                      {tech}
                    </div>
                  </div>
                ))}
              </div>

              {/* Links Section */}
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="text-black text-[14px] sm:text-[16px] font-normal">
                    <a href={project.gitHub} className="hover:text-primary">
                      {project.gitHub}
                    </a>
                  </div>
                </div>
                {/* <div className="flex items-center gap-3">
                  <div className="text-[#292925] text-[14px] sm:text-[16px] font-normal font-['Aleo']">
                    <a
                      href="https://website.com"
                      className="hover:text-[#abdbae]"
                    >
                      https://website.com
                    </a>
                  </div>
                </div> */}
                <div className="flex items-center gap-3">
                  <div className="text-black text-[14px] sm:text-[16px] font-normal">
                    {project.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="h-auto sm:h-[800px] px-4 sm:px-8 pt-8 pb-6 bg-[#fafaf7] flex justify-center items-center flex-col sm:flex-row gap-6 sm:gap-12">
      <img
            src={project.images.url}
            alt={project.images.caption}
            className="w-full sm:w-[48%] h-[300px] sm:h-[500px] rounded-md"
          />
      </div>
    </>
  );
};

export default Show;