import {  useState  } from "react";
import projectsJSON from "../../data/projects.json";
import ProjectCard from "../../componants/ProjectCard";

const Index = () => {

    // const [projectsList, setProjetsList] = useState(projectsJSON);

    // const projectCards = projectsList.map((project, index) => {
    //     return <ProjectCard key={index} project={project}/>
    // });

    return (
        <>
            {/* <h1>Projects</h1>
            {projectCards} */}

            <div className="min-h-screen px-4 sm:px-8 lg:px-12 py-8 bg-[#fafaf7] flex flex-col justify-center items-center">
                <div className="w-full max-w-screen-lg flex flex-col gap-10">
                    {/* Project Card 1 */}
                    <div className="flex flex-col sm:flex-row bg-white rounded-[20px] shadow justify-start items-center p-6 sm:p-0 gap-6 sm:gap-[126px]">
                        <div className="w-full sm:w-[50%] h-[200px] sm:h-[450px] bg-[#d9d9d9] rounded-t-[20px] sm:rounded-tl-[20px] sm:rounded-bl-[20px] sm:rounded-tr-[0px]" />
                        <div className="w-full sm:w-[50%] flex flex-col justify-center items-center gap-6 sm:gap-[21px]">
                            <div className="text-[#abdbae] text-2xl sm:text-4xl lg:text-[70px] font-semibold font-['Aleo'] text-center sm:text-left">
                                Project Title
                            </div>
                            <div className="px-4 py-2 bg-[#7d9aa1] rounded-[3px] flex justify-center items-center">
                                <div className="text-[#fafaf7] text-base sm:text-lg lg:text-[25px] font-semibold font-['Aleo']">
                                    Category
                                </div>
                            </div>
                            <div className="text-[#292925] text-sm sm:text-base lg:text-[25px] font-normal font-['Aleo'] text-center sm:text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Index;