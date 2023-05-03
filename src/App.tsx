import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CharacterClass, Friend, Enemy } from "./Classes/Character";
import CharacterList from "./components/CharacterList/CharacterList";
import Selected from "./components/Selected/Selected";
import Character from "./components/Character/Character";
import { useState } from "react";
import { Container, Typography, List, ListItem } from "@mui/material";
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
    "Mr (Sir) Aron",
    "Knight",
    characterFriends,
    characterEnemy,
    characterStats,
    characterGear
  );

  const allChars: CharacterClass[] = [mrAron];

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        bgcolor: "grey",
        height: "100vh",
      }}
    >
      <Container sx={{ display: "flex", bgcolor: "blue", width: "30%" }}>
      <CharacterList characterArray={allChars} onItemClick={handleItemClick} />
       
      </Container>
      <Container sx={{ display: "flex", bgcolor: "red", width: "70%" }}>
        {" "}
      </Container>
    </Container>

    /*     <div className="App">
      <CharacterList characterArray={allChars} onItemClick={handleItemClick} />
      {selectedItem && <Selected character={selectedItem} />}
    </div> */
  );
}

export default App;
