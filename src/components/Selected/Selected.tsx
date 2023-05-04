import React from "react";
import { CharacterClass } from "../../Classes/Character";
import {
  Container,
  Typography,
  List,
  Paper,
  Box,
  CardMedia,
  
} from "@mui/material";
import mrAron from "../../assets/mrAron.jpg"
interface Props {
  character: CharacterClass;
}
function Selected(props: Props) {
  return (
    <Box sx={{ p: 2, width: "100%" }}>
      <Paper elevation={5} sx={{ width: "100%", height: "100%" }}>
        <Box sx={{ py: 1, width: "100%", height: "10%", textAlign: "center" }}>
          <Typography variant="h2">{props.character.name}</Typography>
        </Box>
        <Container
          sx={{
            p: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            height: "30%",
          }}
        >
          <Box
            sx={{
              py: 1,
              width: "20%",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3">AC</Typography>
            <Typography variant="h3">{props.character.stats.ac}</Typography>
          </Box>
          <Box
            sx={{
              width: "40%",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Container
              sx={{
                p: 0,
                gap: 1,
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {" "}
              <Typography variant="h5">
                {" "}
                {" Dex: " + props.character.stats.dex}
              </Typography>{" "}
              <Typography variant="h5">
                {" Str: " + props.character.stats.str}
              </Typography>{" "}
              <Typography variant="h5">
                {" Con: " + props.character.stats.con}
              </Typography>
            </Container>
            <Container
              sx={{
                p: 0,
                gap: 1,
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {" "}
              <Typography variant="h5">
                {" Cha: " + props.character.stats.cha}
              </Typography>{" "}
              <Typography variant="h5">
                {" Int: " + props.character.stats.int}
              </Typography>{" "}
              <Typography variant="h5">
                {" Wis: " + props.character.stats.wis}
              </Typography>
            </Container>
          </Box>
          <Box
            sx={{ py: 0, width: "40%", height: "auto", textAlign: "center" }}
          >
            <img style={{height:"100%", width: "auto ", borderRadius:" 0.5rem"}} src={props.character.img} />
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}

export default Selected;
