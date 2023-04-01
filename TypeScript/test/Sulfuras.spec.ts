import { Sulfuras } from "@/Sulfuras"

describe( 'Sulfuras', () =>{

  it( 'does not decrement quality or sellIn date', () => {
    const item = new Sulfuras( 'item', 1, 1 )
    item.update()
    expect( item.sellIn ).toBe( 1 )
    expect( item.quality ).toBe( 1 )
  } )

} )
