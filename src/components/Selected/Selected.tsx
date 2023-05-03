import React from "react";
import styles from "./selected.module.css";
import { CharacterClass } from "../../Classes/Character";

interface Props {
  character: CharacterClass;
}
function Selected(props: Props) {
  const friends = props.character.friends.map((friend, index) => (
    <li key={friend.name + index} className={`${styles.friends} `}>
    <div className={`${styles.contactName} `}>{friend.name}</div>
      <div className={`${styles.contactDegree} `}>{friend.degree}</div>
    </li>
  ));
  const enemys = props.character.friends.map((enemy, index) => (
    <li key={enemy.name + index} className={`${styles.enemys} `}>
    <div className={`${styles.contactName} `}>{enemy.name}</div>
      <div className={`${styles.contactDegree} `}>{enemy.degree}</div>
    </li>
  ));

  const gear = props.character.gear.map((gearItem, index) => (
    <li key={gearItem.name + index} className={`${styles.gearItem} `}>
      <div className={`${styles.gearName} `}>{gearItem.name}</div>
      <div className={`${styles.gearDmg} `}>{gearItem.dmg}</div>
    </li>
  ));

  return (
    <div className={`${styles.container} `}>
      <div className={`${styles.containerSelected} `}>
        <h2>Selected Character</h2>
        <div className={`${styles.mainContent} `}>
          <h3>{"Name: " + props.character.name}</h3>
          <h3>{"Title: " + props.character.title}</h3>
          <div className={`${styles.imgContainer} `}>
            <img
              className={`${styles.img} `}
              src="https://media.istockphoto.com/id/1329993010/photo/knight.jpg?s=612x612&w=0&k=20&c=QHP5vuRNN9dlHTSizOzJ-GZzxVpTZJcg-BR4-aW6wiY="
              alt="Knight"
            />

            <div className={`${styles.statsContainer} `}>
              <h3 className={`${styles.stats} `}>
                {"Dex: " + props.character.stats.dex}
              </h3>
              <h3 className={`${styles.stats} `}>
                {"Str: " + props.character.stats.str}
              </h3>
              <h3 className={`${styles.stats} `}>
                {"Con: " + props.character.stats.con}
              </h3>
              <h3 className={`${styles.stats} `}>
                {"Int: " + props.character.stats.int}
              </h3>
              <h3 className={`${styles.stats} `}>
                {"Wis: " + props.character.stats.wis}
              </h3>
              <h3 className={`${styles.stats} `}>
                {"Char: " + props.character.stats.cha}
              </h3>
              <h3 className={`${styles.stats} `}>
                {"Ac: " + props.character.stats.ac}
              </h3>
            </div>

            <ul className={`${styles.friendsList} `}>{friends}</ul>
            <ul className={`${styles.enemysList} `}>{enemys}</ul>
            <ul className={`${styles.gearList} `}>{gear}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selected;
