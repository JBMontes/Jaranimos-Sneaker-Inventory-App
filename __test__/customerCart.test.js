const {
    index,
    inStock
  } = require("../src/vintageController");
  
  const data = require("../data/sampleData.json")

  const customerOrder = require("../data/customerCart.json")

  describe("Generating view of objects from Customer Cart", () => {
    test("Checks for valid array output", ()=> {
        expect(index(customerOrder)).toStrictEqual([
            'id: ehDp | name: airMax97 | cost: 180 | inStock: true | type: LowTop',
            'id: YilX | name: blazers | cost: 90 | inStock: false | type: HighTop',
            'id: KwDv | name: waffleRunner | cost: 70 | inStock: false | type: LowTop'
          ]);
    });
  });

  describe("Generating view of items in stock", () => {
    test("Checks for valid in-stock items", ()=> {
        expect(inStock(data)).toStrictEqual([
            { name: 'sacai', priceInCents: 250, inStock: true, type: 'LowTop' },
            { name: 'dunks', priceInCents: 110, inStock: true, type: 'LowTop' },
            {
              name: 'jordanOne',
              priceInCents: 110,
              inStock: true,
              type: 'HighTop'
            }]);
    });
  });



