const inform = console.log;
const { nanoid } = require("nanoid");
const chalk = require("chalk");
const data = require("../data/sampleData.json");

function create(customerCart, item) {
  const index = data.find((purchase) => purchase.name === item);

  const newPurchase = {
    id: `${nanoid(4)}`,
    name: item,
    type: index.type,
    size: index.size,
    priceInCents: index.priceInCents,
    conditon: index.condition,
    year: index.year,
    inStock: index.inStock,
  };
  customerCart.push(newPurchase);
  return customerCart;
}

function index(customerCart) {
  return customerCart.map(
    (eachPurchase) =>
      `🛒 id: ${eachPurchase.id} | name: ${eachPurchase.name} | cost: ${eachPurchase.priceInCents} | inStock: ${eachPurchase.inStock} | type: ${eachPurchase.type} | condition: ${eachPurchase.conditon} | year: ${eachPurchase.year} | size: ${eachPurchase.size} 🛒`
  );
}

function view(customerCart, item) {
  let singlePurchaseInfo = customerCart.filter(
    (product) => product.name === item
  );

  for (let info of singlePurchaseInfo) {
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

function update(customerCart, purchaseId, updatedPurchase) {
  const index = customerCart.findIndex(
    (purchase) => purchase.id === purchaseId
  );
  const updatedItem = data.find(
    (purchase) => purchase.name === updatedPurchase
  );

  if (index > -1) {
    customerCart[index].id = purchaseId;
    customerCart[index].name = updatedPurchase;
    customerCart[index].priceInCents = updatedItem.priceInCents;
    customerCart[index].inStock = updatedItem.inStock;
    customerCart[index].type = updatedItem.type;
    customerCart[index].condition = updatedItem.condition;
    customerCart[index].year = updatedItem.year;
    customerCart[index].size = updatedItem.size;

    inform("✅ Order successfully updated");
    return customerCart;
  } else {
    inform("🛑 Order not found. Please try again.");
    return customerCart;
  }
}

function remove(customerCart, purchaseId) {
  const index = customerCart.findIndex(
    (purchase) => purchase.id === purchaseId
  );
  if (index > -1) {
    customerCart.splice(index, 1);
    inform("✅ Purchase successfully removed from your cart!");
    return customerCart;
  } else {
    inform("🛑 Purchase not found. No action taken. Please try again.");
    return customerCart;
  }
}

function total(customerCart) {
  let filteredPriceInCents = customerCart.map(
    (amounts) => amounts.priceInCents
  );
  let totalAmount = filteredPriceInCents.reduce((prev, curr) => prev + curr);
  return `🛒 Total: ${chalk.yellow(
    filteredPriceInCents.length
  )} |💰 Total: ${chalk.green(`$`)}${chalk.green(totalAmount)}`;
}

function emptyCart(customerCart) {
  if (customerCart.length > 0) {
    customerCart.splice(0, customerCart.length);
  }
  return customerCart;
}

function inStock(data) {
  let filtered = data.filter((stock) => stock.inStock === true);
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
  return inventory.filter((item) => item.condition === option);
}

function filterByKeyAndValue(data, category, option) {
  return data.filter((item) => item[category] === option);

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
