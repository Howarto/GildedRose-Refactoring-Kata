export class ItemQuality {
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

  decrement(): ItemQuality {
    if ( this.#value === this.#MIN_VALUE ) {
      return this;
    }

    return new ItemQuality( this.#value - 1 );
  }

  increment(): ItemQuality {
    if ( this.#value === this.#MAX_VALUE ) {
      return this;
    }

    return new ItemQuality( this.#value + 1 );
  }

  incrementValue( value: number ): ItemQuality {
    if ( ( this.#value + value ) >= this.#MAX_VALUE ) {
      return new ItemQuality( this.#MAX_VALUE )
    }

    return new ItemQuality( this.#value + value );
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
