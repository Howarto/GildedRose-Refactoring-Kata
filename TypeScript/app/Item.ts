export interface IItem {
  readonly name: string,
  readonly sellIn: number,
  readonly quality: number,
  update(): void,
}

export class Item {
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
    this.#decrementQuality();
  }

  #decrementSellIn = () => {
    this.#sellIn = this.#sellIn.decrement()
  }

  #decrementQuality = () => {
    this.#quality = this.#quality.decrement()
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

export class SellIn {
  #value: number

  constructor( value: number ) {
    this.#value = value
  }

  get value(): number {
    return this.#value;
  }

  decrement(): SellIn {
    return new SellIn( this.#value - 1 );
  }

}

export class Quality {
  #MIN_VALUE = 0
  #MAX_VALUE = 50

  #value: number

  constructor( value: number ) {
    this.#value = value

    this.#assertNoLessThanZero();
    this.#assertNoMoreThanFifty();
  }

  get value(): number {
    return this.#value;
  }

  decrement(): Quality {
    if ( this.#value === this.#MIN_VALUE ) {
      return this;
    }

    return new Quality( this.#value - 1 );
  }

  increment(): Quality {
    if ( this.#value === this.#MAX_VALUE ) {
      return this;
    }

    return new Quality( this.#value + 1 );
  }

  incrementValue( value: number ): Quality {
    if ( ( this.#value + value ) >= this.#MAX_VALUE ) {
      return new Quality( this.#MAX_VALUE )
    }

    return new Quality( this.#value + value );
  }

  #assertNoLessThanZero = () => {
    if ( this.#value < 0 ) {
      throw new Error( 'A quality can\'t be less than 0' );
    }
  }

  #assertNoMoreThanFifty = () => {
    if (  this.#value > 50 ) {
      throw new Error( 'A quality can\'t be less than 0' );
    }
  }

}
