'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { HiMiniChevronRight } from 'react-icons/hi2';
import { motion, useInView, useAnimation } from 'framer-motion';

const companies = [
  {
    name: 'FIRST Robotics',
    role: 'Lead Software Engineer @ Robeartics 19500',
    date: 'Onsite | September 2022 – Present',
    description: [
      'Led mechanical and software development for competition robots using Java and FTC SDK.',
      'Designed AI-based autonomous navigation using TensorFlow and AprilTag detection.',
      'Trained and managed a 15-member team; led them to the 2025 World Championships in Houston, TX.',
      'Organized outreach workshops to teach programming and engineering to over 600 students.',
    ],
  },
  {
    name: 'Linovation Design',
    role: 'Founder & Full Stack Developer',
    date: 'Onsite | June 2024 – August 2024',
    description: [
      'Founded a freelance design agency offering custom websites and ERP tools to local businesses.',
      'Generated $2.3K profit in 2 months; improved a client\'s operational efficiency by 10%.',
      'Pitched to businesses in person, online, and at trade fairs — overcoming personal introversion.',
    ],
  },
  {
    name: 'Hackathon Circuit',
    role: 'Organizer, Volunteer, and Participant',
    date: 'Remote & Onsite | September 2020 – Present',
    description: [
      'Attended 20+ hackathons and won 10+ awards including Best Use of Terraform at Hack the North 2024.',
      'Organized GeeseHacks 2024 with over 300 attendees and $12K in sponsorships.',
      'Built impactful projects like Skip the Walk (CLI-based pizza delivery) and Ingredify (OCR-powered food scanner).',
    ],
  },
];

export default function Experiences() {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const controls = useAnimation();

  const [scrollY, setScrollY] = useState(0);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setLastY(scrollY);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollY]);

  useEffect(() => {
    const refTop = ref.current?.offsetTop ?? Infinity;
    const isScrollingDown = scrollY > lastY;

    if (isInView && isScrollingDown) {
      controls.start('visible');
    } else if (!isInView && scrollY < refTop) {
      controls.start('hidden');
    }
  }, [isInView, scrollY, lastY, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center justify-center px-8 sm:px-8 lg:px-8 text-[#DCDEFF] w-full max-w-4xl h-min"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Section Header */}
      <motion.div className="w-full mb-8" variants={childVariants}>
        <h2 className="flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-left whitespace-nowrap">
          <span className="text-[#DCDEFF]">My</span>
          <span style={{ color: theme.palette.primary.main }}>Work Experiences</span>
          <span className="flex-1 h-px bg-[#DCDEFF]/20"></span>
        </h2>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col lg:flex-row gap-8 "
        variants={containerVariants}
      >
        {/* Company tabs */}
        <motion.div
          className="h-min flex flex-row items-start lg:flex-col gap-2 lg:gap-6 overflow-x-auto lg:overflow-visible lg:pb-0 border-b-2 lg:border-b-0 lg:border-l-2 border-[#DCDEFF]/20 box-border"
          variants={childVariants}
        >
          {companies.map((company, i) => (
            <button
              key={company.name}
              onClick={() => setSelected(i)}
              className={`whitespace-nowrap px-4 py-2 lg:pl-4 lg:pr-0 text-sm sm:text-base font-medium transition-colors duration-200 rounded-t-lg lg:rounded-none ${
                selected === i
                  ? 'text-[#72C6B2] border-b-2 lg:border-b-0 lg:border-l-2 border-[#72C6B2]'
                  : 'text-[#DCDEFF]/70 hover:text-[#DCDEFF]'
              }`}
            >
              {company.name}
            </button>
          ))}
        </motion.div>

        {/* Details */}
        <motion.div
          className="flex flex-col gap-4 min-h-[300px] h-full"
          variants={childVariants}
        >
          <div className="flex flex-col gap-4 h-full">
            <Typography variant="h6" fontWeight="bold" color="[#DCDEFF]">
              {companies[selected].role}
            </Typography>
            <Typography variant="body2" className="text-[#DCDEFF]/60">
              {companies[selected].date}
            </Typography>
            <Box className="flex flex-col gap-2 flex-grow">
              {companies[selected].description.map((point, index) => (
                <Box key={index} display="flex" alignItems="flex-start" gap={1}>
                  <Typography variant="body2" className="text-[#DCDEFF]/90 text-sm sm:text-base leading-relaxed">
                    • {point}
                  </Typography>
                </Box>
              ))}
            </Box>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}