import { GildedRose } from './gilded-rose';

describe('Gilded Rose', () => {
  let gildedRose: GildedRose;

  test('should degrade standard item by 1 each day', () => {
    gildedRose = new GildedRose([
      {
        name: 'standard item',
        sellIn: 10,
        quality: 5,
      },
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toStrictEqual('standard item');
    expect(gildedRose.items[0].sellIn).toStrictEqual(9);
    expect(gildedRose.items[0].quality).toStrictEqual(4);
  });
});
