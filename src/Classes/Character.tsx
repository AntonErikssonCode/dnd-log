type Friend = {
  name: string;
  degree: number;
};

type Enemy = {
  name: string;
  degree: number;
};

type Stats = {
  dex: string;
  str: string;
  con: string;
  int: string;
  cha: string;
  wis: string;
  ac: string;
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

  constructor(data: {
    encounterNum: number;
    name: string;
    title: string;
    friends: Friend[];
    enemies: Enemy[];
    stats: Stats;
    gear: Gear[];
    img: string;
  }) {
    this.encounterNum = data.encounterNum;
    this.name = data.name;
    this.title = data.title;
    this.friends = data.friends;
    this.enemies = data.enemies;
    this.stats = data.stats;
    this.gear = data.gear;
    this.img = data.img;
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
    });
  }
}