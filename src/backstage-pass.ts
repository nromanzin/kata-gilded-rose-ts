import { StoreItem } from './store-item';

export class BackstagePass extends StoreItem {
  update(): void {
    this.decreaseSellIn();
    this.increaseQuality();
    if (this.getSellIn() < 10) {
      this.increaseQuality();
    }
    if (this.getSellIn() < 5) {
      this.increaseQuality();
    }
    if (this.getSellIn() < 0) {
      this.qualityToZero();
    }
  }
}
