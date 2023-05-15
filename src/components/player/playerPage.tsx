import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  Box,
  Button,
  Paper,
  Input,
} from "@mui/material";
import TextAndSubText from "./textAndSubText";
import firebaseDB from "../../db/firebase";
import PlayerSelector from "./playerSelector";
export interface PlayerInterface {
  characterName: string;
  class: string;
  level: string;
  background: string;
  playerName: string;
  race: string;
  alignment: string;
  exp: string;
  str: string;
  dex: string;
  con: string;
  int: string;
  wis: string;
  cha: string;
  insp: string;
  prof: string;
}

function PlayerPage() {
  const testName = "Test Name";
  const [activePLayer, setActivePLayer] = useState<PlayerInterface | undefined>(
    undefined
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [allPlayers, setAllPlayers] = useState<PlayerInterface[]>([]);

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
    str:  "",
    dex:  "",
    con:  "",
    int:  "",
    wis:  "",
    cha:  "",
    insp:  "",
    prof:  "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPlayerData((prevState) => ({ ...prevState, [name]: value }));

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
          setActivePLayer(data[activeIndex]);
          setPlayerData(data[activeIndex]);
          setAllPlayers(data);
        }
      });
    }
    getPlayer();
  }, [activeIndex]);

  if (activePLayer === undefined) {
    return (
      <Box>
        <Typography
          variant="h3"
          sx={{ color: "text.secondary", p: 0, paddingTop: "2rem" }}
        >
          Player Characters
        </Typography>

        <Box>
          <Typography variant="h4" sx={{ color: "text.primary" }}>
            Loading Character...
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
          ></Paper>
        </Box>
      </Box>
    );
  }
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          color: "text.secondary",
          p: 0,
          paddingTop: "2rem",
          paddingBottom: "0.5rem",
        }}
      >
        Player Characters
      </Typography>
      <PlayerSelector data={allPlayers} />
      <Box>
        <Typography variant="h4" sx={{ color: "text.primary" }}>
          {playerData.characterName}
        </Typography>
        <Paper
          component="form"
          sx={{
            width: "60vw",
            bgcolor: "secondary.main",
            color: "text.primary",
            p: 2,
            borderRadius: "0.5rem",
            height: "120vw",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 2,
              height: "5%",
            }}
          >
            <Box sx={{ width: "40%" }}>
              <TextAndSubText
                text=" "
                subText="Character Name"
                variableName="characterName"
                onInputChange={handleInputChange}
                player={playerData}
                activePlayer={activePLayer}
              />
            </Box>

            <Box
              sx={{
                width: "60%",
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
                  text=" "
                  subText="Class"
                  variableName="class"
                  onInputChange={handleInputChange}
                  player={playerData}
                  activePlayer={activePLayer}
                />
                <TextAndSubText
                  text=" "
                  subText="Background"
                  variableName="background"
                  onInputChange={handleInputChange}
                  player={playerData}
                  activePlayer={activePLayer}
                />
                <TextAndSubText
                  text=" "
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
                  text=" "
                  subText="Race"
                  variableName="race"
                  onInputChange={handleInputChange}
                  player={playerData}
                  activePlayer={activePLayer}
                />

                <TextAndSubText
                  text=" "
                  subText="Alignment"
                  variableName="alignment"
                  onInputChange={handleInputChange}
                  player={playerData}
                  activePlayer={activePLayer}
                />

                <TextAndSubText
                  text=" "
                  subText="Experience"
                  variableName="exp"
                  onInputChange={handleInputChange}
                  player={playerData}
                  activePlayer={activePLayer}
                />
              </Box>
            </Box>
          </Box>
          <Box   sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              width: "33%",
            }}>
          {/* Stats Bar */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "33%",
            }}
          >
            <TextAndSubText
              text=" "
              subText="Strength"
              variableName="str"
              onInputChange={handleInputChange}
              player={playerData}
              activePlayer={activePLayer}
            />
            <TextAndSubText
              text=" "
              subText="Dexterity"
              variableName="dex"
              onInputChange={handleInputChange}
              player={playerData}
              activePlayer={activePLayer}
            />

            <TextAndSubText
              text=" "
              subText="Constitution"
              variableName="con"
              onInputChange={handleInputChange}
              player={playerData}
              activePlayer={activePLayer}
            />
            <TextAndSubText
              text=" "
              subText="Intelligence"
              variableName="int"
              onInputChange={handleInputChange}
              player={playerData}
              activePlayer={activePLayer}
            />

            <TextAndSubText
              text=" "
              subText="Wisdom"
              variableName="wis"
              onInputChange={handleInputChange}
              player={playerData}
              activePlayer={activePLayer}
            />
            <TextAndSubText
              text=" "
              subText="Charisma"
              variableName="cha"
              onInputChange={handleInputChange}
              player={playerData}
              activePlayer={activePLayer}
            />
          </Box>
          <Box>
          <TextAndSubText
              text=" "
              subText="Inspiration"
              variableName="insp"
              onInputChange={handleInputChange}
              player={playerData}
              activePlayer={activePLayer}
            />
                 <TextAndSubText
              text=" "
              subText="Profiency Bonus"
              variableName="prof"
              onInputChange={handleInputChange}
              player={playerData}
              activePlayer={activePLayer}
            />

            
          </Box>

          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default PlayerPage;
