import { Item } from "./Item";

export class GildedRose {
  itemArray: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.itemArray = items;
  }

  updateQuality() {
    this.itemArray.forEach( item => item.update() )
    return this.itemArray;
  }
}
