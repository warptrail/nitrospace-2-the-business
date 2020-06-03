console.log("let us iterate now");

// JS Nuggets
// Array iteration: 8 methods

// forEach
const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8]

sampleArray.forEach(function (item, index) {
    console.log(item, index);
});

// map
const cinco = [5, 10, 15, 20];
const doubled = cinco.map(function (item) {
    return item * 2;
});
console.log(doubled);

// filter
const ints = [1, 2, 3, 4, 5, 6];
const evens = ints.filter(function (item) {
    return item % 2 === 0;
});
console.log(evens);

// reduce
const sum = [1, 2, 3].reduce(function (result, item) {
    return result + item;
}, 0);
console.log(sum);

// some
// does any item in the array meet a condition?

const hasNegativenumbers = [1, 2, 3, -1, 4].some(function (item) {
    return item < 0;
});
console.log(hasNegativenumbers);

// every
// does every item in the array meet a condition?

allPositiveNumbers = [1, 2, 3, 4, -1].every(function (item) {
    return item > 0;
});
console.log(allPositiveNumbers);

// find

const someObjects = [{ id: 'a' }, { id: 'b' }, { id: 'c' },];
const found = someObjects.find(function (item) {
    return item.id === 'b';
});
console.log(found);

// find index

const someMoreObjects = [{ id: 'd' }, { id: 'e' }, { id: 'f' },];
const foundIndex = someMoreObjects.findIndex(function (item) {
    return item.id === 'f';
});

console.log(foundIndex);
