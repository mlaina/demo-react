import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#562C2C',
      contrastText: '#fff',
    },
    secondary: {
      main: '#127475',
    },
    warning: {
      main: '#E76F51',
    },
    error: {
      main: '#d32f2f',
    },
    grey: {
      main: '#e8eaed',
    },
    darkerGrey: {
      color: '#787878',
    },
    disabled: {
      main: '#9e9e9e',
    },
    success: {
      main: '#0E9594',
    },
    info: {
      main: '#F5DFBB',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiTableCell: {
      root: {
        paddingTop: '1px',
        paddingBottom: '1px',
        maxWidth: '0 !important',
        minWidth: '0 !important',
      },
    },
    MuiSvgIcon: {
      fontSizeLarge: {
        fontSize: '6rem',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: '35px',
      },
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard',
      },
    },
  },
});

export default theme;
