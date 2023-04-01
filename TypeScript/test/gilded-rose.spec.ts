import { GildedRose } from '@/GildedRose'
import { ItemFactory } from '@/ItemFactory';

describe('Gilded Rose', () => {

  it( 'updates quality', () => {
    const gildedRose = new GildedRose([ ItemFactory( 'item', 5, 0 ) ])
    const [ item ] = gildedRose.updateQuality()
    expect( item.name ).toBe( 'item' )
    expect( item.sellIn ).toBe( 4 )
    expect( item.quality ).toBe( 0 )
  } )

});
