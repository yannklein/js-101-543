console.log("Hello world!");

const name = "Adriana";
let age = 21;

var oldStyle = "notation";

// console.log(name, age);

// name = "Albert";
age += 1;
// console.log(name, age);

// students.push("Charlotte");
// console.log(students);

// Strings

// Concatenation
const fullNameConcat = name + " Ito";
// console.log(fullNameConcat);

// Interpolation
const fullNameInterp = `${name} Ito interpolated`;
// console.log(fullNameInterp);

// console.log(name[0]);
// console.log(name.length);

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// No capitalize methods in JS! Build it yourself or use Lodash

// console.log(name.substring(4,7));

const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
// console.log(monthString.split(","));

const students = ["Anthony", "Andrew", "Ryu"];

students.forEach((student) => {
  // console.log(`${student} is amazing!`);
});

const myAge = 14

if (myAge === 20) {
  console.log("You can giri giri vote");
}
else if (myAge >= 20) {
  console.log("You can vote");
}
else {
  console.log("You can't vote");
}

const multilineSquare = (number) => {
  // some more code
  return number * number;
};

const square = number => number * number;

// console.log(square(6));

const myWord = "rUbEn";

//=> Ruben

const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const remainder = word.substring(1).toLowerCase();
  return `${firstLetter}${remainder}`;
};

console.log(capitalize(myWord));


