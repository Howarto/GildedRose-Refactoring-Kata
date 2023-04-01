import { AgedBrie } from "@/AgedBrie"

describe( 'AgedBrie', () =>{

  it( 'increments the quality by one', () => {
    const item = new AgedBrie( 'item', 1, 0 )
    item.update()
    expect( item.quality ).toBe( 1 )
  } )

  it( 'increments the quality by two because sellIn date was passed', () => {
    const item = new AgedBrie( 'item', 0, 0 )
    item.update()
    expect( item.quality ).toBe( 2 )
  } )

} )
