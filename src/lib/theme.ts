import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#72C6B2', // your primary color
      contrastText: '#0A1110'
    },
    secondary: {
      main: '#463967', // your secondary color
      contrastText: '#DCDEFF'
    },
    warning: {
      main: '#AC71C0',
      contrastText: '#DCDEFF'
    },
    text: {
      primary: '#DCDEFF'
    },
    common: {
        white: '#DCDEFF', // define your custom white here
        black: '#0A1110',
    }
  },
  typography: {
    fontFamily: 'var(--font-poppins)',
    h1: {
      fontFamily: 'var(--font-poppins)',
    },
    h2: {
      fontFamily: 'var(--font-poppins)',
    },
    h3: {
      fontFamily: 'var(--font-poppins)',
    },
    h4: {
      fontFamily: 'var(--font-poppins)',
    },
    h5: {
      fontFamily: 'var(--font-poppins)',
    },
    h6: {
      fontFamily: 'var(--font-poppins)',
    },
    body1: {
      fontFamily: 'var(--font-poppins)',
    },
    body2: {
      fontFamily: 'var(--font-poppins)',
    },
    button: {
      fontFamily: 'var(--font-poppins)',
    },
  },
  // You can add other theme customizations here like spacing, components, etc.
});

export default theme;