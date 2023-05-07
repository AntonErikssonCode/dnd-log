import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#064663",
      light: "#064663",
      dark: "#064663",
    },
    secondary: {
      main: "#ECB365",
      light: "#ECB365",
      dark: "#ECB365",
    },
    background: {
      default: "#041C32",
      paper: "#04293A",
    },
    text: {
      primary: "#ffffff",
      secondary: "#dddddd",
    },
  },
});

export default theme;