import React, { useState } from "react";

interface AccordionProps {
    title: string;
    description: string;
    link: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, description, link }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-2">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
                <span className="text-xl font-medium text-gray-900 flex justify-center items-center">{title}</span>
                <svg
                    className={`fill-current h-6 w-6 text-indigo-500 shrink-0 ml-2 transition duration-200 ease-out ${
                        accordionOpen && "transform rotate-180"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M5 7l5 5 5-5z" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    accordionOpen ? "max-h-[500px]" : "max-h-0"
                }`}
            >
                <div className="p-4 bg-white border border-gray-200 rounded-lg mt-2">
                    <p className="text-black py-2 text-lg">{description}</p>
                    {/*<img ref={require("../Assets/Images/my-photo.png")} alt="My Photo"/>*/}
                    <a
                        href={link}
                        className="inline-block mt-2 pl-2 py-2 text-blue-400 font-semibold rounded-xl hover:underline"
                    >
                        Visit Project
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Accordion;
