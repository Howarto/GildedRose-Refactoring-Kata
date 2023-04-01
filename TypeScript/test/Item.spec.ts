import { Item } from "@/Item"

describe( 'Item', () =>{

  it( 'throws error on quality less than 0', () => {
    expect( () => new Item( 'item', 0, -1 ) ).toThrowError();
  } )

  it( 'throws error on quality more than 50', () => {
    expect( () => new Item( 'item', 0, 51 ) ).toThrowError();
  } )

  it( 'updates', () => {
    const item = new Item( 'item', 1, 1 )

    item.update()

    expect( item.quality ).toBe( 0 );
    expect( item.sellIn ).toBe( 0 );
  } )

  it( 'don\'t decrease quality if it has currently the minimum value', () => {
    const item = new Item( 'item', 1, 0 )

    item.update()

    expect( item.quality ).toBe( 0 )
    expect( item.sellIn ).toBe( 0 )
  } )

} )
