import React from "react";

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
function PlayerCard() {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: "text.primary" }}>
        Character Name
      </Typography>
      <Paper
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
              flexDirection:"column",
              gap:1
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <TextAndSubText text="Rouge" subText="Class" />
              <TextAndSubText text="Rouge" subText="Class" />
              <TextAndSubText text="Rouge" subText="Class" />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <TextAndSubText text="Rouge" subText="Class" />
              <TextAndSubText text="Rouge" subText="Class" />
              <TextAndSubText text="Rouge" subText="Class" />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default PlayerCard;
