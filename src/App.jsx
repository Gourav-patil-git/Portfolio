import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Middle } from "./Middle";
import skill from "./skill";
import './index.css';
import { Skills } from "./Skills";


function createskill(skill){
  return(
<Skills 
    key={skill.id}
    title={skill.title}
    img={skill.imgURL}

/>
  );
}

const App = ()=>{
  return(<>
  <div className="container">
  <Header />
  <Middle />
  <p >Technical Skills</p>
  <Skills />
  {skill.map(createskill)}
  <Footer/>
  
  </div>
  </>);
};

export default App;