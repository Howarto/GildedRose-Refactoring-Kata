import { Item, Name, Quality, SellIn } from "./Item";

export class StandardItem implements Item {
  #name: Name;
  #sellIn: SellIn;
  #quality: Quality;

  constructor( name: string, sellIn: number, quality: number ) {
    this.#name = new Name( name )
    this.#sellIn = new SellIn( sellIn )
    this.#quality = new Quality( quality )
  }

  /**
   * Updates the state due to a day passed.
   */
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
