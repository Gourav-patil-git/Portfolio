import React from "react";
import './index.css'

export const Header =() =>{
    return(<>
        <div className="header bg-purple-600 flex  py-2 text-lg text-white">

            <div className="home w-100 text-center">
                <a href="#" id="home">Home</a>
            </div>
            <div className="about w-100 text-center">
                <a href="#" id="about">About</a>
            </div>
            <div className="contact w-100 text-center">
                <a href="#" id="contact">Contact</a>
            </div>
            <div className="login w-100 text-center">
                <a href="#" id="ligin">Login</a>
            </div>
    
        </div>
        </>)
};