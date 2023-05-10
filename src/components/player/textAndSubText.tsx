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

interface Props {
  text: string;
  subText: string;
}

function TextAndSubText(props: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.4rem",
        }}
      >
        {props.text}
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          fontStyle: "italic",
        }}
      >
          {props.subText}
      </Typography>
    </Box>
  );
}

export default TextAndSubText;
