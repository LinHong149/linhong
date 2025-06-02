import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#72C6B2', // your primary color
      contrastText: '#09100F'
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
        black: '#09100F',
    }
  },
  typography: {
    fontFamily: 'var(--font-varela-round)',
    h1: {
      fontFamily: 'var(--font-varela-round)',
    },
    h2: {
      fontFamily: 'var(--font-varela-round)',
    },
    h3: {
      fontFamily: 'var(--font-varela-round)',
    },
    h4: {
      fontFamily: 'var(--font-varela-round)',
    },
    h5: {
      fontFamily: 'var(--font-varela-round)',
    },
    h6: {
      fontFamily: 'var(--font-varela-round)',
    },
    body1: {
      fontFamily: 'var(--font-varela-round)',
    },
    body2: {
      fontFamily: 'var(--font-varela-round)',
    },
    button: {
      fontFamily: 'var(--font-varela-round)',
    },
  },
  // You can add other theme customizations here like spacing, components, etc.
});

export default theme;