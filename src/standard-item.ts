import { StoreItem } from './store-item';

export class StandardItem extends StoreItem {
  update(): void {
    this.decreaseSellIn();
    this.decreaseQuality();
    if (this.getSellIn() < 0) {
      this.decreaseQuality();
    }
  }
}
