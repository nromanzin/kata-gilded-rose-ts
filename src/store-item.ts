import { MAX_QUALITY, MIN_QUALITY } from './gilded-rose';
import { Item } from './item';

export abstract class StoreItem {
  constructor(private item: Item) {}
  protected increaseQuality(): void {
    this.item.quality = Math.min(this.item.quality + 1, MAX_QUALITY);
  }
  protected getSellIn(): number {
    return this.item.sellIn;
  }
  protected qualityToZero(): void {
    this.item.quality = 0;
  }
  protected decreaseSellIn(): void {
    this.item.sellIn -= 1;
  }
  protected decreaseQuality(): void {
    this.item.quality = Math.max(MIN_QUALITY, this.item.quality - 1);
  }
  abstract update(): void;
}
