import { useTheme } from "@mui/material/styles";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { CharacterClass } from "../classes/Character";

type Props = {
  data: CharacterClass;
  index: number;
};

function Card(props: Props) {
  const theme = useTheme();
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
        p: 1,
        boxSizing: "border-box",
        borderRadius: "0.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
        cursor: "pointer",
        bgcolor: "primary.main",
        height: isExpanded ? "90%" : "200px",
        width: isExpanded ? "90%" : "200px",
        minWidth: isExpanded ? "70vw" : "200px",
        transition: "transform 0.2s ease-in-out",
        "&:hover":{
          transform:"scale(1.05)",
          
        }
      }}
      onClick={handleCardClick}
    >
      {isExpanded ? (
        <Typography>{data.name + data.name}</Typography>
      ) : (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              p:0,
              position: "absolute",
              top: "-1.1rem",
              left: "68px",
              bgcolor: "background.paper",
              width: "60px",
             
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius:"50px"
            }}
          >
            <Typography
              sx={{
                p:0,
                fontSize:"0.8rem",
                color:
               
                  "text.primary" /* , position: "absolute", top: "0rem", right: "0" */,
              }}
            >
              {data.encounterNum}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={data.img} alt={data.name} style={{ width: "70%" }} />
          </Box>

          <Typography sx={{ color: "text.primary" }}>{data.name}</Typography>

          <Typography sx={{ color: "text.secondary", fontStyle: "italic" }}>
            {data.title}
          </Typography>
        </Box>
      )}

      <Box
        style={{
          height: "200px",
          borderRadius: "2rem",
        }}
      />
    </Box>
  );
}

export default Card;
