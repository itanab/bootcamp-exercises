//Exercise 1: Products

/*
1 Create an object representing a product in an e-shop. Give it these properties

name - name of the product
price - the price of the product in euros
quantity - number of items available in the store
Create an array containing at least 7 different products.
Creating such an array is hard work. Let's create a class Product to make our lives easier. */


const productsArray = [
    {name: "t-shit", price: "12 euros", quantity: 10},
    {name: "jacket", price: "30 euros", quantity: 12},
    {name: "shorts", price: "20 euros", quantity: 4},
    {name: "shoes", price: "100 euros", quantity: 40},
    {name: "sunglasses", price: "300 euros", quantity:3},
    {name: "crop top", price: "3 euros", quantity: 1},   
];


/*
Create a class named Product
Create a constructor inside of it taking these three parameters: name, price and quantity. In the constructor set the properties of the object to the values of these parameters.
Create the same array as before with the 7 products but now useing your class and the new keyword.
*/

class Product {
    constructor (name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    /*
Now we add some methods to our class

Add a method called sell() which will sell one product. This will decrease the number of products of this type in the store (decrease the quantity property)
Add a method called store(count) which will put count more products of this type to the store */

    sell () {
        this.quantity --;
    };

    store (count) {
        this.quantity += count;
    };
}

const products = [
    prod1 = new Product ('t-shirt', '12 euros', 10),
    prod2 = new Product ('jacket', '30 euros', 12),
    prod3 = new Product ('shorts', '20 euros', 4),
    prod4 = new Product ('shoes', '100 euros', 40),
    prod5 = new Product ('sunglasses', '300 euros', 3),
    prod6 = new Product ('crop top', '3 euros', 1),
];

prod1.sell();
prod2.store(10);



/* Making a website

Create a website which displays the products in our array. Display each product with its name, price and quantity.
Put a buy button next to each item that, when clicked, will call the method sell() on the appropriate object. 
*/



