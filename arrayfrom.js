console.log(Array);
console.dir(Array)

// Create an array from something

let someString = "textit formexit";
let arrayFromSomeString = [...someString]
console.log([...someString]);
console.log(arrayFromSomeString[0]);

const fromString = Array.from(someString);
console.log(fromString);

const fromScratch = Array.from({ length: 5 }, (value, index) => value);
console.log(fromScratch);

const fromScratch2 = Array.from({ length: 5 }, (value, index) => index);
console.log(fromScratch2);

const fromScratch3 = Array.from({ length: 5 }, (value, index) => '∂∆∑');
console.log(fromScratch3);

const fromScratch4 = (new Array(5).fill(0).map((value, index) => index));
console.log(fromScratch4);

const dry = [1, 1, 2];
const unique = Array.from(new Set(dry));
const unique2 = [... new Set(dry)]
console.log(dry);
console.log(unique);
console.log(unique2);

const funfun = function () {
    console.log(arguments);
    console.log(Array.from(arguments).join(''))
}

funfun();
funfun('t', 'e', 'c', 'h', 's', 't')