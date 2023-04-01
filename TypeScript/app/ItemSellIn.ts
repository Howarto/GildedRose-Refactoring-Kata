export class ItemSellIn {
  #value: number

  constructor( value: number ) {
    this.#value = value
  }

  get value(): number {
    return this.#value;
  }

  decrement(): ItemSellIn {
    return new ItemSellIn( this.#value - 1 );
  }

}
