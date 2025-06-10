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

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const top = ref.current.getBoundingClientRect().top;
      const height = ref.current.offsetHeight;

      setIsAboveView(top + height < 0); // completely above screen
      setIsBelowView(top > window.innerHeight); // completely below screen
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

  const animationState = isAboveView || !isBelowView ? 'visible' : 'hidden';

  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-[#DCDEFF] w-[80vw]  lg:w-full max-w-4xl h-min"
      variants={containerVariants}
      initial="hidden"
      animate={animationState}
    >
      {/* Section Header */}
      <motion.div
        className="w-full mb-8"
        variants={fadeUp}
      >
        <h2 className="flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-left whitespace-nowrap">
          <span className="text-[#DCDEFF]">About</span>
          <span style={{ color: theme.palette.primary.main }}>Me</span>
          <span className="flex-1 h-px bg-[#DCDEFF]/20"></span>
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 w-full text-[#DCDEFF]">
        {/* Left: Text */}
        <motion.div
          className="flex flex-col gap-4 text-left w-full lg:w-3/5"
          variants={fadeUp}
        >
          <Typography className="text-[#DCDEFF]/90 leading-relaxed">
            Hey! I&apos;m <span className="text-[#72C6B2] font-semibold">Lin Hong</span>, a Computer
            Science student at the University of Waterloo and a passionate software engineer. I love
            building thoughtful full-stack products and have led impactful teams to ship everything
            from developer tooling to AI-powered applications.
          </Typography>
          <Typography className="text-[#DCDEFF]/90 leading-relaxed">
            I&apos;ve been to over 20 hackathons, won 10+ robotics awards, and organized over 6 hackathons 
            to give back to the community. I&apos;m also the founder of Linovation Design, where I
            built websites and ERP systems that helped local businesses improve operations.
          </Typography>
          <Typography className="text-[#DCDEFF]/90 leading-relaxed">
            Beyond code, I love storytelling, robotics, and anything that pushes me outside my
            comfort zone. Whether I&apos;m debugging JavaScript, pitching a startup, or mentoring
            students, I bring energy, empathy, and execution.
          </Typography>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="relative w-full lg:w-2/5 flex justify-center items-start group"
          variants={fadeRight}
        >
          <div className="relative w-[320px] aspect-square">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-white opacity-70 rounded-xl transition-transform duration-300 sm:group-hover:-translate-x-2 sm:group-hover:-translate-y-2 z-0 pointer-events-none" />
            <div className="relative rounded-xl overflow-hidden sm:grayscale sm:hover:grayscale-0 transition-all duration-300 z-10 w-full h-full">
              <Image
                src="/Portrait.png"
                alt="Lin Hong"
                width={400}
                height={400}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}