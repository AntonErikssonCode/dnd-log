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

function App() {
  const [selectedItem, setSelectedItem] = useState<CharacterClass | null>(null);
  const [showSection, setShowSection] = useState(4);
  const [npcData, setNpcData] = useState<any[] | undefined>(undefined);


  

  
  useEffect(() => {
    firebaseDB.getNpcData().then((data) => {
      let displayData: CharacterClass[] = [];
      if (data == undefined) {
        displayData = [];
      }
      else{
        data.forEach((data)=>{
        const newChar = new CharacterClass({ ...data });
          displayData.push(newChar)
        })


        
      }
      setNpcData(displayData);
    });
  }, [showSection]);




  function handleItemClick(item: CharacterClass) {
    setSelectedItem(item);
  }

  const handleMenuSelection = (selection: number): void => {
    setShowSection(selection);
  };

 

  const players = () => (
    <>
      <Typography sx={{ color: "text.primary" }}>Player</Typography>
    </>
  );

  const npcs = () => (
    <>
      {npcData && npcData.length > 0 ? (
        npcData.map((character, index) => <Card data={character} index={index+1} key={index} />)
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
/* 
  const mrAron = new CharacterClass(
    1,
    "Mr (Sir) Aron",
    "Knight",
    characterFriends,
    characterEnemy,
    characterStats,
    characterGear,
    "https://cg4.cgsociety.org/uploads/images/medium/claudiotumiati-the-old-knight-1-a01518b0-sboy.jpg"
  );
  const fiora = new CharacterClass(
    2,
    "Fiora Lanka",
    "Princess",
    characterFriends,
    characterEnemy,
    characterStats,
    characterGear,
    "https://i.pinimg.com/originals/76/5e/83/765e832e796316517b5a8acfa7647cde.png"
  ); */
/* 
  const allNpcChars: CharacterClass[] = [
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
  ]; */

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
              onClick={() => handleMenuSelection(0)}
            >
              <Typography>Players</Typography>
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
              onClick={() => handleMenuSelection(1)}
            >
              <Typography>NPCS</Typography>
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
              onClick={() => handleMenuSelection(2)}
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
              onClick={() => handleMenuSelection(3)}
            >
              <Typography>Sessions</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                marginTop: "auto",
                p: 1,
                color: "text.primary",
                bgcolor: "secondary.main",
                width: "50%",
                height: "auto",
                alignSelf: "center",
              }}
              onClick={() => handleMenuSelection(4)}
            >
              <Typography sx={{ alignSelf: "center", fontSize: "4rem" }}>
                +
              </Typography>
            </Button>
          </List>
        </Box>

        <Box
          sx={{
            m: 0,

            bgcolor: "grey",
            width: "82%",
            position: "fixed",
            left: "16%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              /*  bgcolor: "background.paper", */

              height: "94%",

              borderRadius: "0.2rem",
              position: "fixed",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "flex-start",
              overflowY: "auto",
              p: 3,
              gap: 3,
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
