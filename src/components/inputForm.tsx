import React, { useState } from "react";
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
  Select,
  MenuItem,
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
  friends: string;
  enemies: string;
  dex: number;
  str: number;
  con: number;
  wis: number;
  int: number;
  cha: number;
  ac: number;
  gear: string;
  img: string;
  description: string;
};
const initialData: CharacterData = {
  name: "",
  title: "",
  friends: "",
  enemies: "",
  dex: 0,
  str: 0,
  con: 0,
  wis: 0,
  int: 0,
  cha: 0,
  ac: 0,
  gear: "",
  img: "",
  description: "",
};

function InputForm() {
  const [formData, setFormData] = useState<CharacterData>(initialData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);

    const newCharacter = new CharacterClass({
      encounterNum: 0,
      name: formData.name,
      title: formData.title,
      friends: [{ name: formData.enemies, degree: 0 }],
      enemies: [{ name: formData.friends, degree: 10 }],
      stats: {
        dex: formData.dex,
        str: formData.str,
        con: formData.con,
        int: formData.int,
        cha: formData.cha,
        wis: formData.wis,
        ac: formData.ac,
      },
      gear: [{ name: formData.gear, dmg: formData.gear }],
      img: formData.img,
      description: formData.description,
    });

    firebaseDB.setNpc(newCharacter.nameWithoutSpace(), newCharacter);

    setFormData(initialData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Container component="form" onSubmit={handleSubmit}>
      <Box>
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
        <TextField
          id="description"
          name="description"
          label="Description"
          value={formData.description}
          onChange={handleChange}
          required
          sx={{ width: "100%" }}
          margin="normal"
        />
        <TextField
          id="gear"
          name="gear"
          label="Gear"
          value={formData.gear}
          onChange={handleChange}
          required
          sx={{ width: "100%" }}
          margin="normal"
        />

        <TextField
          id="friends"
          name="friends"
          label="Friends"
          value={formData.friends}
          onChange={handleChange}
          required
          sx={{ width: "100%" }}
          margin="normal"
        />

        <TextField
          id="enemies"
          name="enemies"
          label="Enemies "
          value={formData.enemies}
          onChange={handleChange}
          required
          sx={{ width: "100%" }}
          margin="normal"
        />
           <TextField
          id="img"
          name="img"
          label="Character Image "
          value={formData.img}
          onChange={handleChange}
          required
          sx={{ width: "100%" }}
          margin="normal"
        />
        <Box
          sx={{
            display: "flex",
            gap: "1 rem",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <TextField
            id="dex"
            name="dex"
            label="Dexterity"
            value={formData.dex}
            onChange={handleChange}
            required
            sx={{ width: "10%" }}
            margin="normal"
          />
          <TextField
            id="str"
            name="str"
            label="Strength"
            value={formData.str}
            onChange={handleChange}
            required
            sx={{ width: "10%" }}
            margin="normal"
          />
          <TextField
            id="con"
            name="con"
            label="Constitution"
            value={formData.con}
            onChange={handleChange}
            required
            sx={{ width: "10%" }}
            margin="normal"
          />
          <TextField
            id="wis"
            name="wis"
            label="Wisdom"
            value={formData.wis}
            onChange={handleChange}
            required
            sx={{ width: "10%" }}
            margin="normal"
          />
          <TextField
            id="int"
            name="int"
            label="Intellect"
            value={formData.int}
            onChange={handleChange}
            required
            sx={{ width: "10%" }}
            margin="normal"
          />
          <TextField
            id="cha"
            name="cha"
            label="Charisma"
            value={formData.cha}
            onChange={handleChange}
            required
            sx={{ width: "10%" }}
            margin="normal"
          />
        </Box>
        <TextField
          id=""
          name="ac"
          label="Armor Class"
          value={formData.ac}
          onChange={handleChange}
          required
          sx={{ width: "10%" }}
          margin="normal"
        />
      </Box>
      <Button type="submit" variant="contained" sx={{ mt: 3 }}>
        Submit
      </Button>
    </Container>
  );
}

export default InputForm;
