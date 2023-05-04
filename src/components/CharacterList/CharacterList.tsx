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
    <List sx={{ p:0, m: 1, width: "100%", overflowY: "auto",
    margin: 0,
    padding: 0,
    listStyle: "none",
    height: "100%",
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }}}>
      {itemComponents}
    </List>
  );
}

export default CharacterList;
