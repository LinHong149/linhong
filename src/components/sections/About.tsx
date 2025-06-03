'use client';

import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function About() {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  const [isAboveView, setIsAboveView] = useState(false);
  const [isBelowView, setIsBelowView] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const top = ref.current.getBoundingClientRect().top;
      const height = ref.current.offsetHeight;

      setIsAboveView(top + height < 0); // completely above screen
      setIsBelowView(top > window.innerHeight); // completely below screen
      setScrollY(window.scrollY);
    };

    handleScroll(); // call on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        // delayChildren: 0.3,  
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

//   const animationState = isAboveView || !isBelowView ? 'visible' : 'hidden';

  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center justify-center  px-6 lg:px-20 text-[#DCDEFF] w-[70vw] h-min"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4}}
    >
      {/* Section Header */}
      <motion.div
        className="w-full max-w-screen-lg mb-12"
        variants={fadeUp}
      >
        <h2 className="flex items-center gap-4 text-4xl font-extrabold text-left">
          <span className="text-[#DCDEFF]">About</span>
          <span style={{ color: theme.palette.primary.main }}>Me</span>
          <span className="flex-1 h-px bg-[#DCDEFF]/20"></span>
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-screen-lg text-[#DCDEFF]">
        {/* Left: Text */}
        <motion.div
          className="flex flex-col gap-4 text-left w-full lg:w-3/5"
          variants={fadeUp}
        >
          <Typography className="text-[#DCDEFF]/90 leading-relaxed">
            Hey! I'm <span className="text-[#72C6B2] font-semibold">Lin Hong</span>, a Computer
            Science student at the University of Waterloo and a passionate software engineer. I love
            building thoughtful full-stack products and have led impactful teams to ship everything
            from developer tooling to AI-powered applications.
          </Typography>
          <Typography className="text-[#DCDEFF]/90 leading-relaxed">
            I’ve been to over 20 hackathons, won 10+ awards, and founded my own event — GeeseHacks
            — to give back to the community. I’m also the founder of Linovation Design, where I
            built websites and ERP systems that helped local businesses improve operations.
          </Typography>
          <Typography className="text-[#DCDEFF]/90 leading-relaxed">
            Beyond code, I love storytelling, robotics, and anything that pushes me outside my
            comfort zone. Whether I'm debugging JavaScript, pitching a startup, or mentoring
            students, I bring energy, empathy, and execution.
          </Typography>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="relative w-full lg:w-2/5 flex justify-center items-start group"
          variants={fadeRight}
        >
          <div className="absolute top-4 left-4 w-[320px] aspect-square border-2 border-white opacity-70 rounded-xl transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 z-0 pointer-events-none" />
          <div className="relative rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 z-10 w-[320px] aspect-square">
            <Image
              src="/Portrait.png"
              alt="Lin Hong"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}