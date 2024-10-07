import React from 'react'

const AboutMe = () => {
  return (
    // <div className='pl-parent w-[60vw] h-screen py-parent'>
    //     <div className='card-design-about p-14 rounded-3xl w-full h-full'>
    //         <p className='font-header5-bold'>Hi! I'm Lin Hong,</p>
    //         <p className='font-paragraph'>A Computer Science student at the University of Waterloo, with internships under my belt at Shopify, Google, and Tesla.<br /> <br /> I'm passionate about leveraging data science and machine learning to solve real-world challenges, having led projects that enhance customer experiences and optimize systems. <br /><br /> My hackathon journey includes over 20 competitions, with notable successes, including a win at the MIT Hackathon for a blockchain project. <br /><br /> When I'm not coding, I enjoy digital art, yoga, and outdoor adventures. <br /><br /> I'm all about innovation and impact, currently seeking Summer 2024 internships. If you're on a mission to make a difference or just want to chat, let's connect! 🚀🧘‍♂️🌟</p>
    //     </div>
    // </div>
    <div className='p-parent w-screen h-screen flex flex-col items-center justify-center z-10'>
        <p className='font-header2-bold'>Hi! I'm Lin Hong 👋</p>
        <div className='p-14 rounded-3xl w-[55vw] h-full text-center'>
          <p className='font-paragraph'>As a high school student at Dr. Norman Bethune C.I., I’m at the intersection of software engineering, AI, and robotics. Through my leadership in the Robotics and Computer Science Clubs, I’ve spearheaded 18+ AI projects and participated in 18 hackathons, fueling my passion for technology.
<br/><br/>
I’m equally dedicated to tech education and mentorship, organizing STEM events and mentoring young learners at FIRST LEGO League Summer Camps. These experiences reflect my commitment to fostering innovation and community in the tech space.
<br/><br/>
Outside of coding and robotics, I’m involved in school activities like Yearbook, Robotics, Computer Science, Breakfast and Math Club.
<br/><br/>
Driven by a love for challenges and opportunities to create, I’m eager to connect with like-minded individuals and organizations to make an impact.</p>
        </div>
    </div>
  )
}

export default AboutMe