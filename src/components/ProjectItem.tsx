import React, { useState } from 'react';
import Accordeon from "./Accordeon";

interface IProject {
    name: string;
    description: string;
    link: string;
}

const ProjectItem: React.FC<IProject> = ({ name, description, link }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Accordeon title={name} description={description} link={link}></Accordeon>
        </>
        // <div className="mx-3">
        //     <button
        //         className="w-full p-4 rounded-lg bg-gray-100 transition duration-400 text-black font-medium mb-2 text-xl flex justify-center items-center"
        //         onClick={handleClick}
        //     >
        //         {name}
        //     </button>
        //     <div
        //         className="p-0 m-0 bg-gray-100 mb-2 transition duration-300 ease-out delay-150 text-black font-medium rounded-lg overflow-hidden text-base leading-relaxed
        //             isOpen ? scale-y-5 : scale-y-0"
        //     >
        //         <p className="project-description flex justify-center my-1.5 text-2xl">{description}</p>
        //         <a className="text-indigo-500 m-1.5 flex justify-center font-medium underline decoration-transparent hover:decoration-indigo-500 hover:underline-offset-4 mx-1" href={link}>Visit Project</a>
        //     </div>
        // </div>
    );
};

export default ProjectItem;
