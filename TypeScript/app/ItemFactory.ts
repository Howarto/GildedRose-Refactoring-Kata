import { AgedBrie } from "./AgedBrie"
import { BackstageTicket } from "./BackstageTicket"
import { ItemName } from "./ItemName"
import { StandardItem } from "./StandardItem"
import { Sulfuras } from "./Sulfuras"

export function ItemFactory( name: string, sellIn: number, quality: number ) {
  const itemName = new ItemName( name )

  if ( itemName.isAgedBrie() ) return new AgedBrie( name, sellIn, quality )

  if ( itemName.isBackstageTicket() ) return new BackstageTicket( name, sellIn, quality )

  if ( itemName.isSulfuras() ) return new Sulfuras( name, sellIn, quality )

  return new StandardItem( name, sellIn, quality )
}
