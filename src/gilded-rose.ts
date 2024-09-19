import { AgedBrie } from './aged-brie';
import { BackstagePass } from './backstage-pass';
import { Item } from './item';
import { StandardItem } from './standard-item';
import { StoreItem } from './store-item';
import { Sulfuras } from './sulfuras';

export const MAX_QUALITY = 50;
export const MIN_QUALITY = 0;

const itemFactories = new Map<string, (item: Item) => StoreItem>([
  ['Aged Brie', (item: Item) => new AgedBrie(item)],
  ['Sulfuras, Hand of Ragnaros', (item: Item) => new Sulfuras(item)],
  [
    'Backstage passes to a TAFKAL80ETC concert',
    (item: Item) => new BackstagePass(item),
  ],
]);

export function getStoreItem(item: Item): StoreItem {
  const itemConstructor = itemFactories.get(item.name);
  return itemConstructor === undefined
    ? new StandardItem(item)
    : itemConstructor(item);
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      getStoreItem(item).update();
    }
  }
}
