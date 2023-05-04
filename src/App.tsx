import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CharacterClass, Friend, Enemy } from "./Classes/Character";
import CharacterList from "./components/CharacterList/CharacterList";
import Selected from "./components/Selected/Selected";
import Character from "./components/Character/Character";
import { useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  Box,
  Button,
} from "@mui/material";
import backgroundImage from "./assets/board.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

function App() {
  const [selectedItem, setSelectedItem] = useState<CharacterClass | null>(null);

  function handleItemClick(item: CharacterClass) {
    setSelectedItem(item);
  }

  const characterFriends = [
    { name: "Fiora Lanka", degree: 10 },
    { name: "Jeorgy", degree: 6 },
  ];
  const characterEnemy = [{ name: "Pada Padela", degree: 6 }];
  const characterStats = {
    dex: "10",
    str: "18",
    con: "18",
    int: "12",
    cha: "11",
    wis: "8",
    ac: "14",
  };

  const characterGear = [{ name: "BIG ASS SWORD", dmg: "2D10" }];

  const mrAron = new CharacterClass(
    1,
    "Mr/Sir Aron",
    "Knight",
    characterFriends,
    characterEnemy,
    characterStats,
    characterGear,
    "https://cg4.cgsociety.org/uploads/images/medium/claudiotumiati-the-old-knight-1-a01518b0-sboy.jpg"
  );
  const fiora = new CharacterClass(
    1,
    "Fiora Lanka",
    "Princess",
    characterFriends,
    characterEnemy,
    characterStats,
    characterGear,
    "https://i.pinimg.com/originals/76/5e/83/765e832e796316517b5a8acfa7647cde.png"
  );

  const allChars: CharacterClass[] = [
    mrAron,
    fiora,
    mrAron,
    fiora,
    mrAron,
    fiora,
    mrAron,
    fiora,
    mrAron,
    fiora,
    mrAron,
    fiora,
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          bgcolor: "background.default",
          display: "flex",
          m: 0,
          p: 0,
        }}
      >
        <Box
          sx={{
            width: "16%",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            bgcolor: "background.paper",
            m: 0,
            py: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <List
            sx={{
              m: 0,
              pt: 0,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 0 /*,bgcolor:"text.primary" */,
              height: "100%",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                m: 0,
                p: 1,
                color: "text.primary",
                bgcolor: "primary.main",
                width: "100%",
                borderRadius: 0,
              }}
            >
              <Typography>Characters</Typography>
            </Button>
            <Button
              sx={{
                m: 0,
                p: 1,
                color: "text.primary",
                bgcolor: "primary.main",
                width: "100%",
                borderRadius: 0,
              }}
            >
              <Typography>Locations</Typography>
            </Button>
            <Button
              sx={{
                m: 0,
                p: 1,
                color: "text.primary",
                bgcolor: "primary.main",
                width: "100%",
                borderRadius: 0,
              }}
            >
              <Typography>Locations</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                
                marginTop: "auto",
                p: 1,
                color: "text.primary",
                /* bgcolor: "secondary.main", */
                width: "70%",
                height: "20%",
                alignSelf: "center",
             
              }}
            >
              <Typography sx={{alignSelf:"center"}}>Add</Typography>
            </Button>
          </List>
        </Box>

        <Container></Container>
      </Box>
    </ThemeProvider>

    /* <Box
      sx={{

        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh", 
          filter: "blur(5px)",
          zIndex: "-10",
        }}
      ></Box>

      <Container
        sx={{
          display: "flex",
          flexDirection: "row",

          height: "100vh",
          width: "100%",
          p: 5,
       
        }}
      >
        <Container sx={{ p: 0, m: 0, display: "flex", width: "40%" }}>
          <CharacterList
            characterArray={allChars}
            onItemClick={handleItemClick}
          />
        </Container>
        <Container sx={{ p: 0, m: 0, display: "flex", width: "60%" }}>
          {selectedItem && <Selected character={selectedItem} />}
        </Container>
      </Container>
    </Box> */
  );
}

export default App;
