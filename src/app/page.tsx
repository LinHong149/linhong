'use client'
import { useState, useRef, Component, useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Stats from "./components/Stats";
import AboutMe from "./sections/AboutMe";
import Experiences from "./sections/Experiences";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

import Resume from "public/resume.pdf"

export default function Home() {
  const parallaxRef = useRef<any>(null);

  const scrollToPage = (pageNumber: number) => {
    if(parallaxRef.current) {
      parallaxRef.current.scrollTo(pageNumber);
    }
  }



  return (
    <Parallax ref={parallaxRef} className='flex min-h-screen flex-col items-center justify-between gap-96 relative bg-black' 
      pages={7.1} style={{ top: '0', left: '0' }} >


      {/* Parallax Circles */}
      <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 0.2 }}>
        <div className="absolute w-64 h-64 bg-purple-300 rounded-full blur-3xl z-0" style={{ top: '0vh', left: '10%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.25} style={{ opacity: 0.2 }}>
        <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl z-0" style={{ top: '100vh', left: '5%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3} style={{ opacity: 0.2 }}>
        <div className="absolute w-52 h-52 bg-yellow-300 rounded-full blur-3xl z-0" style={{ top: '200vh', left: '60%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35} style={{ opacity: 0.2 }}>
        <div className="absolute w-48 h-48 bg-blue-300 rounded-full blur-3xl z-0" style={{ top: '300vh', right: '15%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4} style={{ opacity: 0.2 }}>
        <div className="absolute w-56 h-56 bg-green-300 rounded-full blur-3xl z-0" style={{ top: '400vh', left: '20%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.45} style={{ opacity: 0.2 }}>
        <div className="absolute w-60 h-60 bg-red-300 rounded-full blur-3xl z-0" style={{ top: '500vh', left: '15%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5} style={{ opacity: 0.2 }}>
        <div className="absolute w-40 h-40 bg-indigo-300 rounded-full blur-3xl z-0" style={{ top: '600vh', left: '60%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.55} style={{ opacity: 0.2 }}>
        <div className="absolute w-64 h-64 bg-pink-300 rounded-full blur-3xl z-0" style={{ top: '420vh', right: '10%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.6} style={{ opacity: 0.2 }}>
        <div className="absolute w-48 h-48 bg-purple-300 rounded-full blur-3xl z-0" style={{ top: '450vh', left: '20%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.65} style={{ opacity: 0.2 }}>
        <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl z-0" style={{ top: '350vh', left: '25%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.7} style={{ opacity: 0.2 }}>
        <div className="absolute w-56 h-56 bg-yellow-300 rounded-full blur-3xl z-0" style={{ top: '850vh', right: '15%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.75} style={{ opacity: 0.2 }}>
        <div className="absolute w-60 h-60 bg-green-300 rounded-full blur-3xl z-0" style={{ top: '10vh', right: '5%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.2 }}>
        <div className="absolute w-40 h-40 bg-red-300 rounded-full blur-3xl z-0" style={{ top: '160vh', left: '50%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.85} style={{ opacity: 0.2 }}>
        <div className="absolute w-64 h-64 bg-indigo-300 rounded-full blur-3xl z-0" style={{ top: '290vh', left: '70%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.9} style={{ opacity: 0.2 }}>
        <div className="absolute w-48 h-48 bg-green-300 rounded-full blur-3xl z-0" style={{ top: '320vh', left: '15%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.95} style={{ opacity: 0.2 }}>
        <div className="absolute w-72 h-72 bg-red-300 rounded-full blur-3xl z-0" style={{ top: '680vh', right: '20%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1} style={{ opacity: 0.2 }}>
        <div className="absolute w-56 h-56 bg-pink-300 rounded-full blur-3xl z-0" style={{ top: '230vh', left: '30%' }}></div>
      </ParallaxLayer>


      {/* Page layout */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="flex flex-col items-center justify-start min-h-screen z-10 ">
          {/* Nav */}
          <div className="navbar flex justify-between bg-transparent top-0 pt-6 pb-2 z-50 px-parent">
            <div className="navbar-start w-fit p-0 ">
              <div className="dropdown">
                <div tabIndex={0} role="button"  className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <div className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow font-lable bg-base-100 rounded-box w-52">
                  <li onClick={() => scrollToPage(1)}><a>HOME</a></li>
                  <li onClick={() => scrollToPage(0.6)}><a>EXPERIENCES</a></li>
                  <li onClick={() => scrollToPage(2)}><a>ABOUT</a></li>
                  <li onClick={() => scrollToPage(6)}><a>SKILLS</a></li>
                  <li onClick={() => scrollToPage(6.7)}><a>CONTACT</a></li>
                </div>
              </div>
              <a className="text-lg font-lable p-0 m-0 w-fit ">LIN HONG</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <div className="menu menu-horizontal px-1 font-lable [&>*]:px-4 z-10">
                <li onClick={() => scrollToPage(1)}><a>HOME</a></li>
                <li onClick={() => scrollToPage(0.6)}><a>EXPERIENCES</a></li>
                <li onClick={() => scrollToPage(2)}><a>ABOUT</a></li>
                <li onClick={() => scrollToPage(6)}><a>SKILLS</a></li>
                <li onClick={() => scrollToPage(6.7)}><a>CONTACT</a></li>
              </div>
            </div>
            <div className='flex gap-8'>
              {/* <label className="flex cursor-pointer gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                <input type="checkbox" value="light" className="toggle theme-controller"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </label> */}
              <div className="navbar-end">
                <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="btn bg-pink text-black font-lable cursor-pointer hover:bg-[#de87b7] hover:text- pt-1 ">RESUME</a>
              </div>
            </div>
          </div>
          {/* <Nav /> */}
          <Hero />
        </div>
      </ParallaxLayer>


      {/* <ParallaxLayer offset={0.99} speed={1}>
        <Projects/>
      </ParallaxLayer> */}


      <ParallaxLayer offset={0.9} speed={1.2}>
        <div className='h-[30rem]'></div>
        <Experiences />
      </ParallaxLayer>

      <ParallaxLayer sticky={{start: 2, end: 4.9}} speed={2} >
        <AboutMe />
      </ParallaxLayer>

      <ParallaxLayer sticky={{start: 3, end: 4.9}}>
        <Stats number="18" stat="hackatons" rowStart={2} colStart={10}/>
      </ParallaxLayer>
      <ParallaxLayer sticky={{start: 3.5, end: 4.9}}>
        <Stats number="33" stat="skills" rowStart={3} colStart={1}/>
      </ParallaxLayer>
      <ParallaxLayer sticky={{start: 4, end: 4.9}}>
        <Stats number="28" stat="projects" rowStart={4} colStart={9}/>
      </ParallaxLayer>

      <ParallaxLayer offset={6} speed={0.9}>
        <Skills />
      </ParallaxLayer>
      <ParallaxLayer offset={6.6} speed={1.2}>
        <Footer />
      </ParallaxLayer>




    </Parallax>
  );
}
