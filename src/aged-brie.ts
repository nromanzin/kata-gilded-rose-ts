import { StoreItem } from './store-item';

export class AgedBrie extends StoreItem {
  update(): void {
    this.decreaseSellIn();
    this.increaseQuality();
    if (this.getSellIn() < 0) {
      this.increaseQuality();
    }
  }
}
