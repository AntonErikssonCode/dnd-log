/* import React, {useState} from "react";
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
 */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { CharacterClass } from "../Classes/Character";

type Props = {
  data: CharacterClass;
};

function Card(props: Props) {
  const { data } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleCardClick = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Box
      ref={ref}
      sx={{
        p: 0.5,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
        cursor: "pointer", 
        height: isExpanded ? "90%" : "200px",
        width: isExpanded ? "90%" : "200px",
        zIndex: isExpanded ? "10" : "1",
      /*   transition: "all 0.1s ease", */
      }}
      onClick={handleCardClick}
    >
      {isExpanded ? (
        <Typography>{data.name + data.name}</Typography>
      ) : (
        <Typography>{data.name}</Typography>
      )}

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
