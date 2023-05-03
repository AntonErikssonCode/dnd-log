import React from "react";
import Character from "../Character/Character";
import { CharacterClass } from "../../Classes/Character";
import { Typography, List, ListItem, Paper } from "@mui/material";

interface Props {
  characterArray: CharacterClass[];
  onItemClick: (item: CharacterClass) => void;
}

function CharacterList(props: Props) {
  const itemComponents = props.characterArray.map((character, index) => (
    <ListItem
      sx={{ p: 1, m: 0, width: "100%" }}
      key={character.name + index}
      onClick={() => props.onItemClick(character)}
    >
      <Paper elevation={3} sx={{ p: 1, m: 0, width: "100%" }}>
       
        <Typography variant="h5">{character.name}</Typography>
        <Typography variant="h6" sx={ {fontStyle:"italic"}}>{character.title}</Typography>
      </Paper>
    </ListItem>
  ));

  return (
    <List sx={{ p:0, m: 1, width: "100%", height: "100%" }}>
      {itemComponents}
    </List>
  );
}

export default CharacterList;
