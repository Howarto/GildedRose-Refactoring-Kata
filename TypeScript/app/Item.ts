export interface Item {
  readonly name: string,
  readonly sellIn: number,
  readonly quality: number,
  update(): void,
}
