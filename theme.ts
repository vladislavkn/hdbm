import { colors } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { PaletteColorOptions } from "@material-ui/core/styles/createPalette";

const primary: PaletteColorOptions = {
  light: "#81A3FF",
  main: "#638EFF",
  dark: "#577CDD",
  contrastText: "#ffffff",
};

const secondary: PaletteColorOptions = {
  light: colors.grey[300],
  main: colors.grey[500],
  dark: colors.grey[700],
  contrastText: "#ffffff",
};

export default createMuiTheme({
  palette: {
    primary,
    secondary,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
