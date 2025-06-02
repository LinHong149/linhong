'use client';

import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { HiMiniChevronRight } from 'react-icons/hi2';

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
      'Generated $2.3K profit in 2 months; improved a client’s operational efficiency by 10%.',
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

  return (
    <section className=" flex flex-col items-center justify-center py-[40vh] px-6 lg:px-20 text-[#DCDEFF] w-[70vw] h-[100vh]">
      {/* Section Header */}
      <div className="w-full max-w-screen-lg px-4 mb-12">
        <h2 className="flex items-center gap-4 text-4xl font-extrabold text-left">
          <span className="text-[#DCDEFF]">My</span>
          <span style={{ color: theme.palette.primary.main }}>Work Experiences</span>
          <span className="flex-1 h-px bg-[#DCDEFF]/20"></span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-screen-lg text-[#DCDEFF]">
        {/* Left: Company list */}
        <div className="flex flex-col gap-6 text-left border-l-2 h-fit pl-4 border-[#DCDEFF]/20 w-full lg:w-1/4">
          {companies.map((company, i) => (
            <button
              key={company.name}
              onClick={() => setSelected(i)}
              className={`text-left font-medium transition-colors duration-200 ${
                selected === i ? 'text-[#72C6B2]' : 'text-[#DCDEFF]/70 hover:text-[#DCDEFF]'
              }`}
            >
              {company.name}
            </button>
          ))}
        </div>

        {/* Right: Details */}
        <Box className="flex flex-col gap-4 w-full lg:w-3/4 min-h-[300px]">
          <Typography variant="h5" fontWeight="bold" color="[#DCDEFF]">
            {companies[selected].role}
          </Typography>
          <Typography variant="body2" className="text-[#DCDEFF]/60 mb-4">
            {companies[selected].date}
          </Typography>
          <Box className="flex flex-col gap-2">
            {companies[selected].description.map((point, index) => (
              <Box key={index} display="flex" alignItems="flex-start" gap={1}>
                <HiMiniChevronRight className="mt-1 text-[#72C6B2]" />
                <Typography className="text-[#DCDEFF]/90 leading-relaxed">{point}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </div>
    </section>
  );
}