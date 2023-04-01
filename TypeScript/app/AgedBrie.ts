import { IItem, Quality, SellIn } from "./Item";

export class AgedBrie implements IItem {
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
    this.#incrementQuality();

    if ( this.sellIn <= 0 ) {
      this.#incrementQuality();
    }

    this.#decrementSellIn();
  }

  #decrementSellIn = () => {
    this.#sellIn = this.#sellIn.decrement()
  }

  #incrementQuality = () => {
    this.#quality = this.#quality.increment()
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