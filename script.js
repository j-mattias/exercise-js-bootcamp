// Datatyper
// 1
const datatypes = [
    "String",
    "Number",
    "Boolean",
    "Object",
    "BigInt",
    "undefined",
    "null",
    "Symbol",
];

// 2
// true

// 3
// var is function scoped and can also be redeclared.
// let is block scoped and cannot be redeclared.

// 4
// You use typeof

// Block
// 5
// C

// 6
// alert('Ariba!');

// 7
// Good bye world!

// Strings
// 8
// A, B, C

// 9
let sentence =
    "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one.";
console.log(sentence.length); // 97

// 10
// `Hej ${name} din gamle knasboll!`;

// Arrays
// 11
let fruits = ["banana", "orange", "apple", "pear", "strawberry"];

// 12
fruits.unshift("kiwi");
fruits.push("mango");

// 13
fruits.shift();
fruits.pop();

// 14
fruits.splice(2, 0, "kiwi", "mango");
console.log(fruits);

// 15
// let cloneFruits = [...fruits];
// let cloneFruits = Array.from(fruits);
let cloneFruits = fruits.slice();
cloneFruits[0] = "pineapple";
console.log(cloneFruits);

// 16
let num = [1, 5, 78, 7, 122, 3, 4, 65, 40, 2, 8];
num.sort((a, b) => b - a);
console.log(num);

// 17
let a = [1, 2, 3];
let b = [4, 5, 6];
// let combined = a.concat(b);
let combinedArr = [...a, ...b];
console.log(combinedArr);

// 18
a = ["My", "has", "many", "open"];
b = ["brain", "to", "tabs", "!"];
let mixArr = [];
// for (let i = 0, len = a.length; i < len; i++) {
//     mixArr.push(a.shift(), b.shift());
// }
a.forEach((el, index) => {
    mixArr.push(el, b[index]);
});
console.log(mixArr);

// 19 Wouldn't it make more sense to merge b into a?
a = [1, 2, 7, 8, 9, 10];
b = [3, 4, 5, 6];
b.splice(2, 0, ...a);
console.log(b);

// 20
let names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
names = names.map((name) => name.toUpperCase());
console.log(names);

// 21
names = [
    { name: "sixten", age: 32 },
    { name: "Eva", age: 19 },
    { name: "Ali", age: 67 },
    { name: "Kim", age: 13 },
    { name: "Greger", age: 30 },
    { name: "Alicia", age: 82 },
];
let namesFiltered = names.filter((person) => person.age >= 30);
console.log(namesFiltered);

// 22
names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
console.log(names.includes("Ewa"));

// Loops
// 23
// for (let i = 1; i < 1001; i++) {
//     console.log(`Iteration: ${i}`);
// }

// 24
// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// 25
fruits = ["apple", "orange", "pear", "kiwi", "pineapple"];
fruits.forEach((fruit) => {
    console.log(fruit);
});

// 26
// fruits.forEach((fruit, index) => {
//     console.log(`${index}. ${fruit}`);
// });
// for (const index in fruits) {
//     console.log(`${index}. ${fruits[index]}`);
// }
for (const [index, fruit] of fruits.entries()) {
    console.log(`${index}. ${fruit}`);
}

// 27
const cardSuites = ["hjärter", "ruter", "spader", "klöver"];
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const deck = [];

// cardValues.forEach(value => {
//     cardSuites.forEach(suite => {
//         deck.push(`${suite} ${value}`);
//     });
// });

for (const value of cardValues) {
    for (const suite of cardSuites) {
        deck.push(`${suite} ${value}`);
    }
}
console.log(deck);

// Objects
// 28
const book = {
    title: "Code",
    author: "Some Guy",
    genres: ["technology", "mystery"],
};

// 29
let person = {
    name: "Sixten Faceplant",
    email: "sixten.faceplant@zocom.se",
    role: "ninjah",
    adress: {
        street: "Karatevägen 3",
        zip: "41477",
        city: "Kablam City",
    },
};
console.log(person.adress.city);

// 30
const cloneBook = JSON.parse(JSON.stringify(book));
// const cloneBook = {};
// Object.assign(cloneBook, book);
// const cloneBook = {...book};
cloneBook.title = "Vim";
console.log("original: ", book, "clone: ", cloneBook);

// 31
const dog = {
    name: "Vofflan",
    breed: "border collie",
    bark: function () {
        return `Woff, jag heter ${this.name}!`;
    },
};
console.log(dog.bark());

// 32
person = {
    name: "sixten",
    email: "sixten@zocom.se",
    role: "ninjah",
    age: 32,
};
for (const prop in person) {
    console.log(`${prop} - ${person[prop]}`);
}

// Functions
// 33
function add(x, y) {
    return x + y;
}

// 34
const anonymousFunc = () => {
    return `
        An anonymous function has no name, often used when you need to pass a callback function.
        A named function is declared with a name that can be referenced, they get "hoisted" and can be called
        before their definition.
    `;
};

// 35
function getYear(dateString) {
    return dateString.slice(0, 4);
    // return dateString.substring(0, 4);
}
console.log(getYear("2019-10-14"));

// 36
function calcThis(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
    }
}
console.log(calcThis(5, 2, "*"));

// Conditionals
// 37
function compareThis(num1, num2) {
    return num1 === num2;
}
console.log(compareThis(2, 2));

// 38
function between(num) {
    return num > 20 && num < 40;
}
console.log(between(30));
console.log(between(50));

// 39
function getMeTheLongestArr(arr1, arr2) {
    return arr1.length > arr2.length ? arr1 : arr2;
}
console.log(getMeTheLongestArr([1, 2], ["A", "B", "C"]));

// Math object
// 40
console.log("Floor: ", Math.floor(1337.51));

// 41
console.log("Ceil: ", Math.ceil(1337.48));

// 42
console.log("Round: ",Math.round(1337.497));

// 43
