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
  // You can add other theme customizations here like typography, spacing, components, etc.
});

export default theme;