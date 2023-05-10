import { useTheme } from "@mui/material/styles";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { CharacterClass } from "../classes/Character";
import RelationsCard from "./relationsCard";
type Props = {
  data: CharacterClass;
  index: number;
  npcData: any[] | undefined;
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
        boxShadow:
          "0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.2)",

        cursor: "pointer",
        bgcolor: "secondary.main",
        p: isExpanded ? "2rem" : "0",
        height: isExpanded ? "90%" : "220px",
        width: isExpanded ? "90%" : "180px",
        minWidth: isExpanded ? "70vw" : "180px",
        transition: "transform 0.2s ease-in-out",

        "&:hover": {
          transform: isExpanded ? "scale(1.000)" : "scale(1.05)" ,
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
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "95%",
                height: "auto",
                flexDirection: "column",
                justifyContent: "flex-start",
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
                <Paper
                  sx={{
                    width: "10%",
                    fontSize: "1.6rem",
                    backgroundImage:
                      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  <Typography> {"Dex: " + data.stats.dex} </Typography>
                </Paper>
                <Paper
                  sx={{
                    width: "10%",
                    fontSize: "1.6rem",
                    backgroundImage:
                      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  <Typography> {"Str: " + data.stats.str} </Typography>
                </Paper>
                <Paper
                  sx={{
                    width: "10%",
                    fontSize: "1.6rem",
                    backgroundImage:
                      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  <Typography> {"Con: " + data.stats.con} </Typography>
                </Paper>
                <Paper
                  sx={{
                    width: "10%",
                    fontSize: "1.6rem",
                    backgroundImage:
                      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  <Typography> {"Wis: " + data.stats.wis} </Typography>
                </Paper>
                <Paper
                  sx={{
                    width: "10%",
                    fontSize: "1.6rem",
                    backgroundImage:
                      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  <Typography> {"Int: " + data.stats.int} </Typography>
                </Paper>
                <Paper
                  sx={{
                    width: "10%",
                    fontSize: "1.6rem",
                    backgroundImage:
                      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  <Typography> {"Cha: " + data.stats.cha}</Typography>
                </Paper>
                <Paper
                  sx={{
                    width: "100%",
                    fontSize: "1.6rem",
                    backgroundImage:
                      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                    p: "0.5rem",
                    borderRadius: "0.5rem",
                    color: "text.primary",
                    alignSelf: "center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  <Typography>{"Armor Class: " + data.stats.ac}</Typography>
                </Paper>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
                pt: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.2rem",
                    pb: "0.1rem",
                  }}
                >
                  Friends
                </Typography>
                <Box sx={{ height: "100%", display: "flex", gap: "1rem" }}>
                  {data.friends.map((friend) => {
                    if (props.npcData !== undefined) {
                      // Check if npcData exist
                      const npc = props.npcData.find(
                        (npc) => npc.name === friend.name // Check if enemy exist in corpus
                      );
                      console.dir(npc);
                      if (npc) {
                        return (
                          <RelationsCard
                            name={friend.name}
                            degree={friend.degree}
                            img={npc.img}
                            relationType="friend"
                          />
                        );
                      } else {
                        return (
                          <RelationsCard
                            name={friend.name}
                            degree={friend.degree}
                            img="none" //"https://www.pngitem.com/pimgs/m/105-1055689_user-account-person-avatar-operating-system-grey-user.png"
                            relationType="friend"
                          />
                        );
                      }
                    }
                  })}
                </Box>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.2rem",
                    pb: "0.1rem",
                  }}
                >
                  Enemies
                </Typography>
                <Box sx={{ height: "100%", display: "flex", gap: "1rem" }}>
                  {data.enemies.map((enemy) => {
                    if (props.npcData !== undefined) {
                      // Check if npcData exist
                      const npc = props.npcData.find(
                        (npc) => npc.name === enemy.name // Check if enemy exist in corpus
                      );
                      console.dir(npc);
                      if (npc) {
                        return (
                          <RelationsCard
                            name={enemy.name}
                            degree={enemy.degree}
                            img={npc.img}
                            relationType="enemy"
                          />
                        );
                      } else {
                        return (
                          <RelationsCard
                            name={enemy.name}
                            degree={enemy.degree}
                            img="none" //"https://www.pngitem.com/pimgs/m/105-1055689_user-account-person-avatar-operating-system-grey-user.png"
                            relationType="enemy"
                          />
                        );
                      }
                    }
                  })}
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", width: "40%", flexDirection: "column" }}>
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
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "0.5rem",
                  zIndex: "1",
                  objectFit: "cover",
                  objectPosition: "0 0",
                }}
                /*       style={{ width: "100%", borderRadius: "0.5rem" }} */
              />
            </Box>

            <Box sx={{ py: "1rem", overflowY: "auto" }}>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "1.2rem",
                }}
              >
                Description
              </Typography>
              <Typography
                sx={{ color: "text.primary", fontSize: "1rem", px: "1rem" }}
              >
                {data.description}
              </Typography>
            </Box>

            <Box sx={{ py: "1rem", overflowY: "auto" }}>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "1.2rem",
                  p: 0,
                }}
              >
                Equipment
              </Typography>
              {data.gear.map((gear) => {
                return (
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontSize: "1rem",
                        px: "1rem",
                      }}
                    >
                      {gear.name}
                    </Typography>
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
                );
              })}
            </Box>
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
              {props.index}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              objectFit: "cover",
            }}
          >
            <img
              src={data.img}
              alt={data.name}
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "0.5rem",
                zIndex: "1",
                objectFit: "cover",
                objectPosition: "0 0",
              }}
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
