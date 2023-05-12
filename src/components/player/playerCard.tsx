import React, { useEffect, useState } from "react";

import {
  Container,
  Typography,
  List,
  ListItem,
  Box,
  Button,
  Paper,
} from "@mui/material";
import TextAndSubText from "./textAndSubText";
import firebaseDB from "../../db/firebase";

export interface PlayerInterface {
  characterName: string;
  class: string;
  level: string;
  background: string;
  playerName: string;
  race: string;
  alignment: string;
  exp: string;
}
function PlayerCard() {
  const testName = "Test Name";
  const [activePLayer, setActivePLayer] = useState<PlayerInterface | undefined>(
    undefined
  );

  const [isUserDataEntered, setIsUserDataEntered] = useState(false);
  const [playerData, setPlayerData] = useState<PlayerInterface>({
    characterName: "",
    class: "",
    level: "",
    background: "",
    playerName: "",
    race: "",
    alignment: "",
    exp: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPlayerData((prevState) => ({ ...prevState, [name]: value }));
    console.dir(playerData);
    uploadPlayerData();
    setIsUserDataEntered(true);
  };
  useEffect(() => {
    if (isUserDataEntered) {
      uploadPlayerData();
      setIsUserDataEntered(false);
    }
  }, [isUserDataEntered]);

  function uploadPlayerData() {
    firebaseDB.setPlayer(testName, playerData);
  }


  // Feches Player
  useEffect(() => {
    async function getPlayer() {
      firebaseDB.getPlayerData().then((data) => {
        if (data?.length) {
          setActivePLayer(data[0]);
        }
      });
    }
    getPlayer();
  }, []);

  if (activePLayer === undefined) {
    return <Box>
    <Typography variant="h4" sx={{ color: "text.primary" }}>
      Character Name
    </Typography>
    <Paper
        component="form"
        sx={{
          width: "60vw",
          bgcolor: "secondary.main",
          color: "text.primary",
          p: 2,
          borderRadius: "0.5rem",
        }}
      >
        </Paper>
   
  </Box>
  }
  return (
    <Box>
      <Typography variant="h4" sx={{ color: "text.primary" }}>
        Character Name
      </Typography>
      <Paper
        component="form"
        sx={{
          width: "60vw",
          bgcolor: "secondary.main",
          color: "text.primary",
          p: 2,
          borderRadius: "0.5rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <Typography variant="h5" sx={{ color: "text.primary", width: "40%" }}>
          Character Name
          </Typography>
          <Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                gap: 2,
              }}
            >
              <TextAndSubText
                text="Rouge"
                subText="Class"
                variableName="class"
                onInputChange={handleInputChange}
                player={playerData}
                activePlayer={activePLayer}
              />
              <TextAndSubText
                text="Rouge"
                subText="Background"
                variableName="background"
                onInputChange={handleInputChange}
                player={playerData}
                activePlayer={activePLayer}
              />
              <TextAndSubText
                text="Rouge"
                subText="Player Name"
                variableName="playerName"
                onInputChange={handleInputChange}
                player={playerData}
                activePlayer={activePLayer}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                gap: 2,
              }}
            >
              <TextAndSubText
                text="Rouge"
                subText="Race"
                variableName="race"
                onInputChange={handleInputChange}
                player={playerData}
                activePlayer={activePLayer}
              />

              <TextAndSubText
                text="Rouge"
                subText="Alignment"
                variableName="alignment"
                onInputChange={handleInputChange}
                player={playerData}
                activePlayer={activePLayer}
              />

              <TextAndSubText
                text="Rouge"
                subText="Experience"
                variableName="exp"
                onInputChange={handleInputChange}
                player={playerData}
                activePlayer={activePLayer}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default PlayerCard;
