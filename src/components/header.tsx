import React from 'react';
import HeaderContent from "./HeaderContent";



const Header = () => {

    return (
        <div className="flex flex-col justify-between px-5 pt-[7rem] pb-7 bg-gradient-to-br from-[#A23A2C] to-[#C46655] text-white rounded-3xl shadow-md">
            <div className="items-center w-full text-center mb-5">
                <p className="font-bold text-5xl">Rashid Badamshin
                </p>
            </div>
            <HeaderContent></HeaderContent>
        </div>
    );
};

export default Header;