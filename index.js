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

const inform = console.log;
const data = require("./data/sampleData.json");

function run() {
  inform("👕 🧢 Welcome to Jaranimo's Online Vintage App 🧢 👕\n\n");
  let purchases = readJSONFile("data", "customerCart.json");

  let writeToFile = false;
  let updatedPurchase = [];

  const action = process.argv[2];
  const purchase = process.argv[3];

  switch (action) {
    case "index":
      const purchaseView = index(purchases);
      inform(purchaseView);
      break;

    case "view":
      const detailedView = view(purchases, purchase);
      inform(detailedView);
      break;

    case "create":
      updatedPurchase = create(purchases, purchase);
      writeToFile = true;
      break;

    case "update":
      updatedPurchase = update(purchases, purchase, process.argv[4]);
      writeToFile = true;
      break;

    case "remove":
      updatedPurchase = remove(purchases, purchase);
      writeToFile = true;
      break;

    case "total":
      let totalDonation = total(purchases);
      inform(totalDonation);
      break;

    case "emptyCart":
      updatedPurchase = emptyCart(purchases);
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
    writeJSONFile("./data", "customerCart.json", updatedPurchase);
  }
  inform("\n 🛍️  Thank you for shopping with us! 🛍️");
}
run();
