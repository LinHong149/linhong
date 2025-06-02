'use client';

import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

const projects = [
  {
    title: 'X-Dividend Mobile App',
    subtitle: 'Featured Project',
    description:
      'The app offers comprehensive data on companies, including categories of Most Actives, Gainers and Losers Stock Market. Users can sort the information by sector, name, highest or lowest price, dividend date, and ex-dividend date. This data is updated in real-time, ensuring that users always have access to the most current information.',
    tech: ['React Native', 'Hybrid Mobile App', 'Android', 'iOS'],
    image: '/images/x-dividend.png',
  },
  {
    title: 'Interect Family Chat App',
    subtitle: 'Featured Project',
    description:
      'Interect is a revolutionary mobile app designed to help families connect with other families and promote social interaction. It uses geolocation features to show nearby families and enables messaging and event creation within the app.',
    tech: ['React Native', 'Firebase', 'Geolocation'],
    image: '/images/interect.png',
  },
];

export default function ProjectsSection() {
  const theme = useTheme();

  return (
    <section className="w-[80vw] px-6 lg:px-20 py-24 text-[#DCDEFF]">
      {/* Header */}
      <div className="max-w-screen-xl mx-auto mb-20">
        <h2 className="flex items-center gap-4 text-5xl font-extrabold text-left leading-tight">
          Things I’ve Worked on,
          <span className="text-[#72C6B2]">Some of Them</span>
          <span className="flex-1 h-px bg-[#DCDEFF]/20"></span>
        </h2>
      </div>

      {/* Project list */}
      <div className="flex flex-col gap-28 max-w-screen-xl mx-auto">
        {projects.map((proj, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={proj.title}
              className={`relative flex flex-col lg:flex-row items-center gap-12 ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Text block */}
              <div className={`w-full lg:w-1/2 flex flex-col gap-4 z-10 ${!isEven ? 'lg:items-end' : ''}`}>
                <Typography variant="body2" className="text-[#DCDEFF]/70 text-base">
                  {proj.subtitle}
                </Typography>
                <Typography variant="h5" fontWeight="bold" className="text-[#72C6B2] text-2xl">
                  {proj.title}
                </Typography>

                {/* Description box */}
                <Box
                  sx={{
                    backgroundColor: '#463967',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginTop: '1rem',
                    marginBottom: '0.5rem',
                    maxWidth: '100%',
                  }}
                  className={`shadow-xl -mt-12 ${isEven ? 'lg:-ml-16' : 'lg:-mr-16'}`}
                >
                  <Typography className="text-[#DCDEFF]/90 leading-relaxed text-sm lg:text-base">
                    {proj.description}
                  </Typography>
                </Box>

                {/* Tech stack */}
                <Typography variant="body2" className="text-[#72C6B2] text-sm mt-1">
                  {proj.tech.join(' | ')}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}