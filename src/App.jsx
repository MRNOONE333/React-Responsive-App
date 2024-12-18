import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import FeatureSection from "./components/FeatureSection";
import Pricing from "./components/Pricing";
const app = () =>{
  return(
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6 ">
        <Herosection/>
        <FeatureSection/>
        <Pricing />
      </div>
      
    </>
  )
}

export default app;