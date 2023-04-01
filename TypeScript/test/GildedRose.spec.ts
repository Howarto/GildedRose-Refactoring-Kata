import { GildedRose } from '@/GildedRose'
import { ItemFactory } from '@/ItemFactory';

describe('GildedRose', () => {

  it( 'updates quality', () => {
    const gildedRose = new GildedRose([ ItemFactory( 'item', 5, 0 ) ])
    const [ item ] = gildedRose.updateQuality()
    expect( item.name ).toBe( 'item' )
    expect( item.sellIn ).toBe( 4 )
    expect( item.quality ).toBe( 0 )
  } )

  it( 'updates quality with the second method signature', () => {
    const gildedRose = new GildedRose()
    const itemArray = gildedRose.updateQuality()
    expect( itemArray.length ).toBe( 0 )
  } )

});
