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
        boxSizing: "border-box",
        borderRadius: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: isExpanded ? "flex-start" : "center",

        cursor: "pointer",
        bgcolor: "secondary.main",
        p: isExpanded ? "2rem" : "0",
        height: isExpanded ? "90%" : "220px",
        width: isExpanded ? "90%" : "180px",
        minWidth: isExpanded ? "70vw" : "180px",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      onClick={handleCardClick}
    >
      {isExpanded ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "60%",
              flexDirection: "row",
              height: "36%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "95%",

                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h2" sx={{ color: "text.primary" }}>
                {data.name}
              </Typography>
              <Typography variant="h3" sx={{ color: "text.secondary" }}>
                {data.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  fontSize: "1.2rem",
                  mt: "1rem",
                  gap: "0.4rem",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    width: "24%",
                    fontSize: "1.6rem",
                    bgcolor: "background.default",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  {"Dex: " + data.stats.dex}
                </Typography>
                <Typography
                  sx={{
                    width: "24%",
                    fontSize: "1.6rem",
                    bgcolor: "background.default",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  {"Str: " + data.stats.str}
                </Typography>
                <Typography
                  sx={{
                    width: "24%",
                    fontSize: "1.6rem",
                    bgcolor: "background.default",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  {"Con: " + data.stats.con}
                </Typography>
                <Typography
                  sx={{
                    width: "24%",
                    fontSize: "1.6rem",
                    bgcolor: "background.default",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  {"Wis: " + data.stats.wis}
                </Typography>
                <Typography
                  sx={{
                    width: "24%",
                    fontSize: "1.6rem",
                    bgcolor: "background.default",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  {"Int: " + data.stats.int}
                </Typography>
                <Typography
                  sx={{
                    width: "24%",
                    fontSize: "1.6rem",
                    bgcolor: "background.default",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  {"Cha: " + data.stats.cha}
                </Typography>
                <Typography
                  sx={{
                    width: "100%",
                    fontSize: "1.6rem",
                    bgcolor: "background.default",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  {"Armor Class: " + data.stats.ac}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", width: "40%", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end",
              }}
            >
              <img
                src={data.img}
                alt={data.name}
                style={{ width: "100%", borderRadius: "0.5rem" }}
              />
            </Box>
            <Typography
              sx={{ color: "text.primary", fontSize: "1.4rem", p: "1rem" }}
            >
              {data.description}
            </Typography>
          </Box>
        </Box>
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
              p: 0,
              position: "absolute",
              top: "0.5rem",
              right: "0.7rem",
              bgcolor: "background.paper",
              width: "auto",
              px: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              borderRadius: "0.5rem",
              zIndex: "2",
            }}
          >
            <Typography
              sx={{
                p: 0,
                fontSize: "0.8rem",
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
            <img
              src={data.img}
              alt={data.name}
              style={{ width: "90%", borderRadius: "0.5rem", zIndex: "1" }}
            />
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
