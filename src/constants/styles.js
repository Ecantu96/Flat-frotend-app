import { createMuiTheme } from '@material-ui/core/styles';
//import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#00BCD4',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      light: 'f1f1f1',
      main: '#00202d',
      // dark: will be calculated from palette.secondary.main,
      contrastText: 'blue',
    },
    error: red,
    text:{
      primary: '#00202d',
      secondary: '#3F51B5',
      disabled: '#9E9E9E',
      hint: 'rgba(0,0,0,0.6)',
  }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(',')
  },
  overrides: {}
});

export const styles = theme => ({
  flex: {
    flex: 1,
    width: '100%'
  },

  /** Header Css */
  StepperRoot: {
    maxWidth: 400,
    flexGrow: 1,
  },
  StepperHeader: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  StepperImg: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
})

