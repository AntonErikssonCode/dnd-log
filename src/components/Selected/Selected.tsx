import React from "react";
import { CharacterClass } from "../../Classes/Character";
import { Container, Typography, List, Paper, Box } from "@mui/material";

interface Props {
  character: CharacterClass;
}
function Selected(props: Props) {
  return (
    <Box sx={{p:2, width:"100%"}}>
      <Paper elevation={5} sx={{ width:"100%", height:"100%"}}>
        <Typography>{props.character.name}</Typography>
      </Paper>
    </Box>
  );
}

export default Selected;
