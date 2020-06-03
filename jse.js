/* Excercise 1:
   ------------
   Write a program to check two numbers and return true if one of the numbers is 100 or if the sume of the two numbers is 100
*/

function onehundred(number1, number2) {
    let message = "vroom vroom, one hundred is ";
    if (number1 === 100 || number2 === 100 || (number1 + number2) === 100) {
        return (message + true);
    }
    return (message + false);
}

console.log(onehundred(990, 12));

/* Excercise 2:
   ------------
   Write a function to get the extension of a filename
*/

// slice & lastIndexOf
let myStringBall = "This is the end of the world as we know it";
let stringyMonster = myStringBall.slice(myStringBall.lastIndexOf('w'));
console.log(stringyMonster);


const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));

/* Excercise 3:
   ------------
   Write a program to replace every character in a given string with the character following it in the alphabet
*/

// We will use these javascript built in functions
// String.fromCharCode
// charCodeAt

const moveCharsForward = (stringForward) => {
    let modified = stringForward.split('') // returns every character in the string as an array
        // now that we have the array we call the map function
        // map function basically mutates an array
        // changes every item in the array depending on what you pass in as the function
        // for each character in the array pass it to a function
        // the function takes a numerical code which represents the string
        // converts it back into an actual character
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    function strReplace(modified) {
        let newStr = modified.replace(/{/g, "a").replace(/!/g, " ").replace(/\[/g, "A");

        return newStr
    }
    let newModified = strReplace(modified);
    return newModified;
}

function toTheRight(event) {
    //stop the form from submitting
    event.preventDefault();
    // get the string from the input form
    let string = document.getElementById("origninal-string").value;
    // call the moveCharsForward function
    let shiftTheChars = moveCharsForward(string);
    // update the DOM with the new string
    let shiftyChars = document.getElementById("shiftychars");
    shiftyChars.innerHTML += "<h3 class='aliengoo'>" + shiftTheChars + "</h3>";
    // claear form
    document.getElementById('shiftyform').reset();
    document.getElementById("shiftysubmit").blur();
}

// add the toTheRight function to the form
let shiftyForm = document.getElementById("shiftyform");
shiftyForm.onsubmit = toTheRight;

console.log(moveCharsForward("zoo quantum zaraphire"));


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
todaysDate.innerHTML = "Today's Date is: " + formatDate();
console.log(formatDate());

/* Excercise 5:
   ------------
  Write a program to create a new string adding "New!" in front of a given string. if the given string begins with "New!" already then return the original string
*/

const addNew = (str) =>
    str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew('New! offers!'));

// ----------- Part 2 ----------
/* Excercise 1:
   ------------
  Write a program to create a new string from a given string taking the first 3 character and the last 3 character of a string and adding them together. The string length must be 3 or more, if not, the orginal string is returned
*/

function threestring(string) {
    if (string.length < 3) {
        return string
    }
    // If you slice a negative number it works backwards
    return string.slice(0, 3) + string.slice(-3);
}

function stringzSubmit(event) {
    // stop the form from submitting
    event.preventDefault();
    // get the string from the input form
    let stringzInput = document.getElementById("stringzinput").value;
    // call the threestring function
    let newStringz = threestring(stringzInput);
    // update the DOM with the new string
    let stringzDemo = document.getElementById("stringzdemo");
    stringzDemo.innerHTML += "<h3 class='aliengoo'>" + newStringz + "</h3>";
    // clear form
    document.getElementById("three-char").reset();
    document.getElementById("stringzbutton").blur();
}

// add the stringzSubmit function to the form
let stringzForm = document.getElementById("three-char");
stringzForm.onsubmit = stringzSubmit;

console.log(threestring("too"));
