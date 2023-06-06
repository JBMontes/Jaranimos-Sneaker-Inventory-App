const inform = console.log;
const { nanoid } = require("nanoid");
const chalk = require("chalk");
const data = require("../data/sampleData.json")

function create(customerCart, item) {
    // customerCart = sampleData.json array / item = customerCart.name
    const index = data.find(
        (purchase) => purchase.name === item
      );
    
        const newPurchase = {
        id : `${nanoid(4)}`,
        name : item,
        priceInCents : index.priceInCents,
        inStock : index.inStock,
        type : index.type
        }
        customerCart.push(newPurchase)
        return customerCart
      }
     
    

  function index(customerCart) {
    return customerCart.map(
      (eachPurchase) => `id: ${eachPurchase.id} | name: ${eachPurchase.name} | cost: ${eachPurchase.priceInCents} | inStock: ${eachPurchase.inStock} | type: ${eachPurchase.type}`);
    }

    function view(customerCart, item) {
        let singlePurchaseInfo = customerCart.filter(
          (product) => product.name === item
        );
        for (let info of singlePurchaseInfo) {
          return chalk.bgWhiteBright(`${chalk.magenta("id")}: ${chalk.black(info.id)} | ${chalk.green("name")}: ${
              chalk.black(info.name)
          } | ${chalk.blue("priceInCents")}: ${chalk.black(info.priceInCents)} | ${chalk.red(
            "inStock"
          )}: ${chalk.yellow(info.inStock)} | ${chalk.blue("type")}: ${chalk.cyan(info.type)}`);
        }
      }
      
    
function update(customerCart, purchaseId, updatedPurchase) {
    const index = customerCart.findIndex(
      (purchase) => purchase.id === purchaseId);

    const updatedItem = data.find(
        (purchase) => purchase.name === updatedPurchase
      );
    
    if (index > -1) {
      customerCart[index].id = purchaseId;
      customerCart[index].name = updatedPurchase;
      customerCart[index].priceInCents = updatedItem.priceInCents;
      customerCart[index].inStock = updatedItem.inStock;
      customerCart[index].type = updatedItem.type;

      inform("Purchase successfully updated");
      return customerCart;
    } else {
      inform("Purchase not found. Please try again");
      return customerCart;
    }
  }

function remove(customerCart, purchaseId) {
    const index = customerCart.findIndex(
      (purchase) => purchase.id === purchaseId
    );
    if (index) {
      customerCart.splice(index, 1);
      inform("Purchase successfully removed from your cart!");
      return customerCart;
    } else {
      inform("Purchase not found. No action taken. Please try again.");
      return customerCart;
    }
  }

  function total(customerCart) {
    let filteredPriceInCents = customerCart.map((amounts) => amounts.priceInCents);
    let totalAmount = filteredPriceInCents.reduce((prev, curr) => prev + curr);
    return `Number of items: # ${filteredPriceInCents.length} Amount total: $${totalAmount}`;
  }

  function emptyCart(customerCart){
    if(customerCart.length > 0){
       customerCart.splice(0,customerCart.length)
    }
    return customerCart
  }

function inStock(data){
   return data.filter((sneakers) => sneakers.inStock === true)

}



  module.exports = {create, index, view, update, remove, total, emptyCart, inStock  }