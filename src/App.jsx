import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Middle } from "./Middle";
import './index.css';


const App = ()=>{
  return(<>
  <div className="container">
  <Header />
  <Middle />
  <Footer/>
  </div>
  </>);
};

export default App;