import React from "react";
import { Box, Typography, Paper } from "@mui/material";

type Props = {
  name: string;
  degree: number;
  img: string;
  relationType: string;
};

function RelationsCard(props: Props) {
  const enemyColors = [
    "#FFFF00", // bright yellow
    "#FFDD00",
    "#FFBB00",
    "#FF9900",
    "#FF7700",
    "#FF5500",
    "#FF3300",
    "#FF1100",
    "#EE0000",
    "#CC0000", // dark red
    "#990000", // additional color (dark maroon)
  ];

  const friendColors = [
    "#00FF00", // bright light green
    "#33FF00",
    "#66FF00",
    "#99FF00",
    "#CCFF00",
    "#FFFF00",
    "#CCFF00",
    "#99FF00",
    "#66FF00",
    "#33FF00", // very saturated green
    "#008000", // additional color (dark green)
  ];

  const color =
    props.relationType === "enemy"
      ? enemyColors[props.degree]
      : friendColors[props.degree];

  const width = 30 + 6.36363636364 * props.degree + "%";

  return (
    <Paper
      sx={{
        width: "100px",
        height: "120px",
        p: 1,
        borderRadius: "0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          width: "90px",
          height: "90px",
        }}
        
      >
        {props.img == "none" ? (
         <Box
         sx={{
           bgcolor: "#656565",
           width: "92px",
           height: "92px",
           borderRadius: "0.5rem",
           boxShadow: "inset 0px 3px 4px rgba(0, 0, 0, 0.25)",
          }}
       >
       </Box>
        ) : (
          <img
            src={props.img}
            alt={props.name}
            style={{
              width: "92px",
              height: "92px",
              borderRadius: "0.5rem",
              zIndex: "1",
              objectFit: "cover",
              objectPosition: "0 0",
            }}
          />
        )}
      </Box>
      <Typography sx={{ fontSize: "0.8rem" }}>{props.name}</Typography>

      <Box
        sx={{
          bgcolor: color,
          width: { width },
          height: "5px",
          borderRadius: "0.5rem",
        }}
      ></Box>
    </Paper>
  );
}

export default RelationsCard;
