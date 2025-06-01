'use client';

import React from "react";
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const Main = () => {
  const theme = useTheme();

  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] pt-[10%] pb-[5%] px-parent">

      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-8xl font-black leading-tight text-center">
          <span className="text-white font-black">Hi, I'm </span>
          <span
            className="bg-gradient-to-r from-[#72C6B2] to-[#AC71C0] bg-clip-text text-transparent font-black"
          >Lin Hong</span>
          <br />
          <span className="outlined-text font-black">Software Engineer</span>
        </h1>

        <p className="text-xl text-center font-medium">Waterloo CS '30</p>

        <Button
          variant="outlined"
          sx={{
            textTransform: 'none',
            color: theme.palette.common.white,
            borderColor: theme.palette.common.white,
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