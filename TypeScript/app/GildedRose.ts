import { Item } from "./Item";

export class GildedRose {
  itemArray: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.itemArray = items;
  }

  updateQuality() {
    this.itemArray.forEach( item => item.update() )

    // for (let i = 0; i < this.itemArray.length; i++) {
    //   if (this.itemArray[i].name != 'Aged Brie' && this.itemArray[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (this.itemArray[i].quality > 0) {
    //       if (this.itemArray[i].name != 'Sulfuras, Hand of Ragnaros') {
    //         this.itemArray[i].quality = this.itemArray[i].quality - 1
    //       }
    //     }
    //   } else {
    //     if (this.itemArray[i].quality < 50) {
    //       this.itemArray[i].quality = this.itemArray[i].quality + 1
    //       if (this.itemArray[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.itemArray[i].sellIn < 11) {
    //           if (this.itemArray[i].quality < 50) {
    //             this.itemArray[i].quality = this.itemArray[i].quality + 1
    //           }
    //         }
    //         if (this.itemArray[i].sellIn < 6) {
    //           if (this.itemArray[i].quality < 50) {
    //             this.itemArray[i].quality = this.itemArray[i].quality + 1
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.itemArray[i].name != 'Sulfuras, Hand of Ragnaros') {
    //     this.itemArray[i].sellIn = this.itemArray[i].sellIn - 1;
    //   }
    //   if (this.itemArray[i].sellIn < 0) {
    //     if (this.itemArray[i].name != 'Aged Brie') {
    //       if (this.itemArray[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.itemArray[i].quality > 0) {
    //           if (this.itemArray[i].name != 'Sulfuras, Hand of Ragnaros') {
    //             this.itemArray[i].quality = this.itemArray[i].quality - 1
    //           }
    //         }
    //       } else {
    //         this.itemArray[i].quality = this.itemArray[i].quality - this.itemArray[i].quality
    //       }
    //     } else {
    //       if (this.itemArray[i].quality < 50) {
    //         this.itemArray[i].quality = this.itemArray[i].quality + 1
    //       }
    //     }
    //   }
    // }

    return this.itemArray;
  }
}
