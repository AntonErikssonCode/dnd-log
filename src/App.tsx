import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CharacterClass } from "./Classes/Character";
import CharacterList from "./components/CharacterList/CharacterList";
import Selected from "./components/Selected/Selected";
import Character from "./components/Character/Character"
import { useState } from "react";
function App() {

  const [selectedItem, setSelectedItem] = useState<CharacterClass | null>(null);

  function handleItemClick(item: CharacterClass) {
    setSelectedItem(item);
  }


  const mrAron = new CharacterClass("Mr (Sir) Aron", "Knight", [1, 2, 3, 4, 5]);
  const firoraLanka = new CharacterClass(
    "Fiora Lanka",
    "Princess",
    [1, 2, 3, 4, 5]
  );
  const kenneth = new CharacterClass("Kenneth", "Speleman", [1, 2, 3, 4, 5]);

  const allChars: CharacterClass[] = [mrAron, firoraLanka, kenneth,mrAron, firoraLanka, kenneth,mrAron, firoraLanka, kenneth,mrAron, firoraLanka, kenneth,mrAron, firoraLanka, kenneth];
  
  return (
    <div className="App">
      <CharacterList characterArray={allChars} onItemClick={handleItemClick} />
      {selectedItem && <Selected character={selectedItem} />}
      
    </div>
  );
}

export default App;
