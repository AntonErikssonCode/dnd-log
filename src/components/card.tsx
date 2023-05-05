import React, {useState} from "react";
import { Box, Typography} from "@mui/material";
import { CharacterClass } from "../Classes/Character";
type Props = {
  data: CharacterClass;
};
function Card(props: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(true);
  };
  const { data } = props;
  return (
    <Box
      sx={{
       /*  width: { xs: "200px", sm: "200px", md: "200px" }, */
        p: 0.5,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
        height: isExpanded ? "90%" : "200px",
        width: isExpanded ? "90%" : "200px",
        transition: "height 0.5s ease",
      }}
      onClick={handleCardClick}
    >
       <Typography>{data.name}</Typography>
      <Box
        style={{
          backgroundColor: "lightgray",
          height: "200px",
          borderRadius: "0.2rem",
        }}
      />
     
    </Box>
  );
}


export default Card;
