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
console.log("Round: ", Math.round(1337.497));

// 43
function random(max) {
    return Math.floor(Math.random() * max);
    // return Math.floor(Math.random() * (max + 1));
}
console.log(random(100));

// 44
function randomPassword(n) {
    const chars = "abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789";
    let password = "";
    for (let i = 0; i < n; i++) {
        password += chars[random(chars.length)];
    }
    return password;
}
console.log(randomPassword(7));

// 45
names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
function randomName(names) {
    return names[random(names.length)];
}
console.log(randomName(names));

// 46
// One is anonymous with a parameter and stored in a variable.
// The other is a named function with no parameter.

// 47
// "Hello Again Again!" > "Hello Again!" > "Hello!"
// HelloAgainAgain() gets called > prints out "Hello Again Again!" > calls helloAgain() >
// prints out "Hello Again!" > calls hello() > prints out "Hello!"

// 48
printPokemons();
function printPokemons() {
    let pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];
    for (let i = 0; i <= pokemons.length; i++) {
        console.log("One awesome pokemon is " + pokemons[i]);
    }
}

// 49
console.log(reverseString("hello"));
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// Async / promises
// 50
// Pending, Fulfilled, Rejected

// 51
// getData(url)
//     .then((data) => console.log(data))
//     .catch(err);

// 52
// try {
//     const data = await getData(url);
//     console.log(data);
// } catch (err) {
//     console.log(err);
// }

// API-interaktion med fetch()
// 53
const url = `https://api.chucknorris.io/jokes/random`;
chuckMe(url)
    .then((joke) => console.log(joke))
    .catch((err) => console.log(err));

async function chuckMe(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Status code: ${response.status}`);
        }
        const json = await response.json();
        return json.value;
    } catch (err) {
        return err.message;
    }
}

// 54
const url2 = `https://jsonplaceholder.typicode.com/posts`;
let data = {
    id: 1,
    joke: "How many ears does Spock have? - Three; Left, right and the final front ear.",
    funny: true,
};

// fetch(url2, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//     },
// })
// .then((response) => response.json())
// .then((json) => console.log(json))
// .catch(err => console.log(err));

postMe(url2, data);
async function postMe(url, data) {
    const post = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const json = await post.json();
    console.log(json);
}

// 55
const url3 = `https://jsonplaceholder.typicode.com/posts/1`;
data.joke = "RIP, boiling water. - You will be mist.";

fetch(url3, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));

// DOM manipulation
// Single selector
// 56
const h2Ref = document.querySelector("article > h2");
console.log(h2Ref);

// 57
const lastLiRef = document.querySelector("ul > li:last-child");
const thirdLiRef = document.querySelector("ul > li:nth-child(3)");
console.log(lastLiRef, thirdLiRef);

// Select All (node list)
// 58
document
    .querySelectorAll("ul > li")
    .forEach((item) => (item.textContent = item.textContent.toUpperCase()));

// Value from input
// 59
const emailRef = document.querySelector("#email").value;
console.log(emailRef);

// 60
const optionsRef = document.querySelector("#options").value;
console.log(optionsRef);

// Attributes
// 61
const imgSrcRef = document.querySelector(".awesome").src;
console.log(imgSrcRef);

// 62
const isCheckboxChecked = document.querySelector("#gdpr-ok").checked;
console.log(isCheckboxChecked);

// CSS
// 63
document.querySelector("#main-nav").classList.add("show");

// 64
document.querySelector("#home").classList.toggle("active");

// 65
const galleryRef = document.querySelectorAll(".gallery > img");
galleryRef.forEach((img) => img.classList.add("shadow"));

// Create content
// 66
const mainTitleRef = document.createElement("h1");
mainTitleRef.textContent = "Welcome";

const bodyRef = document.querySelector("body");
bodyRef.appendChild(mainTitleRef);

// 67
const url4 = `https://api.chucknorris.io/jokes/random`;
getJoke(url4, createJokeSection);

function createJokeSection(imgSrc, headingText, linkUrl) {
    const sectionRef = document.createElement("section");
    const imgRef = document.createElement("img");
    imgRef.src = imgSrc;
    // sectionRef.appendChild(imgRef);

    const headingRef = document.createElement("h2");
    headingRef.textContent = headingText;
    // sectionRef.appendChild(headingRef);

    const linkRef = document.createElement("a");
    linkRef.href = linkUrl;
    linkRef.textContent = linkUrl;
    // sectionRef.appendChild(linkRef);

    sectionRef.append(imgRef, headingRef, linkRef);
    document.querySelector("body").appendChild(sectionRef);
}

async function getJoke(url, createFn) {
    const response = await fetch(url);
    const json = await response.json();

    console.log("67: random joke: ", json);

    createFn(json.icon_url, json.value, json.url);
}

// Events
// 68
document.querySelector("button").addEventListener("click", () => {
    console.log("go go go!");
});

// 69
const fruitListRef = document.querySelectorAll("ul > li");
fruitListRef.forEach((fruit) => {
    fruit.addEventListener("click", () => {
        alert(`Jag älskar ${fruit.textContent}!!!`);
    });
});

// 70
const passwordRef = document.querySelector("#password");
passwordRef.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        console.log(e.target.value);
    }
});
