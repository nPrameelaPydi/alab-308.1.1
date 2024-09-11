//Part 1: Math Problems
//We have four numbers that need to add up to 50. At least two of these numbers must be odd. No number can be larger than 25, and each number must be unique.
const n1 = 10;
const n2 = 11;
const n3 = 12;
const n4 = 17;
//// Check one: add up to 50
//const isSum50 = (n1 + n2 + n3 + n4) == 50;
//// Check two: at least two odd numbers
//const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
//// Check three: no number larger than 25
//const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
//// Check four: all unique numbers
//const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
//// Put the results into a single variable
//const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
//// Finally, log the results.
//console.log(isValid);



/*************** Part 1: Math Problems *************************/

//Check if all numbers are divisible by 5. Cache the result in a variable.
let result = false;
if ((n1 % 5 == 0) && (n2 % 5 == 0) && (n3 % 5 == 0) && (n4 % 5 == 0) && (n5 % 5 == 0)) {
    result = true;
}
console.log(result);

//Check if the first number is larger than the last. Cache the result in a variable.
let result1 = false;
if (n1 > n4) {
    result1 = true;
}
console.log(result1);
//Accomplish the following arithmetic chain:
//Subtract the first number from the second number.
//Multiply the result by the third number.
//Find the remainder of dividing the result by the fourth number.
let result2 = n1 - n2;
result2 = result2 * n3;
result2 = result2 / n4;
console.log(result2);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
let isLess25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(isLess25);

//Use string concatenation or template literals to format the outputs in a reasonable way.
console.log(`All four numbers are not divisible by 5 as it resulted "${result}"
First number n1 is not greater than n4, as the result of this is "${result1}"
After performing given arthematic chain of operations, final result is "${result2}"
Yes, all numbers are less than 25, the expression check resulted "${isLess25}"`)



/*************** Part 2: Math Problems *************************/
//You are planning a cross-country road trip!
//The distance of the trip, in total, is 1,500 miles.
//Your car’s fuel efficiency is as follows:
//At 55 miles per hour, you get 30 miles per gallon.
//At 60 miles per hour, you get 28 miles per gallon.
//At 75 miles per hour, you get 23 miles per gallon.
//You have a fuel budget of $175.
//The average cost of fuel is $3 per gallon.
//Set up a program to answer the following questions:
//How many gallons of fuel will you need for the entire trip?
//Will your budget be enough to cover the fuel expense?
//How long will the trip take, in hours?
//Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
//Log the result

const totalDistance = 1500;
const fullBudget = 175;
const costOfFuel_perGallon = 3;

let milesPerHour = 55;
let milesPerGallon = 30;

//How many gallons of fuel will you need for the entire trip?
let totalGallons = totalDistance / milesPerGallon;
//Will your budget be enough to cover the fuel expense?
let temp = totalGallons * costOfFuel_perGallon;
let isBudgetenough = (fullBudget > totalGallons * costOfFuel_perGallon) ? `Yes, its total of ${temp}` : `No, its total of ${temp} which is above the budget of $175`;
///How long will the trip take, in hours?
let totalHours = totalDistance / milesPerHour;

console.log(`                                 `);

//Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
//Log the result
console.log(`At 55 miles per hour`);
console.log(`---------------------`);
console.log(`Number of gallons of fuel required: ${totalGallons}
Is alloted budget enough: ${isBudgetenough};
Total hours required: ${totalHours}`);

milesPerHour = 60;
milesPerGallon = 28;
totalGallons = totalDistance / milesPerGallon;
temp = totalGallons * costOfFuel_perGallon;
isBudgetenough = (fullBudget > totalGallons * costOfFuel_perGallon) ? `Yes, its total of ${temp}` : `No, its total of ${temp} which is above the budget of $175`;
totalHours = totalDistance / milesPerHour;
console.log(`At 60 miles per hour`);
console.log(`---------------------`);
console.log(`Number of gallons of fuel required: ${totalGallons}
Is alloted budget enough: ${isBudgetenough};
Total hours required: ${totalHours}`);

milesPerHour = 75;
milesPerGallon = 23;
totalGallons = totalDistance / milesPerGallon;
temp = totalGallons * costOfFuel_perGallon;
isBudgetenough = (fullBudget > totalGallons * costOfFuel_perGallon) ? `Yes, its total of ${temp}` : `No, its total of ${temp} which is above the budget of $175`;
totalHours = totalDistance / milesPerHour;
console.log(`At 75 miles per hour`);
console.log(`---------------------`);
console.log(`Number of gallons of fuel required: ${totalGallons}
Is alloted budget enough: ${isBudgetenough};
Total hours required: ${totalHours}`);

console.log(`                                 `);

//Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
console.log(`After comparing the results, traveling at 60 mph makes more sense as it stays within the budget and consumes a moderate amount of time.`)



