import React, {useState} from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  Box,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
} from "@mui/material";
import { CharacterClass } from "../classes/Character";
import firebaseDB from "../db/firebase";

const characterFriends = [
  { name: "Fiora Lanka", degree: 10 },
  { name: "Jeorgy", degree: 6 },
];
const characterEnemy = [{ name: "Pada Padela", degree: 6 }];
const characterStats = {
  dex: "10",
  str: "18",
  con: "18",
  int: "12",
  cha: "11",
  wis: "8",
  ac: "14",
};

const characterGear = [{ name: "BIG ASS SWORD", dmg: "2D10" }];

type CharacterData = {
  name: string;
  title: string;
};
const initialData: CharacterData = {
  name: "",
  title: "",
};

function InputForm() {
  const [formData, setFormData] = useState<CharacterData>(initialData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);

    const newCharacter = new CharacterClass({
      encounterNum: 3,
      name: formData.name,
      title: formData.title,
      friends: characterFriends,
      enemies: characterEnemy,
      stats: characterStats,
      gear: characterGear,
      img: "https://cg4.cgsociety.org/uploads/images/medium/claudiotumiati-the-old-knight-1-a01518b0-sboy.jpg",
    });

/*     const stringifyNewCharacter = newCharacter.toJson();
 */    firebaseDB.setNpc(newCharacter.nameWithoutSpace(), newCharacter);

    setFormData(initialData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          id="title"
          name="title"
          label="Title"
          value={formData.title}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />

        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default InputForm;
