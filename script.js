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
names = names.map(name => name.toUpperCase());
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
let namesFiltered = names.filter(person => person.age >= 30);
console.log(namesFiltered);

// 22
names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
console.log(names.includes("Ewa"));

// Loops
// 23
