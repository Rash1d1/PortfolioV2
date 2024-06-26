import React from 'react';
import ProjectItem from './ProjectItem';

const projects = [
    {
        name: 'Online calculator application',
        description: 'Pet project to dive into HTML, CSS and JavaScript',
        link: 'https://github.com/Rash1d1/calc'
    },
    {
        name: 'Burger restaurant landing',
        description: 'Layout of website for burger restaurant using Figma, HTML5, CSS3, JavaScript',
        link: 'https://github.com/Rash1d1/Burger-Landing'
    },
    {
        name: 'Avito parser',
        description: 'Online Avito parser, focused on gathering info about vacancies. Support asynchrony. Stack used: Python, FastAPI, HTML5, BootStrap, JavaScript.    ',
        link: 'https://github.com/Rash1d1/avito-parser-vacancy'
    }
];

const ProjectsList = () => {
    return (
        <div className="projects">
            {projects.map((project, index) => (
                <ProjectItem key={index} {...project} />
            ))}
        </div>
    );
};

export default ProjectsList;
