import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CharacterClass } from "./classes/Character";
import { useState, useEffect } from "react";
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
import Card from "./components/card";
import { ref, set, push, onValue } from "firebase/database";
import firebaseDB from "./db/firebase";
import InputForm from "./components/inputForm";
import theme from "./theme/theme";
import PlayerPage from "./components/player/playerPage";
function App() {
  const [selectedItem, setSelectedItem] = useState<CharacterClass | null>(null);
  const [showSection, setShowSection] = useState(0);
  const [npcData, setNpcData] = useState<any[] | undefined>(undefined);

  useEffect(() => {
    firebaseDB.getNpcData().then((data) => {
      let displayData: CharacterClass[] = [];
      if (data?.length) {
        data.forEach((data) => {
          const newChar = new CharacterClass({ ...data });
          displayData.push(newChar);
        });
      }
      displayData = displayData.sort((a, b) => {
        if (a.date && b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        } else if (a.date) {
          return -1;
        } else if (b.date) {
          return 1;
        }
        return 0;
      });
      displayData = displayData.reverse();
      setNpcData(displayData);
    });
  }, [showSection]);

  useEffect(() => {

  }, []);


  function handleItemClick(item: CharacterClass) {
    setSelectedItem(item);
  }

  const handleMenuSelection = (selection: number): void => {
    setShowSection(selection);
  };

  const players = () => (
    <>
      <PlayerPage />
    </>
  );

  const npcs = () => (
    <>
      {npcData && npcData.length > 0 ? (
        npcData.map((character, index) => (
          <Card
            data={character}
            index={index + 1}
            key={index}
            npcData={npcData}
          />
        ))
      ) : (
        <p>No NPCs to display</p>
      )}
    </>
  );
  const locations = () => (
    <>
      <Typography sx={{ color: "text.primary" }}>Locations</Typography>
    </>
  );
  const sessions = () => (
    <>
      <Typography sx={{ color: "text.primary" }}>Sessions</Typography>
    </>
  );
  const add = () => (
    <>
      <InputForm />
    </>
  );

  const layouts = [players, npcs, locations, sessions, add];
  const ActiveLayout = layouts[showSection];

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
            width: "10%",
            minWidth:"120px",
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
                bgcolor: "secondary.main",
                width: "100%",
                borderRadius: 0,
              }}
              onClick={() => handleMenuSelection(0)}
            >
              <Typography>Players</Typography>
            </Button>

            <Button
              sx={{
                m: 0,
                p: 1,
                color: "text.primary",
                bgcolor: "secondary.main",
                width: "100%",
                borderRadius: 0,
              }}
              onClick={() => handleMenuSelection(1)}
            >
              <Typography>NPCS</Typography>
            </Button>
            <Button
              sx={{
                m: 0,
                p: 1,
                color: "text.primary",
                bgcolor: "secondary.main",
                width: "100%",
                borderRadius: 0,
              }}
              onClick={() => handleMenuSelection(2)}
            >
              <Typography>Locations</Typography>
            </Button>
            <Button
              sx={{
                m: 0,
                p: 1,
                color: "text.primary",
                bgcolor: "secondary.main",
                width: "100%",
                borderRadius: 0,
              }}
              onClick={() => handleMenuSelection(3)}
            >
              <Typography>Sessions</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                marginTop: "auto",
                p: 2,
                color: "text.primary",
                bgcolor: "primary.main",
                width: "50%",
                height: "auto",
                alignSelf: "center",
              }}
              onClick={() => handleMenuSelection(4)}
            >
              <Typography
                sx={{
                  alignSelf: "center",
                  fontSize: "4rem",
                  color: "secondary.main",
                }}
              >
                +
              </Typography>
            </Button>
          </List>
        </Box>

        <Box
          sx={{
            m: 0,

            height: "auto",
            overflowY: "scroll",
            width: "90%",
            position: "fixed",
            left: "10%",
            top: 0,
            bottom: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            /*             bgcolor: "red",
             */
          }}
        >
          <Box
            sx={{
              /*               bgcolor: "grey",
               */ borderRadius: "0.2rem",
              position: "relative",
              display: "flex",

              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "flexStart",
              width: "90%",
              height: "100%",
              gap: 3,
              py: 3,
              maxHeight: "100vh", // set max-height to viewport height minus 80px for header
              /*  overflowY: "auto", */ // enable scrolling when content exceeds max-height
            }}
          >
            <ActiveLayout />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
