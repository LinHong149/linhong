'use client'
import React from "react";
import { AnchorButton, SolidButton } from "../components/Buttons";
// import ResumePDF from "../assets/Resume.pdf"


const Hero = () => {
  return (
    <div className="flex flex-col justify-between gap-16 w-full h-full pt-[10%] pb-[5%] px-parent">

      <div className="flex flex-col gap-10">
        <h1 className="[&>*]:leading-tight">
          <span className="font-header1-bold text-gradient-white-black">Hi. I'm </span>
          <span className="text-gradient-pink-orange font-header1-bold after::text-gradient-pink-orange"> Lin Hong, </span>
          <span className="font-header1-bold text-gradient-white-black"><br/>a Software Engineer</span>
        </h1>
        <p className="font-header7">
          Currently, I am an 
          <span className="text-pink"> 12th grader  </span>
          pursuing Software. I have 
          <span className="text-orange"> 4+ years </span>
          of coding experiences and I've made 
          <span className="text-cyan"> 28+ projects. </span>
        </p>
      </div>

      {/* <div className="m-0 p-0 flex justify-center">
        <AnchorButton link="" contentStart="PROJ" contentEnd="ECTS" content={""}></AnchorButton>
      </div> */}
    </div>
  );
};

export default Hero;
