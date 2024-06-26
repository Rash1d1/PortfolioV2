import React from 'react';
import ProjectsList from "./ProjectsList";

const ProjectsSection = () => {
    return (
        <div className="bg-gradient-to-br from-[#A23A2C] to-[#C46655] px-3 py-2 pb-10 rounded-3xl w-full mt-12 mb-0">
            <h2 className="mt-6 ml-7 mb-5 text-white text-3xl font-medium flex items-center">Projects:</h2>
            <ProjectsList></ProjectsList>
        </div>
    );
};

export default ProjectsSection;