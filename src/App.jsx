import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import FeatureSection from "./components/FeatureSection";

const app = () =>{
  return(
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6 ">
        <Herosection/>
        <FeatureSection/>
      </div>
      
    </>
  )
}

export default app;