
export interface Friend {
  name: string;
  degree: number;
}

export interface Enemy {
  name: string;
  degree: number;
}

export interface Stats {
  dex: string;
  str: string;
  con: string;
  int: string;
  cha: string;
  wis: string;
  ac: string;
}
export interface Gear {
  name: string;
  dmg: string;
}



export class CharacterClass {
  encouterNum: number;
  name: string;
  title: string;

  friends: Friend[];
  enemys: Enemy[];
  stats: Stats;
  gear: Gear[];

  constructor(
    encouterNum: number,
    name: string,
    title: string,
    friends: Friend[],
    enemys: Enemy[],
    stats: Stats,
    gear: Gear[],
  ) {
    this.encouterNum = encouterNum;
    this.name = name;
    this.title = title;
    this.friends = friends;
    this.enemys = enemys;
    this.stats = stats;
    this.gear = gear;
  }
}
