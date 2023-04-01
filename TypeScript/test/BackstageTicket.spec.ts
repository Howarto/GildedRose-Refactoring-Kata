import { BackstageTicket } from "@/BackstageTicket"

describe( 'BackstageTicket', () =>{

  it( 'when sellIn falls to zero, also the quality', () => {
    const item = new BackstageTicket( 'item', 1, 50 )
    item.update()
    expect( item.sellIn ).toBe( 0 )
    expect( item.quality ).toBe( 0 )
  } )

  it( 'quality increases two times when sellIn <= 10 days', () => {
    const item = new BackstageTicket( 'item', 10, 20 )
    item.update()
    expect( item.sellIn ).toBe( 9 )
    expect( item.quality ).toBe( 22 )
  } )

  it( 'quality increases three times when sellIn <= 5 days', () => {
    const item = new BackstageTicket( 'item', 5, 20 )
    item.update()
    expect( item.sellIn ).toBe( 4 )
    expect( item.quality ).toBe( 23 )
  } )

} )
