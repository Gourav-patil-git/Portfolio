import React from "react";
import './index.css'

export const Header =() =>{
    return(<div className="header bg-purple-600 flex py-1 text-lg text-white justify-between items-center">
        <div className="logo flex items-center w-64">
            <div className="img-name">
                <img className="h-fit" src="../public/image/logo img.jpg" alt="Logo" />
            </div>
            <h3 className="ml-2">Gourav's Portfolio</h3>
        </div>
        <div className="menu flex space-x-4 md:space-x-8">
            <div className="home w-32">
                <a href="#" id="home">Home</a>
            </div>
            <div className="about w-32">
                <a href="#" id="about">About</a>
            </div>
            <div className="contact w-32">
                <a href="#" id="contact">Contact</a>
            </div>
            <div className="login w-32">
                <a href="#" id="login">Login</a>
            </div>
        </div>
    </div>
    
    )
};