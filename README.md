# Jaranimos-Vintage-Inventory-App

 ![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://publish.one37pm.net/wp-content/uploads/2019/08/vintage-tees-shopping-tips-tricks-mobile.jpg?resize=720%2C780)
 
 ## Command Line Inventory App 
Welcome,

You will learn how to tinker with the inventory app through the command line. 

Be sure to run npm init -y to install the scripts from package.json.

Before running any functions, be sure to create the appropriate scripts in the package.json file. 

## The Controller Functions                    

create() : This function allows users to put specific items into their cart. To run function, use following command:

 ``` npm run create (item Name) ```
 </br>
 </br>

index() : This function allows users to view specific items inside of their cart. To run function, use following command:

  ``` npm run index```  
  </br>
  

view() : This function allows users to view a specific items within the cart using enhanced terminal string styling. To run function, use following command: 

 ``` npm run view (item name) ```     
 </br>

update() : This function updates/changes an item using the ID of the cart item. To run this function, use following command:

   ``` npm run update (id) (item name) ```    
</br>

remove() : This function removes a specific item in the customers cart using the ID of cart item. To run this function, use following command:

  ``` npm run remove (id) ```           
 </br> 

total() : This function generates the total purchase amount and number of items within the customers cart. To run this function, use following command:

   ``` npm run total ```                  
  </br> 

emptyCart() : This function erases all items that are in the cart. To run this function, use following command:

   ``` npm run emptyCart ```     
  </br> 

inStock() : This function shows all items that are currently in stock within the inventory. To run this function, use following command: 

 ``` npm run inStock ```    
 </br>

sortByPrice() : This function logs a sorted array of all the items by price within store inventory. The user can choose from two options:(High_To_Low) or  (Low_To_High). To run this function, use following command: 

  ``` npm run sortByPrice (option) ```     
  </br>

filterCondition() : This function logs a fitlered array based on the condition of choice (bad, fair, good, excellent). To run this function, use the followiong command:

``` npm run filterCondition (option) ```    
</br>

filterByKeyAndValue() : This function is a play on the previous function. It allows the user to filter through the inventory more efficiently by inputting the key(category) and value(option) into the command line. To run this function, use the following command:

 ``` npm run filterByKeyAndValue (key) (value) ```           
