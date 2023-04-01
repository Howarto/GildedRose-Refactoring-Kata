import { Item } from "./Item";
import { ItemName } from "./ItemName";
import { ItemQuality } from "./ItemQuality";
import { ItemSellIn } from "./ItemSellIn";

export class AgedBrie implements Item {
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

    this.#incrementQuality();

    if ( this.sellIn <= 0 ) {
      this.#incrementQuality();
    }
  }

  #decrementSellIn = () => {
    this.#sellIn = this.#sellIn.decrement()
  }

  #incrementQuality = () => {
    this.#quality = this.#quality.increment()
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
