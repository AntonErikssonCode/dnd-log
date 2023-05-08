import React from "react";
import { Box, Typography, Paper } from "@mui/material";

type Props = {
  name: string;
  degree: number;
  img: string;
  
};

function RelationsCard(props: Props) {
  return (
    <Paper>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
        }}
      >
        <img
          src={props.img}
          alt={props.name}
          style={{ width: "100%", borderRadius: "0.5rem" }}
        />
      </Box>
      <Typography>{props.name}</Typography>
      <Typography>{props.degree}</Typography>
    </Paper>
  );
}

export default RelationsCard;
