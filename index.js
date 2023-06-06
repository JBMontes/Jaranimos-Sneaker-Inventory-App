const { readJSONFile, writeJSONFile } = require("./src/helper");

const {create, index, view, update, remove, total, emptyCart } = require("./src/sneakerController")

const inform = console.log;
const data = require("./data/sampleData.json");

function run(){

    inform("Welcome to Jaranimo's Sneaker App");
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
           updatedPurchase = emptyCart(purchases)
            writeToFile = true;
            break;
    
        default:
          inform("Error with Information Provided!");
      }
      if (writeToFile) {
        writeJSONFile("./data", "customerCart.json", updatedPurchase);
      }
    }
    run();
    

