type Friend = {
  name: string;
  degree: number;
};

type Enemy = {
  name: string;
  degree: number;
};

type Stats = {
  dex: number;
  str: number;
  con: number;
  int: number;
  cha: number;
  wis: number;
  ac: number;
};

type Gear = {
  name: string;
  dmg: string;
};

type CharacterData = {
  name: string;
  title: string;
};

export class CharacterClass {
  encounterNum: number;
  name: string;
  title: string;
  friends: Friend[];
  enemies: Enemy[];
  stats: Stats;
  gear: Gear[];
  img: string;
  description: string;
  date: number;

  constructor(data: {
    encounterNum: number;
    name: string;
    title: string;
    friends: Friend[];
    enemies: Enemy[];
    stats: Stats;
    gear: Gear[];
    img: string;
    description: string;
    date: number;
  }) {
    this.encounterNum = data.encounterNum;
    this.name = data.name;
    this.title = data.title;
    this.friends = data.friends;
    this.enemies = data.enemies;
    this.stats = data.stats;
    this.gear = data.gear;
    this.img = data.img;
    this.description = data.description;
    this.date = data.date;
  }

  public nameWithoutSpace(): string {
    return this.name.replace(/\s/g, "");
  }

  public toJson(): string {
    return JSON.stringify({
      encounterNum: this.encounterNum,
      name: this.name,
      title: this.title,
      friends: this.friends,
      enemies: this.enemies,
      stats: this.stats,
      gear: this.gear,
      img: this.img,
      description: this.description,
      date: this.date,
    });
  }
}
