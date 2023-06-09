const { readJSONFile, writeJSONFile } = require("./src/helper");

const {
  create,
  index,
  view,
  update,
  remove,
  total,
  emptyCart,
  inStock,
  sortByPrice,
  filterCondition,
  filterByKeyAndValue,
} = require("./src/vintageController");

const chalk = require("chalk");
const inform = console.log;
const data = require("./data/sampleData.json");

function run() {
  inform("👕 🧢 Welcome to Jaranimo's Vintage Inventory App 🧢 👕\n");
  let products = readJSONFile("data", "storeInventory.json");

  let writeToFile = false;
  let updatedItem = [];

  const action = process.argv[2];
  const inventory = process.argv[3];

  switch (action) {
    case "index":
      const purchaseView = index(products);
      inform(purchaseView);
      break;

    case "view":
      const detailedView = view(products, inventory);
      inform(detailedView);
      break;

    case "create":
      updatedItem = create(products, inventory);
      writeToFile = true;
      break;

    case "update":
      updatedItem = update(products, inventory, process.argv[4]);
      writeToFile = true;
      break;

    case "remove":
      updatedItem = remove(products, inventory);
      writeToFile = true;
      break;

    case "total":
      let totalDonation = total(products);
      inform(totalDonation);
      break;

    case "emptyCart":
      updatedItem = emptyCart(products);
      writeToFile = true;
      break;

    case "inStock":
      let availability = inStock(data);
      inform(availability);
      break;

    case "sortByPrice":
      let sortedInventory = sortByPrice(data, process.argv[3]);
      inform(sortedInventory);
      break;

    case "filterCondition":
      let filter = filterCondition(data, process.argv[3]);
      inform(filter);
      break;

    case "filterByKeyAndValue":
      let keyValueFilter = filterByKeyAndValue(
        data,
        process.argv[3],
        process.argv[4]
      );
      inform(keyValueFilter);
      break;

    default:
      inform("Error with Information Provided!");
  }
  if (writeToFile) {
    writeJSONFile("./data", "storeInventory.json", updatedItem);
  }
}
run();
