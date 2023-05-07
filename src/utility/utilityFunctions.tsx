import { CharacterClass } from "../classes/Character";

function nameWithoutSpace(character:CharacterClass){
  const name = character.name;
  return  name.replace(/\s/g, '');
}