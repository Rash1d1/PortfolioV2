import React from 'react';

const Bio = () => {
    return (
        <div className="flex flex-col items-center mt-12 bg-gray-200 shadow-md rounded-3xl px-10 py-10 sm:flex-row">
            <img className="img w-[14rem] h-auto rounded-3xl mr-10" src={require("../Assets/Images/my-photo.png")}
                 alt="My Photo"/>
            <p className="text-2xl leading-relaxed text-gray-700">
                My name is Rashid Badamshin. I'm a passionate developer with experience in building website layouts and
                fullstack applications.
            </p>
        </div>

    );
};

export default Bio;