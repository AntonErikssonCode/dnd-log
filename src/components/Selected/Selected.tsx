import React from "react";
import styles from "./selected.module.css";
import { CharacterClass } from "../../Classes/Character";

interface Props {
  character: CharacterClass;
}
function Selected(props: Props) {
  return (
    <div className={`${styles.container} `}>
      <div className={`${styles.containerSelected} `}>
        <h2>Selected Character</h2>
        <div className={`${styles.mainContent} `}>
          <h3>{"Name: " + props.character.name}</h3>
          <h3>{"Title: " + props.character.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Selected;
