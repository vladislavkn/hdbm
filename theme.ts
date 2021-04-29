import { createMuiTheme } from "@material-ui/core/styles";
import { PaletteColorOptions } from "@material-ui/core/styles/createPalette";

const primary: PaletteColorOptions = {
  light: "#81A3FF",
  main: "#638EFF",
  dark: "#577CDD",
  contrastText: "#ffffff",
};

export default createMuiTheme({
  palette: {
    primary,
  },
});
