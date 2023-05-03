import React from "react";
import Character from "../Character/Character";
import { CharacterClass } from "../../Classes/Character";

interface Props {
  characterArray: CharacterClass[];
  onItemClick: (item: CharacterClass) => void;
}

function CharacterList(props: Props) {
  const itemComponents = props.characterArray.map((character, index) => (
    <div key={character.name + index} onClick={() => props.onItemClick(character)}>
      <Character characterProp={character} />
    </div>
  ));
  
  return <div >{itemComponents}</div>;
}

export default CharacterList;
