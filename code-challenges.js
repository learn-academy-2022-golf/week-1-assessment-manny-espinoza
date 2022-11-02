// ASSESSMENT 1: Coding Practical Questions
// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.
// Describe your process:
    // We start by creating a function. I will name it fruits. Use proper arrow function syntax. const fruits = () => {}
    // The function will take parameters of string1 and string2. Later on when it is time to call upon the function and log it to the console, we will utilize the given variables fruit1 and fruit2 to serve as the parameters, replacing string1 and string2.
    // Within the function code block, I will utilize a conditional statement. The conditional will call upon the .length() property of said strings. The statement will evaluate whether the first or second string is longer and proceed to log the result of that to the console.
        // Additionally, I will include a final else statement to act as a catch all, in case the program doesn't like what was input for either string1/string2.
    // Finally, we must log to the console the result of calling upon the fruits function with parameters fruit1 (apple) and fruit2 (banana)
    // Creation of the function below. The act of calling upon the function will be below each respective set.

const fruits = (string1, string2) => {
    if (string1.length > string2.length) {
        return string1
    } else if (string2.length > string1.length) {
        return string2
    } else {
        return "Oop, something went wrong."
    }
}

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
console.log(fruits(fruit1, fruit2))  // Output: "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
console.log(fruits(fruit3, fruit4))  // Output: "cherry"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.
// Describe your process:
    // Start by creating a function. I will name it temperature. Use proper arrow function syntax. const temperature = () => {}
    // The function will take a single parameter of num1.
    // The function code block will perform differently depending on what is input in place of num1. In order to make this happen, I will utilize a conditional statement. It will cover three cases.
        // 1st case: num1 is less than 212. Return the string `${num1} is below boiling point`
        // 2nd case: num1 is greater than 212. Return the string `${num1} is above boiling point`
        // 3rd case: num1 is equal to 212. Return the string `${num1} is at boiling point`
            // More specifically, I will be comparing num1 to 212 using relational operators for each of the three cases.
            // Additionally, I will include a final else statement to act as a catch all in case the program doesn't like the input for num1.
    // Once the function is properly coded, I will log it to the console by calling upon the temperature function with the given variables temp1/temp2/temp3 inside of the function parameter.
    // Creation of the function below. The act of calling upon the function will be below each respective set.

const temperature = (num1) => {
    if (num1 < 212) {
        return `${num1} is below boiling point`
    } else if (num1 > 212) {
        return `${num1} is above boiling point`
    } else if (num1 === 212) {
        return `${num1} is at boiling point`
    } else {
        return "Oop, something went wrong."
    }
}

const temp1 = 42
console.log(temperature(temp1))  // Actual output: "42 is below boiling point"
// Expected output: "42 is below boiling point"

const temp2 = 350
console.log(temperature(temp2))  // Actual output: "350 is above boiling point"
// Expected output: "350 is above boiling point"

const temp3 = 212
console.log(temperature(temp3))  // Actual output: "212 is at boiling point"
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.
// Describe your process:
    // Underneath the given variables (set equal to the two different arrays of numbers), I will create a third variable using var. I will name it comboPadres.
    // I call the .concat() method upon the padres1984WorldSeriesRuns variable (first given variable) and provide the argument padres1998WorldSeriesRuns (second given variable). Doing this merges the two arrays into one array, and saves it into the newly created comboPadres variable.
    // I will then log to the console the comboPadres variable, just to ensure that it does what I want, which is to merge the two arrays into one.
    // After verifying that comboPadres is the result of merging the two given variables, I then log to the console the result of calling the .length method upon comboPadres.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
var comboPadres = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(comboPadres)  // Output: [2, 5, 2, 2, 4, 6, 3, 5, 3]
console.log(comboPadres.length)  // Output: 9
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.
// Describe your process:
    // First I need to call the .split() method upon the given variable currentCohort. The argument for .split() is a blank string, and this is done in order to separate each character of currentCohort, and more importantly turn it into an array. The result of this is assigned to a newly created variable that I named splitLetters.
        // This needs to be saved to a new variable, since currentCohort was declared using a const variable and cannot be reassigned.
    // Next, I log to the console my splitLetters variable to ensure that it does what I intended (splitting each individual character of currentCohort and making them elements in an array)
    // I then call upon the .reverse() method to my variable splitLetters, and then reassign splitLetters to it. I will console log the result of calling splitLetters again to ensure it does what I want, and reverse the order of elements/characters in the array.
    // Finally I call upon the .join() method to my variable splitLetters. I will provide a blank string as the argument so as to join the elements of the array together and convert it back into a string. I console log the result of calling splitLetters one final time, and see that my variable splitLetters is now assigned to the string "2202 floG".

const currentCohort = "Golf 2022"
let splitLetters = currentCohort.split("")
console.log(splitLetters)  // Output: ['G', 'o', 'l', 'f', ' ', '2', '0', '2', '2']
splitLetters = splitLetters.reverse()
console.log(splitLetters)  // Output: ['2', '2', '0', '2', ' ', 'f', 'l', 'o', 'G']
splitLetters = splitLetters.join("")
console.log(splitLetters)  // Output: "2202 floG"
// Expected output: "2202 floG"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.
// Describe your process:
    // First, we must call the .lastIndexOf() method upon the myNumbers variable (which is an array filled with numbers). 
    // Secondly, we provide myNumbers.lastIndexOf() with the argument/parameter of givenValue1 (and then givenValue2 for the second portion of the problem). This will return to us the last instances of the values 42 (givenValue1) and 10 (givenValue2) within the array, myNumbers.
    // Lastly we must log the results of this to the console. For each portion of the problem, the entirety of the code can be written on a single line.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
console.log(myNumbers.lastIndexOf(givenValue1))  // Output: 7
// Expected output: 7

const givenValue2 = 10
console.log(myNumbers.lastIndexOf(givenValue2))  // Output: 8
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.
// Describe your process:
    // For each portion of the problem, I will call the .sort() method upon each of the provided test variables. Within the parameters of the .sort() method, I will provide the argument ((a, b) => b - a). I save the results of these codes into variables that I create, called temps1 and temps2.
        // Since the .sort() method will already sort the numbers in the provided arrays from least to greatest, I need to give parameters ((a, b) => b - a). In the parameters, a will represent the first value while b represents the last value, and when I say ( b - a ) that's telling the program to sort from the last value to the first value, or in other words from largest to smallest.
    // I finish by console logging temps1 and temps2.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
let temps1 = sanDiegoSummerTemperatures.sort((a, b) => b - a)
console.log(temps1)  // Output: [82, 80, 79, 77, 76, 73, 72]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
let temps2 = sanDiegoWinterTemperatures.sort((a, b) => b - a)
console.log(temps2)  // Output: [68, 67, 66, 66, 62, 59, 59]
// Expected output: [68, 67, 66, 66, 62, 59, 59]