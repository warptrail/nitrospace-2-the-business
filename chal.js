console.log("Let's do this!");

function hello(name) {
    let hello = "Hello ";
    let greeting = ". Welcome to this web site."
    return hello + name + greeting;

}

hello("roy");

function enterName(event) {
    event.preventDefault();
    let name = document.getElementById('name-input').value;
    let greeting = hello(name);
    let greetName = document.getElementById("name-demo");
    greetName.innerHTML = greeting;
    document.getElementById("name-form").reset();
    document.getElementById("name-submit").blur();
}

let nameForm = document.getElementById("name-form");
nameForm.onsubmit = enterName;



// Take Home - Cart Items

let items = [
    {
        itemName: "Effective Programming Habits",
        type: "book",
        price: 13.99
    },
    {
        itemName: "iphone X",
        type: "cell phone",
        price: 8000
    },
    {
        itemName: "Creation 3005",
        type: "computer",
        price: 299.99
    },
    {
        itemName: "Free Garbage",
        type: "garbage",
        price: 0
    },
    {
        itemName: "xxx",
        type: "garbage",
        price: 1000
    },
    {
        itemName: "Finding Your Center",
        type: "book",
        price: 15.00
    }
]

// Problem 1 - Cart Price
// Create a function called cartPrice to find the total cost of all the items in the list. The function should accept the array of items and return the total cost of the items as a number.

function cartPrice(items) {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
        totalPrice += items[i].price;
    }
    return totalPrice
}

console.log(cartPrice(items));

// Problem 2 - Most Expensive Item Name
// Create a function called mostExpensiveItemName to find the most expensive item. The function should accept the array of items as a parameter and return the name of the most expensive item.

function mostExpensiveItemName(items) {
    let highestPrice = 0;
    let mostExpensiveName = "";
    for (let i = 0; i < items.length; i++) {
        if (items[i].price > highestPrice) {
            highestPrice = items[i].price;
            mostExpensiveName = items[i].itemName;
        }
    }
    return mostExpensiveName;
}

// console.log(Math.max(items[0].price, items[1].price));
console.log(mostExpensiveItemName(items));

// Problem 3 - Lookup a Price
// Create a function called priceLookup to find the price of a single item. The function should accept the array of items and an item name (string) as parameters, and return the price of the item with that name. If the item cannot be found, return the string "No item found with that name".

function priceLookup(items, lookupName) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].itemName === lookupName) {
            return items[i].price
        }
    }
    return "No item found with that name"
}

console.log(priceLookup(items, "xxx"));

// This is example data you can use while working on your code.
const responses = [
    {
        question: 'What is the phase where chromosomes line up in mitosis?',
        response: 'Metaphase',
        isCorrect: true,
        isEssayQuestion: false
    },
    {
        question: 'What anatomical structure connects the stomach to the mouth?',
        response: 'Esophagus',
        isCorrect: true,
        isEssayQuestion: false
    },
    {
        question: 'What are lysosomes?',
        response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
        isCorrect: true,
        isEssayQuestion: true
    },
    {
        question: 'True or False: Prostaglandins can only constrict blood vessels.',
        response: 'True',
        isCorrect: false,
        isEssayQuestion: false
    }
];

// prompt 5 : Get questions to appear on card

function displayQuestions() {
    const question = document.getElementById("science-question");
    const button = document.getElementById("science-button");
    for (let i = 0; i < responses.length; i++) {
        question.innerHTML += "<li>" + responses[i].question + "</li>";
    }
}

displayQuestions();




// Prompt 1 : countCorrectQuestions

function countCorrectQuestions(responses) {
    let correctQeustions = 0;
    for (let i = 0; i < responses.length; i++) {
        if (responses[i].isCorrect === true) {
            correctQeustions++;
        }
    }
    return correctQeustions;
}


console.log(countCorrectQuestions(responses));

// Prompt 2 : filterQuestionsByType

function filterQuestionsByType(responses, isEssayQuestion) {
    let essaayQuestions = [];
    for (let i = 0; i < responses.length; i++) {
        if (responses[i].isEssayQuestion === isEssayQuestion) {
            essaayQuestions.push(responses[i]);
        }
    }
    return essaayQuestions;
}

console.log(filterQuestionsByType(responses, true));

// Prompt 3 : checkForPlagiarism
// use include method
// return true


function checkForPlagiarism(responses, externalSource) {
    let isPlagarized = false;
    for (let i = 0; i < responses.length; i++) {
        if (responses[i].response.includes(externalSource)) {
            isPlagarized = true;
        }
    }
    return isPlagarized;
}

console.log(checkForPlagiarism(responses, "A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules."))