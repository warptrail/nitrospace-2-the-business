const greetingsShopper = "Let's go shopping!";
console.log(greetingsShopper);

let items = [
    {
        itemName: "pencil",
        type: "utensil",
        price: 5
    },
    {
        itemName: "paper",
        type: "supplies",
        price: 10
    },
    {
        itemName: "crayons",
        type: "utensil",
        price: 20
    },
    {
        itemName: "ruler",
        type: "meter",
        price: 15
    },
    {
        itemName: "compass",
        type: "meter",
        price: 15
    },
    {
        itemName: "staples",
        type: "supplies",
        price: 5
    },
];

// Problem 1 - Cart Price
// Create a function called cartPrice to find the total cost of all the items in the list. The function should accept the array of items and return the total cost of the items as a number.

function cartPrice(items) {
    // total price is set to 0 to indicate an empty cart
    let totalPrice = 0;
    // this loop goes through each item in the items list and adds each price to the total price and ends at the last item of the list
    for (let i = 0; i < items.length; i++) {
        totalPrice += items[i].price;
    }
    // returns the sum of each individual price to be displayed where we choose
    return totalPrice;
}


let displayTotalPrice = document.getElementById('total-price');
displayTotalPrice.innerHTML = "<p class='alien'>" + cartPrice(items) + " rupples </p>"

// Problem 2 - Most Expensive Item Name
// Create a function called mostExpensiveItemName to find the most expensive item. The function should accept the array of items as a parameter and return the name of the most expensive item.

function mostExpensiveItemName(items) {
    // set the highest price to the first price in the array to give a base for comparrison
    let highestPrice = items[0].price;
    // set the name of that first items price
    let mostExpensiveItemName = items[0].itemName;
    // loop through the items and compare each price to the initial price set above
    for (let i = 0; i < items.length; i++) {
        // if the next item has a higher price than the previous one, then set the highestPrice as the price of that item and the most expensive item name as the name of that cooresponding item
        if (items[i].price > highestPrice) {
            highestPrice = items[i].price;
            mostExpensiveItemName = items[i].itemName;
        }
    }
    return highestPrice + " " + mostExpensiveItemName;
}

console.log(mostExpensiveItemName(items));

// Problem 3 - Lookup a Price
// Create a function called priceLookup to find the price of a single item. The function should accept the array of items and an item name (string) as parameters, and return the price of the item with that name. If the item cannot be found, return the string "No item found with that name".

// items is the array - lookupName is the specific item we are searching for
function priceLookup(items, lookupName) {
    // loop through each item of the array to compare the lookup name with any name in there
    for (let i = 0; i < items.length; i++) {
        // if the name matches, then return the price of that object
        if (items[i].itemName === lookupName) {
            return items[i].itemName + " - " + items[i].price + " rupples";
        }
    }
    // if no item matches, then return this message by default
    return "No item found with that name"
}

function priceLookupSubmit(event) {
    event.preventDefault();
    const input = document.getElementById('item-lookup-input').value;
    const demo = document.getElementById('item-lookup-demo');
    let returnedPrice = priceLookup(items, input);
    demo.innerHTML = returnedPrice;
    document.getElementById('item-lookup-form').reset();
    document.getElementById('item-lookup-button');
}

let priceReturnForm = document.getElementById('item-lookup-form');
priceReturnForm.onsubmit = priceLookupSubmit;

// problem 4 - get the array of objects to display as a table

function makeItemsTable() {
    let tableHTML = `
    <table border='1|1' style='width:100%;'>
    <tr>
    <th>Item Name</th>
    <th>Type</th>
    <th>Price</th>
</tr>
    `
    for (let i = 0; i < items.length; i++) {
        tableHTML += `
            <tr>
            <td>${items[i].itemName}</td>
            <td>${items[i].type}</td>
            <td>${items[i].price} rupples</td>
            </tr>
        `;
    }
    tableHTML += "</table>";
    let itemsTableFloor = document.getElementById('items-table-floor');
    itemsTableFloor.innerHTML = tableHTML;
}

makeItemsTable();
