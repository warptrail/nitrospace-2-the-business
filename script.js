console.log("Hello World");

// Card 1
// Write a program to check two numbers and return true if one of the numbers is 100 or if the sume of the two numbers is 100

function onehundred(numberA, numberB) {
    let message = "One hundred is ";
    if (numberA === 100 || numberB === 100 || (numberA + numberB) === 100) {
        return (message + true);
    }
    return (message + false);
}

function onehundredSubmit(event) {
    event.preventDefault();
    let numberA = parseInt(document.getElementById('h-number-a').value);
    let numberB = parseInt(document.getElementById('h-number-b').value);
    let isOnehundred = onehundred(numberA, numberB);
    let demo = document.getElementById('h-number-demo');
    demo.innerHTML = isOnehundred;
    document.getElementById('onehundred-form').reset();
    document.getElementById('h-number-submit').blur();
}

let onehundredForm = document.getElementById('onehundred-form');
onehundredForm.onsubmit = onehundredSubmit;

// Card 2
// write a function to get the extension of a filename
// slice & lastIndexOf

function getFileExtension(string) {
    return string.slice(string.lastIndexOf('.'));
}

function fileExtensionSubmit(event) {
    event.preventDefault();
    let input = document.getElementById('file-ext-input').value;
    let extention = getFileExtension(input);
    let demo = document.getElementById('file-ext-demo');
    demo.innerHTML = extention;
    document.getElementById('file-ext-form').reset();
    document.getElementById('file-ext-submit').blur();
}

let fileExtensionForm = document.getElementById('file-ext-form');
fileExtensionForm.onsubmit = fileExtensionSubmit;

console.log(getFileExtension("index.html"));

/* Excercise 3:
   ------------
   Write a program to replace every character in a given string with the character following it in the alphabet
*/

function moveCharsForward(string) {
    let modifiedString = string.split('').map(character => String.fromCharCode(character.charCodeAt(0) + 1)).join('');
    function adjustModifiedString(modifiedString) {
        let adjustedString = modifiedString.replace(/{/g, "a").replace(/!/g, " ").replace(/\[/g, "A");

        return adjustedString;
    }
    modifiedString = adjustModifiedString(modifiedString);
    return modifiedString;
}

console.log(moveCharsForward("Zazaza moo"));

function moveCharsForwardSubmit(event) {
    event.preventDefault();
    let input = document.getElementById('shift-char-input').value;
    let shiftedString = moveCharsForward(input);
    let demo = document.getElementById('shift-char-demo');
    demo.innerHTML = shiftedString;
    document.getElementById('shift-char-form').reset();
    document.getElementById('shift-char-submit').blur();
}

let shiftCharForm = document.getElementById('shift-char-form');
shiftCharForm.onsubmit = moveCharsForwardSubmit;

/* Excercise 4:
   ------------
  Write a program to get the current date

*/

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${months}/${days}/${years}`;
}

let todaysDate = document.getElementById('todays-date');
todaysDate.innerHTML = formatDate();

// Excercise 5
// ------------
// write a program to create a new string adding the value of input field A in front of a given string in input field B. If the strings are the same, then return the first string.

function addToString(stringA, stringB) {
    if (stringA === stringB) {
        return stringA;
    }
    return `${stringA} ${stringB}`;
    //stringA === stringB ? stringA : `${stringA} ${stringB}`;
}

console.log("Cool", "Neat");

function combineStringsSubmit(event) {
    event.preventDefault();
    let inputA = document.getElementById('combine-string-a').value;
    let inputB = document.getElementById('combine-string-b').value;
    let combinedStrings = addToString(inputA, inputB);
    let demo = document.getElementById('combine-demo');
    demo.innerHTML = combinedStrings;
    document.getElementById('combine-strings-form').reset();
    document.getElementById('combine-string-submit').blur();
}

let combineStringForm = document.getElementById('combine-strings-form');
combineStringForm.onsubmit = combineStringsSubmit;

// Write a program to create a new string from a given string taking the first 3 character and the last 3 character of a string and adding them together. The string length must be 3 or more, if not, the orginal string is returned

function threeStringIt(string) {
    if (string.length < 3) {
        return string;
    }
    return string.slice(0, 3) + string.slice(-3);
}

function threeStringSubmit(event) {
    event.preventDefault();
    let input = document.getElementById('three-string-input').value;
    let threeString = threeStringIt(input);
    let demo = document.getElementById('three-string-demo');
    demo.innerHTML = threeString;
    document.getElementById('three-string-form').reset();
    document.getElementById('three-string-submit').blur();
}

let threeStringForm = document.getElementById('three-string-form');
threeStringForm.onsubmit = threeStringSubmit;

// write a program to extract the first half of a string of even length
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const firstHalf = (str) => str.slice(0, str.length / 2);
const secondHalf = (str) => str.slice(str.length / 2);


function jumble(firstWord, secondWord) {

    function jumbleFirst(firstWord, secondWord) {
        let randomChoice = getRndInteger(0, 1);
        if (randomChoice === 0) {
            return firstHalf(firstWord);
        }
        return firstHalf(secondWord);
    }

    function jumbleSecond(firstWord, secondWord) {
        let randomChoice = getRndInteger(0, 1);
        if (randomChoice === 0) {
            return secondHalf(firstWord);
        }
        return secondHalf(secondWord);
    }


    let rollaD4 = getRndInteger(1, 4);
    if (rollaD4 === 1) {
        return jumbleFirst(firstWord, secondWord) + jumbleSecond(firstWord, secondWord);
    } else if (rollaD4 === 2) {
        return jumbleSecond(firstWord, secondWord) + jumbleFirst(firstWord, secondWord)
    } else if (rollaD4 === 3) {
        return jumbleSecond(secondWord, firstWord) + jumbleFirst(secondWord, firstWord)
    } else if (rollaD4 === 4) {
        return jumbleFirst(secondWord, firstWord) + jumbleSecond(secondWord, firstWord);
    }

}

function jumbleSubmit(event) {
    event.preventDefault();
    let inputA = document.getElementById('jumble-input-a').value;
    let inputB = document.getElementById('jumble-input-b').value;
    let demo = document.getElementById('jumble-demo');
    console.log(getRndInteger(0, 1));
    let jumbledWord = jumble(inputA, inputB);
    demo.innerText += jumbledWord + ', ';
}

let jumbleForm = document.getElementById("jumble-form");
jumbleForm.onsubmit = jumbleSubmit;

console.log(jumble("Larry", "Jeff"))

// console.log(jumbleFirst("larry", "jeff") + jumbleSecond("larry", "Jeff"))

// Write a program to concatenate two strings except their first character

const concatenate = (str1, str2) =>
    str1.slice(1) + str2.slice(1);

function conSubmit(event) {
    event.preventDefault();
    let input1 = document.getElementById('con-input-1').value;
    let input2 = document.getElementById('con-input-2').value;
    let newString = concatenate(input1, input2);
    let demo = document.getElementById('con-demo');
    demo.innerHTML = newString;
    document.getElementById('con-form').reset();
    document.getElementById('con-submit').blur();
}

let conForm = document.getElementById('con-form');
conForm.onsubmit = conSubmit;

// Given two values, write a program to find out which one is nearest to 100

const closestTo100 = (a, b) => (100 - a) < (100 - b) ? a : b;

function submitClosestTo100(event) {
    event.preventDefault();
    let inputA = document.getElementById('c-number-a').value
    let inputB = document.getElementById('c-number-b').value
    let closestNumber = closestTo100(inputA, inputB);
    let demo = document.getElementById('closest-to-100-demo');
    demo.innerHTML = closestNumber;
    document.getElementById('closest-to-100-form').reset();
    document.getElementById('closest-to-100-submit').blur();
}

let closestForm = document.getElementById('closest-to-100-form');
closestForm.onsubmit = submitClosestTo100;

// write a program to check a given string contains 2 to 4 occurrences of a specified character

const countCharacters = (string, character) =>
    string.split('').filter(s => s === character).length;


const contains2to4 = (string, character) =>
    countCharacters(string, character) >= 2 && countCharacters(string, character) <= 4;

console.log(contains2to4('ooh', 'o'));
console.log(contains2to4('oh', 'o'));
console.log(countCharacters('ooooooh', 'o'));
console.log(contains2to4('oiiiiooooooh', 'o'));
console.log(contains2to4('ooooh', 'o'));

function submitOccurances(event) {
    event.preventDefault();
    let letterToCount = document.getElementById('occurances-input-a').value;
    let string = document.getElementById('occurances-input-b').value;
    let occurances = countCharacters(string, letterToCount);
    let demo = document.getElementById('occurances-demo');
    demo.innerHTML = occurances + " occurances of letter: " + letterToCount;
    document.getElementById('occurances-form').reset();
    document.getElementById('occurances-submit').blur();
}

let occurancesForm = document.getElementById('occurances-form');
occurancesForm.onsubmit = submitOccurances;

// Write a program that converts a string to an array and displays the index and value of each item in the array

function arrayFromString(string) {
    return Array.from(string);
}

console.log(arrayFromString("string"));

const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];

let sayHello = function (name) {
    console.log(`Greetings and Well Met, ${name}`)
}

sayHello("Roy");
console.log(days[0], days[1], days[2], days[3], days[4], days[5], days[6]);

days.forEach(sayHello);

let callbackFunction = function () {
    console.log("this is a callback function. Callback functions have no name.")
}

days.forEach(function (day, dayOfWeek) {
    console.log(`this is a callback function. Callback functions have no name. ${day} is day ${dayOfWeek + 1}`)
})

let newArray = []
days.forEach(function (item, index) {
    newArray.push(item)
    console.log(item, index);
});
console.log(newArray);

function stringToArray(event) {
    event.preventDefault();
    let input = document.getElementById('string-to-array-input').value;
    let demo = document.getElementById('string-to-array-demo');
    let array = arrayFromString(input);
    demo.innerHTML = '';
    array.forEach(function (item, index) {
        demo.innerHTML += `${item}-${index} <br> `;
    })

    demo.innerHTML += array;
    document.getElementById('string-to-array-form').reset();
    document.getElementById('string-to-array-submit').blur();
}
let stringToArrayForm = document.getElementById('string-to-array-form');
stringToArrayForm.onsubmit = stringToArray;


// Basic Looping

function linkCatcher() {
    let links = document.getElementsByClassName('rick-roll');
    for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle('bigger-links');
    }
}

console.log("something");
console.log("something");
console.log("something");
console.log("something");
console.log("something");

// for loop

for (let i = 0; i < 5; i++) {
    console.log('something ' + i);
}

const trees = ['sev', 'rea', 'nor', 'lex'];

for (let i = 0; i < trees.length; i++) {
    console.log(trees[i]);
}
// same thing with a for of loop

for (tree of trees) {
    console.log(tree);
}

// for in loop for objects
const user = { 'firstName': 'John', 'lastName': 'Doe' };

for (key in user) {
    console.log(user[key]);
}

// while loop

let i = 0;
while (i < 10) {

    i++;
    if (i === 5) continue;
    console.log(i);
}

// do while loop
// the first statement always runs

let j = 0;
do {
    j++;
    console.log(j);
} while (j < 10);

// even numbers

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let k = 1;
while (k <= 50) {
    if (k % 2 === 0) {
        console.log(k);
    }
    k++;
}

// ASCII Art

let dollar = '$'
for (let i = 1; i < 12; i++) {
    console.log(dollar);
    dollar += '$';
}

for (let i = 0; i < 12; i++) {
    console.log('$'.repeat(i));
}

// Fizzbuzz
// Write a program that prints the numbers from 1 to 100. But for multiples of three print "fizz" instead of the number and for the multiples of five pring "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// first need to loop through 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz " + i);
    } else if (i % 3 === 0) {
        console.log("Fizz " + i);
    } else if (i % 5 === 0) {
        console.log("Buzz " + i);
    } else {
        console.log(i);
    }
}