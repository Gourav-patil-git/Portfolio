import React from "react";
import './index.css';

export const Footer =()=>{
    const date = new Date(); 
    return(
        <>
        <div className="footer bg-purple-600 text-center text-white text-lg py-2">
        <p>&copy; Copy Rights Recived {date.getFullYear()}</p>
        </div>
        </>
    );
}