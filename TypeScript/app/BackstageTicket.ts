import { IItem, Quality, SellIn } from "./Item";

export class BackstageTicket implements IItem {
  #name: string;
  #sellIn: SellIn;
  #quality: Quality;

  constructor( name: string, sellIn: number, quality: number ) {
    this.#name = name
    this.#sellIn = new SellIn( sellIn )
    this.#quality = new Quality( quality )
  }

  /**
   * Updates the state due to a day passed.
   */
  update(): void {
    this.#decrementSellIn();

    if ( this.sellIn <= 0 ) {
      this.quality = 0
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
    return this.#name
  }

  get sellIn(): number {
    return this.#sellIn.value
  }

  set sellIn( value: number ) {
    this.#sellIn = new SellIn( value );
  }

  get quality(): number {
    return this.#quality.value
  }

  set quality( value: number ) {
    this.#quality = new Quality( value );
  }

}
