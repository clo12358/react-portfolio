import {  useState  } from "react";
import projectsJSON from "../../data/projects.json";
import ProjectCard from "../../componants/ProjectCard";

const Index = () => {

    const [projectsList, setProjetsList] = useState(projectsJSON);

    const projectCards = projectsList.map((project, index) => {
        return <ProjectCard key={index} project={project}/>
    });

    return (
        <>
            <h1>Projects</h1>
            {projectCards}
        </>
    )
};

export default Index;