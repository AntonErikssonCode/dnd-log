import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  Box,
  Button,
  Paper,
  Input
} from "@mui/material";
import { PlayerInterface } from "./playerPage";

interface Props{
  data: PlayerInterface[];
}
function PlayerSelector(props: Props) {
  const { data} = props;
  console.dir(data)
  const allPlayers = data.map((player, index)=>{
    console.dir(player)
    return(
      <Paper  sx={{
     
        bgcolor: "secondary.main",
        color: "text.primary",
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center",
        borderRadius: "0.5rem",
        p:" 0.5rem", 
      }}>
      <Typography key={index} sx={{ color: "text.primary" }}>
    {player.characterName}
  </Typography>
  </Paper>
    )
  })
  return (
    <Box
    sx={{ display:"flex", 
    justifyContent:"flex-start", 
    alignItems:"flex-start",
    gap: 2, 
    pb:4
    }}>
      {allPlayers}
    </Box>
  );
}

export default PlayerSelector;