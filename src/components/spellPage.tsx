import { useState, useEffect } from "react";
import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  Box,
  Button,
} from "@mui/material";
import { getSpell } from "./getSpell";

interface Props {
  spells: string[];
}

function SpellPage(props: Props) {
  const [spellsList, setSpellsList] = useState<any[]>([]);

  useEffect(() => {
    async function fetchSpells() {
      const promises = props.spells.map((spell) => getSpell(spell));
      try {
        const data = await Promise.all(promises);
        setSpellsList(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSpells();
  }, [props.spells]);

  if (spellsList.length === 0) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box sx={{color:"text.primary"}}>
      {spellsList.map((spell) => {
        return <Typography> {spell.name}</Typography>;
      })}
    </Box>
  );
}

export default SpellPage;
