import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  Box,
  Button,
  Paper,
  Input,
} from "@mui/material";
import { PlayerInterface } from "./playerCard";

interface Props {
  text: string;
  subText: string;
  variableName: keyof PlayerInterface;
  player: {
    characterName: string;
    class: string;
    level: string;
    background: string;
    playerName: string;
    race: string;
    alignment: string;
    exp: string;
  };
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


function TextAndSubText(props: Props) {
  const { player, onInputChange } = props;
/*   const name = props.variableName.toLowerCase();
 */ 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Input
        sx={{
          fontSize: "1.4rem",
        }}
        placeholder={props.text}
        name={props.variableName}
        value={player[props.variableName] as string}
        onChange={onInputChange}
        type="text"
      ></Input>
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
