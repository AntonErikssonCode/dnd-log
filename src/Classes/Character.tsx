
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
  img: string;

  constructor(
    encouterNum: number,
    name: string,
    title: string,
    friends: Friend[],
    enemys: Enemy[],
    stats: Stats,
    gear: Gear[],
    img: string,
  ) {
    this.encouterNum = encouterNum;
    this.name = name;
    this.title = title;
    this.friends = friends;
    this.enemys = enemys;
    this.stats = stats;
    this.gear = gear;
    this.img = img;
  }
  public nameWithoutSpace(): string {
    return this.name.replace(/\s/g, "");
  }



  public toJson(): string {
    return JSON.stringify({
      encounterNum: this.encouterNum,
      name: this.name,
      title: this.title,
      friends: this.friends,
      enemys: this.enemys,
      stats: this.stats,
      gear: this.gear,
      img: this.img,
    });
  }
  
}
