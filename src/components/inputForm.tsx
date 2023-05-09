import React, { useState } from "react";
import { Container, Box, Button, TextField, Typography } from "@mui/material";
import { CharacterClass } from "../classes/Character";
import firebaseDB from "../db/firebase";

type CharacterData = {
  name: string;
  title: string;
  friends: any[];
  friendName: string;
  friendDegree: number;
  enemies: any[];
  enemyName: string;
  enemyDegree: number;
  dex: number;
  str: number;
  con: number;
  wis: number;
  int: number;
  cha: number;
  ac: number;
  gear: string[];
  gearName: string;
  gearDmg: string;
  img: string;
  description: string;
};
const initialData: CharacterData = {
  name: "",
  title: "",
  friends: [],
  friendName: "",
  friendDegree: 0,
  enemies: [],
  enemyName: "",
  enemyDegree: 0,
  dex: 0,
  str: 0,
  con: 0,
  wis: 0,
  int: 0,
  cha: 0,
  ac: 0,
  gear: [],
  gearName: "",
  gearDmg: "",
  img: "",
  description: "",
};

function InputForm() {
  const [formData, setFormData] = useState<CharacterData>(initialData);
  const [gearData, setGearData] = useState<{ name: string; dmg: string }[]>([]);

  const [friendData, setFriendData] = useState<
    { name: string; degree: number }[]
  >([]);

  const [enemyData, setEnemyData] = useState<
    { name: string; degree: number }[]
  >([]);

  function addGear() {
    setGearData((prevState) => [
      ...prevState,
      { name: formData.gearName, dmg: formData.gearDmg },
    ]);
    setFormData((prevState) => ({
      ...prevState,
      gearName: "",
      gearDmg: "",
    }));
  }
  function addFriend() {
    setFriendData((prevState) => [
      ...prevState,
      { name: formData.friendName, degree: formData.friendDegree },
    ]);
    setFormData((prevState) => ({
      ...prevState,
      friendName: "",
      friendDegree: 0,
    }));
  }

  function addEnemy() {
    setEnemyData((prevState) => [
      ...prevState,
      { name: formData.enemyName, degree: formData.enemyDegree },
    ]);
    setFormData((prevState) => ({
      ...prevState,
      enemyName: "",
      enemyDegree: 0,
    }));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentDate = new Date();
    const dateAsNumber = currentDate.getTime();

    const newCharacter = new CharacterClass({
      encounterNum: 0,
      name: formData.name,
      title: formData.title,
      friends: friendData.length>0? friendData: [ { name: "No Friends", degree: 10 }],
      enemies: enemyData.length>0? enemyData: [ { name: "No Enemies", degree: 10 }],
      stats: {
        dex: formData.dex,
        str: formData.str,
        con: formData.con,
        int: formData.int,
        cha: formData.cha,
        wis: formData.wis,
        ac: formData.ac,
      },
      gear: gearData.length>0? gearData: [ { name: "No Gear", dmg: "none" }],
      img: formData.img,
      description: formData.description,
      date: dateAsNumber,
    });
    console.dir(newCharacter);

    firebaseDB.setNpc(newCharacter.nameWithoutSpace(), newCharacter);

    setFormData(initialData);
    setGearData([]);
    setFriendData([]);
    setEnemyData([]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Container component="form" onSubmit={handleSubmit} sx={{ width: "80%", pt:2, pb:10}}>
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

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            id="gearName"
            name="gearName"
            label="Gear Name"
            value={formData.gearName}
            onChange={handleChange}
            sx={{ width: "40%" }}
            margin="normal"
          />
          <TextField
            id="gearDmg"
            name="gearDmg"
            label="Gear Info"
            value={formData.gearDmg}
            onChange={handleChange}
            sx={{ width: "40%" }}
            margin="normal"
          />
          <Button
            variant="outlined"
            onClick={addGear}
            sx={
              {
                /* height:"100%"  */
              }
            }
          >
            Add Gear
          </Button>
        </Box>
        <Box>
          {gearData.map((gear, index) => {
            return (
              <Box
                key={"gear" + index}
                sx={{
                  width: "49%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontSize: "1rem",
                      px: "1rem",
                    }}
                  >
                    {gear.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontSize: "1rem",
                      px: "1rem",
                    }}
                  >
                    {gear.dmg}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            id="friendName"
            name="friendName"
            label="Friend Name"
            value={formData.friendName}
            onChange={handleChange}
            sx={{ width: "40%" }}
            margin="normal"
          />
          <TextField
            id="friendDegree"
            name="friendDegree"
            label="Friend Degree"
            value={formData.friendDegree}
            onChange={handleChange}
            type="number"
            sx={{ width: "40%" }}
            margin="normal"
            inputProps={{ min: 0, max: 10 }}
          />
          <Button
            variant="outlined"
            onClick={addFriend}
            sx={
              {
                /* height:"100%"  */
              }
            }
          >
            Add Friend
          </Button>
        </Box>
        <Box>
          {friendData.map((friend, index) => {
            return (
              <Box
                key={"friend" + index}
                sx={{
                  width: "49%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontSize: "1rem",
                      px: "1rem",
                    }}
                  >
                    {friend.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontSize: "1rem",
                      px: "1rem",
                    }}
                  >
                    {friend.degree}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            id="enemyName"
            name="enemyName"
            label="Enemy Name"
            value={formData.enemyName}
            onChange={handleChange}
            sx={{ width: "40%" }}
            margin="normal"
          />
          <TextField
            id="enemyDegree"
            name="enemyDegree"
            label="Enemy Degree"
            value={formData.enemyDegree}
            onChange={handleChange}
            type="number"
            inputProps={{ min: 0, max: 10 }}
            sx={{ width: "40%" }}
            margin="normal"
          />
          <Button
            variant="outlined"
            onClick={addEnemy}
            sx={
              {
                /* height:"100%"  */
              }
            }
          >
            Add Enemy
          </Button>
        </Box>
        <Box>
          {enemyData.map((enemy, index) => {
            return (
              <Box
                key={"enemy" + index}
                sx={{
                  width: "49%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontSize: "1rem",
                      px: "1rem",
                    }}
                  >
                    {enemy.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontSize: "1rem",
                      px: "1rem",
                    }}
                  >
                    {enemy.degree}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
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
            gap: "0.2rem",
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
            sx={{ width: "15%" }}
            margin="normal"
            type="number"
            
          />
          <TextField
            id="str"
            name="str"
            label="Strength"
            value={formData.str}
            onChange={handleChange}
            required
            sx={{ width: "15%" }}
            margin="normal"
            type="number"
          />
          <TextField
            id="con"
            name="con"
            label="Constitution"
            value={formData.con}
            onChange={handleChange}
            required
            sx={{ width: "15%" }}
            margin="normal"
            type="number"
          />
          <TextField
            id="wis"
            name="wis"
            label="Wisdom"
            value={formData.wis}
            onChange={handleChange}
            required
            sx={{ width: "15%" }}
            margin="normal"
            type="number"
          />
          <TextField
            id="int"
            name="int"
            label="Intellect"
            value={formData.int}
            onChange={handleChange}
            required
            sx={{ width: "15%" }}
            margin="normal"
            type="number"
          />
          <TextField
            id="cha"
            name="cha"
            label="Charisma"
            value={formData.cha}
            onChange={handleChange}
            required
            sx={{ width: "15%" }}
            margin="normal"
            type="number"
          />
        </Box>
        <TextField
          id=""
          name="ac"
          label="Armor Class"
          value={formData.ac}
          onChange={handleChange}
          required
          sx={{ width: "15%" }}
          margin="normal"
          type="number"
        />
      </Box>
      <Button type="submit" variant="contained" sx={{ mt: 3 }}>
        Submit
      </Button>
    </Container>
  );
}

export default InputForm;
