export class CharacterClass {
  name: string;
  title: string;
  items: number[];

  constructor(name: string,title:string, items: number[]) {
    this.name = name;
    this.title = title;
    this.items = items;
  }
}
