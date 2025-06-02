"use client";
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();

  return (
    <header className="fixed z-10 top-0 left-0 right-0 backdrop-blur-md bg-base-100/30 border-primary/20 flex justify-end px-8 py-4">
      <Button
        variant="outlined"
        sx={{
          textTransform: 'none',
          color: theme.palette.common.white,
          borderColor: theme.palette.common.white,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderColor: theme.palette.common.white,
          },
        }}
      >
        Resume
      </Button>
    </header>
  );
};

export default Header;