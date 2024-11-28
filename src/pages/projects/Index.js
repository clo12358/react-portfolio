import { useState } from "react";
import projectsJSON from "../../data/projects.json";

const Index = () => {
    // Set the state for the projects list
    const [projectsList, setProjectsList] = useState(projectsJSON);

    // Generate project cards dynamically
    const projectCards = projectsList.map((project, index) => {
        return (
            <div key={index} className="flex flex-col sm:flex-row bg-white rounded-[20px] shadow justify-start items-center p-6 sm:p-0 gap-6 sm:gap-[126px]">
                <div className="w-full sm:w-[50%] h-[200px] sm:h-[450px] bg-[#d9d9d9] rounded-t-[20px] sm:rounded-tl-[20px] sm:rounded-bl-[20px] sm:rounded-tr-[0px]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-[20px]" />
                </div>
                <div className="w-full sm:w-[50%] flex flex-col justify-center items-center gap-6 sm:gap-[21px]">
                    <div className="text-primary text-lg sm:text-4xl lg:text-6xl font-semibold font-['Aleo'] text-center sm:text-left">
                        {project.title}
                    </div>
                    <div className="px-4 py-2 bg-secondary-content rounded-[3px] flex justify-center items-center">
                        <div className="text-white text-base sm:text-lg lg:text-[25px] font-semibold font-['Aleo']">
                            {project.categories}
                        </div>
                    </div>
                    <div className="text-[#292925] text-sm sm:text-base lg:text-[25px] font-normal font-['Aleo'] text-center sm:text-left">
                        {project.description}
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            {/* Render all the dynamic project cards */}
            <div className="min-h-screen px-4 sm:px-8 lg:px-12 py-8 bg-[#fafaf7] flex flex-col justify-center items-center">
                <div className="w-full max-w-screen-lg flex flex-col gap-10">
                    {projectCards}
                </div>
            </div>
        </>
    );
};

export default Index;
