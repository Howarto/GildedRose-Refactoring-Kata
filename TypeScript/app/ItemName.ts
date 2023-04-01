export class ItemName {
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
