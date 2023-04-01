import { AgedBrie } from '@/AgedBrie';
import { BackstageTicket } from '@/BackstageTicket';
import { ItemFactory } from '@/ItemFactory';
import { StandardItem } from '@/StandardItem';
import { Sulfuras } from '@/Sulfuras';

describe('ItemFactory', () => {

  it( 'creates a StandardItem', () => {
    const item = ItemFactory( 'item', 5, 0 );
    expect( item instanceof StandardItem ).toBeTruthy()
  } )

  it( 'creates an AgedBrie', () => {
    const item = ItemFactory( 'Aged Brie', 5, 0 );
    expect( item instanceof AgedBrie ).toBeTruthy()
  } )

  it( 'creates a BackstageTicket', () => {
    const item = ItemFactory( 'Backstage passes to a TAFKAL80ETC concert', 5, 0 );
    expect( item instanceof BackstageTicket ).toBeTruthy()
  } )

  it( 'creates a Sulfuras', () => {
    const item = ItemFactory( 'Sulfuras, Hand of Ragnaros', 5, 0 );
    expect( item instanceof Sulfuras ).toBeTruthy()
  } )

});
