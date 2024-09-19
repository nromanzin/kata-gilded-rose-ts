import { GildedRose } from './gilded-rose';
import { Item } from './item';

describe('Gilded Rose', () => {
  let gildedRose: GildedRose;

  test('should degrade standard item by 1 each day', () => {
    gildedRose = new GildedRose([new Item('standard item', 10, 5)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toStrictEqual('standard item');
    expect(gildedRose.items[0].sellIn).toStrictEqual(9);
    expect(gildedRose.items[0].quality).toStrictEqual(4);
  });

  test('should degrade standard item by 2 each day when sellin date has passerd', () => {
    gildedRose = new GildedRose([new Item('standard item', 0, 5)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toStrictEqual('standard item');
    expect(gildedRose.items[0].sellIn).toStrictEqual(-1);
    expect(gildedRose.items[0].quality).toStrictEqual(3);
  });

  test('quality is never negative', () => {
    gildedRose = new GildedRose([new Item('standard item', 10, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toStrictEqual('standard item');
    expect(gildedRose.items[0].sellIn).toStrictEqual(9);
    expect(gildedRose.items[0].quality).toStrictEqual(0);
  });

  test('aged brie increases in quality', () => {
    gildedRose = new GildedRose([new Item('Aged Brie', 10, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toStrictEqual('Aged Brie');
    expect(gildedRose.items[0].sellIn).toStrictEqual(9);
    expect(gildedRose.items[0].quality).toStrictEqual(11);
  });

  test('aged brie increases twice in quality after sellin date', () => {
    gildedRose = new GildedRose([new Item('Aged Brie', 0, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toStrictEqual('Aged Brie');
    expect(gildedRose.items[0].sellIn).toStrictEqual(-1);
    expect(gildedRose.items[0].quality).toStrictEqual(12);
  });

  test('quality is never above 50', () => {
    gildedRose = new GildedRose([new Item('Aged Brie', 0, 50)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toStrictEqual('Aged Brie');
    expect(gildedRose.items[0].sellIn).toStrictEqual(-1);
    expect(gildedRose.items[0].quality).toStrictEqual(50);
  });

  test('Sulfuras is legendary', () => {
    gildedRose = new GildedRose([
      new Item('Sulfuras, Hand of Ragnaros', 10, 10),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toStrictEqual(
      'Sulfuras, Hand of Ragnaros'
    );
    expect(gildedRose.items[0].sellIn).toStrictEqual(10);
    expect(gildedRose.items[0].quality).toStrictEqual(10);
  });

  test('Backstage passes increases in quality', () => {
    gildedRose = new GildedRose([
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toStrictEqual(
      'Backstage passes to a TAFKAL80ETC concert'
    );
    expect(gildedRose.items[0].sellIn).toStrictEqual(14);
    expect(gildedRose.items[0].quality).toStrictEqual(11);
  });

  test('Backstage passes increases 2 in quality when 10 days left', () => {
    gildedRose = new GildedRose([
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toStrictEqual(
      'Backstage passes to a TAFKAL80ETC concert'
    );
    expect(gildedRose.items[0].sellIn).toStrictEqual(9);
    expect(gildedRose.items[0].quality).toStrictEqual(12);
  });

  test('Backstage passes increases 3 in quality when 5 days left', () => {
    gildedRose = new GildedRose([
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toStrictEqual(
      'Backstage passes to a TAFKAL80ETC concert'
    );
    expect(gildedRose.items[0].sellIn).toStrictEqual(4);
    expect(gildedRose.items[0].quality).toStrictEqual(13);
  });

  test('Backstage passes quality is 0 after concert', () => {
    gildedRose = new GildedRose([
      new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toStrictEqual(
      'Backstage passes to a TAFKAL80ETC concert'
    );
    expect(gildedRose.items[0].sellIn).toStrictEqual(-1);
    expect(gildedRose.items[0].quality).toStrictEqual(0);
  });
});
