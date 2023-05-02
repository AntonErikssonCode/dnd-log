import React from 'react';
import logo from './logo.svg';
import './App.css';

import {CharacterClass} from "./Classes/Character";
import Character from './components/Character/Character';
function App() {

  
  const mrAron = new CharacterClass("Mr (Sir) Aron", "Knight", [1, 2, 3, 4, 5]);
  const firoraLanka = new CharacterClass("Fiora Lanka", "Princess",[1, 2, 3, 4, 5]);
  const kenneth = new CharacterClass("Kenneth", "Speleman",[1, 2, 3, 4, 5]);

  const allChars: CharacterClass[] = [mrAron, firoraLanka, kenneth];
  const itemComponents = allChars.map((character, index) => (
    <Character characterProp={character} key={character.name+index}/>
  ));
  
  return (
    <div className="App">
     <div className='charactersList'>{itemComponents}</div>
    </div>
  );
}

export default App;
