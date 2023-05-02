import React from 'react';
import {CharacterClass} from "../../Classes/Character";
import styles from "./character.module.css"; // import the CSS file
import basicStyles from "../../Styles/basic.module.css"

interface CharacterProp {
  characterProp: CharacterClass;
}

function Character(props: CharacterProp) {

  return (
    <div className={`${styles.container} `}>
      <h2 className={`${styles.bigText} ${basicStyles.noMargin}`}>{props.characterProp.name}</h2>
      <h3 className={`${styles.cursiveText} ${basicStyles.noMargin}`}>{props.characterProp.title}</h3>
      
    </div>
  );
}

export default Character;