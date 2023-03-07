// Question 1 
// What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.
//Answer ---
// In mutating arrays, the array itself is changed while in non - mutating arrays, a new array array is returned with the new changes.
// Examples of mutating arrays
// -array.push(), array.shift(), array.sort(), array.splice() and array.unshift().
// Examples of non-mutating arrays
// array.concat(), array.includes(), array.indexOf, array.join(), array.slice()

// Question 2
// Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
// a. Add ‘Kotlin’ to the end of the array

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
languages.push('Kotlin');
console.log(languages)
// b. Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, 'Java');
console.log(languages)
// c. Remove the first item in the array
languages.shift();
console.log(languages)
// d. Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala', 'Swift');
console.log(languages)
// e. Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages)

// Question 3
// What will be the value of fruit after calling the function changeFruit?
// let fruit = ['apple', 'mango', 'banana'];
// 		function changeFruit( fruit ) {
//     			fruit[2] = "orange";
//     			return fruit;
// 		}

fruit = apple, mango, orange

// Question 4

// Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10

let numbers = [55, 2, 333];
let maxNumbers = numbers.reduce((a, b) => Math.max(a, b), -Infinity);
console.log('maximum value is ' + maxNumbers)

// Question 5
// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
// e.g.,
//  valTimesIndex([1,2,3]) // [0,2,6]
// 		valTimesIndex([5,10,15]) // [0,10,30]

let valTimesIndex = numArray => numArray.map((num, index) => num * index);

console.log(valTimesIndex([1, 2, 3]));
console.log(valTimesIndex([5, 10, 15]));
