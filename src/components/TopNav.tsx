"use client";
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();

  return (
    <header
      className="fixed z-50 top-0 left-0 right-0 flex justify-end px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8"
      style={{
        position: 'fixed',
        zIndex: 50,
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: 'linear-gradient(to bottom, rgba(9, 16, 15, 0.6), rgba(9, 16, 15, 0.2))',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
        zIndex: -1,
      }} />

      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
        <Button
          variant="outlined"
          sx={{
            textTransform: 'none',
            color: theme.palette.common.white,
            borderColor: theme.palette.common.white,
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            padding: { xs: '4px 12px', sm: '6px 16px' },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderColor: theme.palette.common.white,
            },
          }}
        >
          Resume
        </Button>
      </a>
    </header>
  );
};

export default Header;