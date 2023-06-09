const inform = console.log;
const { nanoid } = require("nanoid");
const chalk = require("chalk");
const data = require("../data/sampleData.json");

function create(storeInventory, item) {
  const index = data.find((singleItem) => singleItem.name === item);

  const newItem = {
    id: `${nanoid(4)}`,
    name: item,
    type: index.type,
    size: index.size,
    priceInCents: index.priceInCents,
    conditon: index.condition,
    year: index.year,
    inStock: index.inStock,
  };
  storeInventory.push(newItem);
  inform(`📦 New Item Has Been Added to Inventory!`)
  return storeInventory;
}

function index(storeInventory) {
  inform("All Inventory items:\n")
  return storeInventory.map(
    (eachItem) =>
      `📦 id: ${eachItem.id} | name: ${eachItem.name} | cost: ${eachItem.priceInCents} | inStock: ${eachItem.inStock} | type: ${eachItem.type} | condition: ${eachItem.conditon} | year: ${eachItem.year} | size: ${eachItem.size}`
  );
}

function view(storeInventory, item) {
  let singleItemInfo = storeInventory.filter(
    (product) => product.name === item
  );

  for (let info of singleItemInfo) {
    inform("Inventory Item 📦: \n")
    return chalk.bgWhiteBright(
      `${chalk.magenta("id")}: ${chalk.black(info.id)} | ${chalk.green(
        "name"
      )}: ${chalk.black(info.name)} | ${chalk.blue(
        "priceInCents"
      )}: ${chalk.green(`$`)}${chalk.green(info.priceInCents)}${chalk.green(
        ".00"
      )} | ${chalk.red("inStock")}: ${chalk.black(
        info.inStock
      )} | ${chalk.magentaBright("type")}: ${chalk.black(
        info.type
      )} | ${chalk.magentaBright("condition")}: ${chalk.black(
        info.condition
      )} | ${chalk.magentaBright("year")}: ${chalk.black(
        info.year
      )} | ${chalk.magentaBright("size")}: ${chalk.black(info.size)}`
    );
  }
}

function update(storeInventory, itemId, updatePiece) {
  const index = storeInventory.findIndex(
    (singleItem) => singleItem.id === itemId
  );
   updatePiece = data.find(
    (singleItem) => singleItem.name === updatePiece
  );

  if (index > -1) {
    storeInventory[index].id = itemId;
    storeInventory[index].name = updatePiece.name;
    storeInventory[index].priceInCents = updatePiece.priceInCents;
    storeInventory[index].inStock = updatePiece.inStock;
    storeInventory[index].type = updatePiece.type;
    storeInventory[index].condition = updatePiece.condition;
    storeInventory[index].year = updatePiece.year;
    storeInventory[index].size = updatePiece.size;

    inform("✅ Item successfully updated");
    return storeInventory;
  } else {
    inform("🛑 Item not found. Please try again.");
    return storeInventory;
  }
}

function remove(storeInventory, itemId) {
  const index = storeInventory.findIndex(
    (singleItem) => singleItem.id === itemId
  );
  if (index > -1) {
    storeInventory.splice(index, 1);
    inform("✅ Item successfully 🗑️  from inventory!");
    return storeInventory;
  } else {
    inform("🛑 Item not found. No action taken. Please try again.");
    return storeInventory;
  }
}

function total(storeInventory) {
  let filteredPriceInCents = storeInventory.map(
    (amounts) => amounts.priceInCents
  );
  let totalAmount = filteredPriceInCents.reduce((prev, curr) => prev + curr);
  return `Inventory 📦 Total: ${chalk.yellow(
    filteredPriceInCents.length
  )} |💰 Total: ${chalk.green(`$`)}${chalk.green(totalAmount)}`;
}

function emptyCart(storeInventory) {
  if (storeInventory.length > 0) {
    storeInventory.splice(0, storeInventory.length);
  }
  inform("All items successfully 🗑️ from inventory!")
  return storeInventory;
}

function inStock(inventory) {
  let filtered = inventory.filter((stock) => stock.inStock === true);
  inform("All Items Currently for Sale:\n")
  return filtered.map(
    (item) =>
      `name: ${item.name} | type: ${item.type} | price: ${item.priceInCents} | size: ${item.size} | condition: ${item.condition} | year: ${item.year}`
  );
}

function sortByPrice(inventory, option) {
  let lowToHigh = inventory.sort((a, b) => a.priceInCents - b.priceInCents);

  if (option === "Low_To_High") {
    inform(`${chalk.green("Priced")} from ${chalk.blue("Low")} → ${chalk.red("High")}:`)
    return lowToHigh;
  }
  if (option === "High_To_Low") {
    inform(`${chalk.green("Priced")} from ${chalk.red("High")} → ${chalk.blue("Low")}:`)
    return lowToHigh.reverse();
  }
}

function filterCondition(inventory, option) {
  inform(`List of ${option.toUpperCase()} items:`)
  return inventory.filter((item) => item.condition === option);
}

function filterByKeyAndValue(inventory, category, option) {
  inform(`Sort ${chalk.cyan(category)} by ${chalk.red(option)}:`)
  return inventory.filter((item) => item[category] === option);

}

module.exports = {
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
};
