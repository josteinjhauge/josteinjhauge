
import { PaletteOptions, createTheme } from "@mui/material";
// naval Hex: 354649 / 6C7A89 / A3C6C4 / E0E7E9
// easter Hex: 8E7C68 / ED7458 / FFDC9F / DDC9BC
// scuba Hex: 0C4A60 / EF6C33 / ABDFF1 / E1DDDB
const palette: PaletteOptions = {
  primary: {
    main: "#0C4A60",
  },
  secondary: {
    main: "#EF6C33",
  },
  text: {
    primary: "#E1DDDB",
    secondary: "#ABDFF1",
  },
  background: {
    default: "#0C4A60",
    paper: "#354649",
  },
};

export const theme = createTheme({
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 768,
      lg: 1050,
      xl: 1920,
    },
  },
});

export const ICON_SIZE = "2rem";
