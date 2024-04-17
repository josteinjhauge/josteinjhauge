
import { PaletteOptions, createTheme } from "@mui/material";
// naval Hex: 354649 / 6C7A89 / A3C6C4 / E0E7E9
// easter Hex: 8E7C68 / ED7458 / FFDC9F / DDC9BC
// scuba Hex: 0C4A60 / EF6C33 / ABDFF1 / E1DDDB
// 141619 / 2c2e3a / 050a44 / 0a21c0 / b3b4bd
const palette: PaletteOptions = {
  primary: {
    main: "#1f2833",
  },
  secondary: {
    main: "#1f2833",
  },
  text: {
    primary: "#fff",
    secondary: "#66fcf1",
  },
  background: {
    default: "#1f2833",
    paper: "#1f2833",
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
