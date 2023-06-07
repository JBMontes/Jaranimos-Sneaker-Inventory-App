const { index, inStock, filterCondition } = require("../src/vintageController");

const data = require("../data/sampleData.json");

const customerOrder = require("./sampleTestData.json");

describe("Generating view of objects from Customer Cart", () => {
  test("Checks for valid array output", () => {
    expect(index(customerOrder)).toStrictEqual([
      'id: 6zvL | name: The_Hundreds_Batman | cost: 200 | inStock: true | type: shirt | condition: bad | year: 2005 | size: L ',
      'id: Fv0S | name: Star_Wars_Episode_One | cost: 250 | inStock: true | type: shirt | condition: excellent | year: 1992 | size: XL ',
      'id: t8qY | name: Fubu_Bucket | cost: 90 | inStock: false | type: hat | condition: good | year: 1997 | size: L '
    ]);
  });
});

describe("Generating view of items in stock", () => {
  test("Checks for valid in-stock items", () => {
    expect(inStock(data)).toStrictEqual([
      'name: Star_Wars_Episode_One | type: shirt | price: 250 | size: XL | condition: excellent | year: 1992',
      'name: Arizona_Coyotee | type: jersey | price: 400 | size: XXL | condition: excellent | year: 1990',
      'name: Stone_Cold | type: shirt | price: 280 | size: XL | condition: fair | year: 1990',
      'name: The_Hundreds_Batman | type: shirt | price: 200 | size: L | condition: bad | year: 2005'
    ]);
  });
});
describe("Generating filtered view of items by condition of item ", () => {
  test("Checks for appropriate filter output", () => {
    expect(filterCondition(data,"bad")).toStrictEqual([
      {
        name: 'The_Hundreds_Garfield',
        priceInCents: 180,
        inStock: false,
        type: 'shirt',
        condition: 'bad',
        year: 1992,
        size: 'S'
      },
      {
        name: 'The_Hundreds_Batman',
        priceInCents: 200,
        inStock: true,
        type: 'shirt',
        condition: 'bad',
        year: 2005,
        size: 'L'
      }
    ]);
  });
});
