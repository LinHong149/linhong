'use client';

import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { HiMiniChevronRight } from 'react-icons/hi2';

const companies = [
  {
    name: 'Algoace',
    role: 'Full Stack Developer @ Algoace',
    date: 'Onsite | November 2022 - Present',
    description: `During my tenure at Algoace, a prominent software company, I have held the position of a Full Stack Hybrid Mobile Application Developer. In this role, I have adeptly utilized technologies such as React Native, AWS Microservices, and Firebase to contribute to the development and enhancement of cutting-edge mobile applications.`,
  },
  {
    name: 'Upwork & Fiver',
    role: 'Freelancer @ Upwork & Fiver',
    date: 'Remote | 2021 - 2022',
    description: 'Provided freelance development services using React Native and Firebase.',
  },
  {
    name: 'Softstings',
    role: 'Intern @ Softstings',
    date: 'Hybrid | 2020 - 2021',
    description: 'Assisted in front-end feature development and testing on hybrid apps.',
  },
];

export default function Experiences() {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  return (
    <section className=" flex flex-col items-center justify-center py-20 px-6 lg:px-20 bg-[#0D1117] text-white w-[70vw] h-[80vh]">
      {/* Section Header */}
      <div className="w-full max-w-screen-lg px-4 mb-12">
        <h2 className="flex items-center gap-4 text-4xl font-extrabold text-left">
          <span className="text-white">My</span>
          <span style={{ color: theme.palette.primary.main }}>Work Experiences</span>
          <span className="flex-1 h-px bg-white/20"></span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-screen-lg text-white">
        {/* Left: Company list */}
        <div className="flex flex-col gap-6 text-left border-l-2 h-fit pl-4 border-white/20 w-full lg:w-1/4">
          {companies.map((company, i) => (
            <button
              key={company.name}
              onClick={() => setSelected(i)}
              className={`text-left font-medium transition-colors duration-200 ${
                selected === i ? 'text-[#72C6B2]' : 'text-white/70 hover:text-white'
              }`}
            >
              {company.name}
            </button>
          ))}
        </div>

        {/* Right: Details */}
        <Box className="flex flex-col gap-4 w-full lg:w-3/4">
          <Typography variant="h5" fontWeight="bold" color="white">
            {companies[selected].role}
          </Typography>
          <Typography variant="body2" className="text-white/60 mb-4">
            {companies[selected].date}
          </Typography>
          <Box display="flex" gap={2} alignItems="flex-start">
            <HiMiniChevronRight className="mt-1 text-[#72C6B2]" />
            <Typography className="text-white/90 leading-relaxed">
              {companies[selected].description}
            </Typography>
          </Box>
        </Box>
      </div>
    </section>
  );
}