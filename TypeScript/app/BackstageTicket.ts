import { Item } from "./Item";
import { ItemName } from "./ItemName";
import { ItemQuality } from "./ItemQuality";
import { ItemSellIn } from "./ItemSellIn";

export class BackstageTicket implements Item {
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

    if ( this.sellIn <= 0 ) {
      this.#quality = new ItemQuality( 0 )
    }
    else if ( this.sellIn <= 5 ) {
      this.#incrementQuality( 3 )
    }
    else if ( this.sellIn <= 10 ) {
      this.#incrementQuality( 2 )
    }

  }

  #decrementSellIn = () => {
    this.#sellIn = this.#sellIn.decrement()
  }

  #incrementQuality = ( value: number ) => {
    this.#quality = this.#quality.incrementValue( value )
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
