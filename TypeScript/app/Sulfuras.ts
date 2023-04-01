import { Item } from "./Item";
import { ItemName } from "./ItemName";
import { ItemQuality } from "./ItemQuality";
import { ItemSellIn } from "./ItemSellIn";

export class Sulfuras implements Item {
  #name: ItemName;
  #sellIn: ItemSellIn;
  #quality: ItemQuality;

  constructor( name: string, sellIn: number, quality: number ) {
    this.#name = new ItemName( name )
    this.#sellIn = new ItemSellIn( sellIn )
    this.#quality = new ItemQuality( quality )
  }

  update(): void { /* Do nothing. */}

  get name(): string {
    return this.#name.value
  }

  get sellIn(): number {
    return this.#sellIn.value
  }

  get quality(): number {
    return this.#quality.value
  }

}
