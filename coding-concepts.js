// ASSESSMENT 1: Coding Conceptual Questions
// Examine the following examples.
// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))
// a) Your answer: 5
// b) Verify and explain: The output of the .push() method itself is the length of the new array. Since there were initially 4 elements within the colors array, pushing "indigo" to the array and logging it within the same line will return 5, the new length of the array (number of elements within the array).

// --------------------1) What will this log?
const cohort = "LEARN 2022"
// console.log(cohort.length)
// a) Your answer: 10
// b) Verify and explain: Correct. Calling the .length method upon any variable assigned to a string of characters will return the number of characters in that string.

// --------------------2) What will this log?
const greeting = "Hello World!"
// console.log(greeting[4])
// a) Your answer: o
// b) Verify and explain: Correct. When the code appended greeting with the square bracket and the 4 ( [4] ), that's telling it to give us the 4th index of the string "Hello World!". The 4th index of that string corresponds to the o character (since the characters of the string are zero indexed).

// --------------------3) What will this log?
const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])
// a) Your answer: Ruby
// b) Verify and explain: Correct. The variable languages is an array of multiple strings, and the variable index is assigned to the number 1. When languages was appended with [index], that is essentially the same as appending it with [1]. This will give us the 1st index of the languages array, which is Ruby.

// --------------------4) What will this log?
const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())
// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: Incorrect. This part gave me an error (I'm not sure if this is intentional or if I just did something wrong and messed up the code). But in case it was intentional, I would say that perhaps it returns as an error because it is trying to call the .toUpperCase() method upon an array made of strings, and the .toUpperCase() method might only work on strings themselves.

// --------------------5) What will this log?
const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)
// a) Your answer: Number
// b) Verify and explain: Correct. Calling the .length method upon the dataTypes variable will return the number of strings within the dataTypes variable (which is an array made up of strings). So calling the .length method on dataTypes will return 4. But since we're prepending this command with typeof, then it will return what the data type of dataTypes.length is, which is 4 so the entirety of the code will simply return the string 'number'.