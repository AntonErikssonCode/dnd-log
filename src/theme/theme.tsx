import { createTheme } from "@mui/material/styles";

// Define the theme colors
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ffff", // highlight
    },
    secondary: {
      main: "#212121", // bright grey
    },
    background: {
      paper: "#212121", // dark gray
      default: "#121212", // black
      
    },
    text: {
      primary: "#FFFFFF", // white
      secondary: "#BDBDBD", // light gray
    },
  },

  // Define the typography styles
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
      letterSpacing: "0.1rem",
      margin: "2rem 0",
    },
    h2: {
      fontSize: "2.6rem",
      fontWeight: "bold",
      letterSpacing: "0.1rem",
      
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "bold",
      letterSpacing: "0.1rem",
  
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
  
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      
    },
  },
});

export default theme;
