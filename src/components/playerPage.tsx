import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  Box,
  Button,
} from "@mui/material";

import SpellPage from './spellPage';
import PlayerCard from './player/playerCard';
import firebaseDB from '../db/firebase';
function PlayerPage() {
  

  const spellArray = ["acid-arrow", "fireball"]
  return (
    <Box >
    <Typography variant="h3" sx={{color:"text.secondary", py:"2rem"}}>Player Characters</Typography>
    {/*   <SpellPage spells={spellArray} /> */}
    <PlayerCard/>
    </Box>
  );
}

export default PlayerPage;