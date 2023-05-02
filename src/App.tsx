import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  class Character {
    name: string;
    items: number[];
  
    constructor(name: string, items: number[]) {
      this.name = name;
      this.items = items;
    }
  }
  
  const mrAron = new Character("Mr (Sir) Aron", [1, 2, 3, 4, 5]);
  const firoraLanka = new Character("Fiora Lanka", [1, 2, 3, 4, 5]);
  const kenneth = new Character("Kenneth", [1, 2, 3, 4, 5]);

  const allChars: Character[] = [mrAron, firoraLanka, kenneth];
  const itemComponents = allChars.map((character, index) => (
    <li key={character.name+index}>{character.name}</li>
  ));
  
  return (
    <div className="App">
     <ul>{itemComponents}</ul>
    </div>
  );
}

export default App;
