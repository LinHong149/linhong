'use client';

import React from "react";
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const Main = () => {
  const theme = useTheme();

  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] pt-[10%] pb-[5%] px-4 sm:px-6 md:px-8">
      <div className="flex flex-col gap-4 sm:gap-6 items-center z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-center">
          <span className="text-[#DCDEFF] font-black">Hi, I'm </span>
          <span
            className="bg-gradient-to-r from-[#72C6B2] to-[#AC71C0] bg-clip-text text-transparent font-black"
          >Lin Hong</span>
          <br />
          <span className="outlined-text font-black">A Software Engineer</span>
        </h1>

        <p className="text-lg sm:text-xl text-center font-medium">Waterloo CS '30</p>

        <Button
          variant="outlined"
          onClick={() => {
            const el = document.getElementById('projects');
            if (el) {
              const offset = -200;
              const y = el.getBoundingClientRect().top + window.scrollY + offset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          sx={{
            textTransform: 'none',
            color: theme.palette.common.white,
            borderColor: theme.palette.common.white,
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            padding: { xs: '4px 12px', sm: '6px 16px' },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderColor: theme.palette.common.white,
            },
          }}
        >
          Projects
        </Button>
      </div>
    </div>
  );
};

export default Main;