import  { Link  } from "react-router-dom"
const ProjectCard = (props) => {

    let project = props.project;

    return (
        <>
            <div className="h-auto sm:h-[450px] bg-white rounded-[20px] shadow flex flex-col sm:flex-row justify-start items-center gap-6 sm:gap-[126px] p-6 sm:p-0">
                {/* Left Section (Image Placeholder) */}
                <div className="w-full sm:w-[50%] h-[200px] sm:h-[450px] bg-[#d9d9d9] rounded-t-[20px] sm:rounded-tl-[20px] sm:rounded-bl-[20px] rounded-bl-[0px] sm:rounded-tr-[0px]" />

                {/* Right Section (Content) */}
                <div className="w-full sm:w-[50%] flex flex-col justify-center items-center gap-6 sm:gap-[21px]">
                    <div className="text-[#abdbae] text-2xl sm:text-4xl lg:text-[70px] font-semibold font-['Aleo'] text-center sm:text-left">
                        {/* <p><b>Title:</b> <Link to={`/projects/${project.slug}`}>{project.title}</Link></p> */}
                        <p>Title</p>
                    </div>
                    <div className="px-4 py-2 bg-[#7d9aa1] rounded-[3px] flex justify-center items-center">
                        <div className="text-[#fafaf7] text-base sm:text-lg lg:text-[25px] font-semibold font-['Aleo']">
                        <p>{project.technologies}</p>
                        </div>
                    </div>
                    <div className="text-[#292925] text-sm sm:text-base lg:text-[25px] font-normal font-['Aleo'] text-center sm:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProjectCard;