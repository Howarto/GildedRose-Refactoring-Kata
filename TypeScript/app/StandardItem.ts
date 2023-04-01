import { Item } from "./Item";
import { ItemName } from "./ItemName";
import { ItemQuality } from "./ItemQuality";
import { ItemSellIn } from "./ItemSellIn";

export class StandardItem implements Item {
  #name: ItemName;
  #sellIn: ItemSellIn;
  #quality: ItemQuality;

  constructor( name: string, sellIn: number, quality: number ) {
    this.#name = new ItemName( name )
    this.#sellIn = new ItemSellIn( sellIn )
    this.#quality = new ItemQuality( quality )
  }

  update(): void {
    this.#decrementSellIn();
    this.#decrementQuality();
  }

  #decrementSellIn = () => {
    this.#sellIn = this.#sellIn.decrement()
  }

  #decrementQuality = () => {
    this.#quality = this.#quality.decrement()
  }

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
