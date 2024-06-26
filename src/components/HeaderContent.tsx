import React, { useState } from 'react';

interface ISocialLink {
    url: string;
    id: string;
    image: string;
    alt: string;
}

const HeaderContent = () => {
    const socialLinks: ISocialLink[] = [
        {url: "https://github.com/Rash1d1", id: "gh-link", image: require("../Assets/Icons/github-icon.png"), alt: "GitHub"},
        {url: "https://t.me/j0cos", id: "tg-link", image: require("../Assets/Icons/telegram-icon.png"), alt: "Telegram"},
        {url: "mailto:badamshinrashid@gmail.com", id: "email", image: require("../Assets/Icons/email-icon.png"), alt: "Email"},
    ]

    return (
        <div className="social-links flex justify-end items-start">
            {socialLinks.map(link => (
                <a key={link.id} href={link.url} className="w-12 h-12 rounded-full flex-col bg-gray-300 mx-2">
                    <img src={link.image} alt={link.alt} className="w-full h-full" />
                </a>
            ))}
        </div>
    );
}

export default HeaderContent;
