export interface Item {
  readonly name: string,
  readonly sellIn: number,
  readonly quality: number,
  update(): void,
}

export class Name {
  #AGED_BRIE = 'Aged Brie';
  #BACKSTAGE_TICKET = 'Backstage passes to a TAFKAL80ETC concert';
  #SULFURAS = 'Sulfuras, Hand of Ragnaros';

  #value: string

  constructor( value: string ) {
    this.#value = value
  }

  get value(): string {
    return this.#value;
  }

  isAgedBrie(): boolean {
    return this.#AGED_BRIE === this.#value
  }

  isSulfuras(): boolean {
    return this.#SULFURAS === this.#value
  }

  isBackstageTicket(): boolean {
    return this.#BACKSTAGE_TICKET === this.#value
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
