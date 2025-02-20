import React from "react";
import './index.css'

export const Skills =((props)=>{
    return(
        <div className="skill-container ">
            {/* <h3>Technical Skills</h3> */}
            <div className="cotainer w-40 mx-12 rounded-lg relative  flex-row drop-shadow-lg border-2 border-white transition delay-150 duration-300 hover:-translate-y-1 hover:scale-110">
            <img src={props.img} alt={props.title} className="skill-img" />
            <p className="skill-title">{props.title}</p>
            </div>
        </div>
    );
});
